import { ProjectCollection } from "./project-collection";
import styles from "./project-flow.module.css";

export function ProjectOverview() {
  return (
    <section className={`${styles.projects} project-collection`} id="projects" aria-labelledby="project-overview-title">
      <ProjectCollection />
      <div className={`${styles.connector} site-shell`} aria-hidden="true">
        <span>Project evidence becomes the input for the engineering process.</span>
        <span className={styles.connectorMark}>PROJECTS → PROCESS</span>
      </div>
    </section>
  );
}
