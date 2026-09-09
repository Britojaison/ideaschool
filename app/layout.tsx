import type { Metadata, Viewport } from "next";
import DisableImageActions from "./DisableImageActions";
import MetaPixel from "./MetaPixel";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ideaschool.pro"),
  title: "Idea School | Creative Skills, AI Ad Filmmaking & Editing Programs",
  description:
    "Hands-on creative programs for editing, AI ad filmmaking, content strategy, portfolio projects, and industry-ready creative workflows.",
  alternates: {
    canonical: "https://www.ideaschool.pro"
  },
  openGraph: {
    title: "Idea School | Creative Skills, AI Ad Filmmaking & Editing Programs",
    description:
      "Hands-on creative programs for editing, AI ad filmmaking, content strategy, portfolio projects, and industry-ready creative workflows.",
    url: "https://www.ideaschool.pro",
    siteName: "Idea School",
    images: [
      {
        url: "/images/idea%20logo.webp",
        width: 1200,
        height: 630,
        alt: "Idea School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idea School | Creative Skills, AI Ad Filmmaking & Editing Programs",
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
    ],
    other: {
      "msvalidate.01": ["8B36D5965F0BFE9929E6F42BFF5F3F97"]
    }
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ideaschool.pro/#organization",
      "name": "Idea School",
      "url": "https://www.ideaschool.pro",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.ideaschool.pro/#logo",
        "url": "https://www.ideaschool.pro/images/idea%20logo.webp",
        "caption": "Idea School"
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
      "name": "Idea School",
      "publisher": {
        "@id": "https://www.ideaschool.pro/#organization"
      }
    }
  ]
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
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "yf17buzduz");`
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
