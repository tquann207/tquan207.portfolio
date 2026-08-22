import { skillGroups } from "@/content/site";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function Capabilities() {
  return (
    <section className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="site-shell">
        <Reveal className="capabilities-intro">
          <TechnicalLabel>TECHNICAL CAPABILITIES / VERIFIED</TechnicalLabel>
          <h2 id="capabilities-title">Tools organized by what they help me do.</h2>
        </Reveal>
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <Reveal className="skill-group" delay={index * 45} key={group.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.label}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
