import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { FaWhatsapp, FaEnvelope, FaShieldAlt, FaSatellite, FaMicrochip } from "react-icons/fa";
import { useState, useEffect } from "react";

// --- INTERNAL COMPONENT: ServiceCard ---
const LocalServiceCard = ({ title, desc, img, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ 
        y: -12, 
        rotateX: 5, 
        rotateY: -5,
        borderColor: "#00e0ff",
        boxShadow: "0 0 30px rgba(0, 224, 255, 0.2)"
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={cardStyles.card}
    >
      <div style={cardStyles.cardHeaderDecor}>
        <div style={cardStyles.dot} />
        <div style={cardStyles.line} />
      </div>

      <div style={cardStyles.imgWrap}>
        <img src={img} alt={title} style={cardStyles.img} />
        <div style={cardStyles.overlay} />
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={cardStyles.scanLine} 
        />
      </div>

      <div style={cardStyles.content}>
        <div style={cardStyles.categoryTag}>SECURITY_UNIT</div>
        <h3 style={cardStyles.title}>{title}</h3>
        <p style={cardStyles.desc}>{desc}</p>
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#00e0ff", color: "#000" }}
          style={cardStyles.btn}
        >
          VIEW_PROTOCOL →
        </motion.div>
      </div>
      <div style={cardStyles.corner} />
    </motion.div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const [systemLog, setSystemLog] = useState("Initializing Eagle Force Protocols...");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);

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
      desc: "Advanced AI Human Detection, Night Vision, and 24/7 Mobile Access.",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800",
      path: "/cctv"
    },
    {
      title: "Cleaning Services",
      desc: "Deep Sanitization, Maintenance, and Professional Housekeeping.",
      img: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=800",
      path: "/housekeeping"
    },
    {
      title: "Society Security",
      desc: "Trained Guards, Visitor Apps, and Automatic Gate Pass Systems.",
      img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800",
      path: "/security"
    }
  ];

  const serviceKeywords = ["AI DETECTION", "MUMBAI MMR", "24/7 LIVE", "SMART ALARMS", "NIGHT VISION"];
  const features = ["Well Trained Guards", "24/7 Quick Support", "Modern Technology", "Verified Staff", "Service Across India", "Office Security Experts", "Daily Work Reports", "Custom Security Plans"];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse-cyan { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }
        .log-text { font-family: 'Courier New', monospace; font-size: 11px; color: #00e0ff; letter-spacing: 1px; }
        
        /* Mobile Specific Fixes */
        @media (max-width: 768px) {
          .hero-content { padding: 0 5% !important; text-align: center !important; }
          .hero-title { font-size: 34px !important; line-height: 1.2 !important; margin-top: 20px !important; }
          .hero-sub { font-size: 14px !important; margin: 15px auto !important; padding: 0 10px; }
          .cta-row { flex-direction: column !important; gap: 10px !important; align-items: center; width: 100%; }
          .cta-btn { width: 90% !important; padding: 14px !important; }
          
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-box { padding: 25px 5px !important; border-bottom: 1px solid #111; }
          .stat-num { font-size: 28px !important; }
          
          .spec-grid { grid-template-columns: 1fr !important; padding: 0 20px !important; gap: 20px !important; }
          .feature-grid { grid-template-columns: 1fr !important; padding: 0 10px !important; }
          
          .hud-bar { top: 70px !important; left: 10px !important; right: 10px !important; padding: 5px 10px !important; }
          .spec-section { padding: 60px 5% !important; }
          .feature-section { padding: 60px 5% !important; }
          
          .final-box { padding: 30px 15px !important; border-radius: 0px !important; }
          .final-title { font-size: 24px !important; }
          .trust-bar { justify-content: center !important; gap: 8px !important; }
          .floating-group { right: 10px !important; bottom: 10px !important; }
          .float-btn { width: 45px !important; height: 45px !important; }
        }

        .float-btn:hover .tooltip { opacity: 1 !important; transform: translateX(-10px); }
      `}</style>

      {/* HUD BAR */}
      <div style={styles.hudBar} className="hud-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={styles.livePulse}>● LIVE</span>
          <span className="log-text" style={{ fontSize: '9px' }}>{systemLog}</span>
        </div>
        <div className="hide-mobile" style={{ fontSize: '10px', opacity: 0.5 }}>LAT: 19.0760° N | LON: 72.8777° E</div>
      </div>

      {/* STATUS BAR */}
      <div style={styles.statusBar}>
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>●</motion.span>
        &nbsp; SECURE CONNECTION | EAGLE FORCE SECURITY
      </div>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <motion.div style={{ ...styles.heroBg, y: bgY }} />
        <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={styles.scanLine} />
        <div style={styles.heroOverlay} className="hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={styles.heroContent}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }} className="trust-bar">
              <span style={styles.tagline}><FaShieldAlt /> GRADE-A PROTECTION</span>
            </div>
            <h1 style={styles.heroTitle} className="hero-title">
              ADVANCED <span style={styles.cyanText}>AI SECURITY</span><br />SYSTEMS
            </h1>
            <div style={styles.keywordCloud} className="trust-bar">
              {serviceKeywords.slice(0, 3).map((k, i) => (
                <span key={i} style={styles.miniTag}>{k}</span>
              ))}
            </div>
            <p style={styles.heroSub} className="hero-sub">Expert CCTV and 24/7 security monitoring for Mumbai's elite properties.</p>
            <div style={styles.ctaRow} className="cta-row">
              <motion.button whileHover={{ scale: 1.05 }} onClick={() => window.location.href = "tel:+919967875227"} style={styles.mainBtn} className="cta-btn">CALL NOW</motion.button>
              <button onClick={() => handleNavigation("/contact")} style={styles.secBtn} className="cta-btn">REQUEST QUOTE</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={styles.statsGrid} className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} style={styles.statBox} className="stat-box">
            <h2 style={styles.statNum} className="stat-num"><CountUp end={s.num} duration={2} suffix="+" /></h2>
            <p style={styles.statLabel}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* SERVICES SECTION */}
      <section style={styles.specSection} className="spec-section">
        <div style={styles.sectionHeader}>
          <h2 style={{fontSize: '20px'}}>// COMMAND CENTER SERVICES</h2>
          <div style={styles.headerLine} />
        </div>
        <div style={styles.specGrid} className="spec-grid">
          {servicesDetailed.map((service, idx) => (
            <LocalServiceCard 
              key={idx}
              title={service.title}
              desc={service.desc}
              img={service.img}
              onClick={() => handleNavigation(service.path)}
            />
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={styles.featureSection} className="feature-section">
        <h2 style={styles.centerTitle}>CORE FEATURES</h2>
        <div style={styles.featureGrid} className="feature-grid">
          {features.map((f, i) => (
            <div key={i} style={styles.featureItem}>
              <span style={{ color: "#00e0ff" }}>▶</span> {f}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={styles.finalSection}>
        <div style={styles.finalBox} className="final-box">
          <h2 style={styles.finalTitle}>INITIALIZE AUDIT?</h2>
          <div style={styles.finalBtns} className="cta-row">
            <button style={styles.primaryFinal} className="cta-btn" onClick={() => window.location.href = "tel:+919967875227"}>CONSULTATION</button>
          </div>
        </div>
      </section>

      {/* FLOATING ACTION BUTTONS */}
      <div style={styles.floatingGroup} className="floating-group">
        <a href="https://wa.me/+919967875227" target="_blank" className="float-btn" style={{ ...styles.floatBtn, background: "#25D366" }}>
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
}

// --- STYLES ---
const cardStyles = {
  card: { width: "100%", maxWidth: "340px", background: "#0a0a0a", borderRadius: "2px", overflow: "hidden", border: "1px solid #222", position: "relative", margin: "0 auto" },
  cardHeaderDecor: { display: 'flex', alignItems: 'center', padding: '10px', gap: '8px' },
  dot: { width: 6, height: 6, borderRadius: '50%', background: '#00e0ff' },
  line: { flex: 1, height: '1px', background: 'rgba(0,224,255,0.2)' },
  imgWrap: { position: "relative", height: 160, overflow: "hidden" },
  img: { width: "100%", height: "100%", objectFit: "cover" },
  overlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #000)' },
  scanLine: { position: 'absolute', left: 0, width: '100%', height: '2px', background: '#00e0ff', zIndex: 2 },
  content: { padding: "15px" },
  categoryTag: { fontSize: '9px', color: '#00e0ff', marginBottom: '8px' },
  title: { margin: 0, fontSize: 16, color: "#fff", fontWeight: "bold" },
  desc: { marginTop: 8, fontSize: 12, color: "#aaa", lineHeight: 1.5 },
  btn: { marginTop: 15, display: "inline-block", padding: "8px 16px", border: "1px solid #00e0ff", fontSize: 10, color: "#00e0ff" },
  corner: { position: 'absolute', bottom: 0, right: 0, width: 15, height: 15, background: '#00e0ff', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', opacity: 0.3 }
};

const styles = {
  container: { background: "#000", color: "#fff", fontFamily: "sans-serif", overflowX: "hidden" },
  hudBar: { position: 'fixed', top: '90px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', zIndex: 9000, background: 'rgba(0,0,0,0.8)', padding: '8px 15px', borderLeft: '3px solid #00e0ff' },
  livePulse: { fontSize: '9px', fontWeight: 'bold', color: '#ff4d4d' },
  statusBar: { background: "#00e0ff", color: "#000", fontSize: "9px", fontWeight: "bold", padding: "5px 20px", position: "fixed", top: 0, width: "100%", zIndex: 10000, textAlign: 'center' },
  hero: { minHeight: "85vh", position: "relative", display: "flex", alignItems: "center", paddingTop: '60px' },
  heroBg: { position: "absolute", width: "100%", height: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000')", backgroundSize: "cover", zIndex: 0, filter: "brightness(0.3)" },
  scanLine: { position: 'absolute', width: '100%', height: '1px', background: 'rgba(0, 224, 255, 0.3)', zIndex: 5 },
  heroOverlay: { zIndex: 10, padding: "0 8%", width: "100%" },
  heroTitle: { fontSize: "60px", fontWeight: "900", margin: 0, textTransform: 'uppercase' },
  cyanText: { color: "#00e0ff" },
  heroSub: { fontSize: "16px", color: "#ccc", margin: "20px 0", maxWidth: "500px" },
  ctaRow: { display: "flex", gap: "15px" },
  mainBtn: { background: "#00e0ff", color: "#000", padding: "14px 30px", border: "none", fontWeight: "bold", cursor: "pointer" },
  secBtn: { background: "transparent", border: "1px solid #fff", color: "#fff", padding: "14px 30px", cursor: "pointer" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", background: "#050505" },
  statBox: { padding: "40px 10px", textAlign: "center", border: "0.1px solid #111" },
  statNum: { fontSize: "36px", color: "#00e0ff", margin: 0 },
  statLabel: { fontSize: "10px", color: "#777", marginTop: "5px" },
  specSection: { padding: "80px 8%" },
  specGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" },
  featureSection: { padding: "60px 8%", background: "#050505" },
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" },
  featureItem: { background: "#0a0a0a", padding: "15px", border: "1px solid #111", fontSize: '13px' },
  finalSection: { padding: "60px 5%", textAlign: "center" },
  finalBox: { border: "1px solid #00e0ff", padding: "50px 20px" },
  floatingGroup: { position: "fixed", bottom: "30px", right: "30px", zIndex: 9999 },
  floatBtn: { width: "55px", height: "55px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }
};