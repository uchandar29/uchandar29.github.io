import { Icon } from "@/components/icon/icon";
import { highlights, personalInfo, whyHireMe } from "@/lib/portfolio-data";

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
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 22px" }}>
            Everything a 3-YOE SDE role asks for already proven:
          </p>
          <div style={{ display: "grid", gap: 14, margin: "0 0 30px" }}>
            {whyHireMe.map((point) => (
              <div key={point.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "var(--accent-weak)",
                    color: "var(--accent)",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <Icon name={point.icon} style={{ width: 14, height: 14 }} />
                </span>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>
                  <span style={{ color: "var(--text)", fontWeight: 600 }}>{point.label}</span>
                  {" — "}
                  {point.proof}
                </p>
              </div>
            ))}
          </div>
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
        <div style={{ display: "grid", gap: 16, alignContent: "center" }}>
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
