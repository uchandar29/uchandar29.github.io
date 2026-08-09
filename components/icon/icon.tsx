import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

function toPascalCase(kebab: string) {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const componentName = toPascalCase(name) as keyof typeof LucideIcons;
  const LucideIcon = LucideIcons[componentName] as React.ComponentType<LucideProps> | undefined;

  if (!LucideIcon) return null;

  return <LucideIcon {...props} />;
}
