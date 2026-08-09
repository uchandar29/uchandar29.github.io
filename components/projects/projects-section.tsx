import { Icon } from "@/components/icon/icon";
import { featured } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(20px, 5vw, 72px) 40px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
        <Icon name="folder-git-2" style={{ width: 24, height: 24, color: "var(--accent)" }} />
        <h2 style={{ fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 700, margin: 0, color: "var(--text)" }}>
          Featured projects
        </h2>
      </div>
      <p style={{ fontSize: 15, color: "var(--muted)", margin: "0 0 34px" }}>
        Systems I&apos;ve designed and shipped.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 22,
          marginBottom: 56,
        }}
      >
        {featured.map((p) => (
          <div
            key={p.title}
            className="card-hover-lift"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 28,
              borderRadius: 18,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            {p.hasImage && (
              <div
                style={{
                  height: 180,
                  borderRadius: 12,
                  overflow: "hidden",
                  marginBottom: 18,
                  background: "var(--surface-2)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--muted)",
                }}
              >
                <Icon name={p.icon} style={{ width: 40, height: 40, opacity: 0.35 }} />
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 18 }}>
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "var(--accent-weak)",
                  color: "var(--accent)",
                }}
              >
                <Icon name={p.icon} style={{ width: 22, height: 22 }} />
              </span>
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 7,
                  background: "var(--surface-2)",
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {p.category}
              </span>
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 600, margin: "0 0 4px", color: "var(--text)" }}>{p.title}</h3>
            <div style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 12 }}>{p.period}</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 18px", flex: 1 }}>
              {p.blurb}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {p.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 11.5,
                    padding: "4px 10px",
                    borderRadius: 6,
                    background: "var(--surface-2)",
                    color: "var(--text)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
