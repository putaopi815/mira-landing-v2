"use client";

import { AnimateIn } from "./AnimateIn";
import { useLocaleContext } from "@/context/LocaleContext";

export function FinalCTA() {
  const { m } = useLocaleContext();

  return (
    <section
      style={{
        position: "relative",
        padding: "var(--section-gap) 0",
        background: "var(--bg-tertiary)",
        overflow: "hidden",
      }}
    >
      <div
        className="grid-dark"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <div
        className="cta-glow-orb"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(245,158,11,0.14) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(45,212,191,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "80%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          height: "250px",
          background:
            "radial-gradient(ellipse, rgba(167,139,250,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--container-px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AnimateIn>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
              maxWidth: "700px",
            }}
          >
            {m.finalCta.title}{" "}
            <span style={{ color: "var(--accent)" }}>{m.finalCta.titleAccent}</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            {m.finalCta.subtitle}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button
              className="cta-primary"
              style={{
                padding: "0.875rem 2rem",
                fontSize: "1rem",
                boxShadow: "0 0 30px rgba(245,158,11,0.2)",
              }}
            >
              {m.finalCta.ctaTrial}
            </button>
            <button className="cta-secondary"
              style={{
                padding: "0.875rem 2rem",
                fontSize: "1rem",
              }}
            >
              {m.finalCta.ctaDemo}
            </button>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-tertiary)",
            }}
          >
            {m.finalCta.finePrint}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
