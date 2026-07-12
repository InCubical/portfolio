"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "./SmoothScrollProvider";

const MENU_LINKS: { href: string; label: string; mobileOnly?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  // Contact lives in the top-nav "Let's talk" on desktop, so it only appears
  // in the menu on mobile (where the top-nav buttons are hidden).
  { href: "/contact", label: "Let’s talk", mobileOnly: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lenisRef = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const lenis = lenisRef?.current;
    if (open) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [open, lenisRef]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`navbar${scrolled ? " navbar--scrolled" : ""}${open ? " navbar--open" : ""}`}
      >
        <Link href="/" className="navbar__logo" onClick={() => setOpen(false)}>
          PATHAN
        </Link>

        <div className="navbar__right">
          <Link href="/resume" className="navbar__talk navbar__cta">
            Resume
          </Link>
          <Link href="/contact" className="navbar__talk navbar__cta">
            Let&rsquo;s talk
          </Link>
          <button
            className={`navbar__hamburger${open ? " navbar__hamburger--open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <button
              className="nav-overlay__close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: "1.4rem",
                right: "var(--gutter)",
                zIndex: 10,
              }}
            >
              ×
            </button>

            <div className="nav-overlay__cols">
              {MENU_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    className={`nav-overlay__col${isActive ? " nav-overlay__col--active" : ""}${link.mobileOnly ? " nav-overlay__col--mobile" : ""}`}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.75, delay: i * 0.06, ease: [0.77, 0, 0.175, 1] }}
                    style={{ position: "relative", padding: 0 }}
                  >
                    <Link
                      href={link.href}
                      className="nav-overlay__link"
                      onClick={() => setOpen(false)}
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "flex-start",
                        padding: "clamp(24px, 4vw, 48px)",
                        paddingBottom: "clamp(40px, 7vh, 72px)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
