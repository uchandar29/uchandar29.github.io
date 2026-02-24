import Image from "next/image";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { gallery } from "@/lib/portfolio-data";

export function GallerySection() {
  if (gallery.length === 0) return null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Gallery"
          subtitle="Moments and memories"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {item.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-background/80 backdrop-blur-sm p-3">
                  <p className="text-sm text-foreground">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
