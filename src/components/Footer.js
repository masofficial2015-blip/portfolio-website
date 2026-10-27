"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Left */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.png"
              alt="Mesud Ahmed"
              width={30}
              height={30}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "1.5px solid rgba(108, 99, 255, 0.4)",
                display: "block",
              }}
            />
            <span style={{ fontWeight: "600", fontSize: "0.95rem", color: "var(--text-primary)" }}>
              Mesud Ahmed
            </span>
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            Software Engineer · Addis Ababa, Ethiopia
          </p>
        </div>

        {/* Center */}
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
          © {year} Mesud Ahmed. All rights reserved.
        </p>

        {/* Right: socials */}
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            { icon: Github, href: "https://github.com/Mesud-Ahmed", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/mesud-ahmed-756243285/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:mesudahmed94@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--text-muted)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background = "rgba(108,99,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
