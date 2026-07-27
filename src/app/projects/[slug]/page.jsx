import { featuredProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailContent from "./ProjectDetailContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.desc,
    openGraph: {
      title: `${project.name} — Project by Abdulsamad Hamzat`,
      description: project.desc,
      url: `https://abdulsamadcodes.netlify.app/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.name} – ${project.type} app by Abdulsamad Hamzat`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Abdulsamad Hamzat`,
      description: project.desc,
      images: [project.image],
    },
  };
}

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
