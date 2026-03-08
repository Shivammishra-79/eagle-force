import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaShieldAlt, FaEye, FaUsers, FaCogs, FaBuilding, FaMicrochip } from "react-icons/fa";

export default function About() {
  // Page load par top par le jane ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const industries = [
    { name: "Residential Societies", icon: "🏘️" },
    { name: "Corporate Offices", icon: "🏢" },
    { name: "Industrial Units", icon: "🏭" },
    { name: "Hospitals", icon: "🏥" },
    { name: "Educational Units", icon: "🎓" },
    { name: "Shopping Complexes", icon: "🛒" },
  ];

  return (
    <div style={styles.container}>
      {/* 🛠 MOBILE RESPONSIVE CSS - Navbar Compatibility Included */}
      <style>{`
        @keyframes scanline { 0% { bottom: 100%; } 100% { bottom: 0%; } }
        .about-hero h1 { font-size: clamp(35px, 8vw, 60px) !important; }
        @media (max-width: 768px) {
          .vision-mission { grid-template-columns: 1fr !important; }
          .industry-grid { grid-template-columns: 1fr 1fr !important; }
          .container-padding { padding: 120px 20px 50px !important; }
          .stat-group { gap: 30px !important; }
        }
      `}</style>

      {/* Decorative Scanline effect for Cyber Theme */}
      <div style={styles.scanEffect} />

      <div className="container-padding" style={styles.wrapper}>
        
        {/* 🔥 HERO SECTION */}
        <motion.section {...fadeIn} className="about-hero" style={styles.hero}>
          <div style={styles.tag}>// MISSION_PROFILE_2026</div>
          <h1 style={styles.mainTitle}>
            WE ARE THE <span style={styles.cyanText}>EAGLE FORCE</span>
          </h1>
          <p style={styles.mainDesc}>
            Eagle Force Security Services Pvt. Ltd. is not just a security company; we are a 
            professionally managed intelligence organization. We specialize in integrated 
            surveillance, elite protection, and tactical facility management.
          </p>
        </motion.section>

        {/* 📊 CORE VALUES (VISION/MISSION) */}
        <div style={styles.grid2} className="vision-mission">
          <motion.div {...fadeIn} style={styles.card} whileHover={{ borderColor: "#00e0ff" }}>
            <div style={styles.cardHeader}>
              <FaEye style={styles.icon} />
              <h2 style={styles.cardTitle}>OUR VISION</h2>
            </div>
            <p style={styles.cardText}>
              To dominate the security landscape in India as the most trusted brand, 
              leveraging AI-integrated surveillance and a zero-failure protection protocol.
            </p>
            <div style={styles.cardDecor} />
          </motion.div>

          <motion.div {...fadeIn} style={styles.card} whileHover={{ borderColor: "#00e0ff" }}>
            <div style={styles.cardHeader}>
              <FaShieldAlt style={styles.icon} />
              <h2 style={styles.cardTitle}>OUR MISSION</h2>
            </div>
            <p style={styles.cardText}>
              Safeguarding assets and lives through a combination of elite trained 
              manpower, real-time response systems, and next-gen surveillance tech.
            </p>
            <div style={styles.cardDecor} />
          </motion.div>
        </div>

        {/* 🏢 INDUSTRIES SECTION */}
        <motion.div {...fadeIn} style={styles.sectionHeader}>
          <h2 style={styles.subTitle}>SECTORS UNDER PROTECTION</h2>
          <div style={styles.line} />
        </motion.div>

        <div style={styles.industryGrid} className="industry-grid">
          {industries.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 224, 255, 0.05)", borderColor: "#00e0ff" }}
              style={styles.industryCard}
            >
              <span style={{ fontSize: "40px", marginBottom: "15px", display: "block" }}>{item.icon}</span>
              <p style={styles.industryName}>{item.name}</p>
            </motion.div>
          ))}
        </div>

        {/* ⚡ WHY CHOOSE US - STATS */}
        <section style={styles.statsSection} className="stat-group">
          <div style={styles.statBox}>
            <FaMicrochip style={styles.statIcon} />
            <h4 style={styles.statLabel}>AI INTEGRATED</h4>
          </div>
          <div style={styles.statBox}>
            <FaUsers style={styles.statIcon} />
            <h4 style={styles.statLabel}>ELITE FORCE</h4>
          </div>
          <div style={styles.statBox}>
            <FaCogs style={styles.statIcon} />
            <h4 style={styles.statLabel}>24/7 SUPPORT</h4>
          </div>
        </section>

      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#02040a",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "'Courier New', monospace",
    position: "relative",
    overflow: "hidden"
  },
  scanEffect: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 224, 255, 0.02) 50%)',
    backgroundSize: '100% 4px',
    zIndex: 1,
    pointerEvents: 'none'
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "160px 40px 100px", // Adjusted for Navbar height (85px + breathing room)
    position: 'relative',
    zIndex: 2
  },
  hero: {
    textAlign: "center",
    marginBottom: "100px"
  },
  tag: {
    fontSize: "12px",
    color: "#00e0ff",
    letterSpacing: "4px",
    fontWeight: "bold",
    marginBottom: "20px",
    opacity: 0.8
  },
  mainTitle: {
    fontSize: "60px",
    fontWeight: "900",
    letterSpacing: "-2px",
    margin: "0 0 25px 0",
    lineHeight: 1.1,
    fontFamily: "'Syncopate', sans-serif"
  },
  cyanText: { 
    color: "#00e0ff",
    textShadow: "0 0 15px rgba(0, 224, 255, 0.4)"
  },
  mainDesc: {
    fontSize: "18px",
    color: "#888",
    maxWidth: "850px",
    margin: "0 auto",
    lineHeight: "1.8"
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    marginBottom: "120px"
  },
  card: {
    background: "rgba(255, 255, 255, 0.01)",
    border: "1px solid rgba(0, 224, 255, 0.1)",
    padding: "50px 40px",
    position: "relative",
    overflow: "hidden",
    transition: "0.4s ease"
  },
  cardHeader: { display: "flex", alignItems: "center", gap: "15px", marginBottom: "25px" },
  icon: { color: "#00e0ff", fontSize: "28px" },
  cardTitle: { fontSize: "22px", fontWeight: "bold", letterSpacing: "2px", margin: 0 },
  cardText: { color: "#aaa", fontSize: "16px", lineHeight: "1.8" },
  cardDecor: {
    position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px",
    background: "linear-gradient(90deg, #00e0ff, transparent)"
  },
  sectionHeader: { textAlign: "center", marginBottom: "60px" },
  subTitle: { fontSize: "24px", fontWeight: "bold", letterSpacing: "6px", color: "#fff" },
  line: { width: "80px", height: "3px", background: "#00e0ff", margin: "20px auto" },
  industryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    marginBottom: "120px"
  },
  industryCard: {
    background: "rgba(255, 255, 255, 0.02)",
    padding: "40px 20px",
    textAlign: "center",
    border: "1px solid #111",
    cursor: "crosshair",
    transition: "0.3s ease"
  },
  industryName: { fontSize: "13px", fontWeight: "900", letterSpacing: "2px", margin: 0, color: "#eee" },
  statsSection: {
    display: "flex",
    justifyContent: "space-around",
    gap: "50px",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(0, 224, 255, 0.1)",
    paddingTop: "70px"
  },
  statBox: { textAlign: "center" },
  statIcon: { fontSize: "35px", color: "#00e0ff", marginBottom: "15px", opacity: 0.7 },
  statLabel: { fontSize: "14px", fontWeight: "900", letterSpacing: "2px", color: "#00e0ff" }
};