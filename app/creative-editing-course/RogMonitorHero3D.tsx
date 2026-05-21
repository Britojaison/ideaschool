"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Html,
  Preload,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/images/3d model/FrontMan_web.glb";

type RogMonitorHero3DProps = {
  className?: string;
  scrollZigZag?: boolean;
  travelAcrossPage?: boolean;
};

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return reducedMotion;
}

function useHeroScrollProgress(enabled: boolean) {
  const progressRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let animationFrame = 0;

    const updateProgress = () => {
      animationFrame = 0;
      const scrollRange = Math.max(window.innerHeight, 1);
      progressRef.current = window.scrollY / scrollRange;
    };

    const requestUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [enabled]);

  return progressRef;
}

function useGlobalCursorPosition() {
  const cursorRef = useRef({ clientX: 0, clientY: 0 });

  useEffect(() => {
    let animationFrame = 0;
    let nextClientX = window.innerWidth / 2;
    let nextClientY = window.innerHeight / 2;

    cursorRef.current.clientX = nextClientX;
    cursorRef.current.clientY = nextClientY;

    const commitPosition = () => {
      animationFrame = 0;
      cursorRef.current.clientX = nextClientX;
      cursorRef.current.clientY = nextClientY;
    };

    const updatePosition = (event: PointerEvent) => {
      nextClientX = event.clientX;
      nextClientY = event.clientY;

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(commitPosition);
      }
    };

    window.addEventListener("pointermove", updatePosition, { passive: true });

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("pointermove", updatePosition);
    };
  }, []);

  return cursorRef;
}

function AnimatedMonitorModel({ scrollZigZag = false }: Pick<RogMonitorHero3DProps, "scrollZigZag">) {
  const groupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);
  const { gl, viewport } = useThree();
  const reducedMotion = usePrefersReducedMotion();
  const scrollProgressRef = useHeroScrollProgress(scrollZigZag && !reducedMotion);
  const cursorRef = useGlobalCursorPosition();

  const model = useMemo(() => {
    const clonedScene = scene.clone(true);

    clonedScene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) {
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;
      child.frustumCulled = true;

      if (child.material instanceof THREE.MeshStandardMaterial) {
        child.material.envMapIntensity = 1.35;
        child.material.roughness = Math.min(child.material.roughness + 0.08, 1);
      }
    });

    return clonedScene;
  }, [scene]);

  useFrame((state, delta) => {
    if (!groupRef.current || !modelRef.current) {
      return;
    }

    const elapsed = state.clock.elapsedTime;
    const pointerStrength = viewport.width < 5 ? 0.35 : 1;
    const floatAmount = reducedMotion ? 0.012 : 0.07;
    const breathingAmount = reducedMotion ? 0.002 : 0.018;
    const scrollProgress = scrollProgressRef.current;
    const entryTravelProgress = THREE.MathUtils.clamp(scrollProgress, 0, 1);
    const zigZagAmount = viewport.width < 5 ? 0.12 : 0.22;
    const scrollDriftAmount = viewport.width < 5 ? 0.72 : 1.35;
    const zigZagX = scrollZigZag ? Math.sin(scrollProgress * Math.PI * 1.8) * zigZagAmount : 0;
    const scrollDriftY = scrollZigZag
      ? -entryTravelProgress * scrollDriftAmount + Math.sin(scrollProgress * Math.PI * 2.2) * 0.16
      : 0;
    const scrollRotation = scrollZigZag ? Math.sin(scrollProgress * Math.PI * 1.8) * 0.16 : 0;
    const cursorFollowX = viewport.width < 5 ? 0.15 : 0.34;
    const cursorFollowY = viewport.width < 5 ? 0.08 : 0.18;
    const canvasRect = gl.domElement.getBoundingClientRect();
    const cursorX = THREE.MathUtils.clamp(
      (cursorRef.current.clientX - (canvasRect.left + canvasRect.width / 2)) / (canvasRect.width * 0.58),
      -1,
      1,
    );
    const cursorY = THREE.MathUtils.clamp(
      ((canvasRect.top + canvasRect.height / 2) - cursorRef.current.clientY) / (canvasRect.height * 0.58),
      -1,
      1,
    );
    const targetRotationY = -0.08 + cursorX * 0.58 * pointerStrength + scrollRotation;
    const targetRotationX = -cursorY * 0.34 * pointerStrength + entryTravelProgress * 0.05;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotationY,
      3.8,
      delta,
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotationX,
      3.8,
      delta,
    );

    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      -0.06 + Math.sin(elapsed * 0.72) * floatAmount + scrollDriftY + cursorY * cursorFollowY,
      2.5,
      delta,
    );
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      0.16 + zigZagX + cursorX * cursorFollowX,
      2.5,
      delta,
    );
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      scrollZigZag ? entryTravelProgress * 0.28 : 0,
      2.5,
      delta,
    );

    const entryScale = THREE.MathUtils.damp(
      modelRef.current.scale.x,
      1 + Math.sin(elapsed * 1.05) * breathingAmount,
      2.25,
      delta,
    );

    modelRef.current.scale.setScalar(entryScale);
  });

  return (
    <group ref={groupRef} position={[0.16, -0.06, 0]} rotation={[0.02, -0.26, 0.01]}>
      <group ref={modelRef} scale={0.72}>
        <Center top={false}>
          <primitive object={model} />
        </Center>
      </group>
    </group>
  );
}

function CinematicLighting() {
  return (
    <>
      <ambientLight intensity={0.64} />
      <spotLight
        position={[-2.8, 4.2, 3.4]}
        angle={0.42}
        penumbra={0.92}
        intensity={5.6}
        color="#b4ff39"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight
        position={[3.4, 2.8, 2.7]}
        angle={0.5}
        penumbra={0.9}
        intensity={3.4}
        color="#9b5cff"
      />
      <pointLight position={[-2.4, -0.6, 2]} intensity={2.1} color="#b4ff39" distance={6} />
      <pointLight position={[2.4, 0.5, 2.4]} intensity={1.5} color="#7d44ff" distance={5.5} />
    </>
  );
}

function GlowAtmosphere() {
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!glowRef.current) {
      return;
    }

    const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.9) * 0.035;
    glowRef.current.scale.x = THREE.MathUtils.damp(glowRef.current.scale.x, pulse, 2, delta);
    glowRef.current.scale.y = THREE.MathUtils.damp(glowRef.current.scale.y, pulse, 2, delta);
  });

  return (
    <group position={[0.1, 0.05, -0.95]}>
      <mesh ref={glowRef} scale={[2.65, 1.72, 1]}>
        <planeGeometry args={[1, 1, 24, 24]} />
        <meshBasicMaterial
          color="#b4ff39"
          transparent
          opacity={0.13}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0.36, -0.08, -0.02]} scale={[2.05, 1.42, 1]}>
        <planeGeometry args={[1, 1, 24, 24]} />
        <meshBasicMaterial
          color="#8b5cff"
          transparent
          opacity={0.14}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function MonitorScene({ scrollZigZag = false }: Pick<RogMonitorHero3DProps, "scrollZigZag">) {
  return (
    <>
      <CinematicLighting />
      <GlowAtmosphere />
      <Bounds fit clip observe margin={1.12}>
        <AnimatedMonitorModel scrollZigZag={scrollZigZag} />
      </Bounds>
      <ContactShadows
        position={[0.12, -1.1, 0]}
        opacity={0.42}
        scale={5.2}
        blur={2.65}
        far={2.8}
        color="#050608"
        frames={1}
      />
      <Environment preset="city" resolution={128} />
      <Preload all />
    </>
  );
}

function MonitorFallback() {
  return (
    <Html center className="rogMonitorFallback">
      <span />
    </Html>
  );
}

export default function RogMonitorHero3D({
  className = "",
  scrollZigZag = false,
  travelAcrossPage = false,
}: RogMonitorHero3DProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!travelAcrossPage) {
      return;
    }

    let animationFrame = 0;
    let lastFrameTime = performance.now();
    const currentMotion = {
      x: 0,
      y: 0,
      scale: window.innerWidth < 700 ? 1.08 : 1.22,
    };
    const targetMotion = { ...currentMotion };

    const updateTargetTravel = () => {
      if (!wrapperRef.current) {
        return;
      }

      const pageHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const pageProgress = THREE.MathUtils.clamp(window.scrollY / pageHeight, 0, 1);
      const rect = wrapperRef.current.getBoundingClientRect();
      const sideGap = window.innerWidth < 700 ? 14 : Math.max(window.innerWidth * 0.045, 28);
      const horizontalTravel = Math.max(window.innerWidth - rect.width - sideGap * 2, 0);
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(".longCoursePage > section, .longCoursePage > footer"),
      );
      const viewportCenter = window.scrollY + window.innerHeight * 0.5;
      let sectionIndex = 0;
      let sectionBlend = 0;

      for (let index = 0; index < sections.length; index += 1) {
        const section = sections[index];
        const nextSection = sections[index + 1];
        const sectionTop = section.offsetTop;
        const sectionHeight = Math.max(section.offsetHeight, 1);
        const sectionCenter = sectionTop + sectionHeight * 0.5;
        const nextCenter = nextSection
          ? nextSection.offsetTop + Math.max(nextSection.offsetHeight, 1) * 0.5
          : sectionCenter + sectionHeight;

        if (viewportCenter <= nextCenter || index === sections.length - 1) {
          sectionIndex = index;
          sectionBlend = THREE.MathUtils.clamp(
            (viewportCenter - sectionCenter) / Math.max(nextCenter - sectionCenter, 1),
            0,
            1,
          );
          break;
        }
      }

      const currentSideX = sectionIndex % 2 === 0 ? 0 : -horizontalTravel;
      const nextSideX = (sectionIndex + 1) % 2 === 0 ? 0 : -horizontalTravel;
      const easedSectionBlend = THREE.MathUtils.smoothstep(sectionBlend, 0.18, 0.82);
      const sectionTravelX = THREE.MathUtils.lerp(currentSideX, nextSideX, easedSectionBlend);
      const sectionPulse = Math.sin((sectionBlend + sectionIndex) * Math.PI * 2);
      const verticalDrift = sectionPulse * (window.innerWidth < 700 ? 12 : 24);
      const shrinkStart = 0.06;
      const shrinkEnd = 0.38;
      const shrinkProgress = THREE.MathUtils.smoothstep(pageProgress, shrinkStart, shrinkEnd);
      const heroScale = window.innerWidth < 700 ? 1.08 : 1.22;
      const scrolledScale = window.innerWidth < 700 ? 0.76 : 0.72;
      const modelScale = THREE.MathUtils.lerp(heroScale, scrolledScale, shrinkProgress);

      targetMotion.x = sectionTravelX;
      targetMotion.y = verticalDrift;
      targetMotion.scale = modelScale;
    };

    const renderTravel = (time: number) => {
      if (!wrapperRef.current) {
        animationFrame = 0;
        return;
      }

      const delta = Math.min((time - lastFrameTime) / 1000, 0.08);
      lastFrameTime = time;

      currentMotion.x = THREE.MathUtils.damp(currentMotion.x, targetMotion.x, 1.25, delta);
      currentMotion.y = THREE.MathUtils.damp(currentMotion.y, targetMotion.y, 1.35, delta);
      currentMotion.scale = THREE.MathUtils.damp(currentMotion.scale, targetMotion.scale, 1.45, delta);

      wrapperRef.current.style.setProperty("--model-page-x", `${currentMotion.x}px`);
      wrapperRef.current.style.setProperty("--model-page-y", `${currentMotion.y}px`);
      wrapperRef.current.style.setProperty("--model-page-scale", `${currentMotion.scale}`);

      animationFrame = window.requestAnimationFrame(renderTravel);
    };

    const requestTravelUpdate = () => {
      updateTargetTravel();

      if (animationFrame) {
        return;
      }

      lastFrameTime = performance.now();
      animationFrame = window.requestAnimationFrame(renderTravel);
    };

    updateTargetTravel();
    requestTravelUpdate();
    window.addEventListener("scroll", requestTravelUpdate, { passive: true });
    window.addEventListener("resize", requestTravelUpdate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", requestTravelUpdate);
      window.removeEventListener("resize", requestTravelUpdate);
    };
  }, [travelAcrossPage]);

  return (
    <div ref={wrapperRef} className={`rogMonitorHero3D ${className}`.trim()} aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, 1.65]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0.15, 4.15], fov: 31, near: 0.1, far: 16 }}
        eventPrefix="client"
        performance={{ min: 0.55 }}
      >
        <Suspense fallback={<MonitorFallback />}>
          <MonitorScene scrollZigZag={scrollZigZag} />
        </Suspense>
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_PATH);
