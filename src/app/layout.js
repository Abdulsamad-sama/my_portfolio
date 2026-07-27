import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";

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
  title: "Abdulsamad Hamzat | Full-Stack Developer",
  description:
    "Software engineer specializing in building modern web apps with React, Node.js, and Python. View my projects and get in touch.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lexend.variable} ${chillax.variable}`}>
      <body className="antialiased selection:bg-primary/30 min-h-screen flex flex-col font-sans">
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
