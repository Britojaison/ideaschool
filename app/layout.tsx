import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import DisableImageActions from "@/components/shared/DisableImageActions";
import MetaPixel from "@/components/shared/MetaPixel";
import "./globals.css";

const stara = localFont({
  src: [
    { path: "../fonts/Stara/Stara-Medium.otf", weight: "400", style: "normal" },
    { path: "../fonts/Stara/Stara-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/Stara/Stara-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../fonts/Stara/Stara-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../fonts/Stara/Stara-SemiBoldItalic.otf", weight: "600", style: "italic" },
    { path: "../fonts/Stara/Stara-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/Stara/Stara-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../fonts/Stara/Stara-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../fonts/Stara/Stara-ExtraBoldItalic.otf", weight: "800", style: "italic" },
    { path: "../fonts/Stara/Stara-Black.otf", weight: "900", style: "normal" },
    { path: "../fonts/Stara/Stara-BlackItalic.otf", weight: "900", style: "italic" }
  ],
  variable: "--font-stara",
  display: "swap"
});

const helveticaNow = localFont({
  src: [
    { path: "../fonts/helvetica-now-display/HelveticaNowDisplay-Thin.ttf", weight: "100", style: "normal" },
    { path: "../fonts/helvetica-now-display/HelveticaNowDisplay-ExtLt.ttf", weight: "200", style: "normal" },
    { path: "../fonts/helvetica-now-display/HelveticaNowDisplay-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/helvetica-now-display/HelveticaNowDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/helvetica-now-display/HelveticaNowDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/helvetica-now-display/HelveticaNowDisplay-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/helvetica-now-display/HelveticaNowDisplay-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/helvetica-now-display/HelveticaNowDisplay-Black.ttf", weight: "900", style: "normal" },
    { path: "../fonts/helvetica-now-display/HelveticaNowDisplay-ExtBlk.ttf", weight: "950", style: "normal" }
  ],
  variable: "--font-helvetica",
  display: "swap"
});

const magnu = localFont({
  src: [
    { path: "../fonts/Magnu/GCMagnu-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/Magnu/GCMagnu-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/Magnu/GCMagnu-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/Magnu/GCMagnu-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../fonts/Magnu/GCMagnu-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/Magnu/GCMagnu-ExtraBold.otf", weight: "800", style: "normal" }
  ],
  variable: "--font-magnu",
  display: "swap"
});

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

import CustomAnimatedCursor from "@/components/global/CustomAnimatedCursor";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stara.variable} ${helveticaNow.variable} ${magnu.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head />
      <body suppressHydrationWarning>
        <MetaPixel />
        <DisableImageActions />
        <CustomAnimatedCursor />
        {children}
      </body>
    </html>
  );
}
