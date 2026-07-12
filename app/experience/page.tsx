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
    place: "Remote · US Healthcare (RCM)",
    body: "Innobot Health is reshaping healthcare automation in US revenue-cycle management. The work runs the full demand engine: automated LinkedIn outreach with Expandi, email at scale with Instantly, SEO that holds page one, and paid media, alongside everything that makes it land, from infographics and social content to brand, LinkedIn ads and the website itself.",
  },
  {
    company: "InSource Expansion Group",
    role: "Digital Content Marketing Specialist",
    period: "Jul 2024 – Present",
    place: "Hybrid · Global expansion & hiring",
    body: "A global expansion company that helps US firms hire across borders. Its presence was built from a blank slate: the website, the SEO foundation, the content and the brand, along with the campaigns behind it, from performance and keyword strategy to blogs, ads, social and LinkedIn outreach that converts.",
  },
  {
    company: "InCubical",
    role: "Founder",
    period: "Apr 2018 – Present",
    place: "Mysore, India",
    body: "Where it began. InCubical started as local design work in Mysore and grew into a studio spanning design, then marketing, then web. It remains the foundation for the work today: taking a brand from idea to launch to growth.",
  },
  {
    company: "M & S Associates",
    role: "Head of Marketing",
    period: "Sep 2022 – Feb 2024",
    place: "Mysore, India · Real estate",
    body: "Real estate moves fast, and so did the approach. The brand and website were built from the ground up (React, deployed on Firebase), with ads and lead generation, research, sharp targeting and creative that made M&S stand out in a crowded market.",
  },
  {
    company: "Malnad Herbals",
    role: "Product Marketing Specialist",
    period: "Jul 2020 – Aug 2022",
    place: "Mysore, India · D2C beauty",
    body: "A natural, cruelty-free beauty brand made to look as good as its products: packaging, promotional and social creative, a clean SEO-friendly site, and Google and Meta campaigns that turned attention into sales.",
  },
];

const CERTS = [
  "Search Ads 360 Certification, Google (2023)",
  "Google Analytics Certification, Google (2023)",
  "Display & Video 360 Certification, Google (2023)",
  "Campaign Manager 360 Certification, Google (2023)",
  "Creative Certification, Google (2023)",
  "Fundamentals of Digital Marketing, Google (2022)",
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
          A decade of turning ideas into{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
            growth.
          </em>
        </h1>
        <ScrollWords className="editorial" style={{ maxWidth: "60ch" }}>
          A path that started in design and moved into marketing and web,
          connecting the two ever since. The work has spanned founders and
          leadership teams across healthcare, global expansion, real estate and
          D2C, with a studio built in between.
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

      {/* Credentials */}
      <section className="section-container" style={{ borderTop: "1px solid var(--border)" }}>
        <span className="section-label">Credentials</span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(28px, 4vw, 56px)",
            marginTop: "clamp(20px, 3vh, 32px)",
          }}
        >
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 600, marginBottom: "1rem" }}>
              Certifications
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {CERTS.map((c) => (
                <li key={c} style={{ fontSize: "var(--text-body)", color: "var(--muted-light)", borderTop: "1px solid var(--border)", paddingTop: "0.6rem" }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 600, marginBottom: "1rem" }}>
              Education
            </h3>
            <p style={{ fontSize: "var(--text-body)", color: "var(--muted-light)", lineHeight: 1.8, margin: 0 }}>
              Diploma, Mechanical Engineering
              <br />
              Vidya Vikas Institute of Engineering and Technology
              <br />
              2015–2018
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
