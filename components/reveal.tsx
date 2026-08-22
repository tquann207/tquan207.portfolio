"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";

type RevealProps = { children: React.ReactNode; className?: string; delay?: number };

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.style.opacity = "1";
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      anime({ targets: node, opacity: [0, 1], translateY: [18, 0], duration: 720, delay, easing: "easeOutExpo" });
      observer.disconnect();
    }, { threshold: 0.16 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
