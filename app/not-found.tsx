import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found site-shell">
      <span>ERROR / 404</span>
      <h1>Project not found.</h1>
      <Link className="button button--dark" href="/">Return home →</Link>
    </main>
  );
}
