import Image from "next/image";
import { Icon } from "@/components/icon/icon";
import { personalInfo } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <header
      id="home"
      className="hero-grid"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "clamp(40px, 7vw, 96px) clamp(20px, 5vw, 72px) 70px",
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 40,
        alignItems: "center",
      }}
    >
      <div style={{ animation: "fadeUp 0.8s ease both" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#22c55e",
              animation: "pulseDot 2s infinite",
            }}
          />
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {personalInfo.title}
          </span>
        </div>
        <h1
          style={{
            fontWeight: 800,
            fontSize: "clamp(40px, 6.5vw, 74px)",
            lineHeight: 1.02,
            letterSpacing: "-2px",
            margin: "0 0 22px",
            color: "var(--text)",
          }}
        >
          Hello, I&apos;m
          <br />
          <span style={{ color: "var(--accent)" }}>{personalInfo.name}</span>
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--muted)",
            maxWidth: 500,
            margin: "0 0 32px",
          }}
        >
          {personalInfo.bio}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <a
            href="#contact"
            className="btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "15px 30px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              color: "var(--text)",
              background: "transparent",
              border: "1.5px solid var(--border)",
            }}
          >
            Get in touch <Icon name="arrow-right" style={{ width: 17, height: 17 }} />
          </a>
          <a
            href="#projects"
            className="btn-fill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "15px 30px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              color: "var(--accent-ink)",
              background: "var(--accent)",
            }}
          >
            View work
          </a>
        </div>
      </div>
      <div
        className="hero-media"
        style={{ display: "grid", placeItems: "center", animation: "fadeUp 1s ease both" }}
      >
        <div style={{ position: "relative", width: "min(420px, 82vw)", aspectRatio: "5/6" }}>
          <div
            style={{
              position: "absolute",
              inset: -22,
              borderRadius: "50%",
              border: "1.5px dashed var(--accent)",
              opacity: 0.35,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -34,
              right: 6,
              color: "var(--accent)",
              fontSize: 26,
              opacity: 0.5,
            }}
          >
            +
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 30,
              left: -30,
              color: "var(--accent)",
              fontSize: 20,
              opacity: 0.5,
            }}
          >
            +
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 26,
              overflow: "hidden",
              boxShadow: "var(--shadow)",
              background: "var(--surface-2)",
            }}
          >
            <Image
              src={personalInfo.profileImage}
              alt={`Portrait of ${personalInfo.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
