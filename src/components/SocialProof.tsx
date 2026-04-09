"use client";

import { AnimateIn } from "./AnimateIn";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

function AnimatedNumber({
  target,
  suffix = "",
  prefix = "",
  duration = 1500,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView(0.3);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="stat-number">
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { num: 300, prefix: "", suffix: "+", label: "Internal users", sub: "actively using Mira", accent: "var(--agent-demand)" },
  { num: 2, prefix: "#", suffix: "", label: "Worldwide", sub: "on BRIGHT benchmark", accent: "var(--accent)" },
  { num: 4, prefix: "", suffix: "", label: "Papers", sub: "published on arXiv", accent: "var(--agent-talent)" },
  { num: 3, prefix: "", suffix: "+", label: "Years of R&D", sub: "since 2022", accent: "var(--agent-roundtable)" },
];

export function SocialProof() {
  return (
    <section
      id="about"
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
          <span className="section-tag">Traction</span>
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
              marginBottom: "3rem",
              maxWidth: "480px",
            }}
          >
            Not a Concept.{" "}
            <span style={{ color: "var(--accent)" }}>Already Working.</span>
          </h2>
        </AnimateIn>

        {/* Stats — horizontal inline with accent colors per stat */}
        <AnimateIn delay={0.2}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
              borderTop: "1px solid var(--border-default)",
              borderBottom: "1px solid var(--border-default)",
              marginBottom: "3rem",
              background: "linear-gradient(135deg, rgba(255,255,255,0.01) 0%, transparent 100%)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  flex: "1 1 140px",
                  padding: "1.75rem 1.5rem",
                  borderRight: i < 3 ? "1px solid var(--border-default)" : "none",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    fontWeight: 800,
                    color: stat.accent,
                    lineHeight: 1,
                    marginBottom: "0.375rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  <AnimatedNumber
                    target={stat.num}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "0.125rem",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-tertiary)",
                  }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Background note */}
        <AnimateIn delay={0.4}>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: "640px",
            }}
          >
            Built by the AI team at{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 600 }}>
              Career International
            </strong>{" "}
            — one of China&apos;s largest publicly listed staffing firms — with
            firsthand access to real recruiting workflows, real consultants, and
            real placements.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
