import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Abdulsamad Hamzat | Full-Stack Developer",
  description:
    "Software engineer specializing in building modern web apps with React, Node.js, and Python. View my projects and get in touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-primary/30 min-h-screen flex flex-col">
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
