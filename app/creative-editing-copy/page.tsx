import type { Metadata } from "next";
import Shell from "@/components/global/Shell";
import CinematicHeroFlow from "@/components/cinematic-hero/CinematicHeroFlow";
import SelectedProjects from "@/components/cinematic-hero/SelectedProjects";
import FullCreativeControl from "@/components/cinematic-hero/FullCreativeControl";

export const metadata: Metadata = {
  title: "Creative Editing Course | Idea School",
  description:
    "A studio-led film craft, video editing, and creative AI direction program from Idea School.",
};

export default function CreativeEditingCopyPage() {
  return (
    <Shell headerOverlay={true}>
      <CinematicHeroFlow
        videoSrc="/assets/videos/HOME PAGE VIDEO.mp4"
        heroHeadline1="VISUALIZATION SHOWS."
        heroHeadline2="CINEMA SELLS."
        heroSubtitle="[  Cinematic direction for luxury real estate  ]"
        studioName="CA Film Creatives"
        tags={["[ DIRECTION ]", "[ PRODUCTION ]", "[ POST ]"]}
        leftGiantTop="DIRECTOR"
        leftGiantBottom="LED."
        rightGiantTop="STUDIO"
        rightGiantBottom="BUILT."
        editorialParagraphs={[
          "Most architectural visualization delivers precision. But precision no longer differentiates.",
          <>
            Luxury developments compete on perception, desire, & positioning.{" "}
            <strong style={{ color: "#FFFFFF", fontWeight: 500 }}>CA Film Creatives</strong> is a
            director-led studio founded by Charles Alexander.
          </>,
          "We turn high-end 3D environments into cinematic campaigns for luxury real estate.",
          "We direct the film that defines their impact."
        ]}
      />
      <SelectedProjects />
      <FullCreativeControl />
    </Shell>
  );
}
