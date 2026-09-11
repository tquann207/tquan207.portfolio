import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ProjectCollection } from "./project-collection";

export function ProjectsArchive() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="project-collection section-space" tabIndex={-1}>
        <ProjectCollection headingLevel={1} />
      </main>
      <Footer />
    </>
  );
}
