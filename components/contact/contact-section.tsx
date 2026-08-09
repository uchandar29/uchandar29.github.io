"use client";

import { useState } from "react";
import { Icon } from "@/components/icon/icon";
import { personalInfo } from "@/lib/portfolio-data";

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: "15px 18px",
  borderRadius: 14,
  background: "var(--surface)",
  border: "1px solid var(--border)",
  boxShadow: "var(--shadow)",
  color: "var(--text)",
};

const iconWrapStyle: React.CSSProperties = {
  display: "grid",
  placeItems: "center",
  width: 44,
  height: 44,
  borderRadius: 12,
  background: "var(--accent-weak)",
  color: "var(--accent)",
  flexShrink: 0,
};

const fieldStyle: React.CSSProperties = {
  padding: "15px 16px",
  borderRadius: 12,
  background: "var(--surface)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontSize: 15,
  fontFamily: "inherit",
};

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `Portfolio message from ${form.name || "your site"}`
    )}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <section
      id="contact"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(20px, 5vw, 72px)" }}
    >
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 12,
          }}
        >
          Get in touch
        </div>
        <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, margin: "0 0 12px", color: "var(--text)" }}>
          Let&apos;s build something together
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", maxWidth: 560, margin: "0 auto" }}>
          Open to SDE and ML-infrastructure roles, and interesting collaborations. Here&apos;s how to reach me — I
          reply fast.
        </p>
      </div>
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "clamp(28px, 5vw, 56px)",
          alignItems: "start",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a href={`mailto:${personalInfo.email}`} className="row-hover" style={rowStyle}>
            <span style={iconWrapStyle}>
              <Icon name="mail" style={{ width: 20, height: 20 }} />
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Email</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{personalInfo.email}</span>
            </span>
          </a>
          <a href={`tel:${personalInfo.phoneHref}`} className="row-hover" style={rowStyle}>
            <span style={iconWrapStyle}>
              <Icon name="phone" style={{ width: 20, height: 20 }} />
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Phone</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{personalInfo.phone}</span>
            </span>
          </a>
          <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="row-hover" style={rowStyle}>
            <span style={iconWrapStyle}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>GitHub</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{personalInfo.links.githubHandle}</span>
            </span>
          </a>
          <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="row-hover" style={rowStyle}>
            <span style={iconWrapStyle}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>LinkedIn</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{personalInfo.links.linkedinHandle}</span>
            </span>
          </a>
          <a href={personalInfo.links.medium} target="_blank" rel="noopener noreferrer" className="row-hover" style={rowStyle}>
            <span style={iconWrapStyle}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42S20.96 8.46 20.96 12M24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Medium</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{personalInfo.links.mediumHandle}</span>
            </span>
          </a>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16, alignContent: "start" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              required
              className="field-focus"
              style={fieldStyle}
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email address"
              required
              className="field-focus"
              style={fieldStyle}
            />
          </div>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me about your project or role"
            rows={5}
            required
            className="field-focus"
            style={{ ...fieldStyle, resize: "vertical" }}
          />
          <button
            type="submit"
            className="btn-fill"
            style={{
              justifySelf: "start",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "15px 32px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 700,
              color: "var(--accent-ink)",
              background: "var(--accent)",
            }}
          >
            <span>{sent ? "Message sent" : "Send message"}</span>
            <Icon name={sent ? "check" : "send"} style={{ width: 16, height: 16 }} />
          </button>
        </form>
      </div>
    </section>
  );
}
