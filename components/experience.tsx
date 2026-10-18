import { bearcatHighlights, boschMetrics } from "@/content/site";
import { withBasePath } from "@/content/site-config";
import { TechnicalLabel } from "./technical-label";

const workflow = [
  ["Prepare", "Set up and verify connector specimens and test-specific fixtures."],
  ["Configure", "Configure measurement equipment, test systems, and environmental chambers for controlled execution."],
  ["Test", "Operate the required test systems and chambers and collect data under controlled conditions."],
  ["Analyze", "Review abnormal measurements and failure behavior across validation tests."],
  ["Report", "Document pass/fail findings for engineering review, troubleshooting, and corrective-action discussions."],
];

export function Experience() {
  return (
    <section className="experience-section section-space" id="experience" aria-labelledby="experience-title">
      <div className="site-shell">
        <div className="section-heading">
          <TechnicalLabel>ENGINEERING EXPERIENCE / 02 ROLES</TechnicalLabel>
          <span className="section-note">AUTOMOTIVE / FORMULA SAE</span>
        </div>

        <div className="experience-heading">
          <div>
            <img
              className="experience-logo"
              src={withBasePath("/brands/bosch-logo.webp")}
              alt="Bosch"
              width="260"
              height="76"
              loading="lazy"
            />
            <h2 id="experience-title">Testing &amp; Validation<br />Engineer Intern</h2>
            <p className="experience-employer">Bosch Automotive R&amp;D Center Vietnam</p>
          </div>
          <div className="experience-role">
            <span>June 2026 — Present</span>
            <span>Ho Chi Minh City, Vietnam</span>
            <span>Components &amp; Connector Engineering</span>
          </div>
        </div>

        <dl className="experience-metrics">
          {boschMetrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>

        <div className="experience-body">
          <figure className="workflow-sheet">
            <figcaption>
              <span>FIG. 01 / END-TO-END VALIDATION WORKFLOW</span>
              <span>PUBLIC OVERVIEW</span>
            </figcaption>
            <ol>
              {workflow.map(([title, detail], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="figure-note">
              General methodology. No proprietary fixture geometry, customer details, or internal test data.
            </p>
          </figure>

          <div className="experience-copy">
            <div>
              <h3>What I tested</h3>
              <p>
                Automotive connectors across mechanical, electrical, sealing, environmental, and durability testing per USCAR-2, LV214, and JOEM specifications.
              </p>
            </div>
            <div>
              <h3>End-to-end laboratory execution</h3>
              <p>
                Handled specimen setup, fixture preparation, measurement equipment configuration, test-system and environmental-chamber operation, and controlled-condition data collection across 6+ customer-specific validation projects.
              </p>
            </div>
            <div>
              <h3>Failure analysis &amp; reporting</h3>
              <p>
                Analyzed abnormal measurements and failure behavior and documented findings in 10+ pass/fail reports supporting engineering review, troubleshooting, and corrective-action discussions.
              </p>
            </div>
            <div>
              <h3>Kelvin resistance measurement improvement</h3>
              <p>
                Evaluated the existing 4-wire Kelvin resistance measurement method and alternative approaches, compared repeatability against the baseline setup, and developed adjustable fixture concepts to improve clamp consistency, contact positioning, and measurement-length control.
              </p>
            </div>
            <div>
              <h3>Engineering perspective</h3>
              <p>
                Connect the requirement, specimen configuration, measurement system, controlled test conditions, and failure observation so each result can support an engineering decision.
              </p>
            </div>
          </div>
        </div>

        <div
          className="experience-heading"
          style={{ marginTop: "72px", paddingTop: "48px", borderTop: "1px solid var(--border)" }}
        >
          <div>
            <TechnicalLabel>SELECTED EXPERIENCE / 02</TechnicalLabel>
            <h2 style={{ marginTop: "20px" }}>Engineering Team Member</h2>
            <p className="experience-employer">Bearcat Electric Racing — University of Cincinnati</p>
          </div>
          <div className="experience-role">
            <span>Aug 2026 — Present</span>
            <span>Cincinnati, Ohio</span>
            <span>Mechanical design / vehicle integration</span>
          </div>
        </div>

        <div className="experience-body">
          <figure className="workflow-sheet">
            <figcaption>
              <span>FIG. 02 / CURRENT ENGINEERING WORKSTREAMS</span>
              <span>BEARCAT ELECTRIC RACING</span>
            </figcaption>
            <ol>
              {bearcatHighlights.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="figure-note">
              Current Formula SAE engineering work spanning test-equipment concepts, vehicle service hardware, and subsystem packaging.
            </p>
          </figure>

          <div className="experience-copy">
            <div>
              <h3>High-speed test concept</h3>
              <p>
                Motor test-bench design work considers fixture layout, safety mechanisms, and controlled operation up to the motor’s 20,000 rpm maximum speed.
              </p>
            </div>
            <div>
              <h3>Structural service hardware</h3>
              <p>
                Quick-jack redesign work evaluates geometry, mechanical interfaces, and load paths for stable lifting of the 185 kg vehicle.
              </p>
            </div>
            <div>
              <h3>Vehicle integration</h3>
              <p>
                Brake-line routing is coordinated with drivetrain members to resolve component placement, packaging, and subsystem-integration constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
