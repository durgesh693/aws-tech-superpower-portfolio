import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
// @ts-ignore: side-effect import of global CSS
import "./globals.css";
import { Providers } from "@/app/providers";
import { siteConfig } from "@/data/site-config";
import { profileData } from "@/data/profile";
import { InitialLoader } from "@/components/ui/initial-loader";
import  SuperpowerMode  from "@/components/ui/SuperpowerMode";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const baseUrl = siteConfig.url || "https://durgeshmaurya.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  verification: {
    google:"MlE-qnvnbGVh_QP_JvNUxq3mBBnl4UxKyi_g40Mn7To"
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: "Durgesh Maurya Portfolio",
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  keywords: siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "../favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F17" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Durgesh Maurya",
    jobTitle: "Data Scientist | Data Analyst",
    email: "durgeshmaurya5039@gmail.com",
    description: profileData.summary,
    url: siteConfig.url,
    sameAs: [
      "https://github.com/durgesh693",
      "https://www.linkedin.com/in/durgesh277208/",
      "https://www.kaggle.com/durgesh95",
    ],
    knowsAbout: [
      "Data Science",
      "Machine Learning",
      "Data Analytics",
      "Artificial Intelligence",
      "Python",
      "SQL",
      "Deep Learning",
      "Neural Networks",
      "Software Engineering",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background font-sans antialiased overflow-x-hidden"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <InitialLoader />
          {children}
          {/* Yahan add karein SuperpowerMode */}
          <SuperpowerMode />
        </Providers>
      </body>
    </html>
  );
}