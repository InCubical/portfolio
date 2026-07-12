import Link from "next/link";
import type { Project } from "@/app/data/projects";

function PortfolioItem({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="card"
      className="portfolio-card group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumb}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
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
