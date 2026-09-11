import Link from "next/link";
import { featuredProjects, supportingProjects } from "@/content/site";
import { ProjectFeature } from "./project-feature";
import { TechnicalLabel } from "./technical-label";

export function ProjectOverview() {
  return <section className="selected-work section-space" id="projects" aria-labelledby="project-overview-title"><div className="site-shell">
    <div className="section-heading"><TechnicalLabel>SELECTED PROJECTS / DESIGN TO VALIDATION</TechnicalLabel><h2 id="project-overview-title">Engineering work,<br />with the process in view.</h2></div>
    <div className="project-list">{featuredProjects.map(project => <ProjectFeature key={project.slug} project={project} />)}</div>
    <div className="supporting-projects">{supportingProjects.map(project => <Link key={project.slug} className="supporting-project" href={`/projects/${project.slug}/`}><span className="technical-label">PROJECT / {project.number} · {project.timeline}</span><h3>{project.title}</h3><p>{project.role}</p><p>{project.categories.join(" · ")}</p><span className="text-link">View engineering record <span aria-hidden="true">↗</span></span></Link>)}</div>
    <Link className="archive-link" href="/projects/">All six projects &amp; competition archive <span aria-hidden="true">→</span></Link>
  </div></section>;
}
