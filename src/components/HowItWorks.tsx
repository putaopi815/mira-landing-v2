"use client";

import { AnimateIn } from "./AnimateIn";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

const steps = [
  {
    num: "01",
    label: "You Submit",
    title: "Drop in a job requirement",
    body: "Paste a JD, describe the role in your own words, or upload a brief. Mira takes it from there.",
    accent: "var(--accent)",
    glowColor: "rgba(245,158,11,0.2)",
  },
  {
    num: "02",
    label: "Agents Work",
    title: "Three perspectives, running in parallel",
    body: "Demand analyzes the role. Market scans the landscape. Talent searches for people. They start at the same time and adjust as insights come in.",
    accent: "var(--agent-market)",
    glowColor: "rgba(245,158,11,0.2)",
  },
  {
    num: "03",
    label: "Roundtable",
    title: "They debate. You decide.",
    body: "When agents disagree — on a candidate's fit, on market timing, on whether to relax a requirement — they hash it out. You see the reasoning and the final shortlist.",
    accent: "var(--agent-roundtable)",
    glowColor: "rgba(251,113,133,0.2)",
  },
];

const chatMessages = [
  {
    agent: "Market",
    color: "var(--agent-market)",
    colorBg: "rgba(245,158,11,0.12)",
    message:
      "Meta just announced a FAIR restructure. Three team members in the target profile may be affected. Competition for these candidates will spike within 48 hours.",
  },
  {
    agent: "Talent",
    color: "var(--agent-talent)",
    colorBg: "rgba(167,139,250,0.12)",
    message:
      "Adjusting to urgent priority. Also flagging a former colleague in the same group — adding to search.",
  },
  {
    agent: "Demand",
    color: "var(--agent-demand)",
    colorBg: "rgba(45,212,191,0.12)",
    message:
      "If these candidates become available, the original salary range may not be competitive. Recommend increasing budget ceiling by 15%.",
  },
];

export function HowItWorks() {
  const { ref: chatRef, inView: chatInView } = useInView(0.2);
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    if (!chatInView) return;
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setVisibleMessages(idx);
      if (idx >= chatMessages.length) clearInterval(interval);
    }, 700);
    return () => clearInterval(interval);
  }, [chatInView]);

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
          <span className="section-tag">How It Works</span>
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
            Three Agents. One Shortlist.{" "}
            <span style={{ color: "var(--text-secondary)" }}>
              Zero Guesswork.
            </span>
          </h2>
        </AnimateIn>

        {/* Steps — horizontal timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={0.15 * (i + 1)}>
              <div style={{ position: "relative" }}>
                {/* Step number */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: step.accent,
                    letterSpacing: "0.06em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.num}
                </div>

                {/* Progress bar with glow */}
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
                      background: step.accent,
                      borderRadius: "1px",
                      boxShadow: `0 0 8px ${step.glowColor}`,
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
          ))}
        </div>

        {/* Roundtable Chat Simulation — glass card */}
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
            {/* Header */}
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
                Roundtable — Live Discussion
              </span>
            </div>

            {/* Messages */}
            <div
              ref={chatRef}
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {chatMessages.map((msg, i) => (
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
                  {/* Agent avatar */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: msg.colorBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      color: msg.color,
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
                        color: msg.color,
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
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
