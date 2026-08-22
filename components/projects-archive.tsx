import { projects } from "@/content/site";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ProjectFeature } from "./project-feature";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function ProjectsArchive() {
  return (
    <>
      <Navbar />
      <main className="projects-page">
        <section className="selected-work projects-archive" aria-labelledby="projects-archive-title">
          <div className="site-shell">
            <Reveal className="projects-archive__intro">
              <TechnicalLabel>ENGINEERING WORK / {String(projects.length).padStart(2, "0")}</TechnicalLabel>
              <div>
                <h1 id="projects-archive-title">Complete<br />project archive.</h1>
                <p>Design decisions, physical builds, validation results, competition outcomes, and the role I held in each project.</p>
              </div>
            </Reveal>
            <div className="project-list">
              {projects.map((project, index) => <ProjectFeature project={project} reverse={index % 2 === 1} key={project.slug} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
