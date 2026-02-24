import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { technicalSkills } from "@/lib/portfolio-data";

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="rounded-full px-3 py-1 text-sm font-normal transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary/30"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Technical Skills" />
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
          <SkillGroup title="Languages" skills={technicalSkills.languages} />
          <SkillGroup title="Frameworks" skills={technicalSkills.frameworks} />
          <SkillGroup title="Tools & Cloud" skills={technicalSkills.tools} />
        </div>
      </div>
    </section>
  );
}
