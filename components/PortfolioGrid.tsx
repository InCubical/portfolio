import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/app/data/projects";
import "@/app/work-cards.css";

function PortfolioItem({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="card"
      className="portfolio-card group block"
    >
      <div className={`pc-tile${project.mark ? " is-mark" : ""}`}>
        {project.mark ? (
          <>
            <div className="pc-mark-glow" aria-hidden />
            <div
              className="pc-mark"
              role="img"
              aria-label={`${project.title} logo`}
              style={{ "--mark": `url(${project.mark})` } as CSSProperties}
            />
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.thumb} alt={project.title} className="pc-img" />
        )}
        <span className="pc-cap">
          {project.kicker ?? "Case study"}
          <span aria-hidden>→</span>
        </span>
      </div>
      <div className="mt-4">
        <h3
          className="font-display text-xl font-medium tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-[1px] gap-y-12 md:grid-cols-2">
      {projects.map((p) => (
        <PortfolioItem key={p.slug} project={p} />
      ))}
    </div>
  );
}
