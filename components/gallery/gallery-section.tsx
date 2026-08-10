"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon/icon";
import { gallery, type GalleryItem } from "@/lib/portfolio-data";

// Groups gallery items into slides: consecutive portrait photos are paired
// two-per-slide, while any landscape photo (or a leftover odd portrait) gets
// its own full-width slide.
function buildSlides(items: GalleryItem[]): GalleryItem[][] {
  const slides: GalleryItem[][] = [];
  let i = 0;
  while (i < items.length) {
    const current = items[i];
    const next = items[i + 1];
    if (current.orientation !== "landscape" && next && next.orientation !== "landscape") {
      slides.push([current, next]);
      i += 2;
    } else {
      slides.push([current]);
      i += 1;
    }
  }
  return slides;
}

function GalleryCard({ item, wide }: { item: GalleryItem; wide: boolean }) {
  const aspectRatio = item.orientation === "landscape" ? "4/3" : "3/4";
  const width = wide ? "min(680px, 92vw)" : "min(260px, 42vw)";

  return (
    <div
      style={{
        width,
        borderRadius: 20,
        overflow: "hidden",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      {item.image ? (
        <div style={{ position: "relative", aspectRatio, background: "var(--bg)" }}>
          <Image
            src={item.image}
            alt={item.caption}
            fill
            sizes={wide ? "(max-width: 720px) 92vw, 680px" : "(max-width: 640px) 42vw, 260px"}
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : (
        <div
          style={{
            aspectRatio,
            background: "var(--bg)",
            display: "grid",
            placeItems: "center",
            gap: 8,
            color: "var(--muted)",
          }}
        >
          <Icon name="image-plus" style={{ width: 30, height: 30, opacity: 0.4 }} />
          <span style={{ fontSize: 12.5 }}>Add a photo</span>
        </div>
      )}
      <div style={{ padding: "15px 18px" }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>{item.caption}</div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>{item.note}</div>
      </div>
    </div>
  );
}

export function GallerySection() {
  const slides = useMemo(() => buildSlides(gallery), []);
  const [index, setIndex] = useState(0);
  const count = slides.length;

  if (count === 0) return null;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i + count - 1) % count);

  return (
    <section id="gallery" style={{ background: "var(--surface-2)", padding: "clamp(56px, 7vw, 96px) 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(20px, 5vw, 72px)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
              <Icon name="image" style={{ width: 24, height: 24, color: "var(--accent)" }} />
              <h2 style={{ fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 700, margin: 0, color: "var(--text)" }}>
                Gallery
              </h2>
            </div>
            <p style={{ fontSize: 15, color: "var(--muted)", margin: 0 }}>A personal album, coming soon.</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={prev}
              className="icon-btn"
              aria-label="Previous photo"
              style={{
                display: "grid",
                placeItems: "center",
                width: 46,
                height: 46,
                borderRadius: "50%",
                cursor: "pointer",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              <Icon name="chevron-left" style={{ width: 20, height: 20 }} />
            </button>
            <button
              onClick={next}
              className="icon-btn"
              aria-label="Next photo"
              style={{
                display: "grid",
                placeItems: "center",
                width: 46,
                height: 46,
                borderRadius: "50%",
                cursor: "pointer",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              <Icon name="chevron-right" style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>
        <div style={{ overflow: "hidden", borderRadius: 22 }}>
          <div
            style={{
              display: "flex",
              transform: `translateX(-${index * 100}%)`,
              transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {slides.map((slide) => {
              const isSoloWide = slide.length === 1 && slide[0].orientation === "landscape";
              return (
                <div
                  key={slide.map((item) => item.id).join("-")}
                  style={{
                    minWidth: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: 6,
                  }}
                >
                  {slide.map((item) => (
                    <GalleryCard key={item.id} item={item} wide={isSoloWide} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 24 }}>
          {slides.map((slide, i) => (
            <button
              key={slide.map((item) => item.id).join("-")}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="dot-btn"
              style={{
                width: i === index ? 30 : 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                background: i === index ? "var(--accent)" : "var(--border)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
