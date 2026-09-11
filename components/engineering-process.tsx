import Link from "next/link";
import { TechnicalLabel } from "./technical-label";

const stages = [
  ["Define", "Requirements and acceptance criteria", "Hybrid Health Supply Network", "/projects/hybrid-health-supply-network/#requirements"],
  ["Design", "CAD, concept selection, analysis", "F-Race drawings & FEA support", "/projects/f-race/#engineering-process"],
  ["Build", "Fabrication and system integration", "Smart Delivery Box enclosure", "/projects/smart-delivery-box/#build"],
  ["Test", "Test setup and measurements", "Smart Delivery Box validation", "/projects/smart-delivery-box/#validation"],
  ["Analyze", "Interpret data and failure behavior", "Bosch testing & reporting", "/#experience"],
  ["Improve", "Revise and test again", "Bridge design iterations", "/projects/bridge-building-competition/#iteration"],
];

export function EngineeringProcess() {
  return (
    <section className="process-section section-space" aria-labelledby="process-title">
      <div className="site-shell">
        <div className="section-heading"><TechnicalLabel>ENGINEERING PROCESS / 06 STAGES</TechnicalLabel><h2 id="process-title">From requirements<br />to the next revision.</h2></div>
        <ol className="process-grid">
          {stages.map(([name, detail, evidence, href], index) => <li key={name}>
            <span className="process-number">{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{detail}</p><Link href={href}>{evidence} <span aria-hidden="true">↗</span></Link>
          </li>)}
        </ol>
      </div>
    </section>
  );
}
