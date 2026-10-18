import { TechnicalLabel } from "./technical-label";
import styles from "./project-flow.module.css";

const stages = [
  {
    name: "Define",
    detail: "Requirements and constraints",
    evidence: ["Hybrid Health", "Delivery Box"],
  },
  {
    name: "Design",
    detail: "CAD, concept selection, analysis",
    evidence: ["F-Race", "Bridge"],
  },
  {
    name: "Build",
    detail: "Prototype, fabrication, integration",
    evidence: ["Delivery Box", "NVH Rig"],
  },
  {
    name: "Test",
    detail: "Instrumentation and validation",
    evidence: ["Bosch", "NVH Rig"],
  },
  {
    name: "Analyze",
    detail: "Data, failure modes, interpretation",
    evidence: ["Bosch", "Delivery Box"],
  },
  {
    name: "Improve",
    detail: "Iteration, corrective action, optimization",
    evidence: ["Bridge", "Hybrid Health"],
  },
];

export function EngineeringProcess() {
  return (
    <section className={styles.process} id="engineering-process" aria-labelledby="process-title">
      <div className="site-shell">
        <div className={styles.processHeader}>
          <div>
            <TechnicalLabel>ENGINEERING PROCESS</TechnicalLabel>
            <h2 id="process-title">
              From Requirements<br />
              to <span>Real-World Results.</span>
            </h2>
          </div>

          <p>
            A repeatable engineering process applied across different projects — from defining requirements to testing, analysis, and continuous improvement.
          </p>

          <span className={styles.processCount}>06 STAGES / APPLIED ACROSS PROJECTS</span>
        </div>

        <ol className={styles.processGrid}>
          {stages.map((stage, index) => (
            <li className={styles.stage} key={stage.name}>
              <div className={styles.stageHead}>
                <span className={styles.stageNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.name}</h3>
              </div>

              <p className={styles.stageDetail}>{stage.detail}</p>

              <div className={styles.stageVisual} aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
                <i />
                <i />
              </div>

              <span className={styles.stageEvidenceLabel}>Example projects</span>
              <div className={styles.evidenceChips}>
                {stage.evidence.map((item) => <span key={item}>{item}</span>)}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
