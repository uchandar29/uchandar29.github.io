"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon/icon";
import { gallery } from "@/lib/portfolio-data";

export function GallerySection() {
  const [index, setIndex] = useState(0);
  const count = gallery.length;

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
            {gallery.map((item) => (
              <div key={item.id} style={{ minWidth: "100%", display: "flex", justifyContent: "center", padding: 6 }}>
                <div
                  style={{
                    width: "min(340px, 86vw)",
                    borderRadius: 20,
                    overflow: "hidden",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  {item.image ? (
                    <div style={{ position: "relative", aspectRatio: "3/4", background: "var(--bg)" }}>
                      <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        sizes="(max-width: 640px) 86vw, 340px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        aspectRatio: "3/4",
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
                    <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>
                      {item.caption}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>{item.note}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 24 }}>
          {gallery.map((item, i) => (
            <button
              key={item.id}
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
