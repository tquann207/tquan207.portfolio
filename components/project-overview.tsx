import Link from "next/link";
import { projects } from "@/content/site";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function ProjectOverview() {
  return (
    <section className="project-overview" id="projects" aria-labelledby="project-overview-title">
      <div className="site-shell">
        <Reveal className="project-overview__intro">
          <TechnicalLabel>PROJECT INDEX / {String(projects.length).padStart(2, "0")}</TechnicalLabel>
          <div>
            <h2 id="project-overview-title">Projects at<br />a glance.</h2>
            <p>Names, roles, and engineering focus on the home page. Open the complete project archive for results, metrics, and case studies.</p>
          </div>
        </Reveal>

        <div className="project-overview__list">
          {projects.map((project, index) => (
            <Reveal delay={index * 35} key={project.slug}>
              <Link className="project-overview__row" href={`/projects#${project.slug}`}>
                <span className="project-overview__number">{project.number}</span>
                <div className="project-overview__identity">
                  <h3>{project.title}</h3>
                  <p>{project.role}</p>
                </div>
                <div className="project-overview__work" aria-label={`Engineering focus for ${project.title}`}>
                  {project.categories.map((category) => <span key={category}>{category}</span>)}
                </div>
                <span className="project-overview__arrow" aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="project-overview__footer">
          <Link className="project-overview__cta" href="/projects">
            <span>View all projects</span>
            <span>Full archive / metrics / case studies</span>
            <b aria-hidden="true">→</b>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
