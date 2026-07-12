"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const lineVariants: Variants = {
  hidden: { y: "105%" },
  visible: {
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LineReveal({
  lines,
  animateOnLoad = false,
  delay = 0,
  stagger = 0.12,
  style,
  className,
}: {
  lines: ReactNode[];
  animateOnLoad?: boolean;
  delay?: number;
  stagger?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const trigger = animateOnLoad
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-40px" },
      };

  return (
    <motion.div
      {...trigger}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      style={style}
      className={className}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ overflow: "hidden" }}>
          <motion.span style={{ display: "block" }} variants={lineVariants}>
            {line}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}
