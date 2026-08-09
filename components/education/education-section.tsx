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
            <div style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 16 }}>{ed.date}</div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 10,
              }}
            >
              Relevant Coursework
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {ed.coursework.map((course) => (
                <span
                  key={course}
                  style={{
                    fontSize: 12.5,
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: "var(--surface-2)",
                    color: "var(--text)",
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
