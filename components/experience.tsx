import { boschMetrics } from "@/content/site";
import { MediaPlaceholder } from "./media-placeholder";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function Experience() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="site-shell">
        <Reveal className="experience-heading">
          <TechnicalLabel tone="inverse">EXPERIENCE / 01</TechnicalLabel>
          <div className="experience-brand">
            <h2 id="experience-title" className="sr-only">Bosch Automotive R&amp;D Center Vietnam</h2>
            <div className="experience-logo-card">
              <img src="/brands/bosch-logo.png" alt="Bosch" />
            </div>
            <p>COMPONENTS &amp; CONNECTOR ENGINEERING DEPARTMENT</p>
          </div>
          <div className="experience-role"><strong>Testing &amp; Validation Engineer Intern</strong><span>June 2026 — Present</span><span>Ho Chi Minh City, Vietnam</span></div>
        </Reveal>
        <Reveal className="experience-metrics" delay={80}>
          {boschMetrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </Reveal>
        <div className="experience-body">
          <Reveal className="experience-media"><MediaPlaceholder label="VALIDATION MEDIA" hint="Approved public image required" project="BOSCH / EXPERIENCE 01" /></Reveal>
          <Reveal className="experience-copy" delay={120}>
            <p className="experience-lead">Automotive connector validation across mechanical/electrical, sealing, durability/cycle, and chamber testing.</p>
            <ul>
              <li>Executed 5+ validation procedures on 300+ connector samples according to USCAR-2, LV214, and JOEM specifications.</li>
              <li>Prepared and loaded 300+ samples into thermal, humidity, and thermal-shock chambers across 6+ test programs.</li>
              <li>Verified fixture configuration, chamber conditions, and acceptance criteria according to each test plan.</li>
              <li>Supported 40+ pass/fail reports and communicated validation findings and failure modes across testing, design, and project-management teams.</li>
            </ul>
            <p className="confidential-note">PUBLIC SUMMARY / CONFIDENTIAL TEST DETAILS EXCLUDED</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
