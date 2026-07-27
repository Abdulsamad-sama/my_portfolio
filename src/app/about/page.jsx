import AboutContent from "./AboutContent";

export const metadata = {
  title: "About",
  description:
    "Learn about Abdulsamad Hamzat — a passionate full-stack developer specializing in React, Next.js, Node.js, and Python. Discover my journey, principles, and approach to building modern software.",
  openGraph: {
    title: "About Abdulsamad Hamzat",
    description:
      "Full-stack developer with a proven track record in building innovative web and mobile applications.",
    url: "https://abdulsamadcodes.netlify.app/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
