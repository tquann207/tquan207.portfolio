import Link from "next/link";
import { featuredProjects, supportingProjects, archiveProjects } from "@/content/site";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ProjectFeature } from "./project-feature";
import { TechnicalLabel } from "./technical-label";

export function ProjectsArchive() {
  return <><Navbar /><main id="main-content" className="projects-page" tabIndex={-1}><div className="site-shell">
    <header className="archive-hero"><TechnicalLabel>ENGINEERING WORK / 06 PROJECTS</TechnicalLabel><h1>Design. Build.<br /><span>Show the evidence.</span></h1><p>Mechanical design, prototypes, and validation. Recent university work comes first; earlier competition projects retain their own engineering records.</p></header>
    <section aria-labelledby="recent-projects"><h2 id="recent-projects" className="archive-section-title">Recent university projects</h2>{featuredProjects.map(p => <ProjectFeature key={p.slug} project={p} />)}</section>
    <section aria-labelledby="supporting-projects"><h2 id="supporting-projects" className="archive-section-title">Earlier design &amp; analysis</h2>{supportingProjects.map(p => <ProjectFeature key={p.slug} project={p} />)}</section>
    <section className="competition-archive" aria-labelledby="competition-title"><TechnicalLabel>COMPETITION ARCHIVE</TechnicalLabel><h2 id="competition-title">Where the building started.</h2>{archiveProjects.map(p => <article id={p.slug} className="archive-row" key={p.slug}><div><h3><Link href={`/projects/${p.slug}/`}>{p.title}</Link></h3><p>{p.timeline} · {p.role}</p></div><span>{p.metrics[0].value}</span><Link className="text-link" href={`/projects/${p.slug}/`}>View record <span aria-hidden="true">↗</span></Link></article>)}</section>
  </div></main><Footer /></>;
}
