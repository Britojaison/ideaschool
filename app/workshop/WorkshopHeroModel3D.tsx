"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Bounds,
  Center,
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/images/3d model/clap og.glb";
const BRAND_GREEN = "#DAFD54";

function BrandModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  const model = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) {
        return;
      }

      // Detect shadow plane by checking if it's transparent or extremely flat
      child.geometry.computeBoundingBox();
      const box = child.geometry.boundingBox;
      const isFlat = box && (box.max.y - box.min.y < 0.01 || box.max.z - box.min.z < 0.01 || box.max.x - box.min.x < 0.01);
      const isTransparent = child.material && child.material.transparent;

      const name = child.name.toLowerCase();
      if (name.includes("shadow") || name.includes("plane") || name.includes("ground") || (isFlat && isTransparent)) {
        child.visible = false;
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;

      const newMat = new THREE.MeshPhysicalMaterial({
        color: "#93e400",
        roughness: 0.38,
        metalness: 0.08,
        clearcoat: 0.45,
        clearcoatRoughness: 0.42,
        emissive: "#385c00",
        emissiveIntensity: 0.08,
        side: THREE.DoubleSide,
      });

      child.material = newMat;
    });

    return clone;
  }, [scene]);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    const t = state.clock.elapsedTime;
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      -0.48 + pointerX * 0.42 + Math.sin(t * 0.72) * 0.04,
      4.8,
      delta,
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      -0.04 - pointerY * 0.26 + Math.sin(t * 0.58) * 0.025,
      4.2,
      delta,
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      -0.08 - pointerX * 0.08 + Math.sin(t * 0.64) * 0.02,
      4.2,
      delta,
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      0.18 + pointerY * 0.08 + Math.sin(t * 1.12) * 0.08,
      3,
      delta,
    );
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      -0.18 + pointerX * 0.1,
      3.6,
      delta,
    );
  });

  return (
    <group ref={groupRef} rotation={[-0.04, -0.48, -0.08]} position={[-0.18, 0.18, 0]}>
      <Center disableZ>
        <primitive object={model} />
      </Center>
    </group>
  );
}

function BrandModelScene() {
  return (
    <>
      <ambientLight intensity={0.36} />
      <directionalLight position={[-3.2, 4.4, 3.6]} intensity={5.2} color="#ffffff" castShadow />
      <directionalLight position={[2.8, 1.8, 2.2]} intensity={2.4} color={BRAND_GREEN} />
      <Bounds fit clip observe margin={1.12}>
        <BrandModel />
      </Bounds>
      <OrbitControls
        enableDamping
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.6}
        dampingFactor={0.08}
      />
      <Environment preset="studio" resolution={128} />
      <Preload all />
    </>
  );
}

type WorkshopHeroModel3DProps = {
  className?: string;
};

export default function WorkshopHeroModel3D({ className = "workshopHeroModel3D" }: WorkshopHeroModel3DProps) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        shadows
        camera={{ position: [0, 0.45, 6.2], fov: 34 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <BrandModelScene />
          <AdaptiveDpr pixelated />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_PATH);
