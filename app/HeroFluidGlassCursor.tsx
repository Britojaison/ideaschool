"use client";

import FluidGlass from "./FluidGlass";

export default function HeroFluidGlassCursor() {
  return (
    <div className="heroFluidGlassLayer" aria-hidden="true">
      <FluidGlass
        mode="lens"
        lensProps={{
          scale: 0.25,
          ior: 1.15,
          thickness: 5,
          transmission: 1,
          roughness: 0,
          chromaticAberration: 0.1,
          anisotropy: 0.01,
        }}
      />
    </div>
  );
}
