import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { FaGavel, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaShieldAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Enter your name";
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Enter 10 digits";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter valid email";
    if (!form.message.trim()) newErrors.message = "Write something here";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      // 🚀 Auto-switch between Local and Production
      const API_URL = window.location.hostname === "localhost" 
        ? "http://localhost:5000" 
        : "https://eagle-backend-jy3e.onrender.com";

      const res = await axios.post(`${API_URL}/api/contact`, form);
      
      if (res.status === 200) {
        setSubmitted(true);
        setForm({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) { 
      console.error("Submission Error:", err.response?.data || err.message);
      alert(err.response?.data?.details || "Error sending message. Check Console."); 
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <div style={styles.container}>
      <div className="bg-grid" />
      <style>{`
        @keyframes moveGrid { 0% { background-position: 0 0; } 100% { background-position: 50px 50px; } }
        .bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(0, 224, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 224, 255, 0.1) 1px, transparent 1px); background-size: 50px 50px; animation: moveGrid 3s linear infinite; z-index: 0; }
        .shimmer-text:hover { text-shadow: 0 0 10px #00e0ff, 0 0 20px #00e0ff; transform: skewX(-5deg); transition: 0.3s; }
        @media (max-width: 900px) { .contact-stack { grid-template-columns: 1fr !important; } }
      `}</style>

      <motion.div animate={{ x: [0, 100, 0], y: [0, 50, 0] }} transition={{ repeat: Infinity, duration: 10 }} style={styles.glowBall} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} style={styles.header}>
          <h1 className="shimmer-text" style={styles.title}>TALK TO <span style={{color: '#00e0ff'}}>US</span></h1>
          <p style={styles.sub}>Simple words, Solid protection.</p>
        </motion.div>

        <div className="contact-stack" style={styles.grid}>
          <motion.div whileHover={{ scale: 1.02 }} style={styles.card}>
            <h3 style={styles.cardTitle}>Our Contact</h3>
            <div style={styles.infoLine}><FaPhoneAlt color="#00e0ff" /> +91 8998998989</div>
            <div style={styles.infoLine}><FaEnvelope color="#00e0ff" /> info@eagleforce.in</div>
            <div style={styles.infoLine}><FaMapMarkerAlt color="#00e0ff" /> Mumbai, India</div>
            <div style={styles.mapBox}>
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000" style={styles.map} allowFullScreen loading="lazy" />
            </div>
          </motion.div>

          <motion.div style={styles.card}>
            <h3 style={styles.cardTitle}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input placeholder="Your Name" name="name" value={form.name} onChange={handleChange} style={styles.input} />
              {errors.name && <span style={styles.err}>{errors.name}</span>}
              <input placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange} style={styles.input} />
              {errors.phone && <span style={styles.err}>{errors.phone}</span>}
              <input placeholder="Email Address" name="email" value={form.email} onChange={handleChange} style={styles.input} />
              {errors.email && <span style={styles.err}>{errors.email}</span>}
              <textarea placeholder="How can we help?" name="message" value={form.message} onChange={handleChange} style={styles.textarea} />
              {errors.message && <span style={styles.err}>{errors.message}</span>}
              <motion.button whileHover={{ background: '#00e0ff', color: '#000', boxShadow: '0 0 20px #00e0ff' }} style={styles.btn} disabled={loading}>
                {loading ? "Sending..." : "SEND NOW"}
              </motion.button>
              {submitted && <p style={styles.success}>✅ Success! We'll call you.</p>}
            </form>
          </motion.div>
        </div>

        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} style={styles.lawyerStrip}>
          <div style={styles.lawyerLeft}>
            <FaGavel size={40} color="#00e0ff" />
            <div>
              <h2 style={{ margin: 0, fontSize: '20px' }}>LEGAL & AGREEMENT HELP</h2>
              <p style={{ margin: 0, opacity: 0.7, fontSize: '14px' }}>Get your Rental Agreements done.</p>
            </div>
          </div>
          <motion.a href="#" whileHover={{ scale: 1.1 }} style={styles.lawyerBtn}>GO TO LAWYER PORTAL <FaShieldAlt /></motion.a>
        </motion.div>
      </div>
      <div style={styles.watermark}>EAGLE FORCE</div>
    </div>
  );
}

// ... Styles (Same as yours)
const styles = {
  container: { background: "#000", color: "#fff", padding: "100px 20px", position: "relative", overflow: "hidden", fontFamily: "sans-serif" },
  header: { textAlign: "center", marginBottom: 60 },
  title: { fontSize: "60px", fontWeight: "900", margin: 0, cursor: 'pointer' },
  sub: { fontSize: "18px", opacity: 0.6, letterSpacing: '2px' },
  glowBall: { position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,224,255,0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 },
  grid: { display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "30px", maxWidth: "1100px", margin: "0 auto" },
  card: { background: "rgba(20, 20, 20, 0.8)", border: "1px solid #222", padding: "30px", borderRadius: "15px", backdropFilter: "blur(10px)" },
  cardTitle: { color: "#00e0ff", fontSize: "24px", marginBottom: "20px", fontWeight: "bold" },
  infoLine: { display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px", fontSize: "16px" },
  mapBox: { marginTop: "20px", borderRadius: "10px", overflow: "hidden", height: "200px", border: "1px solid #333" },
  map: { width: "100%", height: "100%", border: "none", filter: "invert(90%) contrast(1.2)" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "15px", background: "#000", border: "1px solid #333", borderRadius: "8px", color: "#fff" },
  textarea: { padding: "15px", background: "#000", border: "1px solid #333", borderRadius: "8px", color: "#fff", minHeight: "100px", resize: "none" },
  btn: { padding: "15px", background: "transparent", border: "2px solid #00e0ff", color: "#00e0ff", fontWeight: "bold", cursor: "pointer", borderRadius: "8px" },
  err: { color: "#ff4d4d", fontSize: "12px", marginTop: "-10px" },
  success: { color: "#00ff9d", fontWeight: "bold", textAlign: "center" },
  lawyerStrip: { maxWidth: "1100px", margin: "50px auto", background: "linear-gradient(90deg, #001f24, #000)", border: "1px solid #00e0ff", borderRadius: "20px", padding: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" },
  lawyerLeft: { display: "flex", alignItems: "center", gap: "20px" },
  lawyerBtn: { background: "#00e0ff", color: "#000", padding: "15px 25px", borderRadius: "50px", textDecoration: "none", fontWeight: "900", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" },
  watermark: { position: "absolute", bottom: "-20px", right: "20px", fontSize: "100px", fontWeight: "900", color: "rgba(0,224,255,0.03)", pointerEvents: "none" }
};