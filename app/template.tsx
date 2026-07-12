"use client";

import { motion } from "framer-motion";

// Runs on every navigation (templates remount per route). A white panel is
// held over the screen and fades out while the incoming page fades up,
// giving a clean "flash to white, then reveal" transition between pages.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.52, 1] }}
        style={{
          position: "fixed",
          inset: 0,
          background: "#ffffff",
          zIndex: 500,
          pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.52, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
