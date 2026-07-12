import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollWords from "@/components/ScrollWords";
import { featuredProjects } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "Work · Shaheed Khan",
};

export default function WorkPage() {
  return (
    <section className="section-container">
      <span className="section-label">Selected work</span>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(42px, 7vw, 96px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.02,
          maxWidth: "16ch",
          marginBottom: "clamp(24px, 4vh, 40px)",
        }}
      >
        Work I&rsquo;m proud to{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
          put my name on.
        </em>
      </h1>
      <ScrollWords className="editorial" style={{ maxWidth: "58ch", marginBottom: "clamp(40px, 7vh, 72px)" }}>
        A selection of brands and products shaped from identity and design to
        launch and growth. Each one built to look sharp and earn its place in the
        market.
      </ScrollWords>
      <PortfolioGrid projects={featuredProjects} />
    </section>
  );
}
