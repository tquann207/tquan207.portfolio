"use client";

import { ActionIcon } from "./action-icon";

import { useRef, useState } from "react";

export type ProjectMediaSlide = { src?: string; alt: string; label: string; hint?: string };

export function ProjectMediaSlider({ slides, projectNumber }: { slides: ProjectMediaSlide[]; projectNumber: string; intervalMs?: number }) {
  const images = slides.filter((slide): slide is ProjectMediaSlide & { src: string } => Boolean(slide.src));
  const [index, setIndex] = useState(0);
  const touch = useRef<{x:number;y:number} | null>(null);
  if (!images.length) return null;
  const activeIndex = index % images.length;
  const active = images[activeIndex];
  const move = (amount:number) => setIndex((value) => (value + amount + images.length) % images.length);
  return <figure className="project-slider" aria-label={`Project ${projectNumber} images`}>
    <div className="project-slider__frame" onTouchStart={e => { const t = e.touches[0]; if(t) touch.current = {x:t.clientX,y:t.clientY}; }} onTouchEnd={e => {
      const t = e.changedTouches[0]; if(t && touch.current){const dx=t.clientX-touch.current.x,dy=t.clientY-touch.current.y;if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy))move(dx<0?1:-1);} touch.current=null;
    }}><img src={active.src} alt={active.alt} width="1200" height="900" decoding="async" /></div>
    {images.length > 1 && <div className="project-slider__choices" role="group" aria-label="Choose project image">{images.map((slide, i) => <button key={`${slide.src}-${i}`} type="button" aria-label={`Show project image ${i + 1}`} aria-current={i === activeIndex ? "true" : undefined} onClick={() => setIndex(i)}>{String(i + 1).padStart(2,"0")}</button>)}</div>}
    <figcaption><div aria-live="polite" aria-atomic="true"><span>FIG. {projectNumber} / {activeIndex + 1} OF {images.length}</span><strong>{active.label}</strong></div>{images.length > 1 && <div className="project-slider__controls"><button type="button" onClick={() => move(-1)} aria-label="Previous project image"><ActionIcon name="previous" /></button><button type="button" onClick={() => move(1)} aria-label="Next project image"><ActionIcon name="next" /></button></div>}</figcaption>
  </figure>;
}
