import { motion } from "framer-motion";
import { FaBuilding, FaSchool, FaDumbbell, FaHospital, FaShoppingCart, FaHotel, FaSprayCan, FaUsers } from "react-icons/fa";

export default function Housekeeping() {
  const eliteServices = [
    { title: "CORPORATE OFFICES", icon: <FaBuilding />, desc: "Elite workspace sanitization and facility management for modern offices.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "EDUCATIONAL UNITS", icon: <FaSchool />, desc: "High-hygiene maintenance for schools and colleges to ensure student safety.", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800" },
    { title: "GYMS & FITNESS", icon: <FaDumbbell />, desc: "Tactical deep cleaning of workout equipment and high-traffic zones.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
    { title: "HEALTHCARE CENTERS", icon: <FaHospital />, desc: "Sterile and sanitized environment management for medical facilities.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
    { title: "RETAIL & MALLS", icon: <FaShoppingCart />, desc: "Maintaining showroom-ready aesthetics for high-end retail sectors.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800" },
    { title: "HOSPITALITY UNITS", icon: <FaHotel />, desc: "Professional housekeeping support for hotels and guest houses.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div style={styles.container}>
      {/* 📱 MOBILE RESPONSIVE CSS */}
      <style>{`
        @media (max-width: 900px) {
          .house-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-text h1 { font-size: 35px !important; }
        }
        @media (max-width: 600px) {
          .house-grid { grid-template-columns: 1fr !important; }
          .hero-text h1 { font-size: 28px !important; }
          .container-padding { padding: 100px 15px 50px !important; }
        }
        .house-card:hover img { transform: scale(1.1); filter: grayscale(0) brightness(1) !important; }
        @keyframes pulseEffect {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
      `}</style>

      <div className="container-padding" style={styles.wrapper}>
        
        {/* 🔥 TACTICAL HERO */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.hero}
          className="hero-text"
        >
          <div style={styles.tag}>// FACILITY_MAINTENANCE_DIVISION</div>
          <h1 style={styles.title}>ELITE <span style={{color: '#00e0ff'}}>HOUSEKEEPING</span></h1>
          <p style={styles.subtitle}>
            Deploying professional manpower and tactical cleaning protocols for 
            Gyms, Schools, and Corporate Hubs.
          </p>
        </motion.section>

        {/* 💎 SERVICE GRID */}
        <div style={styles.grid} className="house-grid">
          {eliteServices.map((service, i) => (
            <motion.div
              key={i}
              className="house-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={styles.card}
            >
              <div style={styles.imgWrapper}>
                <img src={service.img} alt={service.title} style={styles.cardImg} />
                <div style={styles.overlay} />
                <div style={styles.iconBox}>{service.icon}</div>
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDesc}>{service.desc}</p>
                <div style={styles.cardLine} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 📊 CAPABILITY SECTION */}
        <section style={styles.statsSection}>
          <motion.div whileHover={{ y: -5 }} style={styles.statBox}>
            <FaUsers style={{fontSize: '30px', color: '#00e0ff'}} />
            <h4 style={{margin: '10px 0 5px'}}>VERIFIED STAFF</h4>
            <p style={{fontSize: '12px', opacity: 0.6}}>Police verified professionals.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} style={styles.statBox}>
            <FaSprayCan style={{fontSize: '30px', color: '#00e0ff'}} />
            <h4 style={{margin: '10px 0 5px'}}>INDUSTRIAL GRADE</h4>
            <p style={{fontSize: '12px', opacity: 0.6}}>Eco-friendly tactical chemicals.</p>
          </motion.div>
        </section>

        {/* 🚀 CALL TO ACTION */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          style={styles.cta}
          onClick={() => window.location.href="tel:+919876543210"}
        >
          <div style={styles.ctaPulse} />
          <span style={{ position: 'relative', zIndex: 2 }}>REQUEST_FACILITY_AUDIT_NOW →</span>
        </motion.div>

      </div>
      {/* 🦅 BACKGROUND WATERMARK */}
      <div style={styles.watermark}>EAGLE_FORCE</div>
    </div>
  );
}

const styles = {
  container: { background: "#02040a", minHeight: "100vh", color: "#fff", position: 'relative', overflow: 'hidden' },
  wrapper: { maxWidth: 1100, margin: "0 auto", padding: "140px 40px 60px" },
  hero: { textAlign: "center", marginBottom: 80 },
  tag: { color: "#00e0ff", fontSize: 10, letterSpacing: 4, fontWeight: "bold", marginBottom: 15 },
  title: { fontSize: 50, fontWeight: 900, margin: 0, letterSpacing: 2 },
  subtitle: { opacity: 0.6, fontSize: 15, maxWidth: 650, margin: "20px auto", lineHeight: 1.7 },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 },
  card: { background: "rgba(10, 12, 20, 0.5)", borderRadius: 2, overflow: "hidden", border: "1px solid rgba(0,224,255,0.1)", position: "relative", cursor: 'pointer' },
  imgWrapper: { position: "relative", height: 200, overflow: "hidden" },
  cardImg: { width: "100%", height: "100%", objectFit: "cover", transition: "0.6s", filter: "brightness(0.5) grayscale(0.8)" },
  overlay: { position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, #0a0c14)" },
  iconBox: { position: 'absolute', bottom: 15, right: 15, color: '#00e0ff', fontSize: 24, zIndex: 2 },
  cardContent: { padding: 25 },
  cardTitle: { fontSize: 16, fontWeight: "900", marginBottom: 8, color: "#fff", letterSpacing: 1 },
  cardDesc: { fontSize: 13, color: "#888", lineHeight: 1.5, marginBottom: 15, minHeight: '60px' },
  cardLine: { width: '40px', height: '2px', background: '#00e0ff' },
  statsSection: { display: 'flex', justifyContent: 'center', gap: 60, marginTop: 80, borderTop: '1px solid #111', paddingTop: 60, flexWrap: 'wrap' },
  statBox: { textAlign: 'center', minWidth: '150px' },
  cta: { marginTop: 80, padding: '25px', background: 'transparent', border: '1px solid #00e0ff', color: '#00e0ff', fontWeight: 900, textAlign: 'center', letterSpacing: 3, fontSize: 12, cursor: 'pointer', position: 'relative', overflow: 'hidden' },
  ctaPulse: { position: 'absolute', inset: 0, background: 'rgba(0,224,255,0.08)', animation: 'pulseEffect 2s infinite' },
  watermark: { position: 'absolute', bottom: -50, right: -20, fontSize: 120, fontWeight: 900, color: 'rgba(0,224,255,0.03)', zIndex: 0, pointerEvents: 'none' }
};