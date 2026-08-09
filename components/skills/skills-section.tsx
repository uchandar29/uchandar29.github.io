import { Icon } from "@/components/icon/icon";
import { skillGroups } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(20px, 5vw, 72px) 20px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
        <Icon name="wand-sparkles" style={{ width: 24, height: 24, color: "var(--accent)" }} />
        <h2 style={{ fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 700, margin: 0, color: "var(--text)" }}>
          Skills &amp; toolbox
        </h2>
      </div>
      <p style={{ fontSize: 15, color: "var(--muted)", margin: "0 0 34px" }}>
        Grouped the way I use them, straight from my resume.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: 20 }}>
        {skillGroups.map((g) => (
          <div
            key={g.title}
            style={{
              padding: 26,
              borderRadius: 18,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "var(--accent-weak)",
                  color: "var(--accent)",
                }}
              >
                <Icon name={g.icon} style={{ width: 20, height: 20 }} />
              </span>
              <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0, color: "var(--text)" }}>{g.title}</h3>
            </div>
            <div className="skill-chip-row" style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
              {g.items.map((s) => (
                <span
                  key={s.name}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "8px 13px",
                    borderRadius: 9,
                    background: "var(--surface-2)",
                    color: "var(--text)",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  <Icon name={s.icon} style={{ width: 15, height: 15, color: "var(--accent)" }} />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
