"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 24px",
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(10, 10, 15, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(30, 30, 46, 0.8)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
          aria-label="Go to top"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.png"
            alt="Mesud Ahmed"
            width={38}
            height={38}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(108, 99, 255, 0.5)",
              boxShadow: "0 0 14px rgba(108, 99, 255, 0.3)",
              display: "block",
            }}
          />
          <span
            style={{
              fontWeight: "600",
              fontSize: "1rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.2px",
            }}
          >
            Mesud Ahmed
          </span>
        </button>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "4px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  color:
                    active === link.href.slice(1)
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  transition: "color 0.2s ease, background 0.2s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (active !== link.href.slice(1)) {
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.background = "rgba(108,99,255,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== link.href.slice(1)) {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: "8px 20px", fontSize: "0.88rem" }}
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact");
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border-light)",
            borderRadius: "8px",
            padding: "8px",
            cursor: "pointer",
            color: "var(--text-primary)",
          }}
          aria-label="Toggle menu"
          className="show-mobile"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "rgba(10,10,15,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border)",
            padding: "20px 24px 28px",
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "14px 16px",
                    borderRadius: "10px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: active === link.href.slice(1) ? "var(--accent)" : "var(--text-secondary)",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li style={{ marginTop: "12px" }}>
              <button
                onClick={() => handleClick("#contact")}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", border: "none" }}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
