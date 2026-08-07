import type { Metadata, Viewport } from "next";
import DisableImageActions from "./DisableImageActions";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idea School | Creative Skills, AI Ad Filmmaking & Editing Programs",
  description:
    "Hands-on creative programs for editing, AI ad filmmaking, content strategy, portfolio projects, and industry-ready creative workflows.",
  icons: {
    icon: [{ url: "/images/idea%20logo.webp", type: "image/png" }],
    apple: [{ url: "/images/idea%20logo.webp", type: "image/png" }]
  },
  verification: {
    google: "IoTBz0cEobJ80992_poSZ0vrVo4Dk9AvCGJz9vjYQEw",
    other: {
      "msvalidate.01": ["8B36D5965F0BFE9929E6F42BFF5F3F97"]
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <DisableImageActions />
        {children}
      </body>
    </html>
  );
}
