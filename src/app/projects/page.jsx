import ProjectsContent from "./ProjectsContent";

export const metadata = {
  title: "Projects",
  description:
    "Browse the full portfolio of Abdulsamad Hamzat — web apps, mobile apps, DeFi platforms, AI tools, and open-source projects built with React, Next.js, Node.js, and more.",
  openGraph: {
    title: "Projects by Abdulsamad Hamzat",
    description:
      "A curated collection of web and mobile projects including DeFi platforms, AI tools, file transfer apps, and more.",
    url: "https://abdulsamadcodes.netlify.app/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
