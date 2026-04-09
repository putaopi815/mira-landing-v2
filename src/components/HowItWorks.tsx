"use client";

import { AnimateIn } from "./AnimateIn";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";
import { useLocaleContext } from "@/context/LocaleContext";

const stepStyle = [
  { accent: "var(--accent)", glowColor: "rgba(245,158,11,0.2)" },
  { accent: "var(--agent-market)", glowColor: "rgba(245,158,11,0.2)" },
  { accent: "var(--agent-roundtable)", glowColor: "rgba(251,113,133,0.2)" },
] as const;

const chatStyle = [
  { color: "var(--agent-market)", colorBg: "rgba(245,158,11,0.12)" },
  { color: "var(--agent-talent)", colorBg: "rgba(167,139,250,0.12)" },
  { color: "var(--agent-demand)", colorBg: "rgba(45,212,191,0.12)" },
] as const;

export function HowItWorks() {
  const { locale, m } = useLocaleContext();
  const { ref: chatRef, inView: chatInView } = useInView(0.2);
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    setVisibleMessages(0);
  }, [locale]);

  useEffect(() => {
    if (!chatInView) return;
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setVisibleMessages(idx);
      if (idx >= m.how.chat.length) clearInterval(interval);
    }, 700);
    return () => clearInterval(interval);
  }, [chatInView, locale, m.how.chat.length]);

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
          <span className="section-tag">{m.how.tag}</span>
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
              marginBottom: "3.5rem",
              maxWidth: "640px",
            }}
          >
            {m.how.heading}{" "}
            <span style={{ color: "var(--text-secondary)" }}>
              {m.how.headingRest}
            </span>
          </h2>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {m.how.steps.map((step, i) => {
            const style = stepStyle[i];
            const num = String(i + 1).padStart(2, "0");
            return (
              <AnimateIn key={i} delay={0.15 * (i + 1)}>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: style.accent,
                      letterSpacing: "0.06em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {num}
                  </div>

                  <div
                    style={{
                      height: "2px",
                      background: "var(--border-default)",
                      borderRadius: "1px",
                      marginBottom: "1.5rem",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: "100%",
                        background: style.accent,
                        borderRadius: "1px",
                        boxShadow: `0 0 8px ${style.glowColor}`,
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--text-tertiary)",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  >
                    {step.label}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.625rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn delay={0.2}>
          <div
            className="glass-card"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              maxWidth: "720px",
              margin: "0 auto",
              boxShadow: "0 12px 40px rgba(0,0,0,0.4), 0 0 60px rgba(245,158,11,0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "1rem 1.5rem",
                borderBottom: "1px solid var(--border-default)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px rgba(34,197,94,0.4)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
              >
                {m.how.chatHeader}
              </span>
            </div>

            <div
              ref={chatRef}
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {m.how.chat.map((msg, i) => {
                const cs = chatStyle[i];
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      opacity: i < visibleMessages ? 1 : 0,
                      transform: i < visibleMessages ? "translateY(0)" : "translateY(12px)",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: cs.colorBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        color: cs.color,
                        flexShrink: 0,
                      }}
                    >
                      {msg.agent[0]}
                    </div>

                    <div>
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: cs.color,
                          marginBottom: "0.25rem",
                          display: "block",
                        }}
                      >
                        {msg.agent}
                      </span>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                          color: "var(--text-secondary)",
                        }}
                      >
                        {msg.message}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
