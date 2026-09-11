import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { projects } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://tquann207.github.io/tquan207.portfolio"}/projects/${project.slug}/` },
    description: project.summary,
    openGraph: { title: `${project.title} — Quan Tran`, description: project.summary, images: [] },
    twitter: { title: `${project.title} — Quan Tran`, description: project.summary, images: [] },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
