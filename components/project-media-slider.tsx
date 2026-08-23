"use client";

import { useEffect, useRef, useState } from "react";
import { MediaPlaceholder } from "./media-placeholder";

export type ProjectMediaSlide = {
  src?: string;
  alt: string;
  label: string;
  hint?: string;
};

type ProjectMediaSliderProps = {
  slides: ProjectMediaSlide[];
  projectNumber: string;
  intervalMs?: number;
};

export function ProjectMediaSlider({
  slides,
  projectNumber,
  intervalMs = 2000,
}: ProjectMediaSliderProps) {
  const safeSlides =
    slides.length > 0
      ? slides
      : [
          {
            alt: `Project ${projectNumber} media placeholder`,
            label: "PROJECT MEDIA",
            hint: "IMAGE PLACEHOLDER",
          },
        ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener?.("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener?.("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (safeSlides.length <= 1 || reduceMotion !== false) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, intervalMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, intervalMs, reduceMotion, safeSlides.length]);

  useEffect(() => {
    if (activeIndex >= safeSlides.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, safeSlides.length]);

  const goTo = (index: number) => {
    const nextIndex = (index + safeSlides.length) % safeSlides.length;
    setActiveIndex(nextIndex);
  };

  const previous = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      previous();
    } else {
      next();
    }
  };

  const hasMultipleSlides = safeSlides.length > 1;

  return (
    <div className="project-slider">
      <div
        className="project-slider__frame"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="project-slider__slides">
          {safeSlides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                className={`project-slider__slide${
                  isActive ? " project-slider__slide--active" : ""
                }`}
                aria-hidden={!isActive}
                key={`${slide.label}-${index}`}
              >
                {slide.src ? (
                  <img src={slide.src} alt={slide.alt} />
                ) : (
                  <MediaPlaceholder
                    className="project-slider__placeholder"
                    label={slide.label}
                    hint={slide.hint}
                    project={`PROJECT / ${projectNumber}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {hasMultipleSlides ? (
          <div className="project-slider__arrows" aria-label="Project image controls">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous project image"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next project image"
            >
              →
            </button>
          </div>
        ) : null}
      </div>

      <div className="project-slider__footer">
        <div className="project-slider__caption">
          <span>
            IMAGE {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(safeSlides.length).padStart(2, "0")}
          </span>
          <strong>PROJECT MEDIA</strong>
        </div>

        {hasMultipleSlides ? (
          <div className="project-slider__dots" aria-label="Choose project image">
            {safeSlides.map((_, index) => (
              <button
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => goTo(index)}
                aria-label={`Show project image ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                key={`project-media-dot-${index}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
