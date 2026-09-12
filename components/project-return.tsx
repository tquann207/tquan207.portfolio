"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ActionIcon } from "./action-icon";
import { withBasePath } from "@/content/site-config";

export function ProjectReturnLink({ id }: { id?: string }) {
  return (
    <a className="project-return-link" href={withBasePath("/#projects")} id={id}>
      <span aria-hidden="true"><ActionIcon name="home" /></span> Back to portfolio
    </a>
  );
}

export function ProjectReturnBar() {
  const [bottomVisible, setBottomVisible] = useState(false);
  const bar = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setBottomVisible(false);
    const bottomLink = document.getElementById("project-return-bottom-link");
    if (!bottomLink || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      if (entry.isIntersecting && bar.current?.contains(document.activeElement)) {
        bottomLink.focus({ preventScroll: true });
      }
      setBottomVisible(entry.isIntersecting);
    }, { rootMargin: "-72px 0px 0px 0px", threshold: 0 });
    observer.observe(bottomLink);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav ref={bar} className="project-return-bar" aria-label="Return to portfolio" data-hidden={bottomVisible} aria-hidden={bottomVisible || undefined} inert={bottomVisible}>
      <div className="site-shell"><ProjectReturnLink /></div>
    </nav>
  );
}
