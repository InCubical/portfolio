"use client";

import { useState } from "react";
import ScrollWords from "@/components/ScrollWords";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/pathan97/", label: "LinkedIn" },
  { href: "https://www.instagram.com/pathan_97/", label: "Instagram" },
  { href: "https://www.behance.net/InCubical", label: "Behance" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="section-container">
      <span className="section-label">Contact</span>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(48px, 8vw, 120px)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          marginBottom: "clamp(24px, 4vh, 40px)",
        }}
      >
        Let&rsquo;s{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>talk.</em>
      </h1>
      <ScrollWords className="editorial" style={{ maxWidth: "52ch", marginBottom: "clamp(48px, 8vh, 80px)" }}>
        Tell me where the business actually makes money and what you think is
        quietly blocking it. I&rsquo;ll come back with how I would build the
        funnel, not a list of services.
      </ScrollWords>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start",
        }}
      >
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {sent && (
            <p
              style={{
                marginBottom: "1.5rem",
                fontSize: "var(--text-body)",
                color: "var(--accent)",
              }}
            >
              Thanks, your message is noted. I&rsquo;ll be in touch.
            </p>
          )}
          <div style={{ marginBottom: "1.75rem" }}>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" required className="border-form-control" />
          </div>
          <div style={{ marginBottom: "1.75rem" }}>
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required className="border-form-control" />
          </div>
          <div style={{ marginBottom: "1.75rem" }}>
            <label htmlFor="message">About your project</label>
            <textarea id="message" name="message" rows={4} className="border-form-control !h-auto py-2" />
          </div>
          <button
            type="submit"
            style={{
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              border: "none",
              padding: "0.85rem 2rem",
              cursor: "pointer",
            }}
          >
            Send it →
          </button>
        </form>

        {/* Direct */}
        <div>
          <span className="footer-heading">Direct</span>
          <a
            href="mailto:incubical@hotmail.com"
            className="footer-link"
            style={{ display: "block", fontSize: "var(--text-h3)", marginBottom: "2rem" }}
          >
            incubical@hotmail.com
          </a>
          <span className="footer-heading">Elsewhere</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="footer-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
