import { Icon } from "@/components/icon/icon";

export function QuoteSection() {
  return (
    <section
      style={{
        maxWidth: 820,
        margin: "0 auto",
        padding: "clamp(36px, 5vw, 64px) clamp(20px, 5vw, 72px)",
        textAlign: "center",
      }}
    >
      <Icon
        name="quote"
        style={{ width: 28, height: 28, color: "var(--accent)", opacity: 0.55, marginBottom: 16 }}
      />
      <p
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontSize: "clamp(19px, 2.4vw, 26px)",
          fontWeight: 600,
          fontStyle: "italic",
          lineHeight: 1.55,
          color: "var(--text)",
          margin: "0 0 16px",
        }}
      >
        &ldquo;Every new level of success becomes the minimum level of acceptable performance moving forward. This is
        the Curse of Competence.&rdquo;
      </p>
      <div style={{ fontSize: 14, color: "var(--muted)", fontWeight: 500 }}>— Chris Williamson</div>
    </section>
  );
}
