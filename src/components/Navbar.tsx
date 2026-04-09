"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={scrolled ? "nav-dark" : ""}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "var(--container-max)",
          padding: "0 var(--container-px)",
          height: "64px",
        }}
      >
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="var(--accent)" />
            <path d="M8 22V10l8 6-8 6zm8 0V10l8 6-8 6z" fill="var(--bg-primary)" opacity="0.9" />
          </svg>
          <span style={{ fontSize: "1.125rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
            Mira
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-only">
          {["Product", "Technology", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="desktop-only">
          <button className="cta-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
            Get Started
          </button>
        </div>

        <button
          className="mobile-only"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5">
            {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div
          className="mobile-only"
          style={{
            position: "absolute", top: "64px", left: 0, right: 0,
            background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-default)",
            padding: "1.5rem var(--container-px)", display: "flex", flexDirection: "column", gap: "1rem",
          }}
        >
          {["Product", "Technology", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
          <button className="cta-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem", width: "fit-content" }}>
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
