import { Icon } from "@/components/icon/icon";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(20px, 5vw, 72px) 30px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
        <Icon name="briefcase" style={{ width: 24, height: 24, color: "var(--accent)" }} />
        <h2 style={{ fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 700, margin: 0, color: "var(--text)" }}>
          Experience
        </h2>
      </div>
      <div style={{ position: "relative", paddingLeft: 38 }}>
        <div
          style={{
            position: "absolute",
            left: 9,
            top: 10,
            bottom: 10,
            width: 2,
            background: "var(--border)",
          }}
        />
        {experiences.map((e) => (
          <div key={e.org} style={{ position: "relative", marginBottom: 24 }}>
            <span
              style={{
                position: "absolute",
                left: -34,
                top: 28,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "var(--accent)",
                border: "3px solid var(--bg)",
                boxShadow: "0 0 0 3px var(--accent-weak)",
              }}
            />
            <div
              className="card-hover-slide"
              style={{
                padding: "28px 30px",
                borderRadius: 18,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    padding: "5px 11px",
                    borderRadius: 999,
                    background: "var(--accent-weak)",
                    color: "var(--accent)",
                  }}
                >
                  {e.date}
                </span>
                <span
                  style={{
                    fontSize: 13.5,
                    color: "var(--muted)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Icon name="map-pin" style={{ width: 14, height: 14 }} />
                  {e.place}
                </span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 3px", color: "var(--text)" }}>{e.role}</h3>
              <div style={{ fontSize: 15, color: "var(--accent)", fontWeight: 500, marginBottom: 14 }}>{e.org}</div>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 9 }}>
                {e.points.map((p) => (
                  <li key={p} style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
