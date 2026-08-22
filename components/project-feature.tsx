import Link from "next/link";
import type { Project } from "@/content/site";
import { MediaPlaceholder } from "./media-placeholder";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function ProjectFeature({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <article className={reverse ? "project-feature project-feature--reverse" : "project-feature"}>
      <Reveal className="project-feature__head">
        <TechnicalLabel>PROJECT / {project.number}</TechnicalLabel>
        <h3>{project.title}</h3>
        <div className="project-categories">{project.categories.map((category) => <span key={category}>{category}</span>)}</div>
      </Reveal>
      <Reveal className="project-feature__media" delay={80}>
        <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
          <MediaPlaceholder label={project.sections[0]?.mediaLabel ?? "PROJECT MEDIA"} hint="Verified project media pending" project={`PROJECT / ${project.number}`} />
        </Link>
      </Reveal>
      <Reveal className="project-feature__details" delay={130}>
        <div className="metric-grid">{project.metrics.map((metric) => <div className="metric" key={`${project.slug}-${metric.label}`}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
        <div className="project-feature__summary"><p>{project.summary}</p><Link className="text-link" href={`/projects/${project.slug}`}>View case study <span aria-hidden="true">→</span></Link></div>
      </Reveal>
    </article>
  );
}
