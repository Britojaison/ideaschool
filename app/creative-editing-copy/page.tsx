import type { Metadata } from "next";
import Shell from "@/components/global/Shell";

export const metadata: Metadata = {
  title: "Creative Editing Course | Idea School",
  description:
    "A 24-week video editing, motion graphics, AI content creation, portfolio, and Industry Experience Program from Idea School.",
};

export default function CreativeEditingCopyPage() {
  return (
    <Shell>
      <div style={{ minHeight: "100vh", paddingTop: "100px" }}>
        {/* Layout UI will be built here */}
      </div>
    </Shell>
  );
}
