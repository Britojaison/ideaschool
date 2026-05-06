import type { Metadata, Viewport } from "next";
import Script from "next/script";
import DisableImageActions from "./DisableImageActions";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idea School",
  description: "Creative skills training for editing, content creation, and AI tools."
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
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Script id="reset-to-hero-on-refresh" strategy="beforeInteractive">
          {`
            if ("scrollRestoration" in history) {
              history.scrollRestoration = "manual";
            }

            const resetToHero = () => {
              if (window.location.hash) {
                return;
              }

              window.scrollTo(0, 0);
            };

            resetToHero();

            window.addEventListener("pageshow", () => {
              resetToHero();
              requestAnimationFrame(resetToHero);
              window.setTimeout(resetToHero, 80);
              window.setTimeout(resetToHero, 250);
              window.setTimeout(resetToHero, 700);
            });

            window.addEventListener("load", () => {
              resetToHero();
              window.setTimeout(resetToHero, 120);
            });
          `}
        </Script>
        <DisableImageActions />
        {children}
      </body>
    </html>
  );
}
