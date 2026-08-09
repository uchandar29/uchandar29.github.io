"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@/components/icon/icon";
import { navItems, personalInfo } from "@/lib/portfolio-data";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const isDark = mounted && theme === "dark";

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: "15px clamp(20px, 5vw, 72px)",
        background: "var(--nav)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <a
        href="#home"
        onClick={handleNavClick("#home")}
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 700,
          fontSize: 22,
          color: "var(--text)",
          letterSpacing: "-0.5px",
        }}
      >
        Urmil<span style={{ color: "var(--accent)" }}>.</span>
      </a>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleNavClick(item.href)}
            className={`nav-link${activeSection === item.href.replace("#", "") ? " active" : ""}`}
            style={{
              padding: "8px 13px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          title="Toggle theme"
          className="icon-btn"
          style={{
            display: "grid",
            placeItems: "center",
            width: 40,
            height: 40,
            marginLeft: 6,
            borderRadius: 10,
            cursor: "pointer",
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
          aria-label="Toggle theme"
        >
          {mounted && <Icon name={isDark ? "sun" : "moon"} style={{ width: 18, height: 18 }} />}
        </button>
        <a
          href={personalInfo.resumeUrl}
          download
          className="btn-fill"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginLeft: 6,
            padding: "10px 18px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 600,
            color: "var(--accent-ink)",
            background: "var(--accent)",
          }}
        >
          <Icon name="download" style={{ width: 15, height: 15 }} />
          Resume
        </a>
      </div>
    </nav>
  );
}
