import { motion } from "framer-motion";
import { FaVideo, FaTools, FaHdd, FaMicrochip, FaCogs, FaNetworkWired, FaWrench, FaShieldVirus, FaSearchPlus } from "react-icons/fa";

export default function CCTV() {
  const hardwareUnits = [
    {
      title: "CP PLUS / HIKVISION CAMERAS",
      icon: <FaVideo />,
      desc: "4K UHD optics with Sony Starvis sensors for crystal clear night vision and long-range surveillance.",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800" 
    },
    {
      title: "AMC (ANNUAL MAINTENANCE)",
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
        @media (max-width: 900px) { .tech-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { 
          .tech-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 32px !important; }
        }
        .hardware-card:hover .hardware-img { transform: scale(1.1); filter: brightness(0.9) grayscale(0) !important; }
      `}</style>

      <div style={styles.wrapper}>
        {/* 🔥 TACTICAL HEADER */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} style={styles.header}>
          <div style={styles.tag}>// MISSION_READY_HARDWARE</div>
          <h1 className="hero-title" style={styles.title}>CCTV <span style={{color: '#00e0ff'}}>COMMAND UNIT</span></h1>
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
            <h2 style={{margin: 0, fontSize: '22px', letterSpacing: '2px'}}>MAINTENANCE_PROTOCOLS</h2>
            <div style={{height: '2px', flex: 1, background: 'rgba(0,224,255,0.2)', marginLeft: '20px'}} />
          </div>
          
          <div style={styles.protocolGrid}>
            {maintenanceSteps.map((step, index) => (
              <motion.div 
                key={index}
                whileHover={{ backgroundColor: 'rgba(0,224,255,0.05)' }}
                style={styles.protocolCard}
              >
                <span style={{color: '#00e0ff', fontSize: '20px'}}>{step.icon}</span>
                <div style={{textAlign: 'left'}}>
                  <h4 style={{margin: '0 0 5px 0', fontSize: '14px'}}>{step.title}</h4>
                  <p style={{margin: 0, fontSize: '12px', color: '#888'}}>{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 📞 CTA STRIP */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          style={styles.ctaStrip}
          onClick={() => window.location.href="tel:+919876543210"}
        >
          <div style={styles.ctaText}>
            <FaTools style={{marginRight: '15px'}} />
            NEED URGENT REPAIR OR NEW INSTALLATION?
          </div>
          <div style={styles.ctaButton}>CONNECT_NOW</div>
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  container: { background: "#02040a", minHeight: "100vh", color: "#fff", paddingBottom: '100px' },
  wrapper: { maxWidth: 1200, margin: "0 auto", padding: "140px 20px 60px" },
  header: { textAlign: "center", marginBottom: 70 },
  tag: { color: "#00e0ff", fontSize: 10, letterSpacing: 5, fontWeight: "bold", marginBottom: 15 },
  title: { fontSize: 50, fontWeight: "900", margin: 0, letterSpacing: 2 },
  subtitle: { opacity: 0.6, fontSize: 15, maxWidth: 700, margin: "20px auto", lineHeight: 1.7 },

  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 25 },
  card: {
    background: "rgba(10, 12, 20, 0.8)", borderRadius: "4px", overflow: "hidden",
    border: "1px solid rgba(0,224,255,0.12)", position: "relative", transition: '0.3s'
  },
  imgWrapper: { position: "relative", height: 180, overflow: "hidden" },
  cardImg: { width: "100%", height: "100%", objectFit: "cover", transition: "0.6s", filter: "brightness(0.6) grayscale(0.5)" },
  imgOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, #0a0c14)" },
  cardIconBox: { position: 'absolute', top: 15, right: 15, color: '#00e0ff', fontSize: '20px', zIndex: 2 },
  
  cardContent: { padding: 25 },
  cardTitle: { fontSize: 16, fontWeight: "900", color: "#fff", margin: "0 0 10px 0", letterSpacing: 1 },
  cardDesc: { fontSize: 13, color: "#aaa", lineHeight: 1.6, marginBottom: 25, minHeight: 60 },
  statusBox: { display: 'flex', alignItems: 'center', gap: 10 },
  statusText: { color: "#00e0ff", fontSize: '9px', fontWeight: 'bold', letterSpacing: '1px' },
  statusLine: { flex: 1, height: '1px', background: 'rgba(0,224,255,0.1)' },

  protocolSection: { marginTop: 80, padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid #111' },
  protocolHeader: { display: 'flex', alignItems: 'center', marginBottom: 30 },
  protocolGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 },
  protocolCard: { display: 'flex', alignItems: 'center', gap: 20, padding: '15px', border: '1px solid rgba(255,255,255,0.05)', transition: '0.3s' },

  ctaStrip: {
    marginTop: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    background: '#00e0ff', color: '#000', padding: '20px 40px', cursor: 'pointer',
    flexWrap: 'wrap', gap: 20
  },
  ctaText: { fontSize: '16px', fontWeight: '900', display: 'flex', alignItems: 'center' },
  ctaButton: { border: '2px solid #000', padding: '10px 20px', fontSize: '12px', fontWeight: '900' }
};