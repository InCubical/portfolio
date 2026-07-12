import type { Variants } from "framer-motion";

// Shared fade-up used across sections (mirrors the official site's stagger reveals).
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.52, 1] },
  }),
};

export const stagger = (children = 0.1): Variants => ({
  visible: { transition: { staggerChildren: children } },
});
