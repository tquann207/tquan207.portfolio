"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/content/site";
import { withBasePath } from "@/content/site-config";

const links = [["Projects", withBasePath("/projects/")], ["Experience", withBasePath("/#experience")], ["About", withBasePath("/#about")], ["Resume", profile.resume], ["Contact", withBasePath("/#contact")]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, { rootMargin: "-10% 0px -65% 0px" });
    document.querySelectorAll("#hero-title, #experience, #projects, #about, #contact").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="navbar" onKeyDown={(event) => {
      if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); }
    }}>
      <div className="navbar-inner site-shell" onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}>
        <a className="wordmark" href={withBasePath("/")} aria-label="Quan Tran home">QUAN TRAN <span>ME / 26</span></a>
        <button ref={menuButton} className="menu-button" type="button" aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close menu" : "Menu"}</button>
        <nav id="primary-navigation" className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Primary navigation">
          {links.map(([label, href]) => {
            const projectPage = label === "Projects" && pathname.includes("/projects");
            const active = projectPage || label.toLowerCase() === activeSection;
            return <a href={href} key={label} aria-current={active ? (projectPage ? "page" : "location") : undefined} onClick={() => setOpen(false)}>{label}</a>;
          })}
        </nav>
      </div>
    </header>
  );
}
