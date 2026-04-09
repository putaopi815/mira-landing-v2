"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { useLocaleContext } from "@/context/LocaleContext";
import type { Locale } from "@/i18n/content";

const NAV_SLUGS = ["product", "technology", "about"] as const;

function LangSwitch({
  className,
  variant = "compact",
}: {
  className?: string;
  variant?: "compact" | "stretch";
}) {
  const { locale, setLocale, m } = useLocaleContext();
  const stretch = variant === "stretch";

  const btn = (loc: Locale, label: string) => (
    <button
      key={loc}
      type="button"
      onClick={() => setLocale(loc)}
      aria-pressed={locale === loc}
      aria-label={label}
      style={{
        flex: stretch ? 1 : undefined,
        minHeight: stretch ? 48 : undefined,
        display: stretch ? "flex" : undefined,
        alignItems: stretch ? "center" : undefined,
        justifyContent: stretch ? "center" : undefined,
        padding: stretch ? "0.75rem 1rem" : "0.35rem 0.65rem",
        fontSize: stretch ? "0.875rem" : "0.75rem",
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        background: locale === loc ? "var(--accent-subtle)" : "transparent",
        color: locale === loc ? "var(--accent)" : "var(--text-secondary)",
        transition: "background 0.15s ease, color 0.15s ease",
      }}
    >
      {loc === "en" ? "EN" : "中文"}
    </button>
  );

  return (
    <div
      role="group"
      aria-label={m.nav.langSwitch}
      className={className}
      style={{
        display: stretch ? "flex" : "inline-flex",
        width: stretch ? "100%" : undefined,
        borderRadius: stretch ? "12px" : "8px",
        border: "1px solid var(--border-default)",
        overflow: "hidden",
      }}
    >
      {btn("en", m.nav.langEn)}
      {btn("zh", m.nav.langZh)}
    </div>
  );
}

function MobileNavChevron() {
  return (
    <svg
      className="nav-mobile-link-chevron"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { m } = useLocaleContext();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const prevOpen = useRef(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const closeIfDesktop = () => {
      if (mq.matches) setMobileOpen(false);
    };
    closeIfDesktop();
    mq.addEventListener("change", closeIfDesktop);
    return () => mq.removeEventListener("change", closeIfDesktop);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const id = requestAnimationFrame(() => firstLinkRef.current?.focus());
      prevOpen.current = true;
      return () => cancelAnimationFrame(id);
    }
    if (prevOpen.current) {
      menuButtonRef.current?.focus();
      prevOpen.current = false;
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const navLabels = [m.nav.product, m.nav.technology, m.nav.about];
  const closeMobile = () => setMobileOpen(false);

  const mobileSheet =
    mounted && mobileOpen ? (
      <>
        <div
          className="nav-mobile-backdrop"
          aria-hidden
          onClick={closeMobile}
        />
        <div
          className="nav-mobile-sheet"
          role="presentation"
          onClick={closeMobile}
        >
          <div
            id="mobile-nav-dialog"
            className="nav-mobile-sheet-inner"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-nav-heading"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75rem",
                marginBottom: "0.25rem",
              }}
            >
              <span
                id="mobile-nav-heading"
                className="section-tag"
                style={{ marginBottom: 0 }}
              >
                {m.nav.mobileSheetTitle}
              </span>
              <button
                type="button"
                className="nav-mobile-close"
                aria-label={m.nav.closeMenu}
                onClick={closeMobile}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav
              aria-labelledby="mobile-nav-heading"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "0.5rem",
                marginBottom: "1.25rem",
              }}
            >
              {NAV_SLUGS.map((slug, i) => (
                <a
                  key={slug}
                  ref={i === 0 ? firstLinkRef : undefined}
                  className="nav-mobile-link"
                  href={`#${slug}`}
                  onClick={closeMobile}
                >
                  <span className="nav-mobile-link-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{navLabels[i]}</span>
                  <MobileNavChevron />
                </a>
              ))}
            </nav>

            <div
              style={{
                marginTop: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                paddingTop: "0.25rem",
              }}
            >
              <LangSwitch variant="stretch" />
              <button
                type="button"
                className="cta-primary"
                style={{
                  width: "100%",
                  minHeight: 48,
                  padding: "0.875rem 1.25rem",
                  fontSize: "1rem",
                }}
              >
                {m.nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      </>
    ) : null;

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
      className={scrolled || mobileOpen ? "nav-dark" : ""}
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
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <BrandLogo iconPx={28} />
        </Link>

        <div className="nav-bar-desktop-links">
          {NAV_SLUGS.map((slug, i) => (
            <a
              key={slug}
              href={`#${slug}`}
              style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {navLabels[i]}
            </a>
          ))}
        </div>

        <div className="nav-bar-desktop-actions">
          <LangSwitch />
          <button className="cta-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
            {m.nav.getStarted}
          </button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="nav-bar-mobile-trigger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? m.nav.closeMenu : m.nav.toggleMenu}
          aria-expanded={mobileOpen}
          aria-controls={mobileOpen ? "mobile-nav-dialog" : undefined}
          style={{
            minWidth: 44,
            minHeight: 44,
            marginRight: "-0.25rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            borderRadius: 10,
            color: "var(--text-primary)",
            transition: "background 0.15s ease",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {mobileSheet ? createPortal(mobileSheet, document.body) : null}
    </nav>
  );
}
