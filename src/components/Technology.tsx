"use client";

import { AnimateIn } from "./AnimateIn";

export function Technology() {
  return (
    <section
      id="technology"
      style={{
        position: "relative",
        padding: "var(--section-gap) 0",
        background: "var(--bg-secondary)",
      }}
    >
      {/* Grid texture */}
      <div className="grid-dark" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />

      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--container-px)",
        }}
      >
        <AnimateIn>
          <span className="section-tag">Technology</span>
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
              maxWidth: "700px",
            }}
          >
            Recruiting Is a Reasoning Problem.{" "}
            <span style={{ color: "var(--accent)" }}>
              We Built a Reasoning Engine.
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: "660px",
              marginBottom: "3.5rem",
            }}
          >
            Traditional recruiting tools match keywords. But hiring decisions
            aren&apos;t keyword problems. &quot;3 years of experience&quot; requires arithmetic.
            &quot;0-to-1 experience&quot; requires semantic understanding. &quot;Public company
            background&quot; requires world knowledge. MRE handles all of them.
          </p>
        </AnimateIn>

        {/* Row 1: MRE (wide) + BRIGHT (narrow) */}
        <AnimateIn delay={0.15}>
          <div
            className="bento-row bento-7-5"
            style={{
              marginBottom: "1.25rem",
            }}
          >
            {/* MRE Card — glass */}
            <div
              className="glass-card"
              style={{
                borderRadius: "12px",
                padding: "2rem",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 40px rgba(245,158,11,0.06)";
                e.currentTarget.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--accent)",
                  marginBottom: "0.75rem",
                }}
              >
                Core Engine
              </div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                MRE — Reasoning-First Matching
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                }}
              >
                Our proprietary embedding model trained with reinforcement
                learning for recruiting-specific reasoning. Not a wrapper around
                GPT. A purpose-built engine for understanding what jobs really
                need and which people truly match.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.875rem 1rem",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "8px",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--text-tertiary)",
                      background: "var(--bg-secondary)",
                      padding: "0.125rem 0.5rem",
                      borderRadius: "4px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    Traditional
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    &quot;3 years RLHF experience&quot; → keyword match → misses most
                    qualified candidates
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.875rem 1rem",
                    background: "var(--accent-subtle)",
                    borderRadius: "8px",
                    border: "1px solid rgba(245,158,11,0.15)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--accent)",
                      background: "rgba(245,158,11,0.12)",
                      padding: "0.125rem 0.5rem",
                      borderRadius: "4px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    MRE
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.5,
                    }}
                  >
                    Understands &quot;3 years&quot; is arithmetic, &quot;RLHF&quot; includes related
                    skills → finds truly matching candidates
                  </span>
                </div>
              </div>
            </div>

            {/* BRIGHT Card — amber accent block with glow */}
            <div
              style={{
                background: "var(--accent)",
                borderRadius: "12px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 60px rgba(245,158,11,0.15)",
              }}
            >
              {/* Subtle radial highlight */}
              <div
                style={{
                  position: "absolute",
                  top: "-20%",
                  right: "-20%",
                  width: "200px",
                  height: "200px",
                  background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(12,10,9,0.6)",
                  marginBottom: "1rem",
                  position: "relative",
                }}
              >
                BRIGHT Benchmark
              </div>
              <div
                className="stat-number"
                style={{
                  fontSize: "clamp(4rem, 10vw, 6rem)",
                  fontWeight: 800,
                  color: "var(--bg-primary)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  position: "relative",
                }}
              >
                #2
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "rgba(12,10,9,0.75)",
                  position: "relative",
                }}
              >
                Worldwide among all embedding models on BRIGHT, the academic
                benchmark for reasoning-intensive retrieval.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Row 2: Multi-Source (narrow) + Research (wide) */}
        <AnimateIn delay={0.3}>
          <div
            className="bento-row bento-5-7"
          >
            {/* Multi-Source — glass card */}
            <div
              className="glass-card"
              style={{
                borderRadius: "12px",
                padding: "2rem",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 40px rgba(167,139,250,0.06)";
                e.currentTarget.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--agent-talent)",
                  marginBottom: "0.75rem",
                }}
              >
                Data Intelligence
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.625rem",
                }}
              >
                Every Platform. One Profile.
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  marginBottom: "1.25rem",
                }}
              >
                Mira aggregates data from public sources, proprietary databases,
                and your private talent pool. Cross-platform identity mapping
                connects LinkedIn, GitHub, and social presence into a single picture.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                {["LinkedIn", "GitHub", "Twitter", "Custom DB"].map((p) => (
                  <span
                    key={p}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--text-secondary)",
                      padding: "0.25rem 0.625rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "100px",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Research — glass card */}
            <div
              className="glass-card"
              style={{
                borderRadius: "12px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 40px rgba(245,158,11,0.06)";
                e.currentTarget.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--agent-market)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Foundation
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "0.625rem",
                  }}
                >
                  Research-Backed
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                    marginBottom: "1.25rem",
                  }}
                >
                  4 published papers on arXiv covering reasoning-aware retrieval,
                  test-time inference for embedding models, and recruiting-specific
                  benchmarks.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  "Reasoning-Aware Retrieval",
                  "Test-Time Inference",
                  "Recruiting Benchmarks",
                  "Embedding RL",
                ].map((paper) => (
                  <span
                    key={paper}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--agent-market)",
                      padding: "0.375rem 0.75rem",
                      background: "rgba(245,158,11,0.08)",
                      borderRadius: "6px",
                      border: "1px solid rgba(245,158,11,0.15)",
                    }}
                  >
                    {paper}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
