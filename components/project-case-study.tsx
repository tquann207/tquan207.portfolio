import Link from "next/link";
import type { Project } from "@/content/site";
import { projects } from "@/content/site";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ProjectMediaSlider, type ProjectMediaSlide } from "./project-media-slider";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const mediaSlides: ProjectMediaSlide[] = project.media?.length
    ? project.media.map((media, index) => ({
        src: media.src,
        alt: media.alt,
        label: media.label ?? `PROJECT IMAGE ${String(index + 1).padStart(2, "0")}`,
      }))
    : project.sections.map((section, index) => ({
        alt: `${project.title}: ${section.mediaLabel ?? `project image ${index + 1}`}`,
        label: section.mediaLabel ?? `PROJECT IMAGE ${String(index + 1).padStart(2, "0")}`,
        hint: section.mediaHint,
      }));

  return (
    <>
      <Navbar />
      <main className="case-study">
        <header className="case-hero site-shell">
          <div className="case-hero__topline">
            <TechnicalLabel>PROJECT / {project.number}</TechnicalLabel>
            <Link className="case-back" href="/projects"><span aria-hidden="true">←</span> All projects</Link>
          </div>

          <h1>{project.title}</h1>

          <div className="case-categories">
            {project.categories.map((category) => <span key={category}>{category}</span>)}
          </div>

          <dl className="case-metadata">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            {project.teamSize ? <div><dt>Team</dt><dd>{project.teamSize}</dd></div> : null}
            <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
            <div><dt>Location</dt><dd>{project.location}</dd></div>
          </dl>
        </header>

        <section className="site-shell case-media" aria-labelledby={`project-${project.number}-media`}>
          <div className="case-section-heading">
            <TechnicalLabel>PROJECT MEDIA / {project.number}</TechnicalLabel>
            <span id={`project-${project.number}-media`}>All project images in one frame</span>
          </div>
          <ProjectMediaSlider slides={mediaSlides} projectNumber={project.number} />
        </section>

        <section className="site-shell case-overview">
          <TechnicalLabel>PROJECT OVERVIEW</TechnicalLabel>
          <Reveal>
            <p>{project.summary}</p>
          </Reveal>
        </section>

        <section className="site-shell case-engineering" aria-labelledby={`project-${project.number}-engineering`}>
          <div className="case-section-heading">
            <TechnicalLabel>ENGINEERING SUMMARY</TechnicalLabel>
            <span id={`project-${project.number}-engineering`}>Problem, decisions, and validation</span>
          </div>

          <div className="case-summary-grid">
            {project.sections.map((section, index) => (
              <Reveal className="case-summary-card" delay={index * 70} key={section.id}>
                <section id={section.id}>
                  <TechnicalLabel>{section.eyebrow}</TechnicalLabel>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="case-results">
          <div className="site-shell">
            <div className="case-section-heading case-section-heading--inverse">
              <TechnicalLabel>KEY RESULTS</TechnicalLabel>
              <span>Measured project outcomes</span>
            </div>
            <div className="case-results-grid">
              {project.metrics.map((metric) => (
                <div className="case-result" key={`${metric.value}-${metric.label}`}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-shell case-tools">
          <TechnicalLabel>TOOLS / METHODS</TechnicalLabel>
          <div>{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        </section>

        <Link className="next-project" href={`/projects/${next.slug}`}>
          <span>NEXT PROJECT / {next.number}</span>
          <strong>{next.title}</strong>
          <span aria-hidden="true">→</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
