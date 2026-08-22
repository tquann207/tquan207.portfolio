import Link from "next/link";
import type { Project } from "@/content/site";
import { projects } from "@/content/site";
import { Footer } from "./footer";
import { MediaPlaceholder } from "./media-placeholder";
import { Navbar } from "./navbar";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

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
          <div className="case-categories">{project.categories.map((category) => <span key={category}>{category}</span>)}</div>
          <dl className="case-metadata">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            {project.teamSize ? <div><dt>Team</dt><dd>{project.teamSize}</dd></div> : null}
            <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
            <div><dt>Location</dt><dd>{project.location}</dd></div>
          </dl>
        </header>

        <div className="site-shell case-hero-media"><MediaPlaceholder label={project.sections[0]?.mediaLabel ?? "PROJECT MEDIA"} hint="Primary case-study asset required" project={`PROJECT / ${project.number}`} /></div>

        <div className="site-shell case-layout">
          <aside className="case-index">
            <TechnicalLabel>CASE STUDY / CONTENT</TechnicalLabel>
            <nav aria-label="Case study sections">{project.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.eyebrow}</a>)}</nav>
          </aside>
          <div className="case-sections">
            {project.sections.map((section) => (
              <section id={section.id} className="case-section" key={section.id}>
                <Reveal>
                  <TechnicalLabel>{section.eyebrow}</TechnicalLabel>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                </Reveal>
                <Reveal delay={80}><MediaPlaceholder label={section.mediaLabel ?? "PROJECT MEDIA"} hint={section.mediaHint} project={`FIG. / ${project.number}.${section.eyebrow.slice(0, 2)}`} /></Reveal>
              </section>
            ))}
            <section className="case-tools">
              <TechnicalLabel>TOOLS / METHODS</TechnicalLabel>
              <div>{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </section>
          </div>
        </div>

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
