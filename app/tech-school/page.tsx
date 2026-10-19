import type { Metadata } from "next";
import TechSchoolPage from "@/components/tech-school/TechSchoolPage";

export const metadata: Metadata = {
  title: "Stop Vibe Coding. Start Engineering | IDEA Tech School Workshop",
  description:
    "1-Day Live Build Workshop: Anyone can prompt an AI to spit out code. Real software engineers know how to design, secure, and ship production-grade systems. Build and deploy a live AI SaaS application in a single day.",
  alternates: {
    canonical: "https://www.ideaschool.pro/tech-school",
  },
  openGraph: {
    title: "Stop Vibe Coding. Start Engineering | IDEA Tech School Workshop",
    description:
      "1-Day Live Build Workshop: Build and deploy a live AI SaaS application in a single day with Next.js, Agentic IDEs, and production RAG pipelines.",
    url: "https://www.ideaschool.pro/tech-school",
    siteName: "IDEA School",
    images: [
      {
        url: "/images/homepagnew/teechschool.png",
        width: 1200,
        height: 630,
        alt: "IDEA Tech School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Vibe Coding. Start Engineering | IDEA Tech School Workshop",
    description:
      "1-Day Live Build Workshop: Build and deploy a live AI SaaS application in a single day with Next.js, Agentic IDEs, and production RAG pipelines.",
    images: ["/images/homepagnew/teechschool.png"],
  },
};

export default function TechSchoolRoute() {
  return <TechSchoolPage />;
}
