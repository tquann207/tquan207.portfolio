import { ActionIcon } from "./action-icon";
import Link from "next/link";
import { projects, type Project } from "@/content/site";
import { TechnicalLabel } from "./technical-label";

function ProjectFolio({ project, headingLevel }: { project: Project; headingLevel: 2 | 3 }) {
  const { year, category, highlight } = project.overview;
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="project-folio" id={project.slug}>
      <div className="project-folio__tab">
        <span>PROJECT {project.number}</span>
        <time dateTime={year}>{year}</time>
      </div>
      <Link
        className="project-folio__sheet"
        href={`/projects/${project.slug}/`}
        aria-label={`View ${project.title}`}
      >
        <p className="project-folio__category">{category}</p>
        <Heading className="project-folio__title">{project.title}</Heading>
        <p className="project-folio__role">{project.role}</p>
        <dl className="project-folio__highlight">
          <dt>{highlight.label}</dt>
          <dd>{highlight.value}</dd>
        </dl>
        <span className="project-folio__open">
          View project <span aria-hidden="true"><ActionIcon name="document" /></span>
        </span>
      </Link>
    </article>
  );
}

export function ProjectCollection({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const years = projects.map(project => project.overview.year).sort();

  return (
    <div className="site-shell">
      <header className="project-collection__heading">
        <div>
          <TechnicalLabel>ENGINEERING PROJECTS &amp; COMPETITIONS</TechnicalLabel>
          <Heading className="project-collection__title" id="project-overview-title">
            Project collection.
          </Heading>
        </div>
        <span className="project-collection__count" aria-label={`${projects.length} projects`}>
          {String(projects.length).padStart(2, "0")}
        </span>
      </header>
      <div className="project-folio-grid">
        {projects.map(project => <ProjectFolio key={project.slug} project={project} headingLevel={headingLevel === 1 ? 2 : 3} />)}
      </div>
      <div className="project-collection__footer">
        <span>DESIGN / PROTOTYPE / VALIDATE</span>
        <span>{years[0]} — {years.at(-1)}</span>
      </div>
    </div>
  );
}
