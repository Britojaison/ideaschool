import FluidGlass from "./FluidGlass";

export default function HeroFluidGlassCursor() {
  return (
    <div className="heroFluidGlassLayer" aria-hidden="true">
      <FluidGlass
        mode="lens"
        refractionScene="course"
        showRefractionBackdrop={false}
        lensProps={{
          scale: 0.08,
          ior: 1.15,
          thickness: 7,
          transmission: 1,
          roughness: 0,
          chromaticAberration: 0.14,
          anisotropy: 0.01,
          color: "#ffffff",
          attenuationColor: "#ffffff",
          attenuationDistance: 0.28,
        }}
      />
    </div>
  );
}
