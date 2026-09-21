import type { Metadata } from "next";

export const metadata: Metadata = { title: "Resume · Shaheed Khan" };

const CONTACT = [
  "+91 63617 56685",
  "incubical@hotmail.com",
  "linkedin.com/in/pathan97",
  "Mysore, India · works US hours",
];

const POSITIONING = "I build the acquisition engine, then I run it.";

const SUMMARY = [
  "Most companies hire three agencies and four specialists to do what I do end to end: read the business, work out where growth actually comes from, assemble the stack around that answer, and own the number it produces.",
  "Six years of it, across healthcare, global expansion, real estate and consumer. Today that means full funnel demand for a US revenue cycle company and a global expansion firm, plus Pixeldrive, my own studio. I am not a channel person. I am the person you hand the funnel to.",
];

const PRINCIPLES = [
  {
    title: "Diagnose before building.",
    body: "Every engagement opens with the same question: where does revenue actually come from, and what is quietly blocking it. The channel plan comes after that answer, never before it.",
  },
  {
    title: "I bring my own stack.",
    body: "Outbound, performance media, search, lifecycle, measurement and the web layer. I pick the tools, wire them together and operate them. No handoffs, no agency lag, no waiting on a queue to ship a test.",
  },
  {
    title: "Funnel first, channel second.",
    body: "Traffic is the easy part. I build the whole path: demand capture, the conversion surface, qualification, follow up, and the reporting that tells you which part of it is lying to you.",
  },
  {
    title: "Strategy and execution live in the same person.",
    body: "I can spot the opportunity on Monday and have the campaign, the creative and the landing experience live by Friday, then read the result and move again.",
  },
];

const EXPERIENCE = [
  {
    role: "Digital Content & Marketing Specialist",
    company: "Innobot Health",
    period: "May 2024 – Present",
    body: [
      "I own how this company acquires customers. US revenue cycle management, a long cycle, high trust sale into hospital finance and physician group leadership.",
      "Built and run the entire acquisition system: signal based outbound at scale across email and LinkedIn, performance media across Google, Meta and LinkedIn, an organic search and content programme that compounds, and the conversion architecture holding it all together. The brand surface it travels on is mine too, the site, the landing experiences, the creative, the social.",
      "One person, whole funnel, first touch to booked meeting.",
    ],
  },
  {
    role: "Digital Content Marketing Specialist",
    company: "InSource Expansion Group",
    period: "Jul 2024 – Present",
    body: [
      "Took a global expansion company from no brand and no pipeline to a working go to market. Positioning and identity first, then the website and search foundation, then the demand programmes that run on top: performance campaigns, keyword and content strategy, and an outbound motion aimed only at the accounts worth having.",
      "Built the story before the machine, because a machine selling a weak story just burns budget faster.",
    ],
  },
  {
    role: "Head of Marketing",
    company: "M & S Associates",
    period: "Sep 2022 – Feb 2024",
    body: [
      "Owned brand and revenue for a real estate firm. Repositioned how the company presented itself, shipped the website myself in React and Firebase, and ran the acquisition programmes that fed the sales team.",
      "In a market where every competitor says the same three things, the edge came from sharper research, tighter targeting and creative that did not look like everyone else's.",
    ],
  },
  {
    role: "Product Marketing Specialist",
    company: "Malnad Herbals",
    period: "Jul 2020 – Aug 2022",
    body: [
      "Built a natural, cruelty free beauty brand end to end: the packaging on the shelf, the creative in the feed, the site it all pointed at, and the paid programmes across Google and Meta that turned attention into repeat purchase.",
      "Consumer taught me unit economics the hard way. Every rupee of spend had to come back, and the dashboard said so within the week.",
    ],
  },
  {
    role: "Founder",
    company: "InCubical",
    period: "2018 – Present",
    body: [
      "Where I started. A mechanical design and CNC programming practice: part design, tooling, and the G code that actually cut the metal.",
      "It is the least marketing thing on this page and quietly the most useful. Designing for manufacture teaches you to model the whole system before you commit to it, to work out where it fails before you build it, and to respect a constraint you cannot argue your way around. I run growth the same way.",
    ],
  },
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
            Growth Partner · Demand, Brand &amp; Revenue Systems
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
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 2.6vw, 30px)",
            fontWeight: 600,
            letterSpacing: "var(--tracking-tight)",
            lineHeight: 1.25,
            color: "var(--foreground)",
            maxWidth: "24ch",
            margin: "0 0 1.5rem",
          }}
        >
          {POSITIONING}
        </p>
        {SUMMARY.map((p) => (
          <p
            key={p.slice(0, 24)}
            style={{
              fontSize: "var(--text-body)",
              color: "var(--muted-light)",
              lineHeight: 1.75,
              maxWidth: "68ch",
              margin: "0 0 1rem",
            }}
          >
            {p}
          </p>
        ))}
      </div>

      {/* How I operate */}
      <div className="resume-section" style={{ marginBottom: "clamp(28px, 4vh, 44px)" }}>
        <span className="section-label" style={labelStyle}>
          How I operate
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(1.25rem, 3vw, 2rem)",
          }}
        >
          {PRINCIPLES.map((p) => (
            <div key={p.title}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(16px, 1.8vw, 19px)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  margin: "0 0 0.5rem",
                  color: "var(--foreground)",
                }}
              >
                {p.title}
              </h2>
              <p style={{ fontSize: "var(--text-body)", color: "var(--muted-light)", lineHeight: 1.7, margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="resume-section">
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
              {e.body.map((b) => (
                <p
                  key={b.slice(0, 24)}
                  style={{ fontSize: "var(--text-body)", color: "var(--muted-light)", lineHeight: 1.7, margin: "0 0 0.75rem", maxWidth: "72ch" }}
                >
                  {b}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
