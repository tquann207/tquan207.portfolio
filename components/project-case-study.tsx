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
  const stepCount = Math.min(Math.max(project.sections.length, 1), 3);

  const mediaSlides: ProjectMediaSlide[] = project.media?.length
    ? project.media.map((media) => ({
        src: media.src,
        alt: media.alt,
        label: "PROJECT MEDIA",
      }))
    : project.sections.map((_, index) => ({
        alt: `${project.title} project image ${index + 1}`,
        label: "PROJECT MEDIA",
        hint: "IMAGE PLACEHOLDER",
      }));

  return (
    <>
      <Navbar />

      <main className="case-study">
        <header className="case-hero site-shell">
          <div className="case-hero__topline">
            <TechnicalLabel>PROJECT / {project.number}</TechnicalLabel>
            <Link className="case-back" href="/projects">
              <span aria-hidden="true">←</span> All projects
            </Link>
          </div>

          <h1>{project.title}</h1>

          <div className="case-categories">
            {project.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>

          <dl className="case-metadata">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>

            {project.teamSize ? (
              <div>
                <dt>Team</dt>
                <dd>{project.teamSize}</dd>
              </div>
            ) : null}

            <div>
              <dt>Timeline</dt>
              <dd>{project.timeline}</dd>
            </div>

            <div>
              <dt>Location</dt>
              <dd>{project.location}</dd>
            </div>
          </dl>
        </header>

        <section
          className="site-shell case-media"
          aria-labelledby={`project-${project.number}-media`}
        >
          <div className="case-section-heading">
            <TechnicalLabel>PROJECT MEDIA / {project.number}</TechnicalLabel>
            <span id={`project-${project.number}-media`}>
              All project images in one frame
            </span>
          </div>

          <ProjectMediaSlider
            slides={mediaSlides}
            projectNumber={project.number}
          />
        </section>

        <section
          className="site-shell case-approach"
          aria-labelledby={`project-${project.number}-approach`}
        >
          <div className="case-approach__top">
            <Reveal className="case-approach__intro">
              <TechnicalLabel>ENGINEERING APPROACH</TechnicalLabel>
              <h2 id={`project-${project.number}-approach`}>
                From concept to engineering outcome.
              </h2>
              <p>{project.summary}</p>
            </Reveal>

            <div className="case-approach__panel">
              <div
                className={`case-approach__steps case-approach__steps--${stepCount}`}
              >
                {project.sections.map((section, index) => (
                  <Reveal
                    className="case-approach__step"
                    delay={index * 70}
                    key={section.id}
                  >
                    <section id={section.id}>
                      <TechnicalLabel>{section.eyebrow}</TechnicalLabel>
                      <h3>{section.title}</h3>
                      <p>{section.body}</p>

                      {section.bullets?.length ? (
                        <ul>
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="case-results-band">
            <div className="case-results-band__heading">
              <TechnicalLabel>KEY RESULTS</TechnicalLabel>
              <span>Measured project outcomes</span>
            </div>

            <div className="case-results-band__metrics">
              {project.metrics.map((metric) => (
                <div
                  className="case-results-band__metric"
                  key={`${metric.value}-${metric.label}`}
                >
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-shell case-tools">
          <TechnicalLabel>TOOLS / METHODS</TechnicalLabel>
          <div>
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
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
