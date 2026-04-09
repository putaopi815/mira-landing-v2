"use client";

import { AnimateIn } from "./AnimateIn";

const pains = [
  {
    stat: "2-3 hrs/day",
    title: "2-3 Hours a Day, Searching",
    body: "Recruiters spend a quarter of their workday on sourcing — scrolling, filtering, scanning profiles. Most of that effort produces nothing usable.",
    color: "var(--agent-demand)",
    glowColor: "rgba(45,212,191,0.06)",
    hoverGlow: "0 0 30px rgba(45,212,191,0.08)",
  },
  {
    stat: "6-month window",
    title: "Markets Move Faster Than People Learn",
    body: "A hot sector has a six-month window. By the time a recruiter maps the talent landscape, the opportunity has shifted.",
    color: "var(--agent-market)",
    glowColor: "rgba(245,158,11,0.06)",
    hoverGlow: "0 0 30px rgba(245,158,11,0.08)",
  },
  {
    stat: "Zero retained",
    title: "When a Recruiter Leaves, Their Knowledge Leaves Too",
    body: "Years of industry insight, candidate relationships, and pattern recognition — none of it stays in the system. Every departure resets the clock.",
    color: "var(--agent-roundtable)",
    glowColor: "rgba(251,113,133,0.06)",
    hoverGlow: "0 0 30px rgba(251,113,133,0.08)",
  },
];

export function PainPoint() {
  return (
    <section
      style={{
        position: "relative",
        padding: "var(--section-gap) 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--container-px)",
        }}
      >
        <AnimateIn>
          <span className="section-tag">The Problem</span>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginTop: "1.25rem",
              marginBottom: "1rem",
              maxWidth: "720px",
            }}
          >
            $250 Billion.{" "}
            <span style={{ color: "var(--text-secondary)" }}>
              Still Powered by Spreadsheets and Gut Feel.
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: "640px",
              marginBottom: "3.5rem",
            }}
          >
            White-collar recruiting is one of the largest professional services
            markets in the world. Yet the entire industry still runs on manual
            effort. Three problems keep it stuck:
          </p>
        </AnimateIn>

        {/* Pain items — glow-bordered on dark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "720px",
          }}
        >
          {pains.map((pain, i) => (
            <AnimateIn key={i} delay={0.1 * (i + 2)}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                  padding: "1.75rem",
                  borderRadius: "12px",
                  background: pain.glowColor,
                  border: "1px solid var(--border-default)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.boxShadow = pain.hoverGlow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-default)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Left accent gradient line */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "15%",
                    bottom: "15%",
                    width: "2px",
                    background: `linear-gradient(180deg, transparent, ${pain.color}, transparent)`,
                    borderRadius: "1px",
                  }}
                />

                {/* Stat number — left column */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: pain.color,
                    whiteSpace: "nowrap",
                    minWidth: "110px",
                    paddingTop: "0.125rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {pain.stat}
                </div>

                {/* Content — right column */}
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {pain.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {pain.body}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom line — offset right with amber glow */}
        <AnimateIn delay={0.6}>
          <div
            style={{
              marginTop: "2.5rem",
              marginLeft: "auto",
              maxWidth: "480px",
              padding: "1.25rem 1.5rem",
              background: "var(--accent-subtle)",
              borderRadius: "8px",
              borderLeft: "3px solid var(--accent)",
              boxShadow: "0 0 40px rgba(245,158,11,0.06)",
            }}
          >
            <p
              style={{
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "var(--text-primary)",
                lineHeight: 1.5,
              }}
            >
              The result: a{" "}
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>$250B+</span>{" "}
              market that has never been truly scalable.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
