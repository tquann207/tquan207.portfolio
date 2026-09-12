import Link from "next/link";
import { ActionIcon } from "@/components/action-icon";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="not-found site-shell">
      <span>ERROR / 404</span>
      <h1>Project not found.</h1>
      <Link className="button button--dark" href="/">Return home <ActionIcon name="home" /></Link>
    </main>
  );
}
