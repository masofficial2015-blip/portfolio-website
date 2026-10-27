"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, Code, Lightbulb, Rocket } from "lucide-react";

const STATS = [
  { value: "4+", label: "Real-World Projects" },
  { value: "2", label: "Internship Roles" },
  { value: "1st", label: "GDG Hackathon Place" },
  { value: "B.Sc.", label: "Software Engineering" },
];

const VALUES = [
  {
    icon: Code,
    title: "Clean Code",
    desc: "I write maintainable, well-structured code that scales with your product.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    desc: "I focus on building tools that solve real problems, not just technical demos.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Capable",
    desc: "From database design to polished UIs, I ship complete, production-ready products.",
  },
];

export default function About() {
  const sectionRef = useRef(null);

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

  return (
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="container-max">
        {/* Grid: text left, card right on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: text */}
          <div>
            <p className="section-label reveal">
              <GraduationCap size={14} />
              Who I Am
            </p>
            <h2 className="section-title reveal">
              Turning ideas into{" "}
              <span className="gradient-text">real products</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
              className="reveal"
            >
              I'm a Software Engineering graduate from{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Addis Ababa Science and Technology University (AASTU)
              </strong>
              , passionate about building practical, high-impact digital products.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
              className="reveal"
            >
              My experience spans full-stack web development, Telegram bot automation,
              healthcare platforms, and client-facing business systems. I've worked in
              internship settings at consulting firms and universities, and I've shipped
              real products used by real people.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "36px",
              }}
              className="reveal"
            >
              I'm driven by the challenge of transforming complex, real-world problems
              into clean, elegant, and maintainable software — with a strong eye for
              both technical quality and user experience.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }} className="reveal">
              <a href="mailto:mesudahmed94@gmail.com" className="btn-primary">
                Contact Me
              </a>
              <a
                href="https://github.com/Mesud-Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Right: Stats + Values */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
              className="reveal"
            >
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="glass-card"
                  style={{ padding: "24px 20px", textAlign: "center" }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      background: "linear-gradient(135deg, #6C63FF, #00D4AA)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1.1,
                      marginBottom: "6px",
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "500" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass-card reveal"
                style={{ padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(108, 99, 255, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--accent)",
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: "600", color: "var(--text-primary)", marginBottom: "4px" }}>
                    {title}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
