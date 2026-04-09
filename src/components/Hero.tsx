"use client";

import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  /* Glowing constellation visualization — agent nodes with pulsing connections */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const nodes = [
      { color: "45,212,191", cx: 0.2, cy: 0.3, r: 60, phase: 0 },
      { color: "245,158,11", cx: 0.75, cy: 0.2, r: 52, phase: 1.4 },
      { color: "167,139,250", cx: 0.7, cy: 0.7, r: 56, phase: 2.8 },
      { color: "251,113,133", cx: 0.38, cy: 0.58, r: 64, phase: 4.2 },
    ];

    const draw = () => {
      time += 0.0015;
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      ctx.clearRect(0, 0, w, h);

      const positions = nodes.map((n) => ({
        x: n.cx * w + Math.sin(time + n.phase) * 30,
        y: n.cy * h + Math.cos(time * 0.5 + n.phase) * 22,
      }));

      /* Glowing connection lines */
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const alpha = 0.04 + Math.sin(time * 1.2 + i * 0.8 + j * 1.3) * 0.02;
          const grad = ctx.createLinearGradient(
            positions[i].x, positions[i].y,
            positions[j].x, positions[j].y
          );
          grad.addColorStop(0, `rgba(${nodes[i].color},${alpha * 2})`);
          grad.addColorStop(0.5, `rgba(245,158,11,${alpha})`);
          grad.addColorStop(1, `rgba(${nodes[j].color},${alpha * 2})`);

          ctx.beginPath();
          ctx.moveTo(positions[i].x, positions[i].y);
          ctx.lineTo(positions[j].x, positions[j].y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      /* Traveling data packets */
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const t = (time * 1.5 + i * 0.7 + j * 1.1) % 1;
          const px = positions[i].x + (positions[j].x - positions[i].x) * t;
          const py = positions[i].y + (positions[j].y - positions[i].y) * t;
          const pGrad = ctx.createRadialGradient(px, py, 0, px, py, 4);
          pGrad.addColorStop(0, "rgba(245,158,11,0.4)");
          pGrad.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = pGrad;
          ctx.fill();
        }
      }

      /* Node orbs — larger glow on dark */
      nodes.forEach((n, idx) => {
        const x = positions[idx].x;
        const y = positions[idx].y;
        const pulse = 1 + Math.sin(time * 1.5 + n.phase) * 0.08;
        const r = n.r * pulse;

        /* Outer glow */
        const outerGrad = ctx.createRadialGradient(x, y, 0, x, y, r * 1.5);
        outerGrad.addColorStop(0, `rgba(${n.color},0.08)`);
        outerGrad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(x, y, r * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = outerGrad;
        ctx.fill();

        /* Inner glow */
        const innerGrad = ctx.createRadialGradient(x, y, 0, x, y, r * 0.6);
        innerGrad.addColorStop(0, `rgba(${n.color},0.2)`);
        innerGrad.addColorStop(0.7, `rgba(${n.color},0.05)`);
        innerGrad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(x, y, r * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = innerGrad;
        ctx.fill();

        /* Core dot */
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color},0.5)`;
        ctx.fill();
      });

      /* Background stars */
      for (let i = 0; i < 40; i++) {
        const sx = (Math.sin(i * 3.7 + time * 0.1) * 0.5 + 0.5) * w;
        const sy = (Math.cos(i * 2.3 + time * 0.08) * 0.5 + 0.5) * h;
        const sa = 0.03 + Math.sin(time + i * 1.1) * 0.02;
        ctx.beginPath();
        ctx.arc(sx, sy, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${sa})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        overflow: "hidden",
      }}
      className="hero-dark"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      />

      <div className="grid-dark" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "820px",
          padding: "0 var(--container-px)",
          paddingTop: "7rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.15s",
            marginBottom: "1.5rem",
          }}
        >
          <span className="section-tag">AI Recruiting Platform</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.75rem, 7vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            color: "var(--text-primary)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.3s",
            marginBottom: "1.5rem",
          }}
        >
          Your AI Recruiting
          <br />
          Team.{" "}
          <span style={{ color: "var(--accent)" }}>Always&nbsp;On.</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            maxWidth: "540px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.5s",
            marginBottom: "2.5rem",
          }}
        >
          Three AI agents analyze demand, scan the market, and source
          talent — in parallel, around the clock. You get a curated
          shortlist, not a pile of resumes.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.65s",
            marginBottom: "0.75rem",
          }}
        >
          <button className="cta-primary">Start Free Trial</button>
          <button className="cta-secondary">Book a Demo</button>
        </div>

        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--text-tertiary)",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.8s",
          }}
        >
          No credit card required
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, var(--bg-primary))",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
