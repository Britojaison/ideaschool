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
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      -0.48 + Math.sin(t * 0.72) * 0.1,
      3.1,
      delta,
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      -0.04 + Math.sin(t * 0.58) * 0.05,
      2.6,
      delta,
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      -0.08 + Math.sin(t * 0.64) * 0.035,
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
    <group ref={groupRef} rotation={[-0.04, -0.48, -0.08]}>
      <Center>
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
      <Bounds fit clip observe margin={1.42}>
        <BrandModel />
      </Bounds>
      <ContactShadows
        position={[0, -2.15, 0]}
        opacity={0.28}
        scale={5.5}
        blur={2.8}
        far={4}
        color="#84c600"
      />
      <Environment preset="studio" resolution={128} />
      <Preload all />
    </>
  );
}

export default function WorkshopHeroModel3D() {
  return null;
}

useGLTF.preload(MODEL_PATH);
