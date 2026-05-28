import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Career", "Pre-order", "Contact"];

const FEATURES = [
  { icon: "🧠", title: "Neuro-Adaptive", desc: "Responds intelligently to nerve signals, adapting grip strength in real time for each patient." },
  { icon: "🪶", title: "Ultra Lightweight", desc: "Engineered with advanced soft-robotics materials — barely felt on the hand, yet incredibly functional." },
  { icon: "🔄", title: "Fully Adaptive", desc: "Adjustable tension and resistance levels tailored to individual therapy stages and recovery goals." },
  { icon: "🛡️", title: "Clinically Safe", desc: "Designed under AICTE-backed research with strict biocompatibility and safety standards." },
];

const HOW_IT_HELPS = [
  { phase: "Before", label: "Limited Mobility", desc: "Patients struggle with basic grasping tasks after stroke, nerve damage, or motor disorders.", color: "#FFE4E4", accent: "#D85A30" },
  { phase: "During", label: "Guided Recovery", desc: "Neuro Grip assists and trains hand movements through therapeutic soft-robotic actuation.", color: "#E8F4FF", accent: "#185FA5" },
  { phase: "After", label: "Restored Function", desc: "Progressive rehabilitation leads to measurable improvement in grip strength and coordination.", color: "#E4F9F0", accent: "#0F6E56" },
];

const TEAM = [
  { name: "Alex Morgan", role: "Co-Founder & CEO", quote: "We started Neuro Grip because we saw patients struggle with rehab tools that weren't designed for them. We're changing that.", initials: "AM", color: "#185FA5" },
  { name: "Jordan Lee", role: "Co-Founder & CTO", quote: "The intersection of soft robotics and medicine is where the future lives. Neuro Grip is our step into that future.", initials: "JL", color: "#0F6E56" },
  { name: "Sam Rivera", role: "Lead Researcher", quote: "Every iteration is driven by patient feedback. Real impact requires real listening.", initials: "SR", color: "#993C1D" },
];

const JOBS = [];

export default function NeuroGrip() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamIdx, setTeamIdx] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState("left");
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section) => {
    setActiveNav(section);
    setMenuOpen(false);
    const el = sectionRefs.current[section];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const slideTeam = (dir) => {
    if (sliding) return;
    setSlideDir(dir);
    setSliding(true);
    setTimeout(() => {
      setTeamIdx((prev) => (dir === "left" ? (prev + 1) % TEAM.length : (prev - 1 + TEAM.length) % TEAM.length));
      setSliding(false);
    }, 380);
  };

  const ref = (name) => (el) => { sectionRefs.current[name] = el; };

  const member = TEAM[teamIdx];

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#fff", color: "#0d1117", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Sora:wght@600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .ng-btn { background: #0d1117; color: #fff; border: none; padding: 12px 28px; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s, transform 0.15s; font-family: inherit; }
        .ng-btn:hover { background: #1B3A6B; transform: translateY(-1px); }
        .ng-btn-outline { background: transparent; color: #0d1117; border: 1.5px solid #0d1117; padding: 11px 28px; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .ng-btn-outline:hover { background: #0d1117; color: #fff; }
        .tag { display: inline-block; background: #F0F4FF; color: #185FA5; border-radius: 100px; padding: 6px 16px; font-size: 13px; font-weight: 500; margin: 4px; border: 1px solid #B5D4F4; }
        .feature-card { background: #fff; border: 1px solid #E8ECEF; border-radius: 16px; padding: 28px 24px; transition: box-shadow 0.2s, transform 0.2s; }
        .feature-card:hover { box-shadow: 0 8px 32px rgba(24,95,165,0.10); transform: translateY(-3px); }
        .phase-card { border-radius: 16px; padding: 28px 24px; flex: 1; min-width: 200px; }
        .team-card { background: #fff; border: 1.5px solid #E8ECEF; border-radius: 20px; padding: 36px 32px; max-width: 480px; margin: 0 auto; transition: opacity 0.35s, transform 0.35s; }
        .team-card.sliding-out { opacity: 0; transform: translateX(-60px); }
        .team-card.sliding-in { opacity: 0; transform: translateX(60px); }
        .nav-link { background: none; border: none; font-size: 15px; font-weight: 500; color: #0d1117; cursor: pointer; padding: 8px 4px; border-bottom: 2px solid transparent; transition: color 0.2s, border-color 0.2s; font-family: inherit; }
        .nav-link.active, .nav-link:hover { color: #185FA5; border-bottom-color: #185FA5; }
        .section-label { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #185FA5; margin-bottom: 12px; }
        .section-title { font-family: 'Sora', sans-serif; font-size: clamp(28px, 4vw, 42px); font-weight: 700; color: #0d1117; line-height: 1.2; }
        .divider { width: 48px; height: 4px; background: linear-gradient(90deg, #185FA5, #00C9A7); border-radius: 4px; margin: 16px 0 24px; }
        input, textarea { width: 100%; padding: 12px 16px; border: 1.5px solid #E8ECEF; border-radius: 10px; font-size: 15px; font-family: inherit; background: #fff; color: #0d1117; outline: none; transition: border-color 0.2s; }
        input:focus, textarea:focus { border-color: #185FA5; }
        textarea { resize: vertical; min-height: 120px; }
        @media (max-width: 700px) {
          .hero-flex { flex-direction: column !important; text-align: center; }
          .hero-visual { width: 100% !important; height: 260px !important; margin-top: 32px; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
          .phases-flex { flex-direction: column !important; }
          .mobile-menu { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
        @media (max-width: 480px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(255,255,255,0.96)" : "#fff", borderBottom: scrolled ? "1px solid #E8ECEF" : "1px solid transparent", backdropFilter: "blur(8px)", transition: "all 0.3s", padding: "0 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("Home")}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #1B3A6B, #185FA5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 16 }}>N</span>
            </div>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: "#0d1117" }}>Neuro<span style={{ color: "#185FA5" }}>Grip</span></span>
          </div>
          <div className="desktop-nav" style={{ display: "flex", gap: 32 }}>
            {NAV_LINKS.map(l => (
              <button key={l} className={`nav-link${activeNav === l ? " active" : ""}`} onClick={() => scrollTo(l)}>{l}</button>
            ))}
          </div>
          <button className="ng-btn" style={{ padding: "10px 22px", fontSize: 14 }} onClick={() => scrollTo("Pre-order")}>Pre-order</button>
          <button className="mobile-menu" style={{ display: "none", background: "none", border: "none", fontSize: 28, cursor: "pointer", color: "#0d1117" }} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #E8ECEF", padding: "16px 5vw 24px", display: "flex", flexDirection: "column", gap: 8 }}>
            {NAV_LINKS.map(l => (
              <button key={l} className="nav-link" style={{ textAlign: "left", padding: "10px 0" }} onClick={() => scrollTo(l)}>{l}</button>
            ))}
          </div>
        )}
      </nav>

      {/* HOME / HERO */}
      <section ref={ref("Home")} style={{ paddingTop: 120, paddingBottom: 80, padding: "120px 5vw 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="hero-flex" style={{ display: "flex", alignItems: "center", gap: 60 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0F4FF", border: "1px solid #B5D4F4", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#185FA5", display: "inline-block" }}></span>
              <span style={{ fontSize: 13, fontWeight: 500, color: "#185FA5" }}>AICTE Licensed Innovation</span>
            </div>
            <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800, lineHeight: 1.1, color: "#0d1117", marginBottom: 20 }}>
              Restoring Grip.<br />
              <span style={{ color: "#185FA5" }}>Restoring Life.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "#4A5568", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
              Neuro Grip is a soft robotic hand glove designed to assist and rehabilitate patients with limited hand mobility — giving them back the independence they deserve.
            </p>
            <div style={{ marginBottom: 32 }}>
              <span className="tag">🤖 Soft Robotics</span>
              <span className="tag">🏥 Medical Grade</span>
              <span className="tag">⚡ Neuro-Adaptive</span>
              <span className="tag">🔬 Research Backed</span>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="ng-btn" onClick={() => scrollTo("About")}>Learn More</button>
              <button className="ng-btn-outline" onClick={() => scrollTo("Contact")}>Get in Touch</button>
            </div>
          </div>
          <div className="hero-visual" style={{ flex: "0 0 420px", height: 420, position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #E6F1FB 0%, #E1F5EE 100%)", borderRadius: 32, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "rgba(24,95,165,0.08)", animation: "pulse 3s ease-in-out infinite" }}></div>
                <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "rgba(24,95,165,0.10)", animation: "pulse 3s ease-in-out infinite 0.5s" }}></div>
                <div style={{ zIndex: 2, textAlign: "center" }}>
                  <div style={{ fontSize: 80 }}>🦾</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: "#185FA5", marginTop: 12 }}>Neuro Grip</div>
                  <div style={{ fontSize: 13, color: "#4A5568", marginTop: 4 }}>Soft Robotic Glove</div>
                </div>
                <div style={{ position: "absolute", top: 32, right: 32, background: "#fff", borderRadius: 12, padding: "10px 16px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", fontSize: 13, fontWeight: 500, color: "#0F6E56" }}>✓ AICTE Certified</div>
                <div style={{ position: "absolute", bottom: 32, left: 32, background: "#fff", borderRadius: 12, padding: "10px 16px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", fontSize: 13, fontWeight: 500, color: "#185FA5" }}>🔬 Research Backed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section ref={ref("About")} style={{ background: "#F8FAFF", padding: "80px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label">About</div>
            <h2 className="section-title">What is Neuro Grip?</h2>
            <div className="divider" style={{ margin: "16px auto 24px" }}></div>
            <p style={{ fontSize: 17, color: "#4A5568", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              Neuro Grip is a soft robotic hand glove that uses advanced actuator technology to assist patients suffering from hand paralysis, stroke, or motor disorders — enabling natural movement through intelligent mechanical support.
            </p>
          </div>

          {/* How it works */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 36px", marginBottom: 60, border: "1px solid #E8ECEF" }}>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 28, color: "#0d1117" }}>How It Works</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
              {[["1. Sense", "Soft sensors detect intended movement signals from the patient's hand muscles."],
                ["2. Process", "Onboard microcontroller interprets signals and calculates the optimal response."],
                ["3. Actuate", "Pneumatic soft actuators gently guide finger and wrist movement."],
                ["4. Adapt", "Machine learning personalizes the glove's behavior to each patient's recovery stage."]
              ].map(([title, desc]) => (
                <div key={title} style={{ padding: "20px 20px", borderLeft: "3px solid #185FA5", background: "#F8FAFF", borderRadius: "0 12px 12px 0" }}>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#185FA5", marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 14, color: "#4A5568", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="section-label" style={{ marginBottom: 16 }}>Key Features</div>
          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 60 }}>
            {FEATURES.map(f => (
              <div key={f.title} className="feature-card">
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 17, color: "#0d1117", marginBottom: 10 }}>{f.title}</div>
                <div style={{ fontSize: 14, color: "#4A5568", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>

          {/* How it helps */}
          <div className="section-label" style={{ marginBottom: 16 }}>Patient Journey</div>
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 24, color: "#0d1117" }}>How Neuro Grip Helps</h3>
          <div className="phases-flex" style={{ display: "flex", gap: 20, marginBottom: 60 }}>
            {HOW_IT_HELPS.map((p, i) => (
              <div key={p.phase} className="phase-card" style={{ background: p.color, flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: p.accent, marginBottom: 10 }}>Phase {i + 1} — {p.phase}</div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: "#0d1117", marginBottom: 10 }}>{p.label}</div>
                <div style={{ fontSize: 14, color: "#4A5568", lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Trust */}
          <div className="section-label" style={{ marginBottom: 16 }}>Why Trust Us</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[["🏛️", "AICTE Licensed", "Officially recognized and licensed by the All India Council for Technical Education."],
              ["🎓", "Student Innovators", "Built by passionate B.Tech CSE students driven by real-world impact."],
              ["🔬", "Research Driven", "Every design decision is backed by peer-reviewed medical research."],
              ["❤️", "Patient First", "Designed in consultation with rehabilitation specialists and patients."]
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #E8ECEF", borderRadius: 16, padding: "24px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: 28 }}>{icon}</span>
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#0d1117", marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "#4A5568", lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER */}
      <section ref={ref("Career")} style={{ padding: "80px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-label">Career</div>
          <h2 className="section-title" style={{ marginBottom: 8 }}>Join Our Mission</h2>
          <div className="divider"></div>
          <p style={{ fontSize: 16, color: "#4A5568", marginBottom: 40, maxWidth: 540, lineHeight: 1.7 }}>
            We're a small team of innovators on a mission to change rehabilitation. If you're passionate about robotics, medicine, or technology, we'd love to hear from you.
          </p>
          {JOBS.length === 0 ? (
            <div style={{ background: "#F8FAFF", border: "1.5px dashed #B5D4F4", borderRadius: 20, padding: "60px 40px", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: "#0d1117", marginBottom: 10 }}>No Openings Right Now</div>
              <div style={{ fontSize: 15, color: "#4A5568", marginBottom: 24 }}>We're not actively hiring at the moment, but we're always open to connecting with talented people.</div>
              <button className="ng-btn-outline" onClick={() => scrollTo("Contact")}>Express Interest</button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {JOBS.map(j => <div key={j.title} style={{ background: "#fff", border: "1px solid #E8ECEF", borderRadius: 14, padding: "20px 24px" }}>{j.title}</div>)}
            </div>
          )}
        </div>
      </section>

      {/* PRE-ORDER */}
      <section ref={ref("Pre-order")} style={{ background: "linear-gradient(135deg, #0d1117 0%, #1B3A6B 100%)", padding: "80px 5vw" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, padding: "8px 20px", marginBottom: 24 }}>
            <span style={{ color: "#B5D4F4", fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>🚧 COMING SOON</span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>
            Neuro Grip is Under Development
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 36, maxWidth: 580, margin: "0 auto 36px" }}>
            We're working hard to bring you the most advanced soft robotic hand glove for rehabilitation. Pre-orders will open soon. Be the first to know when we launch.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="ng-btn" style={{ background: "#185FA5", fontSize: 16, padding: "14px 32px" }} onClick={() => scrollTo("Contact")}>Notify Me at Launch</button>
          </div>
          <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
            {[["🔬", "In Development"], ["📋", "AICTE Licensed"], ["🏥", "Medical Grade"]].map(([icon, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{icon}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / FOUNDER */}
      <section style={{ padding: "80px 5vw", background: "#F8FAFF" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label">The Team</div>
          <h2 className="section-title" style={{ marginBottom: 8 }}>Meet the Founders</h2>
          <div className="divider" style={{ margin: "16px auto 40px" }}></div>
          <div style={{ position: "relative", minHeight: 280 }}>
            <div className={`team-card${sliding ? (slideDir === "left" ? " sliding-out" : " sliding-in") : ""}`}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: member.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 24, fontWeight: 700, color: "#fff", fontFamily: "'Sora', sans-serif" }}>
                {member.initials}
              </div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: "#0d1117", marginBottom: 4 }}>{member.name}</div>
              <div style={{ fontSize: 14, color: "#185FA5", fontWeight: 500, marginBottom: 20 }}>{member.role}</div>
              <p style={{ fontSize: 15, color: "#4A5568", lineHeight: 1.7, fontStyle: "italic" }}>"{member.quote}"</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24, alignItems: "center" }}>
            <button onClick={() => slideTeam("right")} style={{ background: "#fff", border: "1.5px solid #E8ECEF", borderRadius: "50%", width: 44, height: 44, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
            <div style={{ display: "flex", gap: 8 }}>
              {TEAM.map((_, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === teamIdx ? "#185FA5" : "#D1D5DB", transition: "background 0.3s" }}></div>
              ))}
            </div>
            <button onClick={() => slideTeam("left")} style={{ background: "#fff", border: "1.5px solid #E8ECEF", borderRadius: "50%", width: 44, height: 44, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={ref("Contact")} style={{ padding: "80px 5vw" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 60, alignItems: "start" }}>
          <div>
            <div className="section-label">Contact</div>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Get In Touch</h2>
            <div className="divider"></div>
            <p style={{ fontSize: 16, color: "#4A5568", lineHeight: 1.7, marginBottom: 32 }}>
              Whether you're a patient, clinician, investor, or collaborator — we'd love to connect and explore how Neuro Grip can make a difference.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "#F0F4FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📧</div>
                <div>
                  <div style={{ fontWeight: 600, color: "#0d1117", marginBottom: 2 }}>Email Us</div>
                  <div style={{ color: "#185FA5", fontSize: 15 }}>hello@neurogrip.in</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "#F0F4FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📍</div>
                <div>
                  <div style={{ fontWeight: 600, color: "#0d1117", marginBottom: 2 }}>Location</div>
                  <div style={{ color: "#4A5568", fontSize: 15 }}>Andhra Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: "#F8FAFF", borderRadius: 20, padding: "36px 32px", border: "1px solid #E8ECEF" }}>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 24, color: "#0d1117" }}>Send a Message</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div><label style={{ fontSize: 13, fontWeight: 500, color: "#4A5568", display: "block", marginBottom: 6 }}>Name</label><input placeholder="Your name" /></div>
                <div><label style={{ fontSize: 13, fontWeight: 500, color: "#4A5568", display: "block", marginBottom: 6 }}>Email</label><input type="email" placeholder="you@example.com" /></div>
              </div>
              <div><label style={{ fontSize: 13, fontWeight: 500, color: "#4A5568", display: "block", marginBottom: 6 }}>Subject</label><input placeholder="How can we help?" /></div>
              <div><label style={{ fontSize: 13, fontWeight: 500, color: "#4A5568", display: "block", marginBottom: 6 }}>Message</label><textarea placeholder="Tell us more..."></textarea></div>
              <button className="ng-btn" style={{ width: "100%", padding: "14px" }}>Send Message →</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0d1117", color: "#fff", padding: "48px 5vw 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #185FA5, #00C9A7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 16 }}>N</span>
                </div>
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20 }}>Neuro<span style={{ color: "#00C9A7" }}>Grip</span></span>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 260, lineHeight: 1.6 }}>Restoring mobility through intelligent soft robotics and compassionate engineering.</p>
            </div>
            <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Navigate</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {NAV_LINKS.map(l => <button key={l} onClick={() => scrollTo(l)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.65)", fontSize: 14, cursor: "pointer", textAlign: "left", fontFamily: "inherit", padding: 0 }}>{l}</button>)}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Connect</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["LinkedIn", "Twitter / X", "Instagram"].map(s => <a key={s} href="#" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, textDecoration: "none" }}>{s}</a>)}
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>© 2025 NeuroGrip. All rights reserved.</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>AICTE Licensed · Made in India 🇮🇳</div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

