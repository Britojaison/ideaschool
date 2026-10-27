import type { Metadata } from "next";
import TechSchoolStudio from "@/components/tech-school/v2/TechSchoolStudio";

export const metadata: Metadata = {
  title: "Stop Vibe Coding. Start Engineering | IDEA Tech School",
  description:
    "A 1-day live build. Design, secure, and ship a production AI SaaS with Next.js, an agentic IDE, and a real cloud deploy.",
  alternates: {
    canonical: "https://www.ideaschool.pro/tech-school/v2",
  },
};

export default function TechSchoolStudioRoute() {
  return <TechSchoolStudio />;
}
