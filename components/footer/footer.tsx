import { Github, Linkedin, BookOpen, Heart } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

function FooterLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-6">
          <FooterLink
            href={personalInfo.links.github}
            label="GitHub"
            icon={Github}
          />
          <FooterLink
            href={personalInfo.links.linkedin}
            label="LinkedIn"
            icon={Linkedin}
          />
          <FooterLink
            href={personalInfo.links.medium}
            label="Medium"
            icon={BookOpen}
          />
        </div>

        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          Made with{" "}
          <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> by{" "}
          <span className="font-medium text-foreground">
            Urmil Chandarana
          </span>
        </p>
      </div>
    </footer>
  );
}
