import type { Metadata } from "next";
import ScrollWords from "@/components/ScrollWords";

export const metadata: Metadata = {
  title: "Experience · Shaheed Khan",
};

const ROLES = [
  {
    company: "Innobot Health",
    role: "Digital Content & Marketing Specialist",
    period: "May 2024 – Present",
    place: "Remote · US revenue cycle",
    body: "I own how this company acquires customers. A long cycle, high trust sale into hospital finance and physician group leadership, where nobody signs from an ad and no single channel closes anything alone. I built and run the whole acquisition system: signal based outbound at scale, performance media, an organic search and content programme that compounds, and the conversion architecture holding it together. The brand surface it travels on is mine too, the site, the landing experiences, the creative, the social. One person, whole funnel, first touch to booked meeting.",
  },
  {
    company: "InSource Expansion Group",
    role: "Digital Content Marketing Specialist",
    period: "Jul 2024 – Present",
    place: "Hybrid · Global expansion",
    body: "Took a global expansion company from no brand and no pipeline to a working go to market. Positioning and identity first, then the website and search foundation, then the demand programmes that run on top: performance campaigns, keyword and content strategy, and an outbound motion aimed only at the accounts worth having. Built the story before the machine, because a machine selling a weak story just burns budget faster.",
  },
  {
    company: "M & S Associates",
    role: "Head of Marketing",
    period: "Sep 2022 – Feb 2024",
    place: "Mysore, India · Real estate",
    body: "Owned brand and revenue for a real estate firm. Repositioned how the company presented itself, shipped the website myself in React and Firebase, and ran the acquisition programmes that fed the sales team. In a market where every competitor says the same three things, the edge came from sharper research, tighter targeting and creative that did not look like everyone else's.",
  },
  {
    company: "Malnad Herbals",
    role: "Product Marketing Specialist",
    period: "Jul 2020 – Aug 2022",
    place: "Mysore, India · Consumer beauty",
    body: "Built a natural, cruelty free beauty brand end to end: the packaging on the shelf, the creative in the feed, the site it all pointed at, and the paid programmes that turned attention into repeat purchase. Consumer taught me unit economics the hard way. Every rupee of spend had to come back, and the dashboard said so within the week.",
  },
  {
    company: "InCubical",
    role: "Founder",
    period: "2018 – Present",
    place: "Mysore, India · Mechanical design & CNC",
    body: "Where I started. A mechanical design and CNC programming practice: part design, tooling, and the G code that actually cut the metal. It is the least marketing thing on this page and quietly the most useful. Designing for manufacture teaches you to model the whole system before you commit to it, to work out where it fails before you build it, and to respect a constraint you cannot argue your way around. I run growth the same way.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-container" style={{ paddingBottom: "clamp(32px, 5vh, 56px)" }}>
        <span className="section-label">Experience</span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(42px, 7vw, 96px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.02,
            maxWidth: "18ch",
            marginBottom: "clamp(24px, 4vh, 40px)",
          }}
        >
          Where I&rsquo;ve owned the{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
            number.
          </em>
        </h1>
        <ScrollWords className="editorial" style={{ maxWidth: "60ch" }}>
          Six years across healthcare, global expansion, real estate and consumer.
          Different categories, same job: work out where growth actually comes
          from, assemble the stack around that answer, and own what it produces.
          Alongside it I run Pixeldrive, my own design, marketing and web studio.
        </ScrollWords>
      </section>

      {/* Timeline */}
      <section className="section-container" style={{ borderTop: "1px solid var(--border)", paddingTop: "clamp(40px, 6vh, 64px)" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {ROLES.map((r) => (
            <article
              key={r.company + r.role}
              style={{
                borderTop: "1px solid var(--border)",
                padding: "clamp(28px, 4vw, 48px) 0",
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
                gap: "clamp(20px, 4vw, 56px)",
                alignItems: "start",
              }}
              className="exp-row"
            >
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(26px, 3.4vw, 44px)",
                    fontWeight: 600,
                    letterSpacing: "var(--tracking-tight)",
                    lineHeight: 1.1,
                    margin: 0,
                    color: "var(--foreground)",
                  }}
                >
                  {r.company}
                </h2>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-body)", color: "var(--accent)", margin: "0.5rem 0 0" }}>
                  {r.role}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-small)",
                    letterSpacing: "var(--tracking-wide)",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    margin: "0 0 1rem",
                  }}
                >
                  {r.period} · {r.place}
                </p>
                <p style={{ fontSize: "var(--text-body)", color: "var(--muted-light)", lineHeight: 1.8, margin: 0 }}>
                  {r.body}
                </p>
              </div>
            </article>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </section>
    </>
  );
}
