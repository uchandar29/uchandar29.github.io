import { Icon } from "@/components/icon/icon";
import { education } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <section
      id="education"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(30px, 4vw, 50px) clamp(20px, 5vw, 72px) 30px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
        <Icon name="graduation-cap" style={{ width: 24, height: 24, color: "var(--accent)" }} />
        <h2 style={{ fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 700, margin: 0, color: "var(--text)" }}>
          Education
        </h2>
      </div>
      <div className="education-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {education.map((ed) => (
          <div
            key={ed.degree}
            className="card-highlight"
            style={{
              padding: 28,
              borderRadius: 18,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 14,
                marginBottom: 10,
                minHeight: 52,
              }}
            >
              <h3 style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.3, margin: 0, color: "var(--text)" }}>
                {ed.degree}
              </h3>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  padding: "5px 11px",
                  borderRadius: 999,
                  background: "var(--accent-weak)",
                  color: "var(--accent)",
                  whiteSpace: "nowrap",
                }}
              >
                {ed.gpa}
              </span>
            </div>
            <div style={{ fontSize: 15, color: "var(--accent)", fontWeight: 500, marginBottom: 4 }}>{ed.school}</div>
            <div style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 14 }}>{ed.date}</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>{ed.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
