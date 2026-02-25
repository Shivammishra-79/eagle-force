import { motion } from "framer-motion";
import { FaShieldAlt, FaEye, FaUsers, FaCogs, FaBuilding, FaMicrochip } from "react-icons/fa";

export default function About() {
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
      {/* 🛠 MOBILE RESPONSIVE CSS */}
      <style>{`
        @media (max-width: 768px) {
          .about-hero h1 { font-size: 40px !important; }
          .vision-mission { grid-template-columns: 1fr !important; }
          .industry-grid { grid-template-columns: 1fr 1fr !important; }
          .container-padding { padding: 100px 20px 50px !important; }
        }
      `}</style>

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
          <motion.div {...fadeIn} style={styles.card}>
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

          <motion.div {...fadeIn} style={styles.card}>
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
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 224, 255, 0.1)" }}
              style={styles.industryCard}
            >
              <span style={{ fontSize: "30px", marginBottom: "10px" }}>{item.icon}</span>
              <p style={styles.industryName}>{item.name}</p>
            </motion.div>
          ))}
        </div>

        {/* ⚡ WHY CHOOSE US */}
        <section style={styles.statsSection}>
          <div style={styles.statBox}>
            <FaMicrochip style={styles.statIcon} />
            <h4>AI INTEGRATED</h4>
          </div>
          <div style={styles.statBox}>
            <FaUsers style={styles.statIcon} />
            <h4>ELITE FORCE</h4>
          </div>
          <div style={styles.statBox}>
            <FaCogs style={styles.statIcon} />
            <h4>24/7 SUPPORT</h4>
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
    fontFamily: "inherit",
    position: "relative",
    overflow: "hidden"
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "150px 40px 100px",
  },
  hero: {
    textAlign: "center",
    marginBottom: "80px"
  },
  tag: {
    fontSize: "12px",
    color: "#00e0ff",
    letterSpacing: "4px",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  mainTitle: {
    fontSize: "60px",
    fontWeight: "900",
    letterSpacing: "-1px",
    margin: "0 0 20px 0",
    lineHeight: 1
  },
  cyanText: { color: "#00e0ff" },
  mainDesc: {
    fontSize: "18px",
    color: "#888",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6"
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    marginBottom: "100px"
  },
  card: {
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(0, 224, 255, 0.1)",
    padding: "40px",
    position: "relative",
    overflow: "hidden"
  },
  cardHeader: { display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" },
  icon: { color: "#00e0ff", fontSize: "24px" },
  cardTitle: { fontSize: "20px", fontWeight: "bold", letterSpacing: "2px", margin: 0 },
  cardText: { color: "#aaa", fontSize: "15px", lineHeight: "1.8" },
  cardDecor: {
    position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px",
    background: "linear-gradient(90deg, #00e0ff, transparent)"
  },
  sectionHeader: { textAlign: "center", marginBottom: "50px" },
  subTitle: { fontSize: "24px", fontWeight: "bold", letterSpacing: "5px" },
  line: { width: "100px", height: "3px", background: "#00e0ff", margin: "15px auto" },
  industryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "100px"
  },
  industryCard: {
    background: "rgba(255, 255, 255, 0.03)",
    padding: "30px",
    textAlign: "center",
    border: "1px solid #111",
    cursor: "crosshair",
    transition: "0.3s"
  },
  industryName: { fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", margin: 0 },
  statsSection: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    flexWrap: "wrap",
    borderTop: "1px solid #111",
    paddingTop: "50px"
  },
  statBox: { textAlign: "center" },
  statIcon: { fontSize: "30px", color: "#00e0ff", marginBottom: "10px", opacity: 0.5 },
};