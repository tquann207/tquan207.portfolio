import { boschMetrics } from "@/content/site";
import { withBasePath } from "@/content/site-config";
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
            <h2 id="experience-title" className="sr-only">
              Bosch Automotive R&amp;D Center Vietnam
            </h2>

            <div className="experience-logo-card">
              <img src={withBasePath("/brands/bosch-logo.png")} alt="Bosch" />
            </div>

            <p>COMPONENTS &amp; CONNECTOR ENGINEERING DEPARTMENT</p>
          </div>

          <div className="experience-role">
            <strong>Testing &amp; Validation Engineer Intern</strong>
            <span>June 2026 — Present</span>
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
        </Reveal>

        <Reveal className="experience-metrics" delay={80}>
          {boschMetrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="experience-body">
          <Reveal className="experience-media">
            <MediaPlaceholder
              label="VALIDATION MEDIA"
              hint="Approved public image required"
              project="BOSCH / EXPERIENCE 01"
            />
          </Reveal>

          <Reveal className="experience-copy" delay={120}>
            <p className="experience-lead">
              Automotive connector validation covering mechanical, electrical, sealing,
              environmental, and durability/cycle testing.
            </p>

            <ul>
              <li>
                Conducted 5+ automotive connector validation procedures on 300+ samples,
                covering mechanical, electrical, sealing, environmental, and
                durability/cycle testing per USCAR-2, LV214, and JOEM specifications.
              </li>

              <li>
                Prepared and verified connector test specimens across 6+ validation
                programs, ensuring test-specific sample configuration and readiness
                before testing.
              </li>

              <li>
                Compiled test results, abnormal measurements, and failure behavior into
                15+ pass/fail reports to support engineering review, troubleshooting,
                and corrective-action discussions.
              </li>

              <li>
                Designed and evaluated test-fixture concepts to improve existing
                validation setups and develop feasible solutions for new test procedures
                without established fixtures.
              </li>
            </ul>

            <p className="confidential-note">
              PUBLIC SUMMARY / CONFIDENTIAL TEST DETAILS EXCLUDED
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
