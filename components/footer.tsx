import { ActionIcon } from "./action-icon";
import { profile } from "@/content/site";
import { withBasePath } from "@/content/site-config";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="site-shell footer-top">
        <p>Mechanical engineering student turning ideas into prototypes, test data, and better designs.</p>
        <div className="footer-contact" aria-label="Contact information">
          <span className="footer-contact__eyebrow">CONTACT / DIRECT</span>
          <div className="footer-contact__links">
  <a href={`mailto:${profile.email}`}>
    <span>Email</span>
    <strong>{profile.email}</strong>
    <b aria-hidden="true"><ActionIcon name="mail" /></b>
  </a>

  <a href={profile.linkedin} target="_blank" rel="noreferrer">
    <span>LinkedIn</span>
    <strong>linkedin.com/in/tvmquan</strong>
    <b aria-hidden="true"><ActionIcon name="link" /></b>
  </a>

  <a href={`tel:${profile.phoneHref}`}>
    <span>Phone</span>
    <strong>{profile.phone}</strong>
    <b aria-hidden="true"><ActionIcon name="phone" /></b>
  </a>

        
</div>
          <a className="footer-resume-download" href={profile.resume} download>Download résumé <span aria-hidden="true"><ActionIcon name="document" /></span></a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <div><strong>QUAN TRAN</strong><span>Mechanical Engineering<br />University of Cincinnati</span></div>
        <nav aria-label="Footer navigation">
          <a href={withBasePath("/#experience")}>Experience</a>
          <a href={withBasePath("/#projects")}>Projects</a>
        </nav>
        <div className="footer-location"><span>Cincinnati, Ohio</span><span>© {new Date().getFullYear()}</span></div>
      </div>
    </footer>
  );
}
