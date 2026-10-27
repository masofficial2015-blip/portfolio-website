"use client";

import { useEffect, useRef } from "react";
import { Code2, Database, Wrench, Cpu, Globe } from "lucide-react";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: Globe,
    color: "#6C63FF",
    skills: [
      "React / Next.js",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "REST API Integration",
    ],
  },
  {
    category: "Backend",
    icon: Code2,
    color: "#00D4AA",
    skills: [
      "PHP",
      "Python / Django",
      "Node.js / Express",
      "REST API Design",
      "Webhook Integrations",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    color: "#F59E0B",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Neon / Drizzle ORM",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    color: "#FF6B9D",
    skills: [
      "Git / GitHub",
      "Vercel / Railway",
      "Telegram Bot API",
      "Gemini AI API",
      "Linux / Networking",
    ],
  },
  {
    category: "AI & Automation",
    icon: Cpu,
    color: "#8B5CF6",
    skills: [
      "Gemini API",
      "AI-assisted apps",
      "Prompt Engineering",
      "Telegram Bot Automation",
    ],
  },
];

const TECH_TAGS = [
  "React", "Next.js", "JavaScript", "TypeScript", "PHP", "Python",
  "Node.js", "Django", "Express", "PostgreSQL", "MySQL", "Supabase",
  "Tailwind CSS", "Git", "Vercel", "Railway", "Telegram API", "Gemini AI",
  "REST APIs", "Drizzle ORM", "Neon", "HTML5", "CSS3", "Bootstrap",
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.08}s`;
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
      <div className="container-max">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label reveal" style={{ justifyContent: "center" }}>
            <Code2 size={14} />
            Technical Arsenal
          </p>
          <h2 className="section-title reveal">Skills & Technologies</h2>
          <p className="section-subtitle reveal" style={{ margin: "0 auto" }}>
            A curated toolkit built through real projects — from full-stack web apps to AI-powered bots.
          </p>
        </div>

        {/* Skill groups grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px", marginBottom: "48px" }}
          className="reveal"
        >
          {SKILL_GROUPS.map(({ category, icon: Icon, color, skills }) => (
            <div key={category} className="glass-card" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "10px",
                  background: `${color}18`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: color,
                }}>
                  <Icon size={18} />
                </div>
                <h3 style={{ fontWeight: "700", fontSize: "1.05rem", color: "var(--text-primary)" }}>
                  {category}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 14px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      fontWeight: "500",
                      transition: "all 0.25s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.background = `${color}12`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: color,
                        boxShadow: `0 0 6px ${color}88`,
                      }}
                    />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div style={{ textAlign: "center" }} className="reveal">
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>
            Also worked with
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {TECH_TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 14px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  fontWeight: "500",
                  transition: "all 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.background = "rgba(108,99,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "var(--bg-card)";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
