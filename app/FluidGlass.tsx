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
};

type Device = "mobile" | "tablet" | "desktop";

type ModeComponentProps = {
  children?: React.ReactNode;
  modeProps?: ModeProps;
  followPointerOverride?: boolean;
};

const defaultNavItems = [
  { label: "Home", link: "#hero" },
  { label: "Training", link: "#training" },
  { label: "Apply", link: "/apply" },
];

export default function FluidGlass({
  mode = "lens",
  lensProps = {},
  barProps = {},
  cubeProps = {},
  lockLensToCenter = false,
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
      <Wrapper modeProps={modeProps} followPointerOverride={!lockLensToCenter}>
        <HeroRefractionScene />
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
  ...props
}: {
  children?: React.ReactNode;
  glb: string;
  geometryKey: string;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
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
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent opacity={0.88} />
      </mesh>
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
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          renderOrder={10}
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
          {label}
        </Text>
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
      <Image position={[0, 0, 0]} scale={[coverWidth, coverHeight]} url="/images/Hero Section_2.png" />
      <Image position={[2.1, -0.18, 3]} scale={[2.75, 3.3]} url="/images/DSC01109.JPG" />
      <Image position={[-2.3, -0.82, 6]} scale={[1.9, 2.5]} url="/images/WORK heren.JPG" />
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

function getDevice(): Device {
  if (typeof window === "undefined") return "desktop";

  const width = window.innerWidth;
  if (width <= 639) return "mobile";
  if (width <= 1023) return "tablet";
  return "desktop";
}
