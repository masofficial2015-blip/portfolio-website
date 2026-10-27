"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, MapPin, MessageSquare, Copy, Check, ExternalLink } from "lucide-react";

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "mesudahmed94@gmail.com",
    href: "mailto:mesudahmed94@gmail.com",
    color: "#6C63FF",
    desc: "Direct inquiries & opportunities",
    actionLabel: "Send email",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Mesud-Ahmed",
    href: "https://github.com/Mesud-Ahmed",
    color: "#E8E8F0",
    desc: "Explore repositories & open source",
    actionLabel: "View profile",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mesud-ahmed",
    href: "https://linkedin.com/in/mesud-ahmed-756243285/",
    color: "#00D4AA",
    desc: "Professional network & background",
    actionLabel: "Connect",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.1}s`;
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("mesudahmed94@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container-max" style={{ maxWidth: "860px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="section-label reveal" style={{ justifyContent: "center" }}>
            <MessageSquare size={14} />
            Let&apos;s Connect
          </p>
          <h2 className="section-title reveal">
            Get in <span className="gradient-text">touch</span>
          </h2>
          <p className="section-subtitle reveal" style={{ margin: "0 auto", maxWidth: "560px" }}>
            Have a project in mind, an engineering role to fill, or just want to connect? My inbox is always open.
          </p>

          <div
            className="reveal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "16px",
              padding: "8px 16px",
              borderRadius: "100px",
              background: "rgba(0, 212, 170, 0.08)",
              border: "1px solid rgba(0, 212, 170, 0.25)",
              color: "var(--accent2)",
              fontSize: "0.85rem",
              fontWeight: "500",
            }}
          >
            <MapPin size={15} />
            <span>Addis Ababa, Ethiopia · Open to remote & relocation worldwide</span>
          </div>
        </div>

        {/* Primary Email CTA Box */}
        <div
          className="glass-card reveal"
          style={{
            padding: "36px 32px",
            marginBottom: "36px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(108,99,255,0.08) 0%, rgba(17,17,24,0.7) 100%)",
            border: "1px solid rgba(108,99,255,0.25)",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "rgba(108,99,255,0.15)",
              border: "1px solid rgba(108,99,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent)",
              margin: "0 auto 18px",
            }}
          >
            <Mail size={26} />
          </div>

          <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
            Ready to build something impactful?
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "24px", maxWidth: "480px", margin: "0 auto 24px" }}>
            Whether you need a full-stack developer or have an inquiry, send a direct email or copy my address:
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <a
              href="mailto:mesudahmed94@gmail.com"
              className="btn-primary"
              style={{ fontSize: "0.95rem", padding: "12px 24px" }}
            >
              <Mail size={16} />
              <span>mesudahmed94@gmail.com</span>
              <ExternalLink size={14} style={{ opacity: 0.7 }} />
            </a>

            <button
              onClick={handleCopy}
              className="btn-secondary"
              style={{
                fontSize: "0.95rem",
                padding: "12px 20px",
                borderColor: copied ? "var(--accent2)" : undefined,
                color: copied ? "var(--accent2)" : undefined,
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? "Copied to clipboard!" : "Copy Address"}</span>
            </button>
          </div>
        </div>

        {/* Contact Links Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          {CONTACT_CHANNELS.map(({ icon: Icon, label, value, href, color, desc, actionLabel }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card reveal"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: color,
                  }}
                >
                  <Icon size={20} />
                </div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {actionLabel}
                  <ExternalLink size={12} />
                </span>
              </div>

              <div>
                <div style={{ fontWeight: "700", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                  {label}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  {desc}
                </div>
              </div>

              <div
                style={{
                  fontSize: "0.82rem",
                  color: color,
                  fontWeight: "500",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  marginTop: "auto",
                  paddingTop: "8px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
