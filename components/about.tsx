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
          <h2 id="about-title">Designing for the physical world.</h2>
          <div className="about-prose">
            <p>Growing up in Vietnam, a motorcycle crash made product safety personal. That experience shaped my interest in automotive systems, testing and validation, and physical product development.</p>
            <p>At the University of Cincinnati, I am developing that interest through mechanical engineering. My approach is to define the requirement, design and build, test, analyze the result, and improve the next version.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
