import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaVideo, FaTools, FaHdd, FaMicrochip, FaNetworkWired, FaWrench, FaShieldVirus, FaSearchPlus } from "react-icons/fa";

export default function CCTV() {
  // Page load par top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hardwareUnits = [
    {
      title: "CP PLUS / HIKVISION CAMERAS",
      icon: <FaVideo />,
      desc: "4K UHD optics with Sony Starvis sensors for crystal clear night vision and long-range surveillance.",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800" 
    },
    {
      title: "AMC (ANNUAL MAINTENANCE CONTRACT)",
      icon: <FaShieldVirus />,
      desc: "Priority support contract including quarterly health checks, lens cleaning, and software updates.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    },
    
    {
      title: "REPAIR & TROUBLESHOOTING",
      icon: <FaWrench />,
      desc: "On-site repair for signal loss, blurry vision, or power failures with genuine spare parts.",
      img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "DVR / NVR RECORDERS",
      icon: <FaMicrochip />,
      desc: "AI-integrated recording units with H.265+ compression and remote cloud backup capabilities.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "SURVEILLANCE STORAGE",
      icon: <FaHdd />,
      desc: "Western Digital Purple & Seagate Skyhawk drives designed for 24/7 continuous write operations.",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "SIGNAL & POWER CABLING",
      icon: <FaNetworkWired />,
      desc: "Heavy-duty CAT-6 and Coaxial 3+1 pure copper wiring for zero-latency video transmission.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const maintenanceSteps = [
    { title: "SYSTEM AUDIT", icon: <FaSearchPlus />, detail: "Full diagnostic scan of every camera and node." },
    { title: "LENS CALIBRATION", icon: <FaTools />, detail: "Precision cleaning and focus adjustment for HD clarity." },
    { title: "STORAGE CHECK", icon: <FaHdd />, detail: "Verifying backup logs and hard drive health status." }
  ];

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes scan { 0% { top: 0% } 100% { top: 100% } }
        @media (max-width: 900px) { .tech-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { 
          .tech-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 32px !important; }
          .container-padding { padding: 120px 15px 50px !important; }
        }
        .hardware-card:hover .hardware-img { transform: scale(1.1); filter: brightness(0.8) grayscale(0) !important; }
        .hardware-card:hover { border-color: #00e0ff !important; box-shadow: 0 0 20px rgba(0,224,255,0.1); }
      `}</style>

      <div style={styles.wrapper} className="container-padding">
        {/* 🔥 TACTICAL HEADER */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} style={styles.header}>
          <div style={styles.tag}>// MISSION_READY_HARDWARE</div>
          <h1 className="hero-title" style={styles.title}>CCTV <span style={styles.cyanText}>COMMAND UNIT</span></h1>
          <p style={styles.subtitle}>
            From high-end AMC services to complex board-level repairs, Eagle Force deploys 
            certified technical units for zero-failure surveillance.
          </p>
        </motion.div>

        {/* ⚡ HARDWARE & SERVICES GRID */}
        
        <div style={styles.grid} className="tech-grid">
          {hardwareUnits.map((item, i) => (
            <motion.div
              key={i}
              className="hardware-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={styles.card}
            >
              <div style={styles.imgWrapper}>
                <img src={item.img} alt={item.title} className="hardware-img" style={styles.cardImg} />
                <div style={styles.imgOverlay} />
                <div style={styles.scanLine} />
                <div style={styles.cardIconBox}>{item.icon}</div>
              </div>
              
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
                <div style={styles.statusBox}>
                  <span style={styles.statusText}>READY_FOR_DEPLOYMENT</span>
                  <div style={styles.statusLine} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🛠 AMC PROTOCOL SECTION */}
        <div style={styles.protocolSection}>
          <div style={styles.protocolHeader}>
            <h2 style={{margin: 0, fontSize: '20px', letterSpacing: '4px', color: '#00e0ff'}}>MAINTENANCE_PROTOCOLS</h2>
            <div style={{height: '1px', flex: 1, background: 'rgba(0,224,255,0.2)', marginLeft: '20px'}} />
          </div>
          
          <div style={styles.protocolGrid}>
            {maintenanceSteps.map((step, index) => (
              <motion.div 
                key={index}
                whileHover={{ backgroundColor: 'rgba(0,224,255,0.05)', borderColor: '#00e0ff' }}
                style={styles.protocolCard}
              >
                <span style={{color: '#00e0ff', fontSize: '24px'}}>{step.icon}</span>
                <div style={{textAlign: 'left'}}>
                  <h4 style={{margin: '0 0 5px 0', fontSize: '14px', letterSpacing: '1px'}}>{step.title}</h4>
                  <p style={{margin: 0, fontSize: '12px', color: '#888', lineHeight: '1.4'}}>{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 📞 CTA STRIP */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={styles.ctaStrip}
          onClick={() => window.location.href="tel:+919967875227"}
        >
          <div style={styles.ctaText}>
            <FaTools style={{marginRight: '15px'}} />
            NEED URGENT REPAIR OR NEW INSTALLATION?
          </div>
          <div style={styles.ctaButton}>INITIALIZE_CONTACT</div>
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  container: { background: "#02040a", minHeight: "100vh", color: "#fff", paddingBottom: '100px', fontFamily: "'Courier New', monospace" },
  wrapper: { maxWidth: 1200, margin: "0 auto", padding: "160px 20px 60px" },
  header: { textAlign: "center", marginBottom: 70 },
  tag: { color: "#00e0ff", fontSize: 10, letterSpacing: 5, fontWeight: "bold", marginBottom: 15, opacity: 0.7 },
  title: { fontSize: 55, fontWeight: "900", margin: 0, letterSpacing: '-1px', fontFamily: "'Syncopate', sans-serif" },
  cyanText: { color: "#00e0ff", textShadow: "0 0 15px rgba(0,224,255,0.3)" },
  subtitle: { opacity: 0.5, fontSize: "16px", maxWidth: 750, margin: "25px auto", lineHeight: 1.8 },

  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 25 },
  card: {
    background: "rgba(10, 12, 20, 0.4)", borderRadius: "2px", overflow: "hidden",
    border: "1px solid rgba(0,224,255,0.1)", position: "relative", transition: '0.4s ease'
  },
  imgWrapper: { position: "relative", height: 200, overflow: "hidden" },
  cardImg: { width: "100%", height: "100%", objectFit: "cover", transition: "0.8s ease", filter: "brightness(0.5) grayscale(0.8)" },
  scanLine: { position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'rgba(0,224,255,0.3)', boxShadow: '0 0 10px #00e0ff', animation: 'scan 3s linear infinite', zIndex: 2 },
  imgOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, #02040a)", zIndex: 1 },
  cardIconBox: { position: 'absolute', bottom: 15, right: 15, color: '#00e0ff', fontSize: '22px', zIndex: 3 },
  
  cardContent: { padding: "25px", position: 'relative', zIndex: 3 },
  cardTitle: { fontSize: "15px", fontWeight: "900", color: "#fff", margin: "0 0 12px 0", letterSpacing: "1px" },
  cardDesc: { fontSize: "13px", color: "#888", lineHeight: "1.6", marginBottom: 25, minHeight: "65px" },
  statusBox: { display: 'flex', alignItems: 'center', gap: 10 },
  statusText: { color: "#00e0ff", fontSize: '9px', fontWeight: 'bold', letterSpacing: '2px' },
  statusLine: { flex: 1, height: '1px', background: 'rgba(0,224,255,0.15)' },

  protocolSection: { marginTop: 100, padding: '50px 40px', background: 'rgba(0,224,255,0.02)', border: '1px solid rgba(0,224,255,0.05)' },
  protocolHeader: { display: 'flex', alignItems: 'center', marginBottom: 40 },
  protocolGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 25 },
  protocolCard: { display: 'flex', alignItems: 'center', gap: 20, padding: '20px', border: '1px solid rgba(255,255,255,0.03)', transition: '0.3s ease', background: '#05070a' },

  ctaStrip: {
    marginTop: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    background: '#00e0ff', color: '#000', padding: '25px 45px', cursor: 'pointer',
    flexWrap: 'wrap', gap: 20, borderRadius: '2px'
  },
  ctaText: { fontSize: '16px', fontWeight: '900', display: 'flex', alignItems: 'center', letterSpacing: '1px' },
  ctaButton: { border: '2px solid #000', padding: '10px 25px', fontSize: '12px', fontWeight: '900', letterSpacing: '1px' }
};