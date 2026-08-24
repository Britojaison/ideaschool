import type { Metadata } from "next";
import Shell from "@/components/global/Shell";
import CinematicHeroFlow from "@/components/cinematic-hero/CinematicHeroFlow";
import SelectedProjects from "@/components/cinematic-hero/SelectedProjects";
import FullCreativeControl from "@/components/cinematic-hero/FullCreativeControl";
import ProgramBrochure from "@/components/cinematic-hero/ProgramBrochure";
import ByTheNumbers from "@/components/cinematic-hero/ByTheNumbers";
import MentorsDiagonal from "@/components/cinematic-hero/MentorsDiagonal";
import ScrollStrokeWrapper from "@/components/cinematic-hero/ScrollStrokeWrapper";
import HomeFAQ from "@/components/homepage/HomeFAQ";

export const metadata: Metadata = {
  title: "Full Stack Creative Editing & AI Mastery | Idea School",
  description:
    "A 24-week studio-led video editing, cinematic pacing, motion graphics, and creative AI direction program from Idea School.",
};

export default function CreativeEditingCopyPage() {
  return (
    <Shell headerOverlay={true}>
      <CinematicHeroFlow
        videoSrc="/assets/videos/HOME PAGE VIDEO.mp4"
        heroHeadline1="EDITING DEFINES."
        heroHeadline2="CRAFT SELLS."
        heroSubtitle="[  Full Stack Video Editing & Creative AI Mastery  ]"
        studioName="Idea School"
        tags={["[ 24-WEEK PROGRAM ]", "[ LIVE BRAND BRIEFS ]", "[ PLACEMENT READY ]"]}
        leftGiantTop="INDUSTRY"
        leftGiantBottom="LED."
        rightGiantTop="CRAFT"
        rightGiantBottom="BUILT."
        editorialParagraphs={[
          "Most editing courses only teach timeline shortcuts and buttons. But software alone doesn't build a career.",
          <span key="p-2">
            Top agencies and studios hire for pacing, emotional rhythm, and commercial judgment.{" "}
            <strong style={{ color: "#FFFFFF", fontWeight: 500 }}>Idea School</strong> is an
            industry-led program built by working commercial filmmakers and lead editors.
          </span>,
          "We transform ambitious creators, editors, and designers into high-tier commercial talent through live brand projects and 1-on-1 mentor critiques.",
          "We teach the craft that builds high-performing creative careers."
        ]}
      />
      <SelectedProjects />
      <ScrollStrokeWrapper>
        <ProgramBrochure />
        <FullCreativeControl />
        <ByTheNumbers />
        <MentorsDiagonal />
        <HomeFAQ />
      </ScrollStrokeWrapper>
    </Shell>
  );
}
