import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, img, onClick }) {
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
      style={styles.card}
    >
      {/* 🚀 TOP HUD DECOR */}
      <div style={styles.cardHeaderDecor}>
        <div style={styles.dot} />
        <div style={styles.line} />
      </div>

      {/* IMAGE WRAPPER */}
      <div style={styles.imgWrap}>
        <img
          src={img || "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1974"}
          alt={title}
          style={styles.img}
        />
        <div style={styles.overlay} />
        {/* Animated Scan Line */}
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={styles.scanLine} 
        />
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <div style={styles.categoryTag}>SECURITY_UNIT</div>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.desc}>{desc}</p>

        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#00e0ff", color: "#000" }}
          style={styles.btn}
        >
          VIEW_PROTOCOL →
        </motion.div>
      </div>

      {/* CORNER DECOR */}
      <div style={styles.corner} />
    </motion.div>
  );
}

const styles = {
  card: {
    width: "100%", // Responsive width
    maxWidth: "340px",
    background: "rgba(5, 8, 22, 0.8)",
    backdropFilter: "blur(10px)",
    borderRadius: "2px", // Sharp tactical edges
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