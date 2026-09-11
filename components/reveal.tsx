import type { ReactNode } from "react";

// Content stays available in server-rendered HTML, including without JavaScript.
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}
