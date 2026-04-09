"use client";

import { useInView } from "@/hooks/useInView";
import { ReactNode } from "react";

type Variant = "fade-up" | "fade-in" | "scale-in";

export function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView(0.1);

  const classMap: Record<Variant, string> = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "scale-in": "animate-scale-in",
  };

  return (
    <div
      ref={ref}
      className={`${classMap[variant]} ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
