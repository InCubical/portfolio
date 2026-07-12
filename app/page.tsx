"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LineReveal from "@/components/LineReveal";
import ScrollWords from "@/components/ScrollWords";
import LogoMarquee from "@/components/LogoMarquee";
import PortfolioGrid from "@/components/PortfolioGrid";
import { fadeUp } from "@/lib/motion";
import { featuredProjects } from "@/app/data/projects";

const DISCIPLINES = [
  {
    num: "01",
    title: "Growth Marketing",
    desc: "Paid media, search, lifecycle and outreach run as one connected system, each channel sharpening the others and all pointed at the same outcome.",
  },
  {
    num: "02",
    title: "Brand & Design",
    desc: "Identity, creative and content that make complex ideas land. Brand systems that look sharp and stay consistent everywhere they appear.",
  },
  {
    num: "03",
    title: "Web & Product",
    desc: "Websites and platforms built to convert and endure: fast, considered, and shaped around how people actually move through them.",
  },
  {
    num: "04",
    title: "Demand & Outreach",
    desc: "Precise, personalised outreach that reaches the right people at the right moment. Pipeline built on signal, not on spray.",
  },
];

const EXPERIENCE_TEASER = [
  { company: "Innobot Health", role: "Digital Content & Marketing Specialist", note: "US healthcare · RCM" },
  { company: "InSource Expansion Group", role: "Digital Content Marketing Specialist", note: "Global expansion" },
  { company: "InCubical", role: "Founder", note: "Since 2018" },
];

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(40px, 6vw, 80px)",
  fontWeight: 700,
  letterSpacing: "var(--tracking-tight)",
  lineHeight: 1.1,
  marginBottom: "clamp(32px, 5vh, 56px)",
};

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ padding: "clamp(48px, 8vh, 80px) var(--gutter)", maxWidth: "100%" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
          <motion.span
            className="section-label"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ marginBottom: "1.5rem" }}
          >
            Portfolio · Shaheed Khan
          </motion.span>

          <h1 className="hero-display">
            <LineReveal
              animateOnLoad
              delay={0.15}
              stagger={0.14}
              lines={[
                "I help brands",
                "grow with",
                <em key="em" style={{ color: "var(--accent)", fontStyle: "italic" }}>
                  intent.
                </em>,
              ]}
            />
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginTop: "clamp(24px, 4vh, 40px)",
            }}
          >
            <motion.p
              className="editorial"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              style={{ maxWidth: "50ch" }}
            >
              A growth partner for ambitious companies, working alongside founders
              and leadership teams to turn marketing, design and data into a system
              that compounds. <strong>Not one-off campaigns. Momentum that lasts.</strong>
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={5}
              style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}
            >
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
                  padding: "0.75rem 1.5rem",
                  whiteSpace: "nowrap",
                }}
              >
                Let&rsquo;s talk →
              </Link>
              <a
                href="/files/Resume.pdf"
                download="Shaheed-Khan-Resume.pdf"
                className="hero-resume"
                style={{
                  color: "var(--foreground)",
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "var(--tracking-wide)",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--foreground)",
                  paddingBottom: "1px",
                  whiteSpace: "nowrap",
                }}
              >
                Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Positioning statement ────────────────────────── */}
      <section className="section-container">
        <ScrollWords className="section-statement">
          The brands that endure don&rsquo;t win by shouting louder. They win by
          understanding their audience, their numbers and their next move more
          clearly than anyone else,{" "}
          <span style={{ color: "var(--accent)" }}>
            and building the systems to act on it.
          </span>{" "}
          That is the work I do.
        </ScrollWords>
      </section>

      {/* ── The person (me) ──────────────────────────────── */}
      <section className="section-container" style={{ borderTop: "1px solid var(--border)" }}>
        <span className="section-label">The person behind the work</span>
        <h2 style={{ ...headingStyle, maxWidth: "22ch" }}>
          A builder at heart:{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
            designer, marketer, founder.
          </em>
        </h2>
        <ScrollWords className="editorial" style={{ maxWidth: "60ch", marginBottom: "clamp(32px, 5vh, 56px)" }}>
          A path that started in design, then marketing and web, and never stopped
          connecting the two. Today that means working with companies across
          healthcare and global expansion, and running a studio, Pixeldrive, that
          helps brands look sharp, reach the right people, and grow on purpose.
        </ScrollWords>
      </section>
      <div
        style={{
          position: "relative",
          minHeight: "60vh",
          backgroundImage: "url('/images/media/me.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 15%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "clamp(24px, 5vh, 56px)",
        }}
        className="bg-scroll md:bg-fixed"
        aria-label="Shaheed Khan"
      >
        <a
          href="/files/Resume.pdf"
          download="Shaheed-Khan-Resume.pdf"
          className="photo-resume"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#0d0d0d",
            fontFamily: "var(--font-display)",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "0.85rem 1.75rem",
            boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
          }}
        >
          Download Resume ↓
        </a>
      </div>

      {/* ── What I do ────────────────────────────────────── */}
      <motion.section
        className="section-container"
        style={{ borderTop: "1px solid var(--border)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
      >
        <motion.span className="section-label" variants={fadeUp}>
          What I do
        </motion.span>
        <motion.h2 variants={fadeUp} style={{ ...headingStyle, maxWidth: "26ch" }}>
          Four disciplines.{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
            One growth engine.
          </em>
        </motion.h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {DISCIPLINES.map((d, i) => (
            <motion.div
              key={d.num}
              variants={fadeUp}
              custom={i}
              style={{ background: "var(--background)", padding: "clamp(28px, 4vw, 48px)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-small)",
                  letterSpacing: "var(--tracking-wide)",
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "0.9rem",
                }}
              >
                {d.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 2.6vw, 30px)",
                  fontWeight: 600,
                  letterSpacing: "var(--tracking-tight)",
                  marginBottom: "0.75rem",
                  color: "var(--foreground)",
                }}
              >
                {d.title}
              </h3>
              <p style={{ fontSize: "var(--text-body)", color: "var(--muted-light)", lineHeight: 1.75, margin: 0, maxWidth: "38ch" }}>
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Selected work ────────────────────────────────── */}
      <motion.section
        className="section-container"
        style={{ borderTop: "1px solid var(--border)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.span className="section-label" variants={fadeUp}>
          Selected work
        </motion.span>
        <motion.div
          variants={fadeUp}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", marginBottom: "clamp(32px, 5vh, 56px)" }}
        >
          <h2 style={{ ...headingStyle, marginBottom: 0, maxWidth: "20ch" }}>
            Work I&rsquo;m proud to{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
              put my name on.
            </em>
          </h2>
          <Link
            href="/work"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "var(--accent)",
              textDecoration: "none",
              borderBottom: "1px solid var(--accent)",
              paddingBottom: "2px",
              whiteSpace: "nowrap",
            }}
          >
            See all work →
          </Link>
        </motion.div>
        <motion.div variants={fadeUp}>
          <PortfolioGrid projects={featuredProjects} />
        </motion.div>
      </motion.section>

      {/* ── Tools ────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid var(--border)", paddingTop: "clamp(48px, 8vh, 80px)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--gutter)", marginBottom: "clamp(28px, 4vh, 40px)" }}>
          <span className="section-label">The stack I build with</span>
        </div>
        <LogoMarquee />
      </section>

      {/* ── Experience teaser ────────────────────────────── */}
      <motion.section
        className="section-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.span className="section-label" variants={fadeUp}>
          Experience
        </motion.span>
        <motion.div
          variants={fadeUp}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", marginBottom: "clamp(32px, 5vh, 56px)" }}
        >
          <h2 style={{ ...headingStyle, marginBottom: 0, maxWidth: "20ch" }}>
            Where I&rsquo;ve{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
              done the work.
            </em>
          </h2>
          <Link
            href="/experience"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "var(--accent)",
              textDecoration: "none",
              borderBottom: "1px solid var(--accent)",
              paddingBottom: "2px",
              whiteSpace: "nowrap",
            }}
          >
            The full story →
          </Link>
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {EXPERIENCE_TEASER.map((e, i) => (
            <motion.div
              key={e.company}
              variants={fadeUp}
              custom={i}
              style={{
                borderTop: "1px solid var(--border)",
                padding: "clamp(18px, 2.5vw, 28px) 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr auto",
                gap: "1.5rem",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 500, color: "var(--foreground)" }}>
                {e.company}
              </span>
              <span style={{ fontSize: "var(--text-body)", color: "var(--muted-light)" }}>{e.role}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-small)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--muted)", textAlign: "right" }}>
                {e.note}
              </span>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </motion.section>
    </>
  );
}
