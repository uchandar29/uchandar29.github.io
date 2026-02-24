import { GraduationCap, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Education } from "@/lib/portfolio-data";

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg sm:p-6 md:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-card-foreground sm:text-lg">
                {education.institution}
              </h3>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {education.location}
              </p>
            </div>
          </div>
          <span className="shrink-0 pl-13 text-xs font-medium text-muted-foreground sm:pl-0 sm:text-sm">
            {education.startDate} - {education.endDate}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="font-medium text-foreground">
            {education.degree} in {education.field}
          </p>
          <Badge variant="secondary" className="font-mono text-xs">
            GPA: {education.gpa}
          </Badge>
        </div>

        {education.coursework.length > 0 && (
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Relevant Coursework
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <Badge
                  key={course}
                  variant="outline"
                  className="text-xs font-normal"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
