import { Trophy } from "lucide-react";
import type { AwardItem } from "@/lib/portfolio-data";

interface AwardCardProps {
  award: AwardItem;
}

export function AwardCard({ award }: AwardCardProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Trophy className="h-5 w-5 text-primary" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-card-foreground">
            {award.title}
          </h3>
          <p className="text-sm font-medium text-primary">{award.issuer}</p>
          <p className="text-xs text-muted-foreground">{award.date}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {award.description}
          </p>
        </div>
      </div>
    </div>
  );
}
