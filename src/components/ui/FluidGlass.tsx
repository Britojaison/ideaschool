"use client";

/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { memo, useEffect, useRef, useState } from "react";
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import {
  Image,
  MeshTransmissionMaterial,
  Preload,
  Text,
  useFBO,
  useGLTF,
} from "@react-three/drei";
import { easing } from "maath";

type NavItem = {
  label: string;
  link: string;
  showArrow?: boolean;
};

type ModeProps = {
  scale?: number;
  ior?: number;
  thickness?: number;
  anisotropy?: number;
  chromaticAberration?: number;
  transmission?: number;
  roughness?: number;
  color?: string;
  attenuationColor?: string;
  attenuationDistance?: number;
  navItems?: NavItem[];
};

type FluidGlassProps = {
  mode?: "lens" | "bar" | "cube";
  lensProps?: ModeProps;
  barProps?: ModeProps;
  cubeProps?: ModeProps;
  lockLensToCenter?: boolean;
  refractionScene?: "home" | "course" | "none";
  showRefractionBackdrop?: boolean;
};

type Device = "mobile" | "tablet" | "desktop";

type ModeComponentProps = {
  children?: React.ReactNode;
  modeProps?: ModeProps;
  followPointerOverride?: boolean;
  showRefractionBackdrop?: boolean;
};

const defaultNavItems = [
  { label: "Home", link: "/#hero" },
  { label: "Creative Editing", link: "/creative-editing-copy" },
  { label: "AD Film Making", link: "/ad-film-making" },
  { label: "Master Video Editing", link: "/master-video-editing" },
];

export default function FluidGlass({
  mode = "lens",
  lensProps = {},
  barProps = {},
  cubeProps = {},
  lockLensToCenter = false,
  refractionScene = "home",
  showRefractionBackdrop = true,
}: FluidGlassProps) {
  const Wrapper = mode === "bar" ? Bar : mode === "cube" ? Cube : Lens;
  const rawOverrides = mode === "bar" ? barProps : mode === "cube" ? cubeProps : lensProps;

  const { navItems = defaultNavItems, ...modeProps } = rawOverrides;

  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.75]}
      style={{ width: "100%", height: "100%" }}
    >
      {mode === "bar" && <NavItems items={navItems} />}
      <Wrapper
        modeProps={modeProps}
        followPointerOverride={!lockLensToCenter}
        showRefractionBackdrop={showRefractionBackdrop}
      >
        {refractionScene === "home" && <HeroRefractionScene />}
        {refractionScene === "course" && <CourseRefractionScene />}
        <Preload />
      </Wrapper>
    </Canvas>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  showRefractionBackdrop = true,
  ...props
}: {
  children?: React.ReactNode;
  glb: string;
  geometryKey: string;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
  showRefractionBackdrop?: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { gl, viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const geoWidthRef = useRef(1);
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const geometry = (nodes[geometryKey] as THREE.Mesh | undefined)?.geometry;

  useEffect(() => {
    if (!geometry) return;

    geometry.computeBoundingBox();
    const box = geometry.boundingBox;
    geoWidthRef.current = box ? box.max.x - box.min.x || 1 : 1;
  }, [geometry]);

  useEffect(() => {
    if (!followPointer) return;

    const onPointerMove = (event: PointerEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      if (x < -1 || x > 1 || y < -1 || y > 1) return;
      pointerTargetRef.current = { x, y };
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [followPointer, gl.domElement]);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    const trackedPointer = followPointer ? pointerTargetRef.current : pointer;

    const destX = followPointer ? (trackedPointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (trackedPointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.08, delta);

    if (modeProps.scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.18, desired));
    }

    gl.setClearColor(0x050608, 0);
    gl.setRenderTarget(buffer);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

  return (
    <>
      {createPortal(children, scene)}
      {showRefractionBackdrop && (
        <mesh scale={[vp.width, vp.height, 1]}>
          <planeGeometry />
          <meshBasicMaterial map={buffer.texture} transparent opacity={0.88} />
        </mesh>
      )}
      <group
        ref={ref}
        scale={scale ?? 0.18}
        rotation-x={Math.PI / 2}
        {...props}
      >
        <mesh geometry={geometry}>
          <MeshTransmissionMaterial
            buffer={buffer.texture}
            ior={ior ?? 1.15}
            thickness={thickness ?? 4}
            anisotropy={anisotropy ?? 0.01}
            chromaticAberration={chromaticAberration ?? 0.06}
            transmission={extraMat.transmission ?? 1}
            roughness={extraMat.roughness ?? 0}
            {...extraMat}
          />
        </mesh>
      </group>
    </>
  );
});

function Lens({ modeProps, followPointerOverride = true, ...props }: ModeComponentProps) {
  return (
    <ModeWrapper
      glb="/assets/3d/lens.glb"
      geometryKey="Cylinder"
      followPointer={followPointerOverride}
      modeProps={modeProps}
      {...props}
    />
  );
}

function Cube({ modeProps, followPointerOverride = true, ...props }: ModeComponentProps) {
  return (
    <ModeWrapper
      glb="/assets/3d/cube.glb"
      geometryKey="Cube"
      followPointer={followPointerOverride}
      modeProps={modeProps}
      {...props}
    />
  );
}

function Bar({ modeProps = {}, ...props }: ModeComponentProps) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: "#ffffff",
    attenuationColor: "#ffffff",
    attenuationDistance: 0.25,
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...props}
    />
  );
}

function NavItems({ items }: { items: NavItem[] }) {
  const group = useRef<THREE.Group>(null);
  const { viewport, camera } = useThree();
  const [device, setDevice] = useState(getDevice);

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { spacing, fontSize } = {
    mobile: { spacing: 0.2, fontSize: 0.035 },
    tablet: { spacing: 0.24, fontSize: 0.035 },
    desktop: { spacing: 0.3, fontSize: 0.035 },
  }[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link: string) => {
    if (!link) return;
    if (link.startsWith("#")) {
      window.location.hash = link;
      return;
    }

    window.location.href = link;
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link, showArrow }) => (
        <group
          key={label}
          onClick={(event) => {
            event.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "auto";
          }}
        >
          <Text
            fontSize={fontSize}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0}
            outlineBlur="20%"
            outlineColor="#000"
            outlineOpacity={0.5}
            renderOrder={10}
          >
            {label}
          </Text>
          {showArrow && (
            <Text
              position={[0.064, 0.009, 0]}
              fontSize={fontSize * 0.72}
              color="white"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0}
              outlineBlur="20%"
              outlineColor="#000"
              outlineOpacity={0.5}
              renderOrder={10}
            >
              ↗
            </Text>
          )}
        </group>
      ))}
    </group>
  );
}

function HeroRefractionScene() {
  const { width, height } = useThree((state) => state.viewport);
  const coverWidth = Math.max(width, height * 1.55);
  const coverHeight = Math.max(height, width / 1.55);

  return (
    <group>
      <Image position={[0, 0, 0]} scale={[coverWidth, coverHeight]} url="/images/Hero Section_2.webp" />
      <Image position={[2.1, -0.18, 3]} scale={[2.75, 3.3]} url="/images/DSC01109.webp" />
      <Image position={[-2.3, -0.82, 6]} scale={[1.9, 2.5]} url="/images/WORK heren.webp" />
      <Text
        position={[0, 0.64, 12]}
        fontSize={width < 5 ? 0.34 : 0.72}
        letterSpacing={0}
        outlineWidth={0}
        outlineBlur="20%"
        outlineColor="#000"
        outlineOpacity={0.42}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        IDEA SCHOOL
      </Text>
    </group>
  );
}

function CourseRefractionScene() {
  const { width, height } = useThree((state) => state.viewport);
  const coverWidth = Math.max(width, height * 1.55);
  const coverHeight = Math.max(height, width / 1.55);

  return (
    <group>
      <mesh position={[0, 0, -0.1]} scale={[coverWidth, coverHeight, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#08090b" />
      </mesh>
      <Text
        position={[-0.62, 0.26, 6]}
        fontSize={width < 5 ? 0.3 : 0.58}
        letterSpacing={0}
        outlineWidth={0}
        outlineBlur="20%"
        outlineColor="#000"
        outlineOpacity={0.34}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        EDIT
      </Text>
      <Text
        position={[0.42, -0.08, 7]}
        fontSize={width < 5 ? 0.26 : 0.48}
        letterSpacing={0}
        outlineWidth={0}
        outlineBlur="20%"
        outlineColor="#000"
        outlineOpacity={0.3}
        color="#dafd55"
        anchorX="center"
        anchorY="middle"
      >
        AI
      </Text>
      <Image position={[1.18, -0.18, 3]} scale={[1.65, 1.2]} url="/images/Hero 6.webp" />
      <Image position={[-1.25, -0.5, 4]} scale={[1.2, 1.08]} url="/images/DSC01109.webp" />
      <mesh position={[0.1, 0.62, 8]} rotation-z={-0.18}>
        <planeGeometry args={[2.2, 0.12]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.86} />
      </mesh>
      <mesh position={[0.52, -0.54, 8.2]} rotation-z={0.28}>
        <planeGeometry args={[2.3, 0.12]} />
        <meshBasicMaterial color="#dafd55" transparent opacity={0.76} />
      </mesh>
    </group>
  );
}

function getDevice(): Device {
  if (typeof window === "undefined") return "desktop";

  const width = window.innerWidth;
  if (width <= 639) return "mobile";
  if (width <= 1023) return "tablet";
  return "desktop";
}
