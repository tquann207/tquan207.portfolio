import type { Metadata } from "next";
import { ProjectsArchive } from "@/components/projects-archive";

export const metadata: Metadata = {
  title: "Engineering Projects",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://tquann207.github.io/tquan207.portfolio"}/projects/` },
  description: "Quan Tran's mechanical engineering project archive covering design, prototyping, testing, validation, and competition work.",
};

export default function ProjectsPage() {
  return <ProjectsArchive />;
}
