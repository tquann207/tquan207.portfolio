import Link from "next/link";
import type { Project } from "@/content/site";
import { withBasePath } from "@/content/site-config";
import { ProjectEvidence } from "./project-evidence";
import { TechnicalLabel } from "./technical-label";

export function ProjectFeature({ project }: { project: Project; reverse?: boolean }) {
  return <article id={project.slug} className="project-feature">
    <div className="project-feature__head"><TechnicalLabel>PROJECT / {project.number}</TechnicalLabel><p>{project.timeline}</p></div>
    <div className="project-feature__body">
      <div className="project-feature__copy"><h3><Link href={`/projects/${project.slug}/`}>{project.title}</Link></h3><p className="project-role">{project.role}{project.teamSize ? ` · ${project.teamSize}` : ""}</p><p>{project.summary}</p><div className="project-categories">{project.categories.map(c => <span key={c}>{c}</span>)}</div><Link className="text-link" href={`/projects/${project.slug}/`}>View case study <span aria-hidden="true">→</span></Link></div>
      {project.media?.[0] ? <Link className="project-feature__image" href={`/projects/${project.slug}/`} aria-label={`View ${project.title} case study`}><img src={withBasePath(project.media[0].src)} alt={project.media[0].alt} width="1000" height="750" loading="lazy" decoding="async" /></Link> : <ProjectEvidence project={project} compact />}
    </div>
    <dl className="metric-grid">{project.metrics.map(metric => <div className="metric" key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd><span>{metric.kind === "test" ? "Test scope" : metric.kind === "reported" ? "Reported result" : "Project context"}</span></div>)}</dl>
    {project.metrics.some(metric => metric.label.includes("*")) && <p className="figure-note metric-footnote">*Reported in the existing project record; calculation and test evidence are still needed. See the case study for context.</p>}
  </article>;
}
