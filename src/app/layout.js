import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdulsamad Hamzat",
  url: "https://abdulsamad.com",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer and AI builder specializing in Next.js, React, Node.js, and Python.",
  sameAs: [
    "https://github.com/abdulsamad",
    "https://linkedin.com/in/abdulsamad",
    "https://twitter.com/abdulsamad",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abdulsamad Hamzat",
  url: "https://abdulsamad.com",
  description:
    "Portfolio of Abdulsamad Hamzat — full-stack developer and AI builder.",
};

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-lexend",
});

const chillax = localFont({
  src: [
    {
      path: "../fonts/Chillax-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Chillax-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Chillax-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Chillax-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-chillax",
});

export const metadata = {
  metadataBase: new URL("https://abdulsamad.com"),
  title: {
    default: "Abdulsamad Hamzat | Full-Stack Developer & AI Builder",
    template: "%s | Abdulsamad Hamzat",
  },
  description:
    "Full-stack developer and AI builder specializing in Next.js, React, Node.js, and Python. Explore my portfolio of modern web apps, mobile apps, and open-source projects.",
  keywords: [
    "Abdulsamad Hamzat",
    "full-stack developer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "Node.js",
    "Python",
    "AI builder",
    "web developer portfolio",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Abdulsamad Hamzat", url: "https://abdulsamad.com" }],
  creator: "Abdulsamad Hamzat",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulsamad.com",
    siteName: "Abdulsamad Hamzat",
    title: "Abdulsamad Hamzat | Full-Stack Developer & AI Builder",
    description:
      "Full-stack developer and AI builder specializing in Next.js, React, Node.js, and Python. Explore my portfolio of modern web apps, mobile apps, and open-source projects.",
    images: [
      {
        url: "/abdulsamad.JPG",
        width: 1200,
        height: 630,
        alt: "Abdulsamad Hamzat – Full-Stack Developer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulsamad Hamzat | Full-Stack Developer & AI Builder",
    description:
      "Full-stack developer and AI builder specializing in Next.js, React, Node.js, and Python.",
    images: ["/abdulsamad.JPG"],
    creator: "@abdulsamad",
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lexend.variable} ${chillax.variable}`}>
      <body className="antialiased selection:bg-primary/30 min-h-screen flex flex-col font-sans">
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Providers>
          <Navbar />
          <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24 mx-auto w-full max-w-7xl">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
