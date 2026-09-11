import Link from "next/link";
import { skillGroups } from "@/content/site";
import { TechnicalLabel } from "./technical-label";



export function Capabilities() {
  return <section className="capabilities-section section-space" aria-labelledby="capabilities-title"><div className="site-shell">
    <div className="section-heading"><TechnicalLabel>TECHNICAL CAPABILITIES</TechnicalLabel><h2 id="capabilities-title">Tools connected<br />to engineering work.</h2></div>
    <div className="skill-groups">{skillGroups.map((group,i) => <div className="skill-group" key={group.label}><span className="technical-label">{String(i+1).padStart(2,"0")}</span><h3>{group.label}</h3><div><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul><div className="skill-evidence">{group.links.map(([label,href]) => <Link href={href} key={label}>{label} <span aria-hidden="true">↗</span></Link>)}{!group.links.length && <p>Project-specific implementation evidence to add.</p>}</div></div></div>)}</div>
    <p className="figure-note">Project links identify documented uses. Other listed tools still need a project example; no proficiency percentages are implied.</p>
  </div></section>;
}
