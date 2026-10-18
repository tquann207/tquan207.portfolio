"use client";

import { useEffect, useState } from "react";
import { projects, type Project } from "@/content/site";
import { TechnicalLabel } from "./technical-label";
import styles from "./interactive.module.css";
import flowStyles from "./project-flow.module.css";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const { year, category, highlight } = project.overview;

  return (
    <article id={project.slug}>
      <button className={styles.projectCard} type="button" onClick={() => onOpen(project)}>
        <span className={styles.projectCardTop}>
          <span className={styles.projectNumber}>PROJECT {project.number}</span>
          <time className={styles.projectYear} dateTime={year}>{year}</time>
        </span>

        <span className={flowStyles.projectIdentity}>
          <span className={styles.projectCategory}>{category}</span>
          <strong className={styles.projectTitle}>{project.title}</strong>
          <span className={styles.projectRole}>{project.role}</span>
        </span>

        <span className={styles.projectCardBottom}>
          <span className={styles.projectHighlight}>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </span>
          <span className={styles.projectOpen}>Open project +</span>
        </span>
      </button>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby={`project-modal-${project.slug}`}>
        <header className={styles.modalHeader}>
          <div>
            <span className={styles.projectNumber}>PROJECT {project.number} / {project.overview.year}</span>
            <h3 id={`project-modal-${project.slug}`}>{project.title}</h3>
          </div>
          <button className={styles.close} type="button" onClick={onClose} aria-label="Close project details">×</button>
        </header>

        <div className={styles.modalBody}>
          <p className={styles.modalLead}>{project.summary}</p>

          <div className={styles.modalMeta}>
            <span>{project.role}</span>
            <span>{project.timeline}</span>
            <span>{project.location}</span>
            {project.teamSize ? <span>{project.teamSize}</span> : null}
            {project.categories.map((category) => <span key={category}>{category}</span>)}
          </div>

          <div className={styles.modalMetrics}>
            {project.metrics.map((metric) => (
              <div className={styles.modalMetric} key={`${metric.value}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.modalSections}>
            {project.sections.map((section) => (
              <section className={styles.modalSection} key={section.id}>
                <span className={styles.projectNumber}>{section.eyebrow}</span>
                <h4>{section.title}</h4>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>

          <div className={styles.modalTools} aria-label="Tools and methods">
            {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ProjectCollection({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const years = projects.map((project) => project.overview.year).sort();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="site-shell">
      <header className="project-collection__heading">
        <div>
          <TechnicalLabel>ENGINEERING PROJECTS &amp; COMPETITIONS</TechnicalLabel>
          <Heading className="project-collection__title" id="project-overview-title">Project collection.</Heading>
        </div>
        <span className="project-collection__count" aria-label={`${projects.length} projects`}>
          {String(projects.length).padStart(2, "0")}
        </span>
      </header>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={setActiveProject} />
        ))}
      </div>

      <div className="project-collection__footer">
        <span>CLICK A PROJECT TO OPEN DETAILS</span>
        <span>{years[0]} — {years.at(-1)}</span>
      </div>

      {activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}
    </div>
  );
}
