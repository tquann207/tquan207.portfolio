import { ProjectCollection } from "./project-collection";

export function ProjectOverview() {
  return (
    <section className="project-collection section-space" id="projects" aria-labelledby="project-overview-title">
      <ProjectCollection />
    </section>
  );
}
