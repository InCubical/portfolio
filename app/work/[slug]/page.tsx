import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectHero from "@/components/project/ProjectHero";
import InnobotStack from "@/components/project/InnobotStack";
import InnobotSystem from "@/components/project/InnobotSystem";
import InteractiveBentoGallery from "@/components/InteractiveBentoGallery";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollWords from "@/components/ScrollWords";
import { projects, getProject, relatedProjects } from "@/app/data/projects";

// Two-column bento: most tiles fill one column, some expand to both.
const SPANS = [
  "col-span-1 row-span-4",
  "col-span-1 row-span-5",
  "col-span-2 row-span-5",
  "col-span-1 row-span-5",
  "col-span-1 row-span-4",
  "col-span-1 row-span-5",
  "col-span-1 row-span-4",
  "col-span-2 row-span-6",
];

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} · Shaheed Khan` : "Shaheed Khan" };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = relatedProjects(slug);

  return (
    <>
      <ProjectHero
        title={project.title}
        image={project.hero}
        background={project.heroBackground}
        tone={project.heroTone}
        showControls={Boolean(project.gallery?.length)}
      />

      {/* Written breakdown */}
      <section className="section-container">
        {/* Lead statement */}
        {project.blocks[0] && (
          <ScrollWords
            className="section-statement"
            style={{ maxWidth: "34ch", marginBottom: "clamp(40px, 7vh, 80px)" }}
          >
            {project.blocks[0].body}
          </ScrollWords>
        )}

        {/* Services + closing, in spacious numbered rows */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {(() => {
            let n = 0;
            return project.blocks.slice(1).map((block, i) => {
              // Full-width closing paragraph
              if (block.full && !block.heading) {
                return (
                  <p
                    key={i}
                    className="editorial"
                    style={{ maxWidth: "70ch", padding: "clamp(20px, 3vw, 32px) 0" }}
                  >
                    {block.body}
                  </p>
                );
              }
              // Full-width category header (e.g. MSA's two divisions)
              if (block.full && block.heading) {
                return (
                  <div
                    key={i}
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: "clamp(32px, 5vw, 56px)",
                      marginTop: "clamp(16px, 3vw, 32px)",
                    }}
                  >
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
                      {block.heading}
                    </h2>
                    <p className="editorial" style={{ maxWidth: "64ch", marginTop: "1rem" }}>
                      {block.body}
                    </p>
                  </div>
                );
              }
              // Service row: number · title · description
              n += 1;
              return (
                <div
                  key={i}
                  className="wb-row"
                  style={{
                    borderTop: "1px solid var(--border)",
                    padding: "clamp(24px, 3.5vw, 40px) 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(10px, 1.5vw, 16px)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-small)",
                      letterSpacing: "var(--tracking-wide)",
                      color: "var(--accent)",
                    }}
                  >
                    {String(n).padStart(2, "0")}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(20px, 2.2vw, 28px)",
                      fontWeight: 600,
                      letterSpacing: "var(--tracking-tight)",
                      lineHeight: 1.15,
                      margin: 0,
                      color: "var(--foreground)",
                    }}
                  >
                    {block.heading}
                  </h3>
                  <p style={{ fontSize: "var(--text-body)", color: "var(--muted-light)", lineHeight: 1.8, margin: 0 }}>
                    {block.body}
                  </p>
                </div>
              );
            });
          })()}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </section>

      {/* Bespoke showcase, for projects whose work is a system rather than a set of images */}
      {project.showcase === "innobot" && (
        <>
          <InnobotStack />
          <InnobotSystem />
        </>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section style={{ borderTop: "1px solid var(--border)", paddingTop: "clamp(48px, 8vh, 80px)" }}>
          <InteractiveBentoGallery
            title="Selected designs"
            description="A closer look at the work. Drag to rearrange, tap any piece to view it up close."
            mediaItems={project.gallery.map((url, i) => ({
              id: i + 1,
              type: "image",
              title: project.title,
              desc: "Selected design",
              url,
              span: SPANS[i % SPANS.length],
            }))}
          />
        </section>
      )}

      {/* Related */}
      <section className="section-container" style={{ borderTop: "1px solid var(--border)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "clamp(32px, 5vh, 56px)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1.05,
              margin: 0,
              maxWidth: "16ch",
            }}
          >
            More{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
              selected work.
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
            All work →
          </Link>
        </div>
        <PortfolioGrid projects={related} />
      </section>
    </>
  );
}
