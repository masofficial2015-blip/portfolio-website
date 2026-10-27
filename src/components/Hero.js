"use client";

import { ArrowDown, Github, Linkedin, Mail, Terminal, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Problem Solver",
  "Bot Builder",
];

function TypeWriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (paused) {
      timeout = setTimeout(() => {
        setDeleting(true);
        setPaused(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      setPaused(true);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 45);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, paused, roleIndex]);

  return (
    <span style={{ color: "var(--accent)", fontWeight: "700" }}>
      {text}
      <span
        style={{
          display: "inline-block",
          width: "3px",
          height: "1.1em",
          background: "var(--accent)",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 24px",
      }}
      className="grid-bg"
    >
      {/* Glow orbs */}
      <div
        className="glow-orb animate-float"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(108, 99, 255, 0.18) 0%, transparent 70%)",
          top: "-100px",
          right: "-100px",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0, 212, 170, 0.12) 0%, transparent 70%)",
          bottom: "-50px",
          left: "-80px",
          animation: "float 5s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "860px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 18px",
            background: "rgba(108, 99, 255, 0.08)",
            border: "1px solid rgba(108, 99, 255, 0.2)",
            borderRadius: "100px",
            fontSize: "0.82rem",
            fontWeight: "500",
            color: "var(--accent-light)",
            marginBottom: "36px",
            animation: "fadeIn 0.6s ease forwards",
          }}
        >
          <Sparkles size={14} />
          Available for opportunities
          <span
            style={{
              width: "8px",
              height: "8px",
              background: "var(--accent2)",
              borderRadius: "50%",
              display: "inline-block",
              animation: "pulse-glow 2s infinite",
            }}
          />
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: "800",
            lineHeight: "1.05",
            letterSpacing: "-2px",
            marginBottom: "20px",
            animation: "fadeInUp 0.7s ease forwards",
          }}
        >
          <span style={{ color: "var(--text-primary)" }}>Mesud</span>{" "}
          <span className="gradient-text">Ahmed</span>
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            fontSize: "clamp(1.3rem, 3.5vw, 2rem)",
            fontWeight: "500",
            color: "var(--text-secondary)",
            marginBottom: "28px",
            animation: "fadeInUp 0.7s ease 0.15s both",
            minHeight: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <Terminal size={22} color="var(--accent2)" />
          <TypeWriter />
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--text-secondary)",
            lineHeight: "1.75",
            maxWidth: "600px",
            margin: "0 auto 44px",
            animation: "fadeInUp 0.7s ease 0.3s both",
          }}
        >
          Software Engineering graduate from{" "}
          <span style={{ color: "var(--accent2)", fontWeight: "600" }}>AASTU</span>, building
          practical, high-quality digital products — from pharmacy systems to AI-powered
          Telegram bots. I turn complex problems into clean, elegant solutions.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "56px",
            animation: "fadeInUp 0.7s ease 0.45s both",
          }}
        >
          <button onClick={scrollToProjects} className="btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
            View My Work
            <ArrowDown size={18} />
          </button>
          <button onClick={scrollToContact} className="btn-outline" style={{ fontSize: "1rem", padding: "14px 32px" }}>
            Get In Touch
            <Mail size={18} />
          </button>
        </div>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            animation: "fadeIn 0.7s ease 0.6s both",
          }}
        >
          {[
            { icon: Github, href: "https://github.com/Mesud-Ahmed", label: "GitHub" },
            { href: "https://linkedin.com/in/mesud-ahmed-756243285/", icon: Linkedin, label: "LinkedIn" },
            { icon: Mail, href: "mailto:mesudahmed94@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border-light)",
                borderRadius: "10px",
                color: "var(--text-muted)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background = "rgba(108,99,255,0.1)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border-light)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            animation: "fadeIn 1s ease 1.2s both",
          }}
        >
          <span>Scroll to explore</span>
          <div
            style={{
              width: "24px",
              height: "38px",
              border: "1px solid var(--border-light)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "8px",
                background: "var(--accent)",
                borderRadius: "2px",
                animation: "scrollBounce 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.4; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
