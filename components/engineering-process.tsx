"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";
import { TechnicalLabel } from "./technical-label";

const stages = [
  {
    name: "Define",
    detail: "Requirements / constraints / acceptance criteria",
  },
  {
    name: "Design",
    detail: "CAD / concept selection / analysis",
  },
  {
    name: "Build",
    detail: "Prototype / fabrication / integration",
  },
  {
    name: "Test",
    detail: "Instrumentation / validation / measurements",
  },
  {
    name: "Analyze",
    detail: "Data / failure modes / interpretation",
  },
  {
    name: "Improve",
    detail: "Iteration / corrective action / optimization",
  },
];

export function EngineeringProcess() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = root.current;

    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const stageElements = Array.from(
      node.querySelectorAll<HTMLElement>(".process-stage"),
    );

    /*
     * Intro animation:
     * draw the vertical path, reveal each stage,
     * then bring the number markers into place.
     */
    let introObserver: IntersectionObserver | null = null;

    if (!reduceMotion) {
      introObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          anime
            .timeline({
              easing: "easeOutExpo",
            })
            .add({
              targets: node.querySelectorAll(".process-path"),
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: 1150,
            })
            .add(
              {
                targets: stageElements,
                opacity: [0, 1],
                translateX: [-12, 0],
                delay: anime.stagger(90),
                duration: 520,
              },
              "-=900",
            )
            .add(
              {
                targets: node.querySelectorAll(".process-stage > span"),
                scale: [0.72, 1],
                delay: anime.stagger(90),
                duration: 480,
              },
              "-=650",
            );

          introObserver?.disconnect();
        },
        {
          threshold: 0.18,
        },
      );

      introObserver.observe(node);
    }

    /*
     * Active-step observer:
     * whichever stage reaches the center area of the screen
     * receives .is-active.
     */
    const activeObserver = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);

        if (!activeEntry) return;

        stageElements.forEach((stage) => {
          stage.classList.toggle(
            "is-active",
            stage === activeEntry.target,
          );
        });
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      },
    );

    stageElements.forEach((stage) => {
      activeObserver.observe(stage);
    });

    return () => {
      introObserver?.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  return (
    <section
      className="process-section"
      ref={root}
      aria-labelledby="process-title"
    >
      <div className="site-shell process-layout">
        <div className="process-copy">
          <TechnicalLabel>
            ENGINEERING PROCESS / 06 STAGES
          </TechnicalLabel>

          <h2 id="process-title">
            The design is not finished when the CAD is.
          </h2>

          <p>
            Each stage produces evidence for the next decision.
            The loop closes only after the physical result is
            measured and improved.
          </p>
        </div>

        <div className="process-diagram">
          <svg
            viewBox="0 0 24 660"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="process-path"
              d="M12 12V648"
            />
          </svg>

          <ol>
            {stages.map((stage, index) => (
              <li
                className="process-stage"
                key={stage.name}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <strong>{stage.name}</strong>
                  <small>{stage.detail}</small>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
