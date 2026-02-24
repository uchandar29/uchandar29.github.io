import { SectionHeading } from "@/components/section-heading/section-heading";
import { AwardCard } from "@/components/awards/award-card";
import { awards } from "@/lib/portfolio-data";

export function AwardsSection() {
  if (awards.length === 0) return null;

  return (
    <section id="awards" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Awards & Achievements"
          subtitle="Recognition and milestones"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}
