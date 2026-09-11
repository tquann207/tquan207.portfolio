import { About } from "./about";
import { Capabilities } from "./capabilities";
import { EngineeringProcess } from "./engineering-process";
import { Experience } from "./experience";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Leadership } from "./leadership";
import { Navbar } from "./navbar";
import { ProjectOverview } from "./project-overview";

export function PortfolioHome() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Experience />
        <ProjectOverview />
        <EngineeringProcess />
        <Capabilities />
        <Leadership />
        <About />
      </main>
      <Footer />
    </>
  );
}
