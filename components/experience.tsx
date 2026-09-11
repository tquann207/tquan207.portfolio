import { boschMetrics } from "@/content/site";
import { withBasePath } from "@/content/site-config";
import { TechnicalLabel } from "./technical-label";

const workflow = [
  ["Prepare", "Interpret the test plan; configure and check the specimens."],
  ["Test", "Set up fixtures and perform the specified validation procedures."],
  ["Review", "Record measurements, abnormal behavior, and failure observations."],
  ["Report", "Document pass/fail findings for engineering review and discussion."],
];

export function Experience() {
  return (
    <section className="experience-section section-space" id="experience" aria-labelledby="experience-title">
      <div className="site-shell">
        <div className="section-heading"><TechnicalLabel>SELECTED EXPERIENCE / 01</TechnicalLabel><span className="section-note">AUTOMOTIVE / COMPONENT VALIDATION</span></div>
        <div className="experience-heading">
          <div><img className="experience-logo" src={withBasePath("/brands/bosch-logo.webp")} alt="Bosch" width="260" height="76" loading="lazy" /><h2 id="experience-title">Testing &amp; Validation<br />Engineer Intern</h2><p className="experience-employer">Bosch Automotive R&amp;D Center Vietnam</p></div>
          <div className="experience-role"><span>June 2026 — Present</span><span>Ho Chi Minh City, Vietnam</span><span>Components &amp; Connector Engineering Department</span></div>
        </div>
        <dl className="experience-metrics">{boschMetrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
        <div className="experience-body">
          <figure className="workflow-sheet">
            <figcaption><span>FIG. 01 / VALIDATION WORKFLOW</span><span>PUBLIC OVERVIEW</span></figcaption>
            <ol>{workflow.map(([title, detail], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol>
            <p className="figure-note">General methodology. No proprietary fixture geometry, customer details, or internal test data.</p>
          </figure>
          <div className="experience-copy">
            <div><h3>What I tested</h3><p>Automotive connectors: mechanical, electrical, sealing, environmental, and durability/cycle performance.</p></div>
            <div><h3>What I did</h3><p>Prepared and verified specimens, conducted validation procedures, and supported report preparation by documenting test conditions, abnormal measurements, and failure behavior. Also designed and evaluated fixture concepts.</p></div>
            <div><h3>Tools &amp; methods</h3><p>Test-plan interpretation, fixture setup, thermal/humidity/thermal-shock chamber testing, measurement analysis, and pass/fail reporting. Specification families: USCAR-2, LV214, and JOEM.</p></div>
            <div><h3>Engineering impact</h3><p>Supported specimen readiness, engineering review, troubleshooting, and corrective-action discussions. Evaluated feasible fixture concepts for new and existing setups.</p></div>
            <div><h3>Engineering perspective</h3><p>Connect the requirement, specimen configuration, measurement, and failure observation so a result can support an engineering decision.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
