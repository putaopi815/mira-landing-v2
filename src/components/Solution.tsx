"use client";

import { AnimateIn } from "./AnimateIn";
import { useLocaleContext } from "@/context/LocaleContext";

const agentMeta = [
  {
    color: "var(--agent-demand)",
    colorBg: "rgba(45,212,191,0.12)",
    glowClass: "glow-card glow-card-demand",
    hoverGlow: "0 0 40px rgba(45,212,191,0.12), 0 0 80px rgba(45,212,191,0.04)",
    letter: "D",
  },
  {
    color: "var(--agent-market)",
    colorBg: "rgba(245,158,11,0.12)",
    glowClass: "glow-card glow-card-market",
    hoverGlow: "0 0 40px rgba(245,158,11,0.12), 0 0 80px rgba(245,158,11,0.04)",
    letter: "M",
  },
  {
    color: "var(--agent-talent)",
    colorBg: "rgba(167,139,250,0.12)",
    glowClass: "glow-card glow-card-talent",
    hoverGlow: "0 0 40px rgba(167,139,250,0.12), 0 0 80px rgba(167,139,250,0.04)",
    letter: "T",
  },
] as const;

export function Solution() {
  const { m } = useLocaleContext();

  return (
    <section
      id="product"
      style={{
        position: "relative",
        padding: "var(--section-gap) 0",
        background: "var(--bg-secondary)",
      }}
    >
      <div className="dot-dark" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />

      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--container-px)",
        }}
      >
        <AnimateIn>
          <span className="section-tag">{m.solution.tag}</span>
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
              maxWidth: "560px",
            }}
          >
            {m.solution.heading}{" "}
            <span style={{ color: "var(--accent)" }}>{m.solution.headingAccent}</span>
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
            {m.solution.intro}
          </p>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2rem",
          }}
        >
          {agentMeta.map((meta, i) => {
            const agent = m.solution.agents[i];
            return (
              <AnimateIn key={i} delay={0.1 * (i + 2)} variant="scale-in">
                <div
                  className={meta.glowClass}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                    borderRadius: "12px",
                    padding: "1.75rem",
                    height: "100%",
                    border: "1px solid var(--border-default)",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = meta.hoverGlow;
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "var(--border-default)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: meta.colorBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: meta.color,
                        boxShadow: `0 0 16px ${meta.colorBg}`,
                      }}
                    >
                      {meta.letter}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          lineHeight: 1.2,
                        }}
                      >
                        {agent.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6875rem",
                          color: meta.color,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {agent.role}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {agent.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn delay={0.5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <svg width="2" height="32" viewBox="0 0 2 32">
              <line x1="1" y1="0" x2="1" y2="32" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" style={{ marginTop: "-1px" }}>
              <path d="M8 12L0 0h16L8 12z" fill="var(--accent)" />
            </svg>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.55}>
          <div
            className="glow-card"
            style={{
              background: "linear-gradient(135deg, rgba(251,113,133,0.04) 0%, rgba(255,255,255,0.02) 100%)",
              borderRadius: "14px",
              padding: "2rem 2.5rem",
              maxWidth: "560px",
              margin: "0 auto",
              display: "flex",
              alignItems: "flex-start",
              gap: "1.25rem",
              border: "1px solid rgba(251,113,133,0.12)",
              boxShadow: "0 0 60px rgba(251,113,133,0.06)",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(251,113,133,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "var(--agent-roundtable)",
                flexShrink: 0,
                boxShadow: "0 0 20px rgba(251,113,133,0.1)",
              }}
            >
              R
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.625rem",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {m.solution.roundtable}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: "var(--text-tertiary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {m.solution.coordinator}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                {m.solution.roundtableBody}
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
