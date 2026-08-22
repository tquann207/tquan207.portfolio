import type { Metadata } from "next";
import { ProjectsArchive } from "@/components/projects-archive";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description: "Quan Tran's mechanical engineering project archive covering design, prototyping, testing, validation, and competition work.",
};

export default function ProjectsPage() {
  return <ProjectsArchive />;
}
