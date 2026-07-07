import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devsparkai.com"),
  title: {
    default: "DevSpark AI — Web Development & AI Automation Studio, Hyderabad",
    template: "%s — DevSpark AI",
  },
  description:
    "DevSpark AI is a web development and AI automation studio in Hyderabad, India. We build custom websites, SaaS platforms, mobile apps, and AI-powered products for clients worldwide.",
  keywords: [
    "web development agency Hyderabad",
    "AI automation agency",
    "custom website development",
    "Next.js development agency",
    "SaaS development company India",
    "AI chatbot development",
    "Flutter app development Hyderabad",
    "web design studio India",
    "LLM integration services",
    "DevSpark AI",
  ],
  authors: [{ name: "Channu Praveen" }],
  creator: "DevSpark AI",
  alternates: {
    canonical: "https://devsparkai.com",
  },
  openGraph: {
    type: "website",
    url: "https://devsparkai.com",
    siteName: "DevSpark AI",
    title: "DevSpark AI — Web Development & AI Automation Studio",
    description:
      "We build websites and AI products that feel handmade. Custom web platforms, SaaS, mobile apps, and AI automation — from Hyderabad, working worldwide.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "DevSpark AI — Web Development & AI Automation Studio",
    description:
      "We build websites and AI products that feel handmade. Custom web platforms, SaaS, mobile apps, and AI automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DevSpark AI",
    url: "https://devsparkai.com",
    logo: "https://devsparkai.com/logo.svg",
    description:
      "Web development and AI automation studio building custom websites, SaaS platforms, mobile apps, and AI-powered products.",
    email: "devsparkai.studio@gmail.com",
    founder: {
      "@type": "Person",
      name: "Channu Praveen",
      sameAs: [
        "https://www.linkedin.com/in/praveen-kumar2001",
        "https://github.com/channupraveen",
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "AI Automation",
      "SaaS Development",
      "Mobile App Development",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
