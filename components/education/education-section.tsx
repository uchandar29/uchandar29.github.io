import { SectionHeading } from "@/components/section-heading/section-heading";
import { EducationCard } from "@/components/education/education-card";
import { education } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation and continuous learning"
        />
        <div className="flex flex-col gap-6">
          {education.map((edu) => (
            <EducationCard key={edu.institution} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
