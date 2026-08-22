import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

const awards = [
  "UC Global Scholarship / International Outreach Award — 2025",
  "First Prize / Bridge Building — 2023",
  "Top 4 / Water Jet Car — 2022",
  "Top 8 / City-Level Water Rocket — 2021",
  "Innovation Recognition / F-Race STEM — 2024",
];

export function Leadership() {
  return (
    <section className="leadership-section" aria-labelledby="leadership-title">
      <div className="site-shell leadership-layout">
        <Reveal className="leadership-story">
          <TechnicalLabel>LEADERSHIP / STEM CLUB</TechnicalLabel>
          <h2 id="leadership-title">Technical leadership before the prototype reaches the table.</h2>
          <p className="leadership-meta">Head of Technical Division / Nguyen Huu Huan High School / Sep 2023 — May 2025</p>
          <p>Led eight technical projects, mentored 40+ members in CAD, and supervised six teams delivering 15+ prototypes for city-level competitions. Established repeatable build-readiness and testing workflows that supported 120+ contestants.</p>
        </Reveal>
        <Reveal className="awards-list" delay={100}>
          <TechnicalLabel>AWARDS / SELECTED</TechnicalLabel>
          <ol>{awards.map((award, index) => <li key={award}><span>{String(index + 1).padStart(2, "0")}</span>{award}</li>)}</ol>
        </Reveal>
      </div>
    </section>
  );
}
