import { SectionHeading } from "@/components/section-heading/section-heading";
import { ExperienceCard } from "@/components/experience/experience-card";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey and impact"
        />
        <div className="flex flex-col gap-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
