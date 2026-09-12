import { ActionIcon } from "./action-icon";
import { withBasePath } from "@/content/site-config";

export function ProjectReturnLink() {
  return (
    <a className="button button--line project-return-link" href={withBasePath("/#projects")}>
      <span aria-hidden="true"><ActionIcon name="home" /></span> Back to portfolio
    </a>
  );
}

export function ProjectReturnBar() {
  return (
    <nav className="project-return-bar" aria-label="Return to portfolio">
      <div className="site-shell"><ProjectReturnLink /></div>
    </nav>
  );
}
