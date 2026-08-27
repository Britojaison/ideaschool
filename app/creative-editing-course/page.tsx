import type { Metadata } from "next";
import Shell from "@/components/global/Shell";
import CinematicHeroFlow from "@/components/cinematic-hero/CinematicHeroFlow";
import SelectedProjects from "@/components/cinematic-hero/SelectedProjects";
import FullCreativeControl from "@/components/cinematic-hero/FullCreativeControl";
import ProgramBrochure from "@/components/cinematic-hero/ProgramBrochure";
import ToolsMarquee from "@/components/ui/ToolsMarquee";
import ByTheNumbers from "@/components/cinematic-hero/ByTheNumbers";
import MentorsDiagonal from "@/components/cinematic-hero/MentorsDiagonal";
import ClientBrandsGrid from "./ClientBrandsGrid";
import CourseGallery from "./CourseGallery";
import AdmissionEnrollment from "./AdmissionEnrollment";
import HomeFAQ from "@/components/homepage/HomeFAQ";


export const metadata: Metadata = {
  title: "Full Stack Creative Editing & AI Mastery | Idea School",
  description:
    "A 24-week studio-led video editing, cinematic pacing, motion graphics, and creative AI direction program from Idea School.",
};

export default function CreativeEditingCopyPage() {
  return (
    <Shell headerOverlay={true} showAnnouncement={false}>
      <CinematicHeroFlow
        videoSrc="/assets/videos/HOME PAGE VIDEO.mp4"
        mobileVideoSrc="/images/IDEASCHOOL - 88GB_low bitrate.compressed.mp4"
        heroHeadline1="EDITING IS JUST"
        heroHeadline2="THE START."
        heroSubtitle="[ Full-Stack Video Editing & Creative AI Mastery ]"
        studioName="Idea School"
        tags={["[ 24 WEEK PROGRAM ]", "[ INDUSTRY EXPERIENCE ]", "[ MENTOR LED ]", "[ HYBRID LEARNING ]"]}
        leftGiantTop="INDUSTRY"
        leftGiantBottom="LED."
        rightGiantTop="CRAFT"
        rightGiantBottom="BUILT."
        editorialParagraphs={[
          "Learning a video editing software is only one part of becoming a professional editor.",
          "Today, creative teams need people who can understand a brief, shape a story, work across different visual formats and use modern tools to get the work done.",
          "That's why Idea Creative School goes beyond software training.",
          "You'll build your foundation in video editing and expand into motion design, visual storytelling, creative AI and professional content workflows — so you can contribute to more than just the edit.",
          "The goal is simple:",
          "Build the capability to step into a real creative environment and contribute with confidence."
        ]}
      />
      <SelectedProjects />
      <ProgramBrochure />
      <ToolsMarquee />
      <FullCreativeControl />
      <ByTheNumbers />
      <MentorsDiagonal />
      <ClientBrandsGrid />
      <CourseGallery />
      <AdmissionEnrollment />
      <HomeFAQ transitionFromCream />
    </Shell>
  );
}
