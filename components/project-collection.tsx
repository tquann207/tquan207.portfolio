"use client";

import { useEffect, useState } from "react";
import { projects, type Project } from "@/content/site";
import { TechnicalLabel } from "./technical-label";
import styles from "./interactive.module.css";
import flowStyles from "./project-flow.module.css";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const { year, category, highlight } = project.overview;
  const media = project.media?.[0];

  return (
    <article className={flowStyles.projectItem} id={project.slug}>
      <button
        className={`${styles.projectCard} ${flowStyles.projectCard}`}
        type="button"
        onClick={() => onOpen(project)}
      >
        <span className={flowStyles.projectMedia} aria-hidden={media ? undefined : true}>
          {media ? (
            <img src={media.src} alt={media.alt} />
          ) : (
            <span className={flowStyles.projectMediaFallback}>
              <span>{project.number}</span>
              <b>{project.shortTitle}</b>
              <small>{category}</small>
            </span>
          )}
        </span>

        <span className={flowStyles.projectMetaRow}>
          <span className={flowStyles.projectNumber}>PROJECT {project.number}</span>
          <time dateTime={year}>{year}</time>
        </span>

        <span className={flowStyles.projectIdentity}>
          <span className={flowStyles.projectCategory}>{category}</span>
          <strong className={flowStyles.projectTitle}>{project.title}</strong>
          <span className={flowStyles.projectRole}>{project.role}</span>
        </span>

        <span className={flowStyles.projectBottom}>
          <span className={flowStyles.projectHighlight}>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </span>
          <span className={flowStyles.projectOpen} aria-hidden="true">→</span>
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
      <header className={flowStyles.collectionHeader}>
        <div className={flowStyles.collectionTitleBlock}>
          <TechnicalLabel>FEATURED WORK</TechnicalLabel>
          <Heading id="project-overview-title">
            Real Projects.<br />
            <span>Real Impact.</span>
          </Heading>
        </div>

        <p className={flowStyles.collectionIntro}>
          A mix of mechanical design, testing, product development, and competition work that shows how I turn engineering problems into measurable results.
        </p>

        <div className={flowStyles.collectionStats} aria-label="Project portfolio summary">
          <span><strong>{projects.length}</strong><small>Projects</small></span>
          <span><strong>6</strong><small>Engineering stages</small></span>
          <span><strong>∞</strong><small>Real-world skills</small></span>
        </div>
      </header>

      <div className={flowStyles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={setActiveProject} />
        ))}
      </div>

      <div className={flowStyles.collectionFooter}>
        <span>{years[0]} — {years.at(-1)}</span>
        <span>Click any project to open details</span>
      </div>

      {activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}
    </div>
  );
}
