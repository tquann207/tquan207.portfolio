import { ProjectCollection } from "./project-collection";
import styles from "./project-flow.module.css";

export function ProjectOverview() {
  return (
    <section className={`${styles.projects} project-collection`} id="projects" aria-labelledby="project-overview-title">
      <ProjectCollection />
    </section>
  );
}
