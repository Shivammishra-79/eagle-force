import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard"; // Path check kar lena

export default function Services() {
  const serviceData = [
    {
      title: "CCTV SURVEILLANCE",
      desc: "AI-powered thermal cameras with 24/7 remote monitoring and cloud backup protocols.",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800",
      path: "/cctv"
    },
    {
      title: "ELITE HOUSEKEEPING",
      desc: "Tactical security personnel trained for high-risk environments and corporate assets.",
      img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800",
      path: "/housekeeping"
    },
    {
      title: "SECURITY PAGE",
      desc: "Industrial grade housekeeping and sanitization units for corporate and residential sectors.",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",
      path: "/security"
    }
  ];

  return (
    <div style={styles.container}>
      {/* 📱 MOBILE RESPONSIVE CSS */}
      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; justify-items: center; }
          .services-header h1 { font-size: 35px !important; }
        }
      `}</style>

      <div style={styles.wrapper}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.header}
          className="services-header"
        >
          <span style={styles.tag}>// OPERATIONAL_CATALOG</span>
          <h1 style={styles.title}>OUR <span style={{color: '#00e0ff'}}>SERVICES</span></h1>
          <p style={styles.subText}>Deploying advanced security protocols and elite facility management solutions.</p>
        </motion.div>

        <div style={styles.grid} className="services-grid">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard 
                title={service.title}
                desc={service.desc}
                img={service.img}
                onClick={() => window.location.href = service.path}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { background: "#02040a", minHeight: "100vh", color: "#fff", padding: "120px 20px" },
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  header: { textAlign: "center", marginBottom: "60px" },
  tag: { color: "#00e0ff", fontSize: "11px", letterSpacing: "4px", fontWeight: "bold" },
  title: { fontSize: "50px", fontWeight: "900", margin: "10px 0", letterSpacing: "2px" },
  subText: { color: "#888", maxWidth: "600px", margin: "0 auto", fontSize: "15px" },
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
    gap: "30px",
    justifyContent: "center"
  }
};