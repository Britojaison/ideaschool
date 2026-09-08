import type { Metadata, Viewport } from "next";
import DisableImageActions from "./DisableImageActions";
import MetaPixel from "./MetaPixel";
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
    google: [
      "mDTg1HB8JOYS8T6sn9VH29ktMqI4Ns1KYWJz6kxAupw",
      "IoTBz0cEobJ80992_poSZ0vrVo4Dk9AvCGJz9vjYQEw"
    ],
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
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "yejo0eorsa");`
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <MetaPixel />
        <DisableImageActions />
        {children}
      </body>
    </html>
  );
}
