import { Users } from "lucide-react";
import type { LeadershipItem } from "@/lib/portfolio-data";

interface LeadershipCardProps {
  item: LeadershipItem;
}

export function LeadershipCard({ item }: LeadershipCardProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg md:p-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-primary">
                {item.organization}
              </p>
            </div>
          </div>
          <span className="shrink-0 text-sm font-medium text-muted-foreground">
            {item.startDate} - {item.endDate}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground pl-13">
          {item.description}
        </p>
      </div>
    </div>
  );
}
