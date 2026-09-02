import type { Metadata } from "next";
import Shell from "@/components/global/Shell";
import CinematicHeroFlow from "@/components/cinematic-hero/CinematicHeroFlow";

import FullCreativeControl from "@/components/cinematic-hero/FullCreativeControl";
import LearningEnvironment from "@/components/cinematic-hero/LearningEnvironment";
import ToolsMarquee from "@/components/ui/ToolsMarquee";
import ByTheNumbers from "@/components/cinematic-hero/ByTheNumbers";
import MentorsDiagonal from "@/components/cinematic-hero/MentorsDiagonal";
import ClientBrandsGrid from "./ClientBrandsGrid";
import CourseGallery from "./CourseGallery";
import AdmissionEnrollment from "./AdmissionEnrollment";
import FinalCourseCta from "@/components/cinematic-hero/FinalCourseCta";
import HomeFAQ from "@/components/homepage/HomeFAQ";
import HeroOverview from "@/components/cinematic-hero/HeroOverview";


export const metadata: Metadata = {
  title: "Full Stack Creative Editing & AI Mastery | Idea School",
  description:
    "A 24 week studio led video editing, cinematic pacing, motion graphics, and creative AI direction program from Idea School.",
};

const COURSE_FAQS = [
  {
    q: "Do I need prior industry experience to join?",
    a: "No.\n\nThe program is designed to take you from the fundamentals through progressively advanced creative work. You don't need previous industry experience to get started."
  },
  {
    q: "What exactly will I learn?",
    a: "You'll develop skills across video editing, storytelling, motion graphics, visual design, creative AI and professional content workflows.\n\nThe focus is not on learning software for its own sake, but on learning how to use these skills together to create professional work."
  },
  {
    q: "Is the program online or offline?",
    a: "It's a hybrid learning experience.\n\nYou'll have structured learning and independent work during the week, combined with physical workshops, mentor interaction and practical sessions."
  },
  {
    q: "How does the 24 week program work?",
    a: "The first 12 weeks focus on building your core creative capabilities.\n\nThe next 12 weeks move into industry experience, where you work on briefs, create video assignments and receive professional feedback."
  },
  {
    q: "Will I work on real industry briefs?",
    a: "During the industry experience phase, you'll work through professional style briefs and workflows within the 88GB ecosystem.\n\nYou'll receive a brief, create the work, get it reviewed and improve it based on feedback."
  },
  {
    q: "How many projects will I work on?",
    a: "During the first 12 weeks, you'll complete two practical video assignments each week.\n\nFor the industry experience phase, there are two pathways. The dedicated on ground option can involve approximately five assignments per week, while the flexible option can involve around two to three assignments per week."
  },
  {
    q: "What is the benefit of working alongside professionals?",
    a: "You get to see how experienced creatives approach problems, organise projects, use production resources and respond to feedback.\n\nThese are practical skills that are difficult to develop through software tutorials alone."
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes.\n\nYou'll receive a certificate upon successful completion of the program.\n\nHowever, the bigger outcome is the combination of your portfolio, practical experience and ability to work within a professional creative workflow."
  },
  {
    q: "Is this only for people who want to become video editors?",
    a: "Video editing is the core skill, but the program is designed for anyone who wants to build a broader creative career.\n\nIt can be relevant for aspiring editors, creators, designers, freelancers and people looking to build their own creative practice or agency."
  }
];

export default function CreativeEditingCopyPage() {
  return (
    <Shell headerOverlay={true} showAnnouncement={false}>
      <CinematicHeroFlow
        videoSrc="/assets/videos/HOME PAGE VIDEO.mp4"
        mobileVideoSrc="/images/IDEASCHOOL - 88GB_low bitrate.compressed.mp4"
        heroHeadline1="EDITING IS JUST"
        heroHeadline2="THE START."
        heroSubtitle="[ Full Stack Video Editing & Creative AI Mastery ]"
        studioName="Idea School"
        tags={["[ 24 WEEK PROGRAM ]", "[ INDUSTRY EXPERIENCE ]", "[ MENTOR LED ]", "[ HYBRID LEARNING ]"]}
        leftGiantTop="INDUSTRY"
        leftGiantBottom="LED."
        rightGiantTop="CRAFT"
        rightGiantBottom="BUILT."
        editorialParagraphs={[
          <span key="highlight-text" style={{ color: "#DAFD55", fontWeight: 400 }}>WHY IDEA SCHOOL</span>,
          "KNOWING THE SOFTWARE IS ONLY THE BEGINNING.",
          "Professional editors also need to understand a brief, structure a story, make creative decisions, respond to feedback and deliver work professionally. Idea School is designed to help you develop those capabilities—not simply learn where the buttons are."
        ]}
      />

      <LearningEnvironment />
      <ToolsMarquee />
      <FullCreativeControl />
      <ByTheNumbers />
      <MentorsDiagonal />
      <ClientBrandsGrid />
      <CourseGallery />
      <AdmissionEnrollment />
      <FinalCourseCta />
      <HomeFAQ transitionFromCream faqs={COURSE_FAQS} />
    </Shell>
  );
}
