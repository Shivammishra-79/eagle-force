import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { 
  FaGavel, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, 
  FaShieldAlt, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube 
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

  const openPortfolio = () => {
    window.open("#", "_blank");//Portal Link
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation
    if(!form.email || !form.name) {
      alert("Please fill in your name and email.");
      return;
    }

    setLoading(true);
    try {
      const API_URL = window.location.hostname === "localhost" 
        ? "http://localhost:5000" : "https://eagle-backend-jy3e.onrender.com";
      
      const res = await axios.post(`${API_URL}/api/contact`, form);
      if (res.status === 200) {
        setSubmitted(true);
        setForm({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) { 
      console.error(err);
      alert("Error: System Busy! Check connection."); 
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Inter:wght@400;600&display=swap');
        
        .matrix-bg {
          position: fixed; inset: 0; background: #000;
          background-image: linear-gradient(0deg, rgba(0, 224, 255, 0.05) 1px, transparent 1px);
          background-size: 100% 40px; animation: matrixMove 10s linear infinite; z-index: 0;
        }
        @keyframes matrixMove { 0% { background-position: 0 0; } 100% { background-position: 0 1000px; } }

        .glow-title { text-shadow: 0 0 20px rgba(0, 224, 255, 0.6); }
        
        .cyber-card { 
          background: rgba(10, 10, 15, 0.9) !important; 
          border: 1px solid #1a1a1a !important;
          transition: 0.4s;
        }
        .cyber-card:hover { border-color: #00e0ff !important; box-shadow: 0 0 30px rgba(0, 224, 255, 0.1); }

        .map-box { width: 100%; height: 55vh; border-top: 2px solid #00e0ff; position: relative; overflow: hidden; margin-top: 60px; }
        .radar-line { position: absolute; top: 0; width: 100%; height: 2px; background: #00e0ff; box-shadow: 0 0 20px #00e0ff; animation: radar 5s linear infinite; }
        @keyframes radar { 0% { top: 0%; } 100% { top: 100%; } }

        @media (max-width: 900px) { .mobile-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <div className="matrix-bg" />

      <div style={styles.content}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={styles.header}
        >
          <h1 className="glow-title" style={styles.title}>EAGLE <span style={{color: '#00e0ff'}}>FORCE</span></h1>
          <p style={styles.subText}>Premium Security & Legal Protection.</p>
        </motion.div>

        <div className="mobile-grid" style={styles.grid}>
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ once: true }}
            className="cyber-card" 
            style={styles.card}
          >
            <h3 style={styles.cardTitle}>// CONTACT INFO</h3>
            <div style={styles.infoLine}><FaPhoneAlt color="#00e0ff" /> +91 9967875227</div>
            <div style={styles.infoLine}><FaEnvelope color="#00e0ff" /> Email</div>
            <div style={styles.infoLine}><FaMapMarkerAlt color="#00e0ff" />No 1, Suryawanshi Niwas, Ram Maruti Nagar, Balkum, Thane, Maharashtra 400601</div>
            
            <div style={styles.socialRow}>
              <SocialIcon href="https://wa.me/+919967875227" icon={<FaWhatsapp />} color="#25D366" />
              <SocialIcon href="#" icon={<FaInstagram />} color="#E1306C" />
              <SocialIcon href="#" icon={<FaFacebook />} color="#1877F2" />
              <SocialIcon href="#" icon={<FaYoutube />} color="#FF0000" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ once: true }}
            className="cyber-card" 
            style={styles.card}
          >
            <h3 style={styles.cardTitle}>// SEND A MESSAGE</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input 
                type="text"
                placeholder="Enter Your Name" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                style={styles.input} 
                required
              />
              <input 
                type="tel"
                placeholder="Enter Your Phone Number" 
                name="phone" 
                value={form.phone} 
                onChange={handleChange} 
                style={styles.input} 
              />
              {/* FIXED EMAIL FIELD HERE */}
              <input 
                type="email"
                placeholder="Enter Your Email Address" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                style={styles.input} 
                required
              />

              <textarea 
                placeholder="How can we help you?" 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                style={styles.textarea} 
                required
              />
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#00e0ff', color: '#000' }}
                whileTap={{ scale: 0.98 }}
                style={styles.btn} 
                disabled={loading}
              >
                {loading ? "ESTABLISHING CONNECTION..." : "SEND MESSAGE"}
              </motion.button>
              {submitted && <p style={styles.success}>✅ Transmission Successful! Our team will contact you.</p>}
            </form>
          </motion.div>
        </div>

        {/* ⚖️ LAWYER STRIP SECTION */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          viewport={{ once: true }}
          style={styles.lawyerStrip}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <FaGavel size={40} color="#00e0ff" style={{ filter: 'drop-shadow(0 0 10px #00e0ff)' }} />
            <div>
              <p style={{ margin: 0, fontWeight: 'bold', fontFamily: 'Orbitron', fontSize: '18px' }}>LEGAL SUPPORT</p>
              <p style={{ margin: 0, fontSize: 13, opacity: 0.7 }}>Professional lawyers for your rental agreements.</p>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00e0ff" }}
            whileTap={{ scale: 0.95 }}
            onClick={openPortfolio} 
            style={styles.lawBtn}
          >
            VISIT PAGE <FaShieldAlt />
          </motion.button>
        </motion.div>
      </div>

      <div className="map-box">
        <div className="radar-line" />
        <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.391895622805!2d72.98493227466864!3d19.221744947382028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b94dfe6c1e71%3A0xb694cb6541651d82!2sEagle%20Force%20Security%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1772392583930!5m2!1sen!2sin"          style={styles.mapIframe}
          allowFullScreen=""
          loading="lazy"
          title="Thane Location"
        ></iframe>
      </div>
    </div>
  );
}

// SocialIcon & Styles remain unchanged...
function SocialIcon({ href, icon, color }) {
  return (
    <motion.a 
      href={href} target="_blank" rel="noopener noreferrer" 
      whileHover={{ y: -5, color: color, scale: 1.2 }} 
      style={{ color: '#fff', fontSize: 32, transition: '0.3s' }}
    >
      {icon}
    </motion.a>
  );
}

const styles = {
  container: { background: "#000", color: "#fff", position: "relative", minHeight: "100vh", overflowX: "hidden" },
  content: { position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", padding: "100px 20px 0 20px" },
  header: { textAlign: "center", marginBottom: 70 },
  title: { fontSize: "clamp(35px, 8vw, 60px)", fontWeight: "900", fontFamily: 'Orbitron', letterSpacing: 3, margin: 0 },
  subText: { color: "#888", fontSize: "16px", marginTop: 15, fontFamily: 'Inter' },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" },
  card: { padding: "50px", borderRadius: "15px" },
  cardTitle: { color: "#00e0ff", fontSize: "14px", fontFamily: 'Orbitron', marginBottom: "35px", letterSpacing: 2 },
  infoLine: { display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px", fontSize: "18px", fontFamily: 'Inter' },
  socialRow: { display: "flex", gap: "35px", marginTop: "40px" },
  form: { display: "flex", flexDirection: "column", gap: "25px" },
  input: { padding: "20px", background: "#000", border: "1px solid #333", color: "#fff", borderRadius: "8px", outline: "none", fontSize: "15px" },
  textarea: { padding: "20px", background: "#000", border: "1px solid #333", color: "#fff", borderRadius: "8px", minHeight: "140px", resize: "none", fontSize: "15px" },
  btn: { padding: "20px", background: "transparent", border: "2px solid #00e0ff", color: "#00e0ff", fontWeight: "bold", borderRadius: "8px", cursor: "pointer", fontFamily: 'Orbitron', letterSpacing: 2, transition: "0.3s" },
  success: { color: "#00ff9d", textAlign: "center", marginTop: "20px", fontWeight: "bold" },
  lawyerStrip: { margin: "80px 0", background: "linear-gradient(90deg, rgba(0, 224, 255, 0.1), transparent)", borderLeft: "5px solid #00e0ff", padding: "40px", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" },
  lawBtn: { background: "#00e0ff", color: "#000", border: "none", padding: "15px 35px", fontWeight: "bold", borderRadius: "8px", fontSize: "14px", fontFamily: 'Orbitron', display: 'flex', alignItems: 'center', gap: 10, cursor: "pointer" },
  mapIframe: { width: "100%", height: "100%", border: "none", filter: "invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)" }
};