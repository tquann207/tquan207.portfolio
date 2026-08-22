import { projects } from "@/content/site";
import { About } from "./about";
import { Capabilities } from "./capabilities";
import { EngineeringProcess } from "./engineering-process";
import { Experience } from "./experience";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Leadership } from "./leadership";
import { Navbar } from "./navbar";
import { ProjectFeature } from "./project-feature";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function PortfolioHome() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <section className="selected-work" id="projects" aria-labelledby="selected-work-title">
          <div className="site-shell">
            <Reveal className="section-intro"><TechnicalLabel>SELECTED ENGINEERING WORK / {String(projects.length).padStart(2, "0")}</TechnicalLabel><h2 id="selected-work-title">Evidence over<br />decoration.</h2><p>Projects organized around requirements, physical builds, measurement, competition results, and iteration.</p></Reveal>
            <div className="project-list">{projects.map((project, index) => <ProjectFeature project={project} reverse={index % 2 === 1} key={project.slug} />)}</div>
          </div>
        </section>
        <EngineeringProcess />
        <Capabilities />
        <About />
        <Leadership />
      </main>
      <Footer />
    </>
  );
}
