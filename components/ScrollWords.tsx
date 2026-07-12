"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Word({
  children,
  wordStyle,
  progress,
  i,
  total,
}: {
  children: ReactNode;
  wordStyle: CSSProperties;
  progress: MotionValue<number>;
  i: number;
  total: number;
}) {
  const step = 1 / total;
  const start = Math.max(0, i * step - step * 0.5);
  const end = Math.min(1, (i + 1) * step + step * 0.5);
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  return (
    <motion.span style={{ opacity, display: "inline", willChange: "opacity", ...wordStyle }}>
      {children}{" "}
    </motion.span>
  );
}

type WordEntry = { text: string; style: CSSProperties };

function extractWords(child: ReactNode, inherited: CSSProperties = {}): WordEntry[] {
  if (child === null || child === undefined || typeof child === "boolean") return [];
  if (typeof child === "string" || typeof child === "number") {
    return String(child)
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => ({ text: w, style: inherited }));
  }
  if (typeof child !== "object") return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const el = child as any;
  const style = { ...inherited, ...(el.props?.style || {}) };
  const kids = el.props?.children;
  if (!kids) return [];
  return (Array.isArray(kids) ? kids : [kids]).flatMap((k: ReactNode) =>
    extractWords(k, style)
  );
}

export default function ScrollWords({
  children,
  className,
  style,
  tag: Tag = "p",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  tag?: "p" | "div" | "h2";
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });

  const words = (Array.isArray(children) ? children : [children]).flatMap((c) =>
    extractWords(c)
  );

  return (
    <Tag ref={ref as React.Ref<HTMLParagraphElement>} className={className} style={style}>
      {words.map((w, i) => (
        <Word key={i} wordStyle={w.style} progress={scrollYProgress} i={i} total={words.length}>
          {w.text}
        </Word>
      ))}
    </Tag>
  );
}
