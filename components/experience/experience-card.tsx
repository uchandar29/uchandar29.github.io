import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/lib/portfolio-data";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg sm:p-6 md:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-card-foreground sm:text-lg">
                {experience.title}
              </h3>
              <p className="text-sm font-medium text-primary">
                {experience.company}
              </p>
              <p className="text-sm text-muted-foreground">
                {experience.location}
              </p>
            </div>
          </div>
          <span className="shrink-0 text-sm font-medium text-muted-foreground">
            {experience.startDate} - {experience.endDate}
          </span>
        </div>

        <ul className="flex flex-col gap-2 pl-1">
          {experience.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {experience.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-mono"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
