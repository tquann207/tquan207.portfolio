"use client";

import { useState } from "react";
import { profile } from "@/content/site";
import { withBasePath } from "@/content/site-config";

const links = [["Projects", withBasePath("/projects")], ["Experience", withBasePath("/#experience")], ["About", withBasePath("/#about")], ["Resume", profile.resume], ["Contact", withBasePath("/#contact")]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar-inner site-shell">
        <a className="wordmark" href={withBasePath("/")} aria-label="Quan Tran home">QUAN TRAN <span>ME / 26</span></a>
        <button className="menu-button" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}</button>
        <nav className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Primary navigation">
          {links.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
