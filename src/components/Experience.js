"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Trophy, BookOpen, Star } from "lucide-react";

const TIMELINE = [
  {
    type: "work",
    icon: Briefcase,
    color: "#6C63FF",
    title: "Intern — Automation & Telegram Bot Developer",
    org: "Benetsa Consulting Firm",
    period: "Jan 2026 – Mar 2026",
    description:
      "Built and deployed a Telegram automation bot that delivered daily book summaries and interactive quiz polls on a scheduled workflow. Designed conversation flows and integrated webhook-based scheduling.",
    tags: ["Telegram Bot API", "Automation", "Scheduling", "Node.js"],
  },
  {
    type: "work",
    icon: Briefcase,
    color: "#6C63FF",
    title: "Intern — Pharmacy System Developer",
    org: "Wollo University – Dessie Campus",
    period: "Jun 2025 – Sep 2025",
    description:
      "Developed a Pharmacy Management System using PHP/MySQL to support inventory management, sales tracking, and reporting for the university pharmacy. Deployed to production serving daily operations.",
    tags: ["PHP", "MySQL", "Inventory System", "Reporting"],
  },
  {
    type: "award",
    icon: Trophy,
    color: "#F59E0B",
    title: "1st Place — GDG AASTU 2025 Hackathon",
    org: "Google Developer Groups · AASTU",
    period: "2025",
    description:
      "Led development on MediHelp+, a healthcare platform featuring AI-assisted skin assessment, symptom checking, and local-language (Amharic) support. Won first place among competing teams at the GDG AASTU 2025 hackathon.",
    tags: ["Hackathon Winner", "AI/ML", "Healthcare", "React", "Django"],
  },
  {
    type: "project",
    icon: Star,
    color: "#00D4AA",
    title: "Client Project — Pharmadex",
    org: "Freelance / Client Work · Ethiopia",
    period: "2024–2025",
    description:
      "Designed and built a production pharmacy management system for a client in Ethiopia. The platform handles daily inventory, batch tracking, expiry alerts, shift management, and sales — replacing error-prone manual processes.",
    tags: ["Client Work", "PHP", "MySQL", "Bootstrap", "Production"],
  },
  {
    type: "education",
    icon: BookOpen,
    color: "#8B5CF6",
    title: "B.Sc. Software Engineering",
    org: "Addis Ababa Science and Technology University (AASTU)",
    period: "2021 – 2026",
    description:
      "Studied core software engineering fundamentals including Data Structures & Algorithms, Computer Networking, Operating Systems, Machine Learning, Computer Graphics, and Database Management. Graduated with hands-on experience building real-world products.",
    tags: ["AASTU", "B.Sc.", "Software Engineering", "Computer Science"],
  },
];

const CERTIFICATIONS = [
  { title: "CS50: Introduction to Computer Science", org: "Harvard University · 2024", color: "#6C63FF" },
  { title: "React — The Complete Course", org: "Maximilian Schwarzmüller · Udemy · 2024", color: "#00D4AA" },
];

export default function Experience() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section-padding" ref={sectionRef} style={{ background: "var(--bg-secondary)" }}>
      <div className="container-max">
        <div style={{ marginBottom: "64px" }}>
          <p className="section-label reveal">
            <Briefcase size={14} />
            Journey
          </p>
          <h2 className="section-title reveal">Experience & Achievements</h2>
          <p className="section-subtitle reveal">
            Internships, hackathon wins, and client projects that shaped my engineering perspective.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "48px", alignItems: "start" }} className="exp-grid">
          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: "19px", top: "0", bottom: "0",
              width: "1px", background: "linear-gradient(to bottom, var(--accent), var(--accent2), transparent)",
              opacity: 0.3,
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {TIMELINE.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="reveal" style={{ display: "flex", gap: "20px" }}>
                    {/* Icon */}
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "50%",
                      background: `${item.color}15`,
                      border: `2px solid ${item.color}40`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: item.color, flexShrink: 0, zIndex: 2,
                    }}>
                      <Icon size={16} />
                    </div>

                    {/* Content */}
                    <div className="glass-card" style={{ flex: 1, padding: "22px 24px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap", marginBottom: "6px" }}>
                        <div>
                          <h3 style={{ fontWeight: "700", fontSize: "1rem", color: "var(--text-primary)", marginBottom: "2px" }}>
                            {item.title}
                          </h3>
                          <p style={{ fontSize: "0.85rem", color: item.color, fontWeight: "500" }}>{item.org}</p>
                        </div>
                        <span style={{
                          fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "500",
                          background: "var(--bg-primary)", padding: "4px 10px", borderRadius: "100px",
                          border: "1px solid var(--border)", whiteSpace: "nowrap",
                        }}>
                          {item.period}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.7", marginTop: "10px", marginBottom: "14px" }}>
                        {item.description}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {item.tags.map((tag) => (
                          <span key={tag} style={{
                            padding: "3px 10px",
                            background: `${item.color}10`,
                            border: `1px solid ${item.color}25`,
                            borderRadius: "4px",
                            fontSize: "0.72rem",
                            color: item.color,
                            fontWeight: "500",
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right sidebar: Certifications + Education summary */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="reveal">
            <div className="glass-card" style={{ padding: "24px" }}>
              <h3 style={{ fontWeight: "700", fontSize: "1rem", color: "var(--text-primary)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <BookOpen size={16} color="var(--accent)" />
                Certifications
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {CERTIFICATIONS.map(({ title, org, color }) => (
                  <div key={title} style={{
                    padding: "14px 16px",
                    background: "var(--bg-primary)",
                    borderRadius: "10px",
                    borderLeft: `3px solid ${color}`,
                  }}>
                    <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--text-primary)", marginBottom: "4px" }}>{title}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{org}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathon badge */}
            <div className="glass-card animate-pulse-glow" style={{ padding: "24px", textAlign: "center", border: "1px solid rgba(245,158,11,0.3)" }}>
              <div style={{
                width: "60px", height: "60px",
                background: "linear-gradient(135deg, #F59E0B, #FF6B9D)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
                fontSize: "1.8rem",
              }}>
                🏆
              </div>
              <h3 style={{ fontWeight: "700", fontSize: "1rem", color: "var(--text-primary)", marginBottom: "6px" }}>Hackathon Winner</h3>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                1st Place · GDG AASTU 2025
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "6px" }}>
                MediHelp+ Healthcare Platform
              </p>
            </div>

            {/* Open to opportunities */}
            <div className="glass-card" style={{ padding: "24px", textAlign: "center", border: "1px solid rgba(0,212,170,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "12px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00D4AA", animation: "pulse-glow 2s infinite" }} />
                <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--accent2)" }}>Open to Opportunities</span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                Seeking full-time roles, freelance projects, or exciting collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
