import { ActionIcon } from "./action-icon";
import { profile } from "@/content/site";
import { Reveal } from "./reveal";
import { TechnicalLabel } from "./technical-label";

export function ResumeCta() {
  return (
    <section className="resume-cta">
      <Reveal className="site-shell resume-cta__inner">
        <TechnicalLabel tone="inverse">DOCUMENT / LATEST RESUME</TechnicalLabel>
        <h2><span>Projects.</span><span>Experience.</span><span>Results.</span></h2>
        <a className="button button--accent" href={profile.resume} download="Quan Tran Resume.pdf">Download resume <span aria-hidden="true"><ActionIcon name="document" /></span></a>
      </Reveal>
    </section>
  );
}
