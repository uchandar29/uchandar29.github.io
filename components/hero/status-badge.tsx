import { MapPin } from "lucide-react";

interface StatusBadgeProps {
  graduationDate: string;
  openToRelocation: boolean;
}

export function StatusBadge({
  graduationDate,
  openToRelocation,
}: StatusBadgeProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Graduating {graduationDate}
      </span>
      {openToRelocation && (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
          <MapPin className="h-3.5 w-3.5" />
          Open to relocation anywhere
        </span>
      )}
    </div>
  );
}
