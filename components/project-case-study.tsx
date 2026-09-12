import { ActionIcon } from "./action-icon";
import Link from "next/link";
import { projects, type Project } from "@/content/site";
import { getCaseDetails } from "@/content/case-studies";
import { withBasePath } from "@/content/site-config";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ProjectEvidence } from "./project-evidence";
import { ProjectMediaSlider } from "./project-media-slider";
import { ProjectReturnBar } from "./project-return";
import { TechnicalLabel } from "./technical-label";

const sections = [
  ["problem", "Problem"], ["requirements", "Requirements"], ["my-role", "My role"],
  ["engineering-process", "Engineering process"], ["design-decisions", "Design decisions"],
  ["build", "Build"], ["validation", "Validation"], ["results", "Results"],
  ["iteration", "Failure / iteration"], ["takeaway", "Engineering takeaway"],
];

function CasePoints({ items, id }: { items: string[]; id?: string }) {
  return <ul className="case-points" id={id}>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>;
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const detail = getCaseDetails(project);
  const next = projects[(projects.findIndex(p => p.slug === project.slug) + 1) % projects.length];
  const media = project.media?.filter(item => item.src) ?? [];
  const text: Record<string, string[] | undefined> = detail ? {
    problem: detail.problem,
    "my-role": detail.ownership,
    "design-decisions": detail.decisions,
    build: detail.build,
    validation: detail.validation,
    iteration: detail.iteration,
    takeaway: detail.takeaway,
  } : {};
  return <><Navbar /><ProjectReturnBar /><main id="main-content" className="case-study" tabIndex={-1}>
    <header className="case-hero site-shell">
      <div className="case-hero__topline"><TechnicalLabel>{detail ? "ENGINEERING CASE STUDY" : "COMPETITION RECORD"} / {project.number}</TechnicalLabel></div>
      <h1>{project.title}</h1><p className="case-summary">{project.summary}</p>
      <div className="project-categories">{project.categories.map(c => <span key={c}>{c}</span>)}</div>
      <dl className="case-metadata"><div><dt>My role</dt><dd>{project.role}</dd></div>{project.teamSize && <div><dt>Team</dt><dd>{project.teamSize}</dd></div>}<div><dt>Timeline</dt><dd>{project.timeline}</dd></div><div><dt>Location</dt><dd>{project.location}</dd></div></dl>
    </header>
    {media.length > 0 && <section className="case-media site-shell" aria-label="Project images"><ProjectMediaSlider projectNumber={project.number} slides={media.map(item => ({src:withBasePath(item.src),alt:item.alt,label:item.label ?? project.title}))} /></section>}
    {detail ? <div className="case-layout site-shell">
      <details className="case-mobile-index"><summary>Contents · 10 sections</summary><nav aria-label="Case study sections (mobile)">{sections.map(([id,label],i) => <a href={`#${id}`} key={id}><span>{String(i + 1).padStart(2,"0")}</span>{label}</a>)}</nav></details>
      <nav className="case-index" aria-label="Case study sections"><span className="technical-label">CONTENTS / 10</span>{sections.map(([id,label],i) => <a href={`#${id}`} key={id}><span>{String(i + 1).padStart(2,"0")}</span>{label}</a>)}</nav>
      <div className="case-sections">{sections.map(([id,label],i) => <section id={id} key={id} className="case-section" aria-labelledby={`title-${id}`}>
        <TechnicalLabel>{String(i + 1).padStart(2,"0")} / {label}</TechnicalLabel><h2 id={`title-${id}`}>{label}</h2>
        {text[id] && <CasePoints items={text[id]} id={id === "problem" && project.sections.some(s => s.id === "challenge") ? "challenge" : undefined} />}
        {id === "requirements" && <ProjectEvidence project={project} />}
        {id === "engineering-process" && <div className="case-process">{project.sections.filter(s => s.id !== "result" && s.id !== "challenge").map(s => <div id={sections.some(([id]) => id === s.id) ? undefined : s.id} key={s.id}><h3>{s.title}</h3><CasePoints items={s.body} /></div>)}</div>}
        {id === "results" && <><dl className="metric-grid">{project.metrics.map(m => <div className="metric" key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd><span>{m.kind === "test" ? "Test scope" : m.kind === "reported" ? "Reported result" : "Project context"}</span></div>)}</dl>{project.sections.filter(s => s.id === "result").map(s => <CasePoints key={s.id} items={s.body} />)}<p className="documentation-note">{detail.resultNote}</p></>}
        {id === "my-role" && project.role !== "Personal Project" && <p className="documentation-note">Ownership summary follows the current project record and downloadable résumé. Annotated artifacts should identify the parts and decisions I owned alongside teammates’ deliverables.</p>}
        {id === "takeaway" && <details className="evidence-needed"><summary>Supporting evidence to add</summary><CasePoints items={detail.evidence} /></details>}
      </section>)}</div>
    </div> : <div className="site-shell archive-record"><h2>Competition record</h2>{project.sections.map(s => <CasePoints id={s.id} key={s.id} items={s.body} />)}<dl className="case-metadata">{project.metrics.map(m => <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>)}</dl><p className="documentation-note">Design requirements, individual contributions, build records, and test evidence have not yet been provided. This page preserves the existing competition record.</p></div>}
    <section className="site-shell case-tools" aria-label="Tools and methods"><TechnicalLabel>TOOLS / METHODS</TechnicalLabel><div>{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section>
    <div className="site-shell"><Link className="next-project" href={`/projects/${next.slug}/`}><span>NEXT PROJECT / {next.number}</span><strong>{next.title}</strong><span aria-hidden="true"><ActionIcon name="next" /></span></Link></div>
  </main><Footer /></>;
}
