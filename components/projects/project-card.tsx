import { Code2, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/portfolio-data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Wrapper = project.githubUrl ? "a" : "div";
  const wrapperProps = project.githubUrl
    ? {
        href: project.githubUrl,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg sm:p-6 md:p-8"
    >
      <div className="flex flex-col gap-4">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors sm:text-lg">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {project.startDate} - {project.endDate}
              </p>
            </div>
          </div>
          {project.githubUrl && (
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
          )}
        </div>

        {/* Tech stack - moved above description */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-mono"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Highlights with square bullets */}
        <ul className="flex flex-col gap-2">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-none bg-primary/60" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}
