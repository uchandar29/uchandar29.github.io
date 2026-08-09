import { Icon } from "@/components/icon/icon";
import { highlights, personalInfo } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" style={{ background: "var(--surface-2)", padding: "clamp(50px, 7vw, 90px) 0" }}>
      <div
        className="about-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 72px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
        }}
      >
        <div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 700, margin: "0 0 22px", color: "var(--text)" }}>
            Why hire me?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 18px" }}>
            Three-plus years shipping production software across banking, research, and startups. I&apos;ve delivered
            10+ core banking modules on Oracle&apos;s OBDX platform, cut deployment time 85% through CI/CD
            containerization, and built ML data pipelines processing 600K+ samples on HPC infrastructure.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 30px" }}>
            I like problems that span the whole stack — low-latency backends, clean interfaces, and the DevOps glue
            in between.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a
              href="#contact"
              className="btn-fill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "13px 26px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                color: "var(--accent-ink)",
                background: "var(--accent)",
              }}
            >
              Hire me
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "13px 26px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                color: "var(--text)",
                background: "transparent",
                border: "1.5px solid var(--border)",
              }}
            >
              <Icon name="download" style={{ width: 15, height: 15 }} />
              Download CV
            </a>
          </div>
        </div>
        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          {highlights.map((h) => (
            <div
              key={h.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "20px 22px",
                borderRadius: 16,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "var(--accent-weak)",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                <Icon name={h.icon} style={{ width: 22, height: 22 }} />
              </span>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                  {h.value}
                </div>
                <div style={{ fontSize: 13.5, color: "var(--muted)" }}>{h.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
