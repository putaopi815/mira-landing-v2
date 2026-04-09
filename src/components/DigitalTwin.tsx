"use client";

import { AnimateIn } from "./AnimateIn";

const roadmap = [
  { phase: "Now", label: "Sourcing", active: true },
  { phase: "Next", label: "Outreach", active: false },
  { phase: "Then", label: "Screening", active: false },
  { phase: "Vision", label: "Full-Cycle", active: false },
];

export function DigitalTwin() {
  return (
    <section
      style={{
        position: "relative",
        padding: "var(--section-gap) 0",
        background: "var(--bg-secondary)",
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
          <span className="section-tag">Vision</span>
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
            Stop Selling Hours.{" "}
            <span style={{ color: "var(--accent)" }}>Start Building Assets.</span>
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
            Sourcing is just the beginning. Mira is building toward a future where
            every recruiter owns a digital twin — an AI version of themselves that
            carries their expertise, works around the clock, and gets better with
            every placement.
          </p>
        </AnimateIn>

        {/* Two-column: vision points (left) + roadmap (right) */}
        <div className="bento-row bento-7-5">
          {/* Left column — stacked vision points without cards */}
          <AnimateIn delay={0.25}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {[
                {
                  num: "01",
                  title: "Your Skills, Preserved",
                  body: "Train your digital twin with your industry knowledge, selection criteria, and judgment calls. Your expertise becomes a durable, compounding asset.",
                },
                {
                  num: "02",
                  title: "24/7, Without Burnout",
                  body: "Your digital twin sources candidates while you sleep, screens profiles while you're in meetings, and follows up while you focus on closing.",
                },
                {
                  num: "03",
                  title: "From Sourcing to Full-Cycle",
                  body: "Today: AI-powered sourcing. Next: outreach, screening, interview coordination. The goal: a complete recruiting platform.",
                },
              ].map((point, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    padding: "1.5rem 0",
                    borderBottom: i < 2 ? "1px solid var(--border-default)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      paddingTop: "0.125rem",
                      flexShrink: 0,
                    }}
                  >
                    {point.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {point.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.65,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Right column — vertical roadmap */}
          <AnimateIn delay={0.4}>
            <div
              style={{
                background: "var(--bg-elevated)",
                borderRadius: "12px",
                padding: "2rem",
                border: "1px solid var(--border-default)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-tertiary)",
                  marginBottom: "1.5rem",
                }}
              >
                Platform Roadmap
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  position: "relative",
                }}
              >
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    left: "11px",
                    top: "12px",
                    bottom: "12px",
                    width: "2px",
                    background: "var(--border-default)",
                  }}
                />

                {roadmap.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.75rem 0",
                      position: "relative",
                    }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: item.active ? "var(--accent)" : "var(--bg-tertiary)",
                        border: item.active ? "none" : "2px solid var(--border-default)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      {item.active && (
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "var(--bg-primary)",
                          }}
                        />
                      )}
                    </div>

                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.625rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: item.active ? "var(--accent)" : "var(--text-tertiary)",
                        }}
                      >
                        {item.phase}
                      </span>
                      <div
                        style={{
                          fontSize: "0.9375rem",
                          fontWeight: item.active ? 600 : 400,
                          color: item.active ? "var(--text-primary)" : "var(--text-secondary)",
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
