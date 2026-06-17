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

const MODEL_PATH = "/images/3d model/clapp.glb";
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

      const newMat = new THREE.MeshBasicMaterial({
        color: "#dafd55",
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
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      -0.34 + Math.sin(t * 0.72) * 0.34,
      3.1,
      delta,
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      0.08 + Math.sin(t * 0.58) * 0.08,
      2.6,
      delta,
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      -0.14 + Math.sin(t * 0.64) * 0.055,
      2.8,
      delta,
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      Math.sin(t * 1.12) * 0.16,
      3,
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
      <directionalLight position={[-3.2, 4.4, 3.6]} intensity={4.4} color="#ffffff" />
      <directionalLight position={[2.8, 1.8, 2.2]} intensity={1.8} color={BRAND_GREEN} />
      <Bounds fit clip observe margin={1.18}>
        <BrandModel />
      </Bounds>
      <Environment preset="studio" resolution={128} />
      <Preload all />
    </>
  );
}

export default function WorkshopHeroModel3D() {
  return (
    <div className="workshopHeroModel3D" aria-hidden="true">
      <Canvas
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
