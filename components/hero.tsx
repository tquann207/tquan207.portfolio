"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";
import { profile } from "@/content/site";
import { withBasePath } from "@/content/site-config";
import { TechnicalLabel } from "./technical-label";

const ucLogo = withBasePath("/brands/uc-logo.png");
const boschLogo = withBasePath("/brands/bosch-logo.png");

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const portrait = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    anime.timeline({ easing: "easeOutExpo" })
      .add({ targets: ".hero .technical-label", opacity: [0, 1], translateY: [8, 0], duration: 360 })
      .add({ targets: ".hero-word", translateY: ["105%", "0%"], duration: 760, delay: anime.stagger(70) }, "-=220")
      .add({ targets: ".hero-support", opacity: [0, 1], translateY: [12, 0], duration: 520 }, "-=420")
      .add({ targets: ".hero-visual", opacity: [0, 1], scale: [0.985, 1], duration: 650 }, "-=520")
      .add({ targets: ".hero-line", strokeDashoffset: [anime.setDashoffset, 0], duration: 540, delay: anime.stagger(70) }, "-=440")
      .add({ targets: ".hero-actions", opacity: [0, 1], translateY: [10, 0], duration: 440 }, "-=260");
  }, []);

  function movePortrait(event: React.PointerEvent<HTMLDivElement>) {
    if (!portrait.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 7;
    anime.remove(portrait.current);
    anime({ targets: portrait.current, translateX: x, translateY: y, duration: 520, easing: "easeOutExpo" });
  }

  function resetPortrait() {
    if (portrait.current) anime({ targets: portrait.current, translateX: 0, translateY: 0, duration: 650, easing: "easeOutExpo" });
  }

  return (
    <section className="hero site-shell" ref={root} aria-labelledby="hero-title">
      <div className="hero-copy">
        <TechnicalLabel>PORTFOLIO / MECHANICAL ENGINEERING / 2026</TechnicalLabel>
        <div className="hero-name">QUAN TRAN</div>
        <h1 id="hero-title" className="hero-title" aria-label="Mechanical Engineering">
          <span className="hero-word-wrap"><span className="hero-word">MECHANICAL</span></span>
          <span className="hero-word-wrap"><span className="hero-word hero-word--accent">ENGINEERING</span></span>
        </h1>

        <div className="hero-support">
          <p className="hero-manifesto">Design. Build.<br />Test. Improve.</p>

          <div className="hero-identity">
            <div className="hero-affiliation">
              <span className="hero-affiliation__logo">
                <img src={ucLogo} alt="" aria-hidden="true" />
              </span>
              <span>{profile.university}</span>
            </div>

            <div className="hero-affiliation">
              <span className="hero-affiliation__logo">
                <img src={boschLogo} alt="" aria-hidden="true" />
              </span>
              <span>Testing &amp; Validation Engineer Intern — Bosch</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <a className="button button--dark" href="#projects">Explore projects <span aria-hidden="true">↘</span></a>
          <a className="button button--line" href={profile.resume} download>Resume <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div className="hero-visual" onPointerMove={movePortrait} onPointerLeave={resetPortrait}>
        <svg className="hero-grid" viewBox="0 0 600 700" aria-hidden="true">
          <path className="hero-line" d="M40 100H560M40 350H560M40 600H560" />
          <path className="hero-line" d="M110 35V665M300 35V665M490 35V665" />
          <circle cx="300" cy="350" r="178" />
          <path className="hero-line" d="M300 128V572M78 350H522" />
        </svg>
        <div className="portrait-panel" ref={portrait}>
          {profile.profileImage ? <img src={profile.profileImage} alt="Quan Tran" /> : <div className="portrait-placeholder"><span>PROFILE / 01</span><strong>HEADSHOT</strong><small>USER ASSET REQUIRED</small></div>}
        </div>
        <span className="hero-annotation hero-annotation--a">DESIGN / X 0.24</span>
        <span className="hero-annotation hero-annotation--b">VALIDATE / Y 0.61</span>
        <span className="hero-annotation hero-annotation--c">ITERATE / REV A</span>
      </div>
    </section>
  );
}
