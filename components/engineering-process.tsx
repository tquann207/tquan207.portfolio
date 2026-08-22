"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";
import { TechnicalLabel } from "./technical-label";

const stages = [
  { name: "Define", detail: "Requirements / constraints / acceptance criteria" },
  { name: "Design", detail: "CAD / concept selection / analysis" },
  { name: "Build", detail: "Prototype / fabrication / integration" },
  { name: "Test", detail: "Instrumentation / validation / measurements" },
  { name: "Analyze", detail: "Data / failure modes / interpretation" },
  { name: "Improve", detail: "Iteration / corrective action / optimization" },
];

export function EngineeringProcess() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      anime.timeline({ easing: "easeOutExpo" })
        .add({ targets: ".process-path", strokeDashoffset: [anime.setDashoffset, 0], duration: 1150 })
        .add({ targets: ".process-stage", opacity: [0, 1], translateX: [-12, 0], delay: anime.stagger(90), duration: 520 }, "-=900");
      observer.disconnect();
    }, { threshold: 0.18 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-section" ref={root} aria-labelledby="process-title">
      <div className="site-shell process-layout">
        <div className="process-copy">
          <TechnicalLabel>ENGINEERING PROCESS / 06 STAGES</TechnicalLabel>
          <h2 id="process-title">The design is not finished when the CAD is.</h2>
          <p>Each stage produces evidence for the next decision. The loop closes only after the physical result is measured and improved.</p>
        </div>
        <div className="process-diagram">
          <svg viewBox="0 0 24 660" preserveAspectRatio="none" aria-hidden="true">
            <path className="process-path" d="M12 12V648" />
          </svg>
          <ol>
            {stages.map((stage, index) => (
              <li className="process-stage" key={stage.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{stage.name}</strong><small>{stage.detail}</small></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
