import { profile } from "@/content/site";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="site-shell about-layout">
        <Reveal className="about-aside">
          <TechnicalLabel>ABOUT / ENGINEERING MOTIVATION</TechnicalLabel>
          <dl>
            <div><dt>Education</dt><dd>{profile.degree}<br />{profile.university}</dd></div>
            <div><dt>Expected</dt><dd>{profile.graduation}</dd></div>
            <div><dt>GPA</dt><dd>{profile.gpa}</dd></div>
            <div><dt>Base</dt><dd>{profile.location}</dd></div>
          </dl>
        </Reveal>
        <Reveal className="about-copy" delay={80}>
          <h2 id="about-title">I care about what happens when a design meets the physical world.</h2>
          <div className="about-prose">
            <p>Growing up in Vietnam, a motorcycle crash made product safety personal. It pushed me to look beyond the object itself and ask how vehicles, infrastructure, protection systems, and human behavior interact.</p>
            <p>That perspective now shapes how I approach mechanical engineering: define the requirement, build the system, measure what actually happens, document failure, and use the result to make the next version better.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
