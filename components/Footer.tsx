"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://www.linkedin.com/in/pathan97/", label: "LinkedIn" },
  { href: "https://www.instagram.com/pathan_97/", label: "Instagram" },
  { href: "https://www.behance.net/InCubical", label: "Behance" },
  { href: "https://www.facebook.com/pathan97/", label: "Facebook" },
];

export default function Footer() {
  const pathname = usePathname();
  const hideCta = pathname === "/contact";

  return (
    <footer id="footer" style={{ borderTop: "1px solid var(--border)" }}>
      {/* Editorial CTA */}
      {!hideCta && (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        style={{
          padding: "clamp(64px, 10vh, 120px) var(--gutter)",
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <motion.span className="section-label" variants={fadeUp}>
          Let&rsquo;s build something that lasts
        </motion.span>
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7.5vw, 108px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: "var(--foreground)",
            marginBottom: "clamp(28px, 4vh, 48px)",
            maxWidth: "16ch",
          }}
        >
          Every enduring brand started with{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
            a conversation.
          </em>
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.85rem 2rem",
            }}
          >
            Let&rsquo;s talk →
          </Link>
        </motion.div>
      </motion.div>
      )}

      {/* Columns */}
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(40px, 6vh, 64px) var(--gutter)",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "clamp(32px, 5vw, 80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="footer-cols"
      >
        <div>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            PATHAN
          </span>
          <p
            style={{
              fontSize: "var(--text-small)",
              color: "var(--muted)",
              lineHeight: 1.75,
              maxWidth: "34ch",
              margin: 0,
            }}
          >
            I build the acquisition engine, then I run it. Six years across
            healthcare, global expansion, real estate and consumer. Founder of
            Pixeldrive.
          </p>
          <a
            href="/files/Resume.pdf"
            download="Shaheed-Khan-Resume.pdf"
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              fontFamily: "var(--font-display)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "var(--foreground)",
              textDecoration: "none",
              borderBottom: "1px solid var(--foreground)",
              paddingBottom: "1px",
            }}
          >
            Download Resume
          </a>
        </div>

        <div>
          <span className="footer-heading">Pages</span>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <span className="footer-heading">Elsewhere</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a href="mailto:incubical@hotmail.com" className="footer-link">
              incubical@hotmail.com
            </a>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="footer-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(20px, 3vh, 28px) var(--gutter)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-small)",
            color: "var(--muted)",
          }}
        >
          © 2026 Shaheed Khan. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-small)",
            letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          Mysore · Working worldwide
        </span>
      </div>
    </footer>
  );
}
