import { profile } from "@/content/site";
import { withBasePath } from "@/content/site-config";
import { TechnicalLabel } from "./technical-label";

export function Hero() {
  return (
    <section className="hero site-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <TechnicalLabel>ENGINEERING PORTFOLIO / 2026</TechnicalLabel>
        <h1 id="hero-title" className="hero-title" aria-label="Quan Tran — Mechanical Engineering">
          <span className="hero-name">QUAN TRAN</span>
          <span>MECHANICAL</span>
          <span className="hero-title__accent">ENGINEERING</span>
        </h1>
        <p className="hero-focus">Testing &amp; validation · Mechanical design · Product development</p>
        <div className="hero-identity">
          <div className="hero-affiliation">
            <img src={withBasePath("/brands/uc-logo.webp")} width="104" height="48" alt="" />
            <div><strong>{profile.university}</strong><span>B.S. Mechanical Engineering · Expected {profile.graduation}</span></div>
          </div>
          <div className="hero-affiliation">
            <img src={withBasePath("/brands/bosch-logo.webp")} width="104" height="32" alt="" />
            <div><strong>Testing &amp; Validation Engineer Intern</strong><span>Bosch Automotive R&amp;D Center Vietnam</span></div>
          </div>
        </div>
        <div className="hero-actions">
          <a className="button button--dark" href="#projects">View selected projects <span aria-hidden="true">↘</span></a>
          <a className="button button--line" href={profile.resume} download>Download résumé <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-contact">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a>
          <a href={`mailto:${profile.email}`}>Email Quan <span aria-hidden="true">↗</span></a>
          <span>SolidWorks CSWP · Summer 2027 co-op</span>
        </div>
      </div>
      <figure className="hero-visual">
        <div className="portrait-panel">
          {profile.profileImage ? <img src={profile.profileImage} srcSet={profile.profileImageSrcSet} sizes="(max-width: 760px) 170px, (max-width: 900px) 232px, 320px" alt="Portrait of Quan Tran" width="600" height="800" fetchPriority="high" /> : null}
        </div>
        <figcaption><span>DESIGN / BUILD / TEST</span><span>QUAN TRAN / 01</span></figcaption>
      </figure>
    </section>
  );
}
