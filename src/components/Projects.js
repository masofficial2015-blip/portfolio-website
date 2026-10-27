"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "pharmadex",
    title: "Pharmadex",
    subtitle: "Pharmacy Management System",
    description:
      "A full-featured pharmacy management system built for a pharmacy client in Ethiopia. Streamlines daily pharmacy operations with real-time inventory tracking, batch and expiry management, shift-based sales recording, and comprehensive reporting — replacing error-prone manual processes.",
    problem: "Manual record-keeping led to expired drugs reaching shelves and inventory discrepancies.",
    features: [
      "Inventory & batch tracking",
      "Expiry date alerts",
      "Shift & sales management",
      "Reports & analytics",
      "User role management",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    color: "#6C63FF",
    colorBg: "rgba(108, 99, 255, 0.08)",
    liveUrl: "https://pharmadex-zeta.vercel.app/",
    githubUrl: null,
    featured: true,
    visual: "pharmacy",
  },
  {
    id: "signal-jobs",
    title: "Signal Jobs",
    subtitle: "AI Job-Alert Telegram Bot",
    description:
      "A Telegram-based job discovery service that matches users with relevant job opportunities based on their profile and preferences. Eliminates the noise of generic job boards by delivering only targeted, curated listings directly in Telegram.",
    problem: "Job seekers waste hours browsing irrelevant listings across multiple platforms.",
    features: [
      "Preference-based job matching",
      "Automated notifications",
      "Job categorization",
      "Admin monitoring",
      "15,000+ notifications sent in week one",
    ],
    tags: ["Next.js", "PostgreSQL", "Telegram Bot API", "Gemini AI", "Railway"],
    color: "#00D4AA",
    colorBg: "rgba(0, 212, 170, 0.08)",
    liveUrl: "https://t.me/signal_job_ai_assitant_bot",
    githubUrl: null,
    featured: true,
    visual: "telegram",
  },
  {
    id: "medihelp",
    title: "MediHelp+",
    subtitle: "AI Healthcare Platform",
    description:
      "A healthcare platform developed during the GDG AASTU 2025 Hackathon that won 1st place. Provides accessible healthcare guidance with AI-assisted skin assessment, symptom checking, and local-language support — targeting underserved communities with limited healthcare access.",
    problem: "Many Ethiopians lack access to basic healthcare guidance due to distance and cost barriers.",
    features: [
      "AI-assisted skin assessment",
      "Symptom checker",
      "Local-language support (Amharic)",
      "Nearby facility locator",
      "Offline-friendly design",
    ],
    tags: ["React", "Django", "Gemini AI", "Python"],
    color: "#FF6B9D",
    colorBg: "rgba(255, 107, 157, 0.08)",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    visual: "health",
  },
  {
    id: "polling",
    title: "Public Opinion Platform",
    subtitle: "Polling & Discussion System",
    description:
      "A feature-rich polling and discussion platform supporting multiple poll types, secure user authentication, and threaded comment discussions. Designed to give communities a transparent and structured way to capture and analyze public opinions.",
    problem: "Existing polling tools lack threaded discussions and support for complex poll formats.",
    features: [
      "Multiple poll types (ranked, multiple choice)",
      "User authentication & profiles",
      "Threaded discussions",
      "Real-time results",
      "Public & private polls",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    color: "#F59E0B",
    colorBg: "rgba(245, 158, 11, 0.08)",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    visual: "polling",
  },
];

function ProjectVisual({ type, color }) {
  const visuals = {
    pharmacy: (
      <div style={{ width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {/* Mock sidebar + content */}
        <div style={{ display: "flex", gap: "12px", height: "100%" }}>
          <div style={{ width: "70px", background: "rgba(108,99,255,0.15)", borderRadius: "8px", padding: "12px 8px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
            {[0.8, 0.5, 0.7, 0.4, 0.6].map((o, i) => (
              <div key={i} style={{ width: "32px", height: "32px", background: `rgba(108,99,255,${o * 0.3})`, borderRadius: "8px" }} />
            ))}
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ background: "rgba(108,99,255,0.12)", borderRadius: "6px", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ width: "120px", height: "10px", background: "rgba(108,99,255,0.4)", borderRadius: "4px" }} />
              <div style={{ width: "60px", height: "26px", background: "rgba(108,99,255,0.5)", borderRadius: "6px" }} />
            </div>
            {[1, 0.7, 0.5, 0.8, 0.6].map((o, i) => (
              <div key={i} style={{ background: `rgba(108,99,255,${o * 0.08})`, borderRadius: "6px", padding: "10px 14px", display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ width: "16px", height: "16px", background: `rgba(108,99,255,${o * 0.4})`, borderRadius: "3px" }} />
                <div style={{ flex: 1, height: "8px", background: `rgba(255,255,255,${o * 0.15})`, borderRadius: "3px" }} />
                <div style={{ width: "50px", height: "8px", background: `rgba(108,99,255,${o * 0.3})`, borderRadius: "3px" }} />
                <div style={{ width: "40px", height: "20px", background: `rgba(0,212,170,${o * 0.3})`, borderRadius: "4px" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    telegram: (
      <div style={{ width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
        {[
          { w: "75%", align: "left", teal: true },
          { w: "60%", align: "right", teal: false },
          { w: "80%", align: "left", teal: true },
          { w: "55%", align: "right", teal: false },
          { w: "70%", align: "left", teal: true },
        ].map(({ w, align, teal }, i) => (
          <div key={i} style={{ display: "flex", justifyContent: align === "left" ? "flex-start" : "flex-end" }}>
            <div style={{
              width: w,
              padding: "12px 16px",
              background: teal ? "rgba(0,212,170,0.15)" : "rgba(255,255,255,0.06)",
              border: `1px solid ${teal ? "rgba(0,212,170,0.3)" : "rgba(255,255,255,0.1)"}`,
              borderRadius: align === "left" ? "4px 14px 14px 14px" : "14px 4px 14px 14px",
              display: "flex", flexDirection: "column", gap: "6px"
            }}>
              <div style={{ height: "8px", background: teal ? "rgba(0,212,170,0.5)" : "rgba(255,255,255,0.3)", borderRadius: "3px", width: "60%" }} />
              <div style={{ height: "6px", background: "rgba(255,255,255,0.15)", borderRadius: "3px" }} />
              <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", width: "80%" }} />
            </div>
          </div>
        ))}
      </div>
    ),
    health: (
      <div style={{ width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          {["AI Scan", "Symptoms", "Nearby"].map((label, i) => (
            <div key={i} style={{ flex: 1, padding: "14px 10px", background: "rgba(255,107,157,0.1)", border: "1px solid rgba(255,107,157,0.2)", borderRadius: "10px", textAlign: "center" }}>
              <div style={{ width: "28px", height: "28px", background: "rgba(255,107,157,0.2)", borderRadius: "50%", margin: "0 auto 8px" }} />
              <div style={{ fontSize: "0.6rem", color: "rgba(255,107,157,0.8)", fontWeight: "600" }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,107,157,0.06)", border: "1px solid rgba(255,107,157,0.15)", borderRadius: "10px", padding: "16px" }}>
          <div style={{ height: "8px", background: "rgba(255,107,157,0.3)", borderRadius: "3px", marginBottom: "8px", width: "70%" }} />
          <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", marginBottom: "6px" }} />
          <div style={{ height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", width: "85%" }} />
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ flex: 1, height: "34px", background: "rgba(255,107,157,0.5)", borderRadius: "8px" }} />
          <div style={{ flex: 1, height: "34px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,107,157,0.2)", borderRadius: "8px" }} />
        </div>
      </div>
    ),
    polling: (
      <div style={{ width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>
        <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "10px", padding: "16px" }}>
          <div style={{ height: "8px", background: "rgba(245,158,11,0.5)", borderRadius: "3px", marginBottom: "12px", width: "80%" }} />
          {[90, 65, 45, 30].map((w, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", border: "2px solid rgba(245,158,11,0.6)", flexShrink: 0 }} />
              <div style={{ flex: 1, height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${w}%`, background: `rgba(245,158,11,${0.3 + (i * 0.1)})`, borderRadius: "3px" }} />
              </div>
              <span style={{ fontSize: "0.65rem", color: "rgba(245,158,11,0.7)", width: "28px", textAlign: "right" }}>{w}%</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {["32 votes", "3 comments", "Active"].map((t, i) => (
            <div key={i} style={{ padding: "6px 10px", background: `rgba(245,158,11,${0.08 + i*0.04})`, border: "1px solid rgba(245,158,11,0.15)", borderRadius: "6px", fontSize: "0.65rem", color: "rgba(245,158,11,0.8)" }}>{t}</div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div style={{ width: "100%", height: "200px", background: "rgba(0,0,0,0.3)", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)" }}>
      {visuals[type]}
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.12}s`;
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

  const [featured, other] = [
    PROJECTS.filter((p) => p.featured),
    PROJECTS.filter((p) => !p.featured),
  ];

  return (
    <section id="projects" className="section-padding" ref={sectionRef} style={{ background: "var(--bg-secondary)" }}>
      <div className="container-max">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label reveal" style={{ justifyContent: "center" }}>
            <Layers size={14} />
            Featured Work
          </p>
          <h2 className="section-title reveal">Projects that ship</h2>
          <p className="section-subtitle reveal" style={{ margin: "0 auto" }}>
            Real products solving real problems — from pharmacy management systems to AI-powered job discovery.
          </p>
        </div>

        {/* Featured Projects (2 columns) */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}
          className="projects-grid reveal"
        >
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} large />
          ))}
        </div>

        {/* Other Projects (2 columns) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="projects-grid reveal">
          {other.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, large }) {
  const { title, subtitle, description, features, tags, color, colorBg, liveUrl, githubUrl, visual, featured } = project;

  return (
    <div
      className="glass-card"
      style={{
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
      }} />

      {featured && (
        <div style={{
          position: "absolute", top: "16px", right: "16px",
          padding: "4px 10px", background: `${colorBg}`,
          border: `1px solid ${color}40`,
          borderRadius: "100px", fontSize: "0.7rem", fontWeight: "600",
          color: color,
        }}>
          Featured
        </div>
      )}

      {/* Visual mockup */}
      <ProjectVisual type={visual} color={color} />

      {/* Title */}
      <div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "4px" }}>
          {title}
        </h3>
        <p style={{ fontSize: "0.82rem", color: color, fontWeight: "500" }}>{subtitle}</p>
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
        {description}
      </p>

      {/* Key features */}
      <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {features.slice(0, 3).map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: color, flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "4px 10px",
              background: `${colorBg}`,
              border: `1px solid ${color}25`,
              borderRadius: "6px",
              fontSize: "0.72rem",
              fontWeight: "500",
              color: color,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "9px 18px",
              background: color,
              color: "white",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: "600",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <ExternalLink size={14} />
            View Live
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: "9px 18px", fontSize: "0.85rem" }}
          >
            <Github size={14} />
            Code
          </a>
        )}
        {!liveUrl && !githubUrl && (
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
            <ArrowUpRight size={14} />
            Private / In progress
          </span>
        )}
      </div>
    </div>
  );
}
