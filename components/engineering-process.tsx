import { TechnicalLabel } from "./technical-label";
import styles from "./project-flow.module.css";

const stages = [
  {
    name: "Define",
    detail: "Requirements and acceptance criteria",
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
    detail: "Instrumentation, validation, measurements",
    evidence: ["Bosch", "NVH Rig"],
  },
  {
    name: "Analyze",
    detail: "Data, failure modes, interpretation",
    evidence: ["Bosch", "NVH Rig"],
  },
  {
    name: "Improve",
    detail: "Iteration, corrective action, optimization",
    evidence: ["Bridge", "Delivery Box"],
  },
];

export function EngineeringProcess() {
  return (
    <section className={`${styles.process} process-section`} id="engineering-process" aria-labelledby="process-title">
      <div className="site-shell">
        <div className={styles.processIntro}>
          <div>
            <TechnicalLabel>ENGINEERING PROCESS / 06 STAGES</TechnicalLabel>
            <h2 id="process-title">How these projects <span>are built.</span></h2>
            <p>A repeatable engineering loop from requirements to measured results, with project evidence tied to each stage.</p>
          </div>

          <div className={styles.processContext}>
            PROCESS / EVIDENCE / ITERATION
            <strong>Different projects. The same engineering mindset.</strong>
          </div>
        </div>

        <ol className={styles.pipeline}>
          {stages.map((stage, index) => (
            <li className={styles.stage} key={stage.name}>
              <span className={styles.stageNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{stage.name}</h3>
              <p className={styles.stageDetail}>{stage.detail}</p>
              <span className={styles.stageEvidenceLabel}>Project evidence</span>
              <div className={styles.evidenceChips}>
                {stage.evidence.map((item) => <span key={item}>{item}</span>)}
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.iterationLoop}>
          <b aria-hidden="true">↺</b>
          <span>ITERATE / BETTER SOLUTIONS</span>
          <b aria-hidden="true">↻</b>
        </div>
      </div>
    </section>
  );
}
