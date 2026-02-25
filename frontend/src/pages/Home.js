import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
// Note: ServiceCard component ka import wahi rakha hai jo aapne diya tha
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);

  const stats = [
    { num: 500, label: "Cameras Installed" },
    { num: 120, label: "Happy Clients" },
    { num: 24, label: "Support" },
    { num: 5, label: "Service Rating" },
    { num: 1500, label: "On-Field Guards" },
    { num: 50, label: "City Presence" },
  ];

  const servicesDetailed = [
    {
      title: "CCTV & Surveillance",
      points: ["AI Human Detection", "Thermal Night Vision", "Remote Cloud Access", "24/7 Monitoring Center"],
      icon: "📹",
      path: "/cctv"
    },
    {
      title: "Housekeeping Elite",
      points: ["Hospital Grade Sanitization", "Corporate Maintenance", "Industrial Deep Cleaning", "Eco-Chemicals"],
      icon: "🧹",
      path: "/housekeeping"
    },
    {
      title: "Society Protection",
      points: ["Visitor Management", "Gate Pass Automation", "Armed/Unarmed Guards", "Fire Safety Drills"],
      icon: "🏘️",
      path: "/security"
    }
  ];

  const serviceKeywords = ["CCTV", "Security", "Housekeeping", "Surveillance", "Rapid Support", "Fire Safety", "Guard Force", "Facility Mgmt"];

  const features = [
    "Highly Trained Guards", "24/7 Rapid Support", "Latest Technology",
    "Verified Staff", "Pan India Service", "Corporate Experience",
    "Real-time Reporting", "Custom Security Plans"
  ];

  return (
    <div style={styles.container}>
      {/* ⚡ GLOBAL RESPONSIVE & INTERACTIVE CSS */}
      <style>{`
        @media (max-width: 768px) {
          .hero-content { padding: 0 5% !important; text-align: center; }
          .cta-row { justify-content: center; flex-direction: column; gap: 15px !important; }
          .spec-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-title { font-size: 45px !important; }
          .marquee-text { font-size: 60px !important; }
          .floating-group { right: 20px !important; bottom: 20px !important; }
        }
        .float-btn:hover .tooltip { opacity: 1 !important; transform: translateX(-10px); }
      `}</style>

      {/* 🟢 TOP STATUS BAR */}
      <div style={styles.statusBar}>
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>●</motion.span> 
        SECURE LINK ESTABLISHED | EAGLE_FORCE_INTERNAL | SYSTEM_READY_2026
      </div>

      {/* 🔥 HERO SECTION */}
      <section style={styles.hero}>
        <motion.div style={{ ...styles.heroBg, y: bgY }} />
        <div style={styles.heroOverlay} className="hero-content">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} style={styles.heroContent}>
            <h1 style={styles.heroTitle} className="hero-title">
              EAGLE FORCE<br />
              <span style={styles.cyanText}>INTELLIGENCE</span>
            </h1>
            <div style={styles.keywordCloud}>
              {serviceKeywords.map((k, i) => (
                <span key={i} style={styles.miniTag}>{k}</span>
              ))}
            </div>
            <p style={styles.heroSub}>
              Advanced Protection for <b>Societies</b>, <b>Corporates</b>, and <b>Industries</b>.
              Next-Gen AI Surveillance & Elite Facility Management.
            </p>
            <div style={styles.ctaRow} className="cta-row">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00e0ff" }} 
                onClick={() => window.location.href="tel:+919876543210"} 
                style={styles.mainBtn}
              >
                DEPLOY NOW
              </motion.button>
              <button onClick={() => navigate("/contact")} style={styles.secBtn}>COMMAND CENTER</button>
            </div>
          </motion.div>
        </div>
        <div style={styles.marqueeContainer}>
            <motion.div 
                animate={{ x: [0, -1000] }} 
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={styles.sideScrollText}
                className="marquee-text"
            >
                CCTV SECURITY • HOUSEKEEPING • SURVEILLANCE • PROTECTION • EAGLE FORCE • CCTV SECURITY • HOUSEKEEPING • SURVEILLANCE • PROTECTION • EAGLE FORCE •
            </motion.div>
        </div>
      </section>

      {/* 📊 STATS GRID */}
      <section style={styles.statsGrid} className="stats-grid">
        {stats.map((s, i) => (
          <motion.div 
            key={i} 
            style={styles.statBox} 
            whileHover={{ background: "#0a0a0a", borderTop: "2px solid #00e0ff" }}
          >
            <h2 style={styles.statNum}>
              <CountUp end={s.num} duration={2.5} suffix={s.label.includes("Rating") ? "★" : "+"} />
            </h2>
            <p style={styles.statLabel}>{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* 💎 SERVICE SPECIFICATIONS */}
      <section style={styles.specSection}>
        <div style={styles.sectionHeader}>
          <h2>// OPERATIONAL_UNITS</h2>
          <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity }} style={styles.headerLine} />
        </div>
        <div style={styles.specGrid} className="spec-grid">
          {servicesDetailed.map((service, idx) => (
            <div key={idx} style={styles.specWrapper}>
              <div style={styles.specHeader}>
                <span style={{fontSize: 30}}>{service.icon}</span>
                <h3>{service.title}</h3>
              </div>
              <ul style={styles.specList}>
                {service.points.map((p, i) => <li key={i}> <span style={{color:'#00e0ff'}}>_</span> {p}</li>)}
              </ul>
              <ServiceCard 
                title="View Protocol" 
                desc={`Accessing ${service.title}...`} 
                onClick={() => navigate(service.path)} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ TACTICAL FEATURES */}
      <section style={styles.featureSection}>
        <h2 style={styles.centerTitle}>TACTICAL ADVANTAGES</h2>
        <div style={styles.featureGrid} className="feature-grid">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              whileInView={{ opacity: [0, 1], x: [-20, 0] }}
              whileHover={{ x: 10, borderColor: "#00e0ff" }}
              style={styles.featureItem}
            >
              <span style={{color: "#00e0ff", marginRight: '10px'}}>▶</span> {f}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section style={styles.finalSection}>
        <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} style={styles.finalBox}>
          <h2 style={styles.finalTitle}>INITIALIZE SITE SECURITY AUDIT?</h2>
          <p style={{opacity: 0.6}}>Eagle Force technicians are on standby for rapid deployment.</p>
          <div style={styles.finalBtns} className="cta-row">
            <button style={styles.primaryFinal} onClick={() => window.location.href="tel:+919876543210"}>DIRECT LINE</button>
            <button style={styles.secondaryFinal} onClick={() => navigate("/contact")}>FILE ENQUIRY</button>
          </div>
        </motion.div>
      </section>

      {/* 🟢 UPGRADED FLOATING CONTACT GROUP */}
      <div style={styles.floatingGroup} className="floating-group">
        {/* WhatsApp */}
        <motion.a 
          href="https://wa.me/919876543210" 
          target="_blank" rel="noreferrer"
          className="float-btn"
          style={{...styles.floatBtn, background: "#25D366"}}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <FaWhatsapp size={30} />
          <span className="tooltip" style={styles.tooltip}>WhatsApp</span>
        </motion.a>

        {/* Email */}
        <motion.a 
          href="mailto:sam7317892429@gmail.com" 
          className="float-btn"
          style={{...styles.floatBtn, background: "#007cf0"}}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope size={24} />
          <span className="tooltip" style={styles.tooltip}>Email</span>
        </motion.a>
      </div>
    </div>
  );
}

const styles = {
  container: { background: "#000", color: "#fff", fontFamily: "'Courier New', monospace", overflowX: "hidden" },
  statusBar: { background: "#00e0ff", color: "#000", fontSize: "11px", fontWeight: "bold", padding: "6px 20px", position: "fixed", top: 0, width: "100%", zIndex: 1000, letterSpacing: "1px" },
  
  hero: { height: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" },
  heroBg: { position: "absolute", width: "100%", height: "130%", backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000')", backgroundSize: "cover", zIndex: 0, filter: "brightness(0.2) grayscale(0.5)" },
  heroOverlay: { zIndex: 10, padding: "0 8%", width: "100%" },
  heroContent: { maxWidth: "800px" },
  heroTitle: { fontSize: "clamp(50px, 10vw, 90px)", fontWeight: "900", lineHeight: 0.9, letterSpacing: "-2px" },
  cyanText: { color: "#00e0ff", textShadow: "0 0 30px rgba(0,224,255,0.4)" },
  keywordCloud: { display: "flex", gap: "10px", flexWrap: "wrap", margin: "25px 0" },
  miniTag: { fontSize: "10px", border: "1px solid #333", padding: "4px 10px", color: "#00e0ff", background: "rgba(0,224,255,0.05)" },
  heroSub: { fontSize: "18px", color: "#888", margin: "20px 0", lineHeight: 1.6, maxWidth: "600px" },
  
  ctaRow: { display: "flex", gap: "20px", marginTop: "30px" },
  mainBtn: { background: "#00e0ff", color: "#000", padding: "18px 40px", border: "none", fontWeight: "900", cursor: "pointer", transition: "0.3s" },
  secBtn: { background: "transparent", border: "1px solid #fff", color: "#fff", padding: "18px 40px", cursor: "pointer" },

  marqueeContainer: { position: "absolute", bottom: "10%", width: "100%", overflow: "hidden" },
  sideScrollText: { whiteSpace: "nowrap", fontSize: "120px", fontWeight: "900", opacity: 0.03, pointerEvents: "none", display: "inline-block" },

  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", borderBottom: "1px solid #111", background: "#050505" },
  statBox: { padding: "60px 20px", textAlign: "center", borderRight: "1px solid #111", transition: "0.3s" },
  statNum: { fontSize: "50px", color: "#00e0ff", margin: 0, fontWeight: "900" },
  statLabel: { fontSize: "12px", color: "#555", letterSpacing: "2px", marginTop: "10px" },

  specSection: { padding: "100px 8%" },
  sectionHeader: { position: "relative", marginBottom: "50px", display: "inline-block" },
  headerLine: { height: "2px", background: "#00e0ff", marginTop: "5px" },
  specGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" },
  specWrapper: { background: "#080808", padding: "30px", border: "1px solid #111", transition: "0.3s" },
  specHeader: { display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" },
  specList: { padding: 0, listStyle: "none", marginBottom: "30px", color: "#888", fontSize: "14px" },

  featureSection: { padding: "100px 8%", background: "#030303" },
  centerTitle: { textAlign: "center", fontSize: "32px", color: "#00e0ff", marginBottom: "60px", letterSpacing: "5px" },
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px" },
  featureItem: { background: "#080808", padding: "20px", border: "1px solid #222", fontWeight: "bold", cursor: "crosshair", transition: "0.3s" },

  finalSection: { padding: "120px 8%", textAlign: "center" },
  finalBox: { border: "1px solid #00e0ff", padding: "80px 20px", background: "radial-gradient(circle, #001a1a 0%, #000 100%)" },
  finalTitle: { fontSize: "35px", fontWeight: "900", marginBottom: "20px" },
  finalBtns: { display: "flex", gap: "20px", justifyContent: "center", marginTop: "40px" },
  primaryFinal: { background: "#00e0ff", border: "none", padding: "18px 40px", fontWeight: "bold", cursor: "pointer" },
  secondaryFinal: { background: "transparent", border: "1px solid #fff", color: "#fff", padding: "18px 40px", cursor: "pointer" },

  floatingGroup: { position: "fixed", bottom: "40px", right: "30px", display: "flex", flexDirection: "column", gap: "15px", zIndex: 9999 },
  floatBtn: { width: "65px", height: "65px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)" },
  tooltip: { position: "absolute", right: "80px", background: "#00e0ff", color: "#000", padding: "5px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold", opacity: 0, transition: "0.3s", pointerEvents: "none", whiteSpace: "nowrap" }
};