import { ActionIcon } from "./action-icon";
import { withBasePath } from "@/content/site-config";

export function ProjectReturnBar() {
  return (
    <nav className="project-return-bar" aria-label="Return to home">
      <div className="site-shell">
        <a className="project-return-link" href={withBasePath("/#projects")}>
          <ActionIcon name="home" /> Back to home
        </a>
      </div>
    </nav>
  );
}
