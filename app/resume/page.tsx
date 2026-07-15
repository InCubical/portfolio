import type { Metadata } from "next";

export const metadata: Metadata = { title: "Resume · Shaheed Khan" };

const CONTACT = [
  "+91 63617 56685",
  "incubical@hotmail.com",
  "linkedin.com/in/pathan97",
  "Mysore, Karnataka, India",
];

const EXPERIENCE = [
  {
    role: "Digital Content & Marketing Specialist",
    company: "Innobot Health",
    period: "May 2024 – Present",
    body: "Runs the full demand engine for a US revenue-cycle-management company: automated LinkedIn outreach with Expandi, email at scale with Instantly.ai, SEO, and paid media across Google, Meta and LinkedIn, plus the brand, infographics, social content and website that carry it.",
  },
  {
    role: "Digital Content Marketing Specialist",
    company: "InSource Expansion Group",
    period: "Jul 2024 – Present",
    body: "Built the brand from a blank slate for a global expansion company, the website, SEO foundation, content and identity, and drives the campaigns behind it: performance and keyword strategy, blogs, ads, and LinkedIn outreach that converts.",
  },
  {
    role: "Founder",
    company: "InCubical",
    period: "2018 – Present",
    body: "A studio spanning design, marketing and web. Grew from local design work in Mysore into an end-to-end practice that takes brands from idea to launch to growth.",
  },
  {
    role: "Head of Marketing",
    company: "M & S Associates",
    period: "Sep 2022 – Feb 2024",
    body: "Owned brand and growth for a real-estate firm. Built the website (React, Firebase), ran ads and lead generation, and positioned M&S to stand out through research, targeting and sharp creative.",
  },
  {
    role: "Product Marketing Specialist",
    company: "Malnad Herbals",
    period: "Jul 2020 – Aug 2022",
    body: "Shaped a natural, cruelty-free beauty brand end to end: packaging, promotional and social creative, an SEO-friendly site, and Google and Meta campaigns that turned attention into sales.",
  },
];

const CERTS = [
  "Search Ads 360 Certification",
  "Display & Video 360 Certification",
  "Campaign Manager 360 Certification",
  "Google Analytics Certification",
  "Creative Certification",
  "Fundamentals of Digital Marketing",
];

const SKILLS = [
  "SEO",
  "Content Marketing",
  "Social Media Marketing",
  "Email Marketing",
  "Analytics",
  "Marketing Automation",
  "Conversion Rate Optimization",
  "Branding",
  "Graphic Design",
  "UX / UI Design",
  "Web Design",
  "Print Design",
];

const TOOLS = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "After Effects",
  "Premiere Pro",
  "Figma",
  "Webflow",
  "WordPress",
  "SEMrush",
  "Ahrefs",
  "Expandi.io",
  "Instantly.ai",
  "Google Analytics",
  "HubSpot",
  "React / Next.js",
];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-display)",
  fontSize: "var(--text-small)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  color: "var(--accent)",
  borderTop: "1px solid var(--border)",
  paddingTop: "1.25rem",
  marginBottom: "1.5rem",
};

function Tags({ items }: { items: string[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "0.5rem 1.5rem",
      }}
    >
      {items.map((s) => (
        <span
          key={s}
          style={{
            fontSize: "var(--text-small)",
            color: "var(--muted-light)",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "0.4rem",
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export default function ResumePage() {
  return (
    <section
      className="resume"
      style={{
        maxWidth: "880px",
        margin: "0 auto",
        padding: "clamp(32px, 6vh, 64px) var(--gutter)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "clamp(28px, 4vh, 44px)",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 6vw, 64px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Shaheed Khan
          </h1>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-small)",
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "var(--accent)",
              margin: "0.75rem 0 0",
            }}
          >
            Growth Partner · Marketing, Design &amp; Web
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.6rem" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-small)",
                letterSpacing: "var(--tracking-wide)",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              Visit portfolio
            </span>
            <a
              href="https://portfolio-six-green-y4rbvunose.vercel.app"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-small)",
                color: "var(--foreground)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "1px",
              }}
            >
              portfolio-six-green-y4rbvunose.vercel.app
            </a>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          {CONTACT.map((c) => (
            <span key={c} style={{ fontSize: "var(--text-small)", color: "var(--muted-light)" }}>
              {c}
            </span>
          ))}
          <a
            href="/files/Resume.pdf"
            download="Shaheed-Khan-Resume.pdf"
            className="no-print"
            style={{
              marginTop: "0.75rem",
              alignSelf: "flex-start",
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.6rem 1.2rem",
            }}
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="resume-section" style={{ marginBottom: "clamp(28px, 4vh, 44px)" }}>
        <span className="section-label" style={labelStyle}>
          Summary
        </span>
        <p style={{ fontSize: "var(--text-body)", color: "var(--muted-light)", lineHeight: 1.75, maxWidth: "68ch", margin: 0 }}>
          A growth partner for ambitious brands, connecting marketing, design and
          web into systems that compound. The work spans brand identities, demand
          engines and websites, built alongside founders and leadership teams
          across healthcare, global expansion, real estate and D2C. Founder of
          Pixeldrive.
        </p>
      </div>

      {/* Experience */}
      <div className="resume-section" style={{ marginBottom: "clamp(28px, 4vh, 44px)" }}>
        <span className="section-label" style={labelStyle}>
          Experience
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 4vw, 3rem)" }}>
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.company + e.role}
              className="resume-entry"
              style={
                i > 0
                  ? { borderTop: "1px solid var(--border)", paddingTop: "clamp(2rem, 4vw, 3rem)" }
                  : undefined
              }
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", alignItems: "baseline" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, letterSpacing: "-0.01em", margin: 0 }}>
                  {e.role}
                </h2>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-small)", color: "var(--muted)", letterSpacing: "var(--tracking-wide)" }}>
                  {e.period}
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-small)", color: "var(--accent)", margin: "0.2rem 0 0.6rem" }}>
                {e.company}
              </p>
              <p style={{ fontSize: "var(--text-body)", color: "var(--muted-light)", lineHeight: 1.7, margin: 0, maxWidth: "72ch" }}>
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="resume-section" style={{ marginBottom: "clamp(28px, 4vh, 44px)" }}>
        <span className="section-label" style={labelStyle}>
          Education
        </span>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", alignItems: "baseline" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, margin: 0 }}>
              Diploma, Mechanical Engineering
            </h2>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-small)", color: "var(--accent)", margin: "0.2rem 0 0" }}>
              Vidya Vikas Institute of Engineering &amp; Technology
            </p>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-small)", color: "var(--muted)", letterSpacing: "var(--tracking-wide)" }}>
            2015 – 2018
          </span>
        </div>
      </div>

      {/* Certifications */}
      <div className="resume-section" style={{ marginBottom: "clamp(28px, 4vh, 44px)" }}>
        <span className="section-label" style={labelStyle}>
          Certifications · Google
        </span>
        <Tags items={CERTS} />
      </div>

      {/* Skills */}
      <div className="resume-section" style={{ marginBottom: "clamp(28px, 4vh, 44px)" }}>
        <span className="section-label" style={labelStyle}>
          Skills
        </span>
        <Tags items={SKILLS} />
      </div>

      {/* Tools */}
      <div className="resume-section">
        <span className="section-label" style={labelStyle}>
          Tools
        </span>
        <Tags items={TOOLS} />
      </div>
    </section>
  );
}
