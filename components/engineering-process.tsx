import { TechnicalLabel } from "./technical-label";
import styles from "./engineering-process.module.css";

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
      <div className={`site-shell ${styles.shell}`}>
        <div className={styles.intro}>
          <TechnicalLabel>ENGINEERING PROCESS</TechnicalLabel>
          <h2 id="process-title">
            Iterate<br />
            to Better<br />
            <span>Solutions.</span>
          </h2>
          <p>
            A continuous engineering cycle from requirements to validated results, with each stage feeding the next decision.
          </p>

          <div className={styles.legend} aria-label="Process legend">
            <span><i aria-hidden="true" /> Engineering process</span>
            <span><i aria-hidden="true" /> Applied across projects</span>
          </div>
        </div>

        <div className={styles.diagram} aria-label="Six-stage engineering process">
          <svg className={styles.diagramSvg} viewBox="0 0 400 400" aria-hidden="true">
            <polygon points="200,30 347,115 347,285 200,370 53,285 53,115" />
            <circle cx="200" cy="200" r="88" />
          </svg>

          <div className={styles.centerMark} aria-hidden="true">
            <span>Design · Build · Test · Improve</span>
          </div>

          {stages.map((stage, index) => (
            <div className={`${styles.node} ${styles[`node${index + 1}`]}`} key={stage.name}>
              <span className={styles.nodeButton}>{String(index + 1).padStart(2, "0")}</span>
              <strong className={styles.nodeName}>{stage.name}</strong>
              <span className={styles.nodeDetail}>{stage.detail}</span>
            </div>
          ))}
        </div>

        <aside className={styles.evidence} aria-label="Example projects at each engineering stage">
          <div className={styles.evidenceHeader}>EXAMPLE PROJECTS AT EACH STAGE</div>
          <ol className={styles.evidenceList}>
            {stages.map((stage, index) => (
              <li className={styles.evidenceRow} key={stage.name}>
                <span className={styles.evidenceIndex}>{String(index + 1).padStart(2, "0")}</span>
                <strong className={styles.evidenceName}>{stage.name}</strong>
                <div className={styles.evidenceChips}>
                  {stage.evidence.map((item) => <span key={item}>{item}</span>)}
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
