import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { FaWhatsapp, FaEnvelope, FaShieldAlt, FaSatellite, FaMicrochip } from "react-icons/fa";
import { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const [systemLog, setSystemLog] = useState("Initializing Eagle Force Protocols...");

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);

  // --- Dynamic System Logs for Engagement ---
  useEffect(() => {
    const logs = [
      "Scanning Perimeter... OK",
      "AI Human Detection: ACTIVE",
      "Network Status: SECURE (128-bit)",
      "CCTV Node 42: Online",
      "Eagle Force Database Syncing...",
      "Welcome, Authorized User"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setSystemLog(logs[i % logs.length]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { num: 500, label: "Cameras Installed" },
    { num: 120, label: "Happy Clients" },
    { num: 24, label: "Customer Support" },
    { num: 5, label: "Service Rating" },
    { num: 1500, label: "Security Guards" },
    { num: 50, label: "Cities Reached" },
  ];

  const servicesDetailed = [
    {
      title: "CCTV & Security",
      points: ["Human Detection AI", "Clear Night Vision", "Mobile Phone Access", "24/7 Monitoring"],
      icon: "📹",
      path: "/cctv"
    },
    {
      title: "Cleaning Services",
      points: ["Home & Office Sanitization", "Maintenance Work", "Deep Cleaning Service", "Safe Chemicals"],
      icon: "🧹",
      path: "/housekeeping"
    },
    {
      title: "Society Security",
      points: ["Visitor Record App", "Automatic Gate Pass", "Trained Guards", "Fire Safety Training"],
      icon: "🏘️",
      path: "/security"
    }
  ];

  const serviceKeywords = ["AI DETECTION", "MUMBAI MMR", "24/7 LIVE", "SMART ALARMS", "NIGHT VISION"];

  const features = [
    "Well Trained Guards", "24/7 Quick Support", "Modern Technology",
    "Verified Staff", "Service Across India", "Office Security Experts",
    "Daily Work Reports", "Custom Security Plans"
  ];

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse-cyan { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }
        .log-text { font-family: 'Courier New', monospace; font-size: 11px; color: #00e0ff; letter-spacing: 1px; }
        @media (max-width: 768px) {
          .hero-content { padding: 0 5% !important; text-align: center; justify-content: center; }
          .hero-title { font-size: 38px !important; line-height: 1.1 !important; }
          .hero-sub { font-size: 15px !important; margin: 15px auto !important; }
          .cta-row { flex-direction: column !important; gap: 12px !important; align-items: center; }
          .cta-btn { width: 100% !important; max-width: 300px; padding: 15px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-box { padding: 30px 10px !important; }
          .stat-num { font-size: 32px !important; }
          .spec-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .marquee-text { font-size: 50px !important; }
          .floating-group { right: 15px !important; bottom: 15px !important; }
          .float-btn { width: 50px !important; height: 50px !important; }
          .final-box { padding: 40px 15px !important; }
          .trust-bar { justify-content: center !important; }
          .hide-mobile { display: none !important; }
        }
        .float-btn:hover .tooltip { opacity: 1 !important; transform: translateX(-10px); }
      `}</style>

      {/* --- NEW: INTERACTIVE TOP HUD --- */}
      <div style={styles.hudBar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={styles.livePulse}>● LIVE</span>
          <span className="log-text">{systemLog}</span>
        </div>
        <div className="hide-mobile" style={{ fontSize: '10px', opacity: 0.5 }}>LAT: 19.0760° N | LON: 72.8777° E</div>
      </div>

      {/* STATUS BAR */}
      <div style={styles.statusBar}>
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>●</motion.span>
        &nbsp; SECURE CONNECTION | EAGLE FORCE SECURITY | SYSTEM READY 2026
      </div>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <motion.div style={{ ...styles.heroBg, y: bgY }} />
        
        {/* NEW: SCAN LINE EFFECT */}
        <motion.div 
          animate={{ top: ['0%', '100%', '0%'] }} 
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} 
          style={styles.scanLine} 
        />

        <div style={styles.heroOverlay} className="hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={styles.heroContent}>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }} className="trust-bar">
              <span style={styles.tagline}><FaShieldAlt /> GRADE-A PROTECTION</span>
            </div>

            <h1 style={styles.heroTitle} className="hero-title">
              ADVANCED <span style={styles.cyanText}>AI SECURITY</span><br />
              SYSTEMS & SURVEILLANCE
            </h1>

            <div style={styles.keywordCloud} className="trust-bar">
              {serviceKeywords.map((k, i) => (
                <span key={i} style={styles.miniTag}>{k}</span>
              ))}
            </div>

            <p style={styles.heroSub} className="hero-sub">
              Expert CCTV installation and 24/7 security monitoring for Mumbai's elite properties, 
              factories, and housing societies.
            </p>

            <div style={styles.trustBar} className="trust-bar">
              <div style={styles.trustItem}>⭐ 4.9 Rating</div>
              <div style={styles.trustItem}>1200+ Secured</div>
              <div style={styles.trustItem}>ISO 9001:2014</div>
            </div>

            <div style={styles.ctaRow} className="cta-row">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00e0ff" }}
                onClick={() => window.location.href = "tel:+919967875227"}
                style={styles.mainBtn}
                className="cta-btn"
              >
                CALL NOW
              </motion.button>
              <button 
                onClick={() => navigate("/contact")} 
                style={styles.secBtn}
                className="cta-btn"
              >
                REQUEST QUOTE
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- NEW: SIDE DECOR TECH TEXT --- */}
        <div className="hide-mobile" style={styles.techSideText}>
            EAGLE FORCE // SYSTEM_V4.2 // SECURITY_ARMED // AI_ACTIVE
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={styles.statsGrid} className="stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            style={styles.statBox}
            className="stat-box"
            whileHover={{ background: "#0a0a0a", borderTop: "2px solid #00e0ff" }}
          >
            <h2 style={styles.statNum} className="stat-num">
              <CountUp end={s.num} duration={2.5} suffix={s.label.includes("Rating") ? "★" : "+"} />
            </h2>
            <p style={styles.statLabel}>{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* --- NEW: TECH CARDS SECTION --- */}
      <section style={{ padding: '60px 8%', background: '#050505', borderBottom: '1px solid #111' }}>
          <div style={styles.featureGrid} className="feature-grid">
              <div style={styles.techCard}>
                  <FaSatellite style={{ color: '#00e0ff', fontSize: '24px' }} />
                  <h4>Remote Access</h4>
                  <p>Watch live from anywhere in the world on your mobile.</p>
              </div>
              <div style={styles.techCard}>
                  <FaMicrochip style={{ color: '#00e0ff', fontSize: '24px' }} />
                  <h4>AI Analytics</h4>
                  <p>Smart alerts for unauthorized human or vehicle entry.</p>
              </div>
          </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={styles.specSection}>
        <div style={styles.sectionHeader}>
          <h2 style={{fontSize: '24px'}}>// COMMAND CENTER SERVICES</h2>
          <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity }} style={styles.headerLine} />
        </div>

        <div style={styles.specGrid} className="spec-grid">
          {servicesDetailed.map((service, idx) => (
            <div key={idx} style={styles.specWrapper}>
              <div style={styles.specHeader}>
                <span style={{ fontSize: 30 }}>{service.icon}</span>
                <h3 style={{color: '#00e0ff'}}>{service.title}</h3>
              </div>

              <ul style={styles.specList}>
                {service.points.map((p, i) => (
                  <li key={i}><span style={{ color: '#00e0ff' }}>_</span> {p}</li>
                ))}
              </ul>

              <button 
                onClick={() => navigate(service.path)} 
                style={styles.viewDetailBtn}
              >
                VIEW DETAILS →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={styles.featureSection}>
        <h2 style={styles.centerTitle}>CORE SECURITY FEATURES</h2>
        <div style={styles.featureGrid} className="feature-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: [0, 1], x: [-20, 0] }}
              whileHover={{ x: 10, borderColor: "#00e0ff" }}
              style={styles.featureItem}
            >
              <span style={{ color: "#00e0ff", marginRight: '10px' }}>▶</span> {f}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section style={styles.finalSection}>
        <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} style={styles.finalBox} className="final-box">
          <h2 style={styles.finalTitle}>INITIALIZE SECURITY AUDIT?</h2>
          <p style={{ opacity: 0.6 }}>Eagle Force experts are standing by for Mumbai Metro Region (MMR).</p>
          <div style={styles.finalBtns} className="cta-row">
            <button style={styles.primaryFinal} className="cta-btn" onClick={() => window.location.href = "tel:+919967875227"}>START CONSULTATION</button>
            <button style={styles.secondaryFinal} className="cta-btn" onClick={() => navigate("/contact")}>ENQUIRE NOW</button>
          </div>
        </motion.div>
      </section>

      {/* FLOATING ACTION BUTTONS */}
      <div style={styles.floatingGroup} className="floating-group">
        <motion.a
          href="https://wa.me/+919967875227"
          target="_blank"
          className="float-btn"
          style={{ ...styles.floatBtn, background: "#25D366" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <FaWhatsapp size={28} />
          <span className="tooltip" style={styles.tooltip}>WhatsApp</span>
        </motion.a>

        <motion.a
          href="#"//Email
          className="float-btn"
          style={{ ...styles.floatBtn, background: "#007cf0" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          <FaEnvelope size={22} />
          <span className="tooltip" style={styles.tooltip}>Email</span>
        </motion.a>
      </div>
    </div>
  );
}

const styles = {
  container: { background: "#000", color: "#fff", fontFamily: "'Courier New', monospace", overflowX: "hidden" },
  hudBar: { position: 'fixed', top: '10px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1001, background: 'rgba(0,0,0,0.5)', padding: '5px 15px', borderLeft: '3px solid #00e0ff' },
  livePulse: { fontSize: '10px', fontWeight: 'bold', color: '#ff4d4d', animation: 'pulse-cyan 1s infinite' },
  statusBar: { background: "#00e0ff", color: "#000", fontSize: "10px", fontWeight: "bold", padding: "6px 20px", position: "fixed", top: 0, width: "100%", zIndex: 1000, letterSpacing: "1px" },
  hero: { height: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" },
  heroBg: { position: "absolute", width: "100%", height: "130%", backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0, filter: "brightness(0.3) grayscale(0.5)" },
  scanLine: { position: 'absolute', width: '100%', height: '2px', background: 'rgba(0, 224, 255, 0.2)', boxShadow: '0 0 15px #00e0ff', zIndex: 5, pointerEvents: 'none' },
  heroOverlay: { zIndex: 10, padding: "0 8%", width: "100%", display: 'flex', alignItems: 'center' },
  heroContent: { maxWidth: "800px" },
  tagline: { color: '#00e0ff', fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' },
  heroTitle: { fontSize: "clamp(40px, 8vw, 85px)", fontWeight: "900", lineHeight: 1, letterSpacing: "-2px", margin: 0 },
  cyanText: { color: "#00e0ff", textShadow: "0 0 20px rgba(0,224,255,0.3)" },
  keywordCloud: { display: "flex", gap: "8px", flexWrap: "wrap", margin: "20px 0" },
  miniTag: { fontSize: "10px", border: "1px solid #222", padding: "4px 8px", color: "#00e0ff", background: "rgba(0,224,255,0.05)" },
  heroSub: { fontSize: "17px", color: "#aaa", margin: "20px 0", lineHeight: 1.6, maxWidth: "550px" },
  trustBar: { display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "10px" },
  trustItem: { fontSize: "12px", color: "#00e0ff", border: "1px solid #113a44", background: "rgba(0,224,255,0.06)", padding: "5px 10px", fontWeight: "bold" },
  ctaRow: { display: "flex", gap: "15px", marginTop: "30px" },
  mainBtn: { background: "#00e0ff", color: "#000", padding: "16px 35px", border: "none", fontWeight: "900", cursor: "pointer", fontSize: '15px' },
  secBtn: { background: "transparent", border: "1px solid #fff", color: "#fff", padding: "16px 35px", cursor: "pointer", fontSize: '15px' },
  techSideText: { position: 'absolute', right: '-80px', top: '50%', transform: 'rotate(90deg)', fontSize: '11px', color: '#00e0ff', opacity: 0.3, letterSpacing: '5px' },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", background: "#050505", borderBottom: "1px solid #111" },
  statBox: { padding: "50px 20px", textAlign: "center", borderRight: "1px solid #111" },
  statNum: { fontSize: "42px", color: "#00e0ff", margin: 0, fontWeight: "900" },
  statLabel: { fontSize: "11px", color: "#666", letterSpacing: "1px", marginTop: "8px" },
  techCard: { background: '#0a0a0a', padding: '30px', border: '1px solid #111', borderRadius: '4px', textAlign: 'center' },
  specSection: { padding: "80px 8%" },
  sectionHeader: { position: "relative", marginBottom: "40px", display: "inline-block" },
  headerLine: { height: "2px", background: "#00e0ff", marginTop: "5px" },
  specGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" },
  specWrapper: { background: "#080808", padding: "25px", border: "1px solid #111", borderRadius: '4px' },
  specHeader: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" },
  specList: { padding: 0, listStyle: "none", marginBottom: "25px", color: "#777", fontSize: "14px", lineHeight: '1.8' },
  viewDetailBtn: { background: 'none', border: 'none', color: '#00e0ff', fontWeight: 'bold', cursor: 'pointer', padding: 0, fontSize: '13px', letterSpacing: '1px' },
  featureSection: { padding: "80px 8%", background: "#030303" },
  centerTitle: { textAlign: "center", fontSize: "28px", color: "#00e0ff", marginBottom: "50px", letterSpacing: "4px" },
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" },
  featureItem: { background: "#080808", padding: "18px", border: "1px solid #1a1a1a", fontSize: '14px' },
  finalSection: { padding: "100px 8%", textAlign: "center" },
  finalBox: { border: "1px solid #00e0ff", padding: "70px 30px", background: "linear-gradient(135deg, #001a1a 0%, #000 100%)", borderRadius: '8px' },
  finalTitle: { fontSize: "32px", fontWeight: "900", marginBottom: "15px" },
  finalBtns: { display: "flex", gap: "15px", justifyContent: "center", marginTop: "35px" },
  primaryFinal: { background: "#00e0ff", border: "none", padding: "16px 35px", fontWeight: "bold", cursor: "pointer" },
  secondaryFinal: { background: "transparent", border: "1px solid #fff", color: "#fff", padding: "16px 35px", cursor: "pointer" },
  floatingGroup: { position: "fixed", bottom: "30px", right: "30px", display: "flex", flexDirection: "column", gap: "12px", zIndex: 1000 },
  floatBtn: { width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", boxShadow: "0 10px 20px rgba(0,0,0,0.4)" },
  tooltip: { position: "absolute", right: "75px", background: "#00e0ff", color: "#000", padding: "4px 10px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold", opacity: 0, transition: "0.3s", pointerEvents: "none" }
};