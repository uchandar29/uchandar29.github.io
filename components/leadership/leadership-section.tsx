import { SectionHeading } from "@/components/section-heading/section-heading";
import { LeadershipCard } from "@/components/leadership/leadership-card";
import { leadership } from "@/lib/portfolio-data";

export function LeadershipSection() {
  if (leadership.length === 0) return null;

  return (
    <section id="leadership" className="py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Leadership & Volunteering"
          subtitle="Making an impact beyond code"
        />
        <div className="flex flex-col gap-6">
          {leadership.map((item) => (
            <LeadershipCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
