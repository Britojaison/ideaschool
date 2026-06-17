"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Preload,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/images/3d model/88gb.glb";

function BrandModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  const model = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) {
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material instanceof THREE.MeshStandardMaterial) {
        child.material.envMapIntensity = 1.1;
        child.material.roughness = Math.min(child.material.roughness + 0.04, 1);
      }
    });

    return clone;
  }, [scene]);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      -0.25 + Math.sin(t * 0.34) * 0.08,
      2,
      delta,
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      -0.14 + Math.sin(t * 0.42) * 0.025,
      2,
      delta,
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      Math.sin(t * 0.62) * 0.035,
      2.4,
      delta,
    );
  });

  return (
    <group ref={groupRef} rotation={[0.08, -0.28, -0.14]}>
      <Center>
        <primitive object={model} />
      </Center>
    </group>
  );
}

function BrandModelScene() {
  return (
    <>
      <ambientLight intensity={0.82} />
      <directionalLight position={[-3.2, 4.4, 3.6]} intensity={4.4} color="#ffffff" castShadow />
      <directionalLight position={[2.8, 1.8, 2.2]} intensity={1.6} color="#dafe55" />
      <Bounds fit clip observe margin={1.18}>
        <BrandModel />
      </Bounds>
      <ContactShadows
        position={[0, -1.08, 0]}
        opacity={0.24}
        scale={4.4}
        blur={2.7}
        far={2.4}
        color="#050608"
        frames={1}
      />
      <Environment preset="studio" resolution={128} />
      <Preload all />
    </>
  );
}

export default function WorkshopHeroModel3D() {
  return (
    <div className="workshopHeroModel3D" aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0.05, 4.2], fov: 30, near: 0.1, far: 18 }}
        eventPrefix="client"
        performance={{ min: 0.6 }}
      >
        <Suspense fallback={null}>
          <BrandModelScene />
        </Suspense>
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_PATH);
