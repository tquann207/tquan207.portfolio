"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { withBasePath } from "@/content/site-config";
import { TechnicalLabel } from "./technical-label";
import styles from "./engineering-process.module.css";

type EvidenceLink = {
  label: string;
  href: string;
};

type Stage = {
  name: string;
  detail: string;
  summary: string;
  evidence: EvidenceLink[];
};

const stages: Stage[] = [
  {
    name: "Define",
    detail: "Requirements and constraints",
    summary: "Turn the problem into measurable requirements, constraints, and acceptance criteria before committing to hardware.",
    evidence: [
      { label: "Hybrid Health Supply Network", href: "/projects/hybrid-health-supply-network/" },
      { label: "Smart Delivery Box", href: "/projects/smart-delivery-box/" },
    ],
  },
  {
    name: "Design",
    detail: "CAD, concept selection, analysis",
    summary: "Compare concepts, resolve geometry, and use CAD or analysis to make the next design decision defensible.",
    evidence: [
      { label: "F-Race STEM Competition", href: "/projects/f-race/" },
      { label: "Bridge Building Competition", href: "/projects/bridge-building-competition/" },
    ],
  },
  {
    name: "Build",
    detail: "Prototype, fabrication, integration",
    summary: "Convert the selected concept into a physical prototype, fixture, or integrated system that can actually be evaluated.",
    evidence: [
      { label: "Smart Delivery Box", href: "/projects/smart-delivery-box/" },
      { label: "NVH Test Rig", href: "/projects/nvh-test-rig/" },
    ],
  },
  {
    name: "Test",
    detail: "Instrumentation and validation",
    summary: "Use controlled setups, instrumentation, and defined procedures to collect repeatable evidence from the physical system.",
    evidence: [
      { label: "Bosch validation", href: "/#experience" },
      { label: "NVH Test Rig", href: "/projects/nvh-test-rig/" },
    ],
  },
  {
    name: "Analyze",
    detail: "Data, failure modes, interpretation",
    summary: "Interpret measurements and failure behavior instead of stopping at a pass/fail result, then identify what the data is saying.",
    evidence: [
      { label: "Bosch validation", href: "/#experience" },
      { label: "Smart Delivery Box", href: "/projects/smart-delivery-box/" },
    ],
  },
  {
    name: "Improve",
    detail: "Iteration and corrective action",
    summary: "Feed what was learned back into geometry, setup, or process changes and verify that the next revision is actually better.",
    evidence: [
      { label: "Bridge Building Competition", href: "/projects/bridge-building-competition/" },
      { label: "Hybrid Health Supply Network", href: "/projects/hybrid-health-supply-network/" },
    ],
  },
];

const stageRotation = [-2, 3, -4, 2, -3, 4];

function EngineeringSketch({ activeIndex }: { activeIndex: number | null }) {
  const visualKey = activeIndex ?? "idle";

  return (
    <svg
      key={visualKey}
      className={styles.sketchSvg}
      viewBox="0 0 320 250"
      role="img"
      aria-label="Hand-drawn mechanical fixture sketch"
    >
      <defs>
        <filter id="sketch-noise" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.16" numOctaves="1" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.85" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <g className={styles.sketchInk} filter="url(#sketch-noise)">
        <path d="M76 72 154 43 242 73 160 105Z" />
        <path d="M76 72 78 158 160 198 160 105Z" />
        <path d="M160 105 242 73 240 158 160 198Z" />
        <path d="M100 83 155 63 216 82 159 102Z" />
        <path d="M103 101 103 145 143 164 143 120Z" />
        <path d="M177 116 217 100 216 143 177 162Z" />
        <ellipse cx="158" cy="76" rx="19" ry="8" />
        <ellipse cx="158" cy="76" rx="8" ry="3.5" />
        <path d="M126 57 126 33M194 57 194 33" />
        <path d="M116 33H136M184 33H204" />
        <path d="M92 159 92 185M226 159 226 185" />
        <path d="M83 186H102M216 186H236" />
        <path d="M78 158 61 169M160 198 160 217M240 158 256 168" />
        <path d="M55 170 69 170M153 218H167M249 169H263" />
      </g>

      <g className={styles.hatchInk} aria-hidden="true">
        <path d="M88 88 107 80M93 98 120 87M99 109 133 95M107 119 145 103" />
        <path d="M178 111 201 102M178 122 214 108M179 134 224 116M179 147 228 128" />
        <path d="M94 151 112 159M108 149 132 161M188 165 209 156M197 176 222 165" />
      </g>

      <g className={styles.constructionInk} aria-hidden="true">
        <path d="M46 76H274" />
        <path d="M159 20V226" />
        <circle cx="159" cy="119" r="88" />
      </g>
    </svg>
  );
}

export function EngineeringProcess() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const sketchRef = useRef<HTMLDivElement>(null);
  const selectedStage = activeIndex === null ? null : stages[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setEntered(true);
        observer.disconnect();
      },
      { threshold: 0.22 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const visual = sketchRef.current;
    if (!visual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    visual.style.setProperty("--tilt-x", `${x * 8}deg`);
    visual.style.setProperty("--tilt-y", `${y * -6}deg`);
  };

  const resetPointer = () => {
    const visual = sketchRef.current;
    if (!visual) return;
    visual.style.setProperty("--tilt-x", "0deg");
    visual.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.process}${entered ? ` ${styles.entered}` : ""}`}
      id="engineering-process"
      aria-labelledby="process-title"
    >
      <div className={`site-shell ${styles.shell}`}>
        <div className={styles.intro}>
          <TechnicalLabel>ENGINEERING PROCESS</TechnicalLabel>
          <h2 id="process-title">
            Iterate<br />
            to Better<br />
            <span>Solutions.</span>
          </h2>
          <p>
            A continuous engineering cycle from requirements to validated results. Select a stage to see where that work appears in real projects.
          </p>

          <span className={styles.interactionHint}>
            SELECT A STAGE / CLICK TO EXPAND
          </span>
        </div>

        <div
          className={styles.diagram}
          aria-label="Interactive six-stage engineering process"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <svg className={styles.diagramSvg} viewBox="0 0 400 400" aria-hidden="true">
            <polygon className={styles.processLine} points="200,30 347,115 347,285 200,370 53,285 53,115 200,30" />
          </svg>

          <div
            ref={sketchRef}
            className={styles.centerSketch}
            style={{
              "--stage-rotate": `${activeIndex === null ? 0 : stageRotation[activeIndex]}deg`,
            } as CSSProperties}
          >
            <EngineeringSketch activeIndex={activeIndex} />
            <span className={styles.sketchCaption}>MECHANICAL STUDY / ITERATIVE HARDWARE</span>
          </div>

          {stages.map((stage, index) => {
            const active = activeIndex === index;
            return (
              <button
                className={`${styles.node} ${styles[`node${index + 1}`]}${active ? ` ${styles.activeNode}` : ""}`}
                key={stage.name}
                type="button"
                aria-expanded={active}
                aria-controls="engineering-stage-evidence"
                onClick={() => setActiveIndex(active ? null : index)}
                style={{ "--node-delay": `${index * 70}ms` } as CSSProperties}
              >
                <span className={styles.nodeButton}>{String(index + 1).padStart(2, "0")}</span>
                <strong className={styles.nodeName}>{stage.name}</strong>
                <span className={styles.nodeDetail}>{stage.detail}</span>
              </button>
            );
          })}
        </div>

        <div
          className={`${styles.evidenceDrawer}${selectedStage ? ` ${styles.evidenceDrawerOpen}` : ""}`}
          id="engineering-stage-evidence"
          aria-live="polite"
        >
          <div className={styles.evidenceDrawerInner}>
            {selectedStage ? (
              <div className={styles.evidenceContent}>
                <div className={styles.evidenceHeading}>
                  <span>{String((activeIndex ?? 0) + 1).padStart(2, "0")} / {selectedStage.name.toUpperCase()}</span>
                  <h3>{selectedStage.detail}</h3>
                </div>

                <p>{selectedStage.summary}</p>

                <div className={styles.evidenceProjects}>
                  <span>APPLIED IN</span>
                  <div>
                    {selectedStage.evidence.map((item, index) => (
                      <a
                        href={withBasePath(item.href)}
                        key={item.label}
                        style={{ "--chip-delay": `${index * 70}ms` } as CSSProperties}
                      >
                        {item.label}
                        <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>

                <button className={styles.closeEvidence} type="button" onClick={() => setActiveIndex(null)}>
                  Close details <span aria-hidden="true">×</span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
