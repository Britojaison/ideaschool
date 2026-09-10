import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import DisableImageActions from "./DisableImageActions";
import MetaPixel from "./MetaPixel";
import "./globals.css";

const stara = localFont({
  src: [
    { path: "../public/fonts/Stara-Medium.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Stara-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Stara-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/Stara-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/Stara-SemiBoldItalic.otf", weight: "600", style: "italic" },
    { path: "../public/fonts/Stara-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/Stara-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../public/fonts/Stara-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/Stara-ExtraBoldItalic.otf", weight: "800", style: "italic" },
    { path: "../public/fonts/Stara-Black.otf", weight: "900", style: "normal" },
    { path: "../public/fonts/Stara-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-stara",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ideaschool.pro"),
  title: "IDEA School | Creative Skills, AI Ad Filmmaking & Editing Programs",
  description:
    "Hands-on creative programs for editing, AI ad filmmaking, content strategy, portfolio projects, and industry-ready creative workflows.",
  alternates: {
    canonical: "https://www.ideaschool.pro"
  },
  openGraph: {
    title: "IDEA School | Creative Skills, AI Ad Filmmaking & Editing Programs",
    description:
      "Hands-on creative programs for editing, AI ad filmmaking, content strategy, portfolio projects, and industry-ready creative workflows.",
    url: "https://www.ideaschool.pro",
    siteName: "IDEA School",
    images: [
      {
        url: "/images/idea%20logo.webp",
        width: 1200,
        height: 630,
        alt: "IDEA School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDEA School | Creative Skills, AI Ad Filmmaking & Editing Programs",
    description:
      "Hands-on creative programs for editing, AI ad filmmaking, content strategy, portfolio projects, and industry-ready creative workflows.",
    images: ["/images/idea%20logo.webp"],
  },
  icons: {
    icon: [{ url: "/images/idea%20logo.webp", type: "image/png" }],
    apple: [{ url: "/images/idea%20logo.webp", type: "image/png" }]
  },
  verification: {
    google: [
      "mDTg1HB8JOYS8T6sn9VH29ktMqI4Ns1KYWJz6kxAupw",
      "IoTBz0cEobJ80992_poSZ0vrVo4Dk9AvCGJz9vjYQEw"
    ]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ideaschool.pro/#organization",
      "name": "IDEA School",
      "url": "https://www.ideaschool.pro",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.ideaschool.pro/#logo",
        "url": "https://www.ideaschool.pro/images/idea%20logo.webp",
        "caption": "IDEA School"
      },
      "sameAs": [
        "https://www.instagram.com/ideaschool.pro",
        "https://www.linkedin.com/company/ideaschool"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ideaschool.pro/#website",
      "url": "https://www.ideaschool.pro",
      "name": "IDEA School",
      "publisher": {
        "@id": "https://www.ideaschool.pro/#organization"
      }
    }
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0c"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stara.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `if (typeof window !== "undefined" && ["ideaschool.pro", "www.ideaschool.pro", "ideaschool.in", "www.ideaschool.in"].includes(window.location.hostname)) { (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "yejo0eorsa"); }`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
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
