import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// --- INTERNAL COMPONENT: ServiceCard (Ab isi file mein implement kar diya hai) ---
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
      {/* TOP HUD DECOR */}
      <div style={cardStyles.cardHeaderDecor}>
        <div style={cardStyles.dot} />
        <div style={cardStyles.line} />
      </div>

      {/* IMAGE WRAPPER */}
      <div style={cardStyles.imgWrap}>
        <img
          src={img || "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1974"}
          alt={title}
          style={cardStyles.img}
        />
        <div style={cardStyles.overlay} />
        {/* Animated Scan Line */}
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={cardStyles.scanLine} 
        />
      </div>

      {/* CONTENT */}
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

      {/* CORNER DECOR */}
      <div style={cardStyles.corner} />
    </motion.div>
  );
};

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceData = [
    {
      title: "CCTV SURVEILLANCE",
      desc: "AI-powered thermal cameras with 24/7 remote monitoring and cloud backup protocols.",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800",
      path: "/cctv"
    },
    {
      title: "ELITE HOUSEKEEPING",
      desc: "Industrial grade housekeeping and sanitization units for corporate and residential sectors.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTQ4snx-MINaG8iz46P01jJTArLMUQyEpOw&s",
      path: "/housekeeping"
    },
    {
      title: "SOCIETY PROTECTION",
      desc: "Tactical security personnel trained for high-risk environments and corporate assets.",
      img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800",
      path: "/security"
    }
  ];

  return (
    <div style={styles.container}>
      <style>{`
        .services-header h1 { font-size: clamp(35px, 8vw, 60px) !important; }
        @media (max-width: 768px) {
          .services-grid { 
            grid-template-columns: 1fr !important; 
            justify-items: center; 
            padding: 0 10px;
          }
          .container-padding { padding: 120px 15px 50px !important; }
        }
        .service-card-wrapper { transition: transform 0.3s ease; }
      `}</style>

      {/* Decorative Cyber Grid Background */}
      <div style={styles.cyberGrid} />

      <div style={styles.wrapper} className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.header}
          className="services-header"
        >
          <span style={styles.tag}>// OPERATIONAL_CATALOG_2026</span>
          <h1 style={styles.title}>OUR <span style={styles.cyanText}>SERVICES</span></h1>
          <div style={styles.titleLine} />
          <p style={styles.subText}>
            Deploying advanced security protocols and elite facility management solutions 
            across the Mumbai Metropolitan Region.
          </p>
        </motion.div>

        <div style={styles.grid} className="services-grid">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Using the Internal Component */}
              <LocalServiceCard 
                title={service.title}
                desc={service.desc}
                img={service.img}
                onClick={() => {
                    navigate(service.path);
                    window.scrollTo(0,0);
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          style={styles.techInfo}
        >
          CORE_ENGINE: EAGLE_FORCE_V4 // STATUS: ALL_SYSTEMS_OPERATIONAL
        </motion.div>
      </div>
    </div>
  );
}

// --- Internal Card Styles ---
const cardStyles = {
  card: {
    width: "100%",
    maxWidth: "340px",
    background: "rgba(5, 8, 22, 0.8)",
    backdropFilter: "blur(10px)",
    borderRadius: "2px",
    overflow: "hidden",
    cursor: "pointer",
    border: "1px solid rgba(0,224,255,0.2)",
    position: "relative",
    transition: "0.3s",
    marginBottom: "20px"
  },
  cardHeaderDecor: { display: 'flex', alignItems: 'center', padding: '10px', gap: '8px' },
  dot: { width: 6, height: 6, borderRadius: '50%', background: '#00e0ff' },
  line: { flex: 1, height: '1px', background: 'rgba(0,224,255,0.2)' },
  imgWrap: { position: "relative", height: 180, overflow: "hidden", borderBottom: '1px solid rgba(0,224,255,0.1)' },
  img: { width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.3) brightness(0.8)" },
  overlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #02040a)' },
  scanLine: { position: 'absolute', left: 0, width: '100%', height: '2px', background: 'rgba(0,224,255,0.5)', boxShadow: '0 0 10px #00e0ff', zIndex: 2 },
  content: { padding: "20px" },
  categoryTag: { fontSize: '9px', color: '#00e0ff', letterSpacing: '2px', marginBottom: '8px', fontWeight: 'bold' },
  title: { margin: 0, fontSize: 18, color: "#fff", fontWeight: 900, letterSpacing: 1 },
  desc: { marginTop: 10, fontSize: 13, color: "#aaa", lineHeight: 1.6, minHeight: '60px' },
  btn: { 
    marginTop: 20, display: "inline-block", padding: "10px 20px", border: "1px solid #00e0ff", 
    fontSize: 11, fontWeight: 900, color: "#00e0ff", transition: "0.3s", letterSpacing: 1 
  },
  corner: { position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, background: '#00e0ff', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', opacity: 0.5 }
};

const styles = {
  container: { 
    background: "#02040a", 
    minHeight: "100vh", 
    color: "#fff", 
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Courier New', monospace" 
  },
  cyberGrid: {
    position: "absolute",
    top: 0, left: 0, width: "100%", height: "100%",
    backgroundImage: `linear-gradient(rgba(0, 224, 255, 0.05) 1px, transparent 1px), 
                      linear-gradient(90deg, rgba(0, 224, 255, 0.05) 1px, transparent 1px)`,
    backgroundSize: "50px 50px",
    pointerEvents: "none",
    zIndex: 1
  },
  wrapper: { 
    maxWidth: "1200px", 
    margin: "0 auto", 
    padding: "160px 20px 100px", 
    position: "relative",
    zIndex: 2
  },
  header: { textAlign: "center", marginBottom: "80px" },
  tag: { color: "#00e0ff", fontSize: "11px", letterSpacing: "5px", fontWeight: "bold", opacity: 0.8 },
  title: { 
    fontSize: "60px", 
    fontWeight: "900", 
    margin: "15px 0 5px", 
    letterSpacing: "2px"
  },
  cyanText: { color: "#00e0ff", textShadow: "0 0 20px rgba(0,224,255,0.3)" },
  titleLine: { width: "100px", height: "3px", background: "#00e0ff", margin: "15px auto 25px" },
  subText: { color: "#888", maxWidth: "650px", margin: "0 auto", fontSize: "16px", lineHeight: "1.7" },
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
    gap: "40px",
    justifyContent: "center"
  },
  techInfo: {
    textAlign: 'center',
    marginTop: '100px',
    fontSize: '10px',
    letterSpacing: '3px',
    color: '#00e0ff'
  }
};
