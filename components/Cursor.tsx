"use client";

import { useEffect, useRef } from "react";

const LERP = 0.1;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const blendRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot = dotRef.current;
    const blend = blendRef.current;
    const fill = fillRef.current;
    const lbl = labelRef.current;
    if (!dot || !blend || !fill) return;

    let mx = -300,
      my = -300;
    let rx = -300,
      ry = -300;
    let rafId: number;
    let visible = false;
    let mode = "default";

    const setMode = (next: string, text = "") => {
      if (mode === next) return;
      mode = next;
      dot.dataset.mode = next;
      blend.dataset.mode = next;
      fill.dataset.mode = next;
      if (lbl) lbl.textContent = text;
    };

    const onMove = (e: MouseEvent) => {
      if (!visible) {
        dot.style.opacity = "1";
        blend.style.opacity = "1";
        fill.style.opacity = "1";
        visible = true;
      }
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const isCard = target.closest?.('.portfolio-card, [data-cursor="card"]');
      const isLink = target.closest?.("a, button");
      if (isCard) setMode("card", "View");
      else if (isLink) setMode("link");
      else setMode("default");
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as Element;
      const el = target.closest?.('a, button, .portfolio-card');
      if (el && !el.contains(e.relatedTarget as Node)) setMode("default");
    };

    const tick = () => {
      rx += (mx - rx) * LERP;
      ry += (my - ry) * LERP;
      const t = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
      blend.style.transform = t;
      fill.style.transform = t;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} data-mode="default" className="cur-dot" aria-hidden style={{ opacity: 0 }} />
      <div ref={blendRef} data-mode="default" className="cur-blend" aria-hidden style={{ opacity: 0 }} />
      <div ref={fillRef} data-mode="default" className="cur-fill" aria-hidden style={{ opacity: 0 }}>
        <span ref={labelRef} className="cur-fill__label" />
      </div>
    </>
  );
}
