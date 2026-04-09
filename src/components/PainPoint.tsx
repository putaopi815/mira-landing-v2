"use client";

import { AnimateIn } from "./AnimateIn";
import { useLocaleContext } from "@/context/LocaleContext";

const painStyle = [
  {
    color: "var(--agent-demand)",
    glowColor: "rgba(45,212,191,0.06)",
    hoverGlow: "0 0 30px rgba(45,212,191,0.08)",
  },
  {
    color: "var(--agent-market)",
    glowColor: "rgba(245,158,11,0.06)",
    hoverGlow: "0 0 30px rgba(245,158,11,0.08)",
  },
  {
    color: "var(--agent-roundtable)",
    glowColor: "rgba(251,113,133,0.06)",
    hoverGlow: "0 0 30px rgba(251,113,133,0.08)",
  },
] as const;

export function PainPoint() {
  const { m } = useLocaleContext();

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
          <span className="section-tag">{m.pain.tag}</span>
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
            {m.pain.headingBold}{" "}
            <span style={{ color: "var(--text-secondary)" }}>
              {m.pain.headingRest}
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
            {m.pain.intro}
          </p>
        </AnimateIn>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "720px",
          }}
        >
          {m.pain.items.map((pain, i) => {
            const style = painStyle[i];
            return (
              <AnimateIn key={i} delay={0.1 * (i + 2)}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    padding: "1.75rem",
                    borderRadius: "12px",
                    background: style.glowColor,
                    border: "1px solid var(--border-default)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                    e.currentTarget.style.boxShadow = style.hoverGlow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-default)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "15%",
                      bottom: "15%",
                      width: "2px",
                      background: `linear-gradient(180deg, transparent, ${style.color}, transparent)`,
                      borderRadius: "1px",
                    }}
                  />

                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: style.color,
                      whiteSpace: "nowrap",
                      minWidth: "110px",
                      paddingTop: "0.125rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {pain.stat}
                  </div>

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
            );
          })}
        </div>

        <AnimateIn delay={0.6}>
          <div
            style={{
              marginTop: "2.5rem",
              maxWidth: "720px",
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              padding: "1.75rem",
              borderRadius: "12px",
              background: "rgba(245,158,11,0.06)",
              border: "1px solid var(--border-default)",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(245,158,11,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-default)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "15%",
                bottom: "15%",
                width: "2px",
                background:
                  "linear-gradient(180deg, transparent, var(--agent-market), transparent)",
                borderRadius: "1px",
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--agent-market)",
                whiteSpace: "nowrap",
                minWidth: "110px",
                paddingTop: "0.125rem",
                letterSpacing: "-0.01em",
              }}
            >
              {m.pain.takeawayLabel}
            </div>
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
                {m.pain.takeawayTitle}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                {m.pain.takeawayBodyBefore}
                <span style={{ color: "var(--agent-market)", fontWeight: 600 }}>
                  $250B+
                </span>
                {m.pain.takeawayBodyAfter}
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
