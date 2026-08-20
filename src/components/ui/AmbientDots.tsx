"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  dissolving: boolean;
};

const PARTICLE_COUNT = 72;

export default function AmbientDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let particles: Particle[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const createParticle = (side = Math.random() < 0.5 ? -1 : 1): Particle => {
      const isAccentDot = Math.random() < 0.055;

      return {
        x: side < 0 ? -4 : width + 4,
        y: 8 + Math.random() * Math.max(height - 16, 1),
        vx: side < 0 ? 0.28 + Math.random() * 0.42 : -(0.28 + Math.random() * 0.42),
        vy: (Math.random() - 0.5) * 0.16,
        radius: isAccentDot ? 0.85 + Math.random() * 0.45 : 0.22 + Math.random() * 0.38,
        alpha: isAccentDot ? 0.38 + Math.random() * 0.22 : 0.12 + Math.random() * 0.32,
        dissolving: false,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => {
        const particle = createParticle(index % 2 === 0 ? -1 : 1);
        particle.x = Math.random() * width;
        return particle;
      });
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        for (const particle of particles) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.dissolving) particle.alpha -= 0.025;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;

          if (particle.alpha <= 0 || particle.x < -8 || particle.x > width + 8) {
            Object.assign(particle, createParticle());
          }
        }

        for (let i = 0; i < particles.length; i += 1) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const first = particles[i];
            const second = particles[j];
            if (first.dissolving || second.dissolving) continue;
            const dx = first.x - second.x;
            const dy = first.y - second.y;
            if (dx * dx + dy * dy < 16) {
              first.dissolving = true;
              second.dissolving = true;
            }
          }
        }
      }

      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(251, 250, 242, ${Math.max(particle.alpha, 0)})`;
        context.fill();
      }

      frame = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-dot-canvas" aria-hidden="true" />;
}
