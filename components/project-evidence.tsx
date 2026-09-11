import type { Project } from "@/content/site";
import { getCaseDetails } from "@/content/case-studies";

export function ProjectEvidence({ project, compact = false }: { project: Project; compact?: boolean }) {
  const detail = getCaseDetails(project);
  const rows = detail?.requirements.slice(0, compact ? 3 : undefined) ?? [];
  return (
    <figure className={`evidence-sheet${compact ? " evidence-sheet--compact" : ""}`}>
      <figcaption><span>FIG. {project.number} / {compact ? "ENGINEERING SNAPSHOT" : "REQUIREMENTS & TEST SCOPE"}</span><span>DOCUMENTATION</span></figcaption>
      {rows.length ? <dl className="evidence-rows">{rows.map(row => <div key={row.check}><dt>{row.check}</dt><dd>{row.specification}{!compact && <small>{row.basis}</small>}</dd></div>)}</dl> : <p>{project.summary}</p>}
      <div className="evidence-sheet__tools">{project.tools.slice(0, 3).map(tool => <span key={tool}>{tool}</span>)}</div>
      <p className="figure-note">{compact ? "Project record summary · supporting artifacts to add" : "Reconstructed from the existing project description; not an original test report. Test conditions are not pass/fail results."}</p>
    </figure>
  );
}
