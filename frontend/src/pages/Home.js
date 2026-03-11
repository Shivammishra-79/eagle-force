import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { FaWhatsapp, FaEnvelope, FaShieldAlt, FaSatellite, FaMicrochip, FaUserSecret } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

// --- INTERNAL COMPONENT: LocalSecurityProtocolCard (Premium Upgrade) ---
const LocalSecurityProtocolCard = ({ title, desc, img, onClick }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      whileHover={{ 
        y: -15, 
        rotateX: 2, 
        rotateY: -2,
        borderColor: "#00e0ff",
        boxShadow: "0 0 50px rgba(0, 224, 255, 0.4)"
      }}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
      style={cardStyles.card}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1, x: ['-100%', '100%'] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={cardStyles.shimmer}
      />

      <div style={cardStyles.cardHeaderDecor}>
        <div style={cardStyles.statusDot} className="status-dot-active" />
        <div style={cardStyles.protocolLine} />
        <span style={cardStyles.protocolId}>SERVICE_{title.substring(0, 4).toUpperCase()}</span>
      </div>

      <div style={cardStyles.imgWrap}>
        <img src={img} alt={title} style={cardStyles.img} />
        <div style={cardStyles.overlay} />
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          style={cardStyles.scanLine} 
        />
        <div style={cardStyles.scanCornerTL} />
        <div style={cardStyles.scanCornerBR} />
      </div>

      <div style={cardStyles.content}>
        <div style={cardStyles.categoryTag}>PREMIUM // SOLUTIONS</div>
        <h3 style={cardStyles.title}>{title}</h3>
        <p style={cardStyles.desc}>{desc}</p>
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#00e0ff", color: "#000", boxShadow: "0 0 20px #00e0ff" }}
          style={cardStyles.btn}
        >
          {`VIEW DETAILS`.toUpperCase()} →
        </motion.div>
      </div>
      <div style={cardStyles.techCorner} />
    </motion.div>
  );
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const [systemLog, setSystemLog] = useState("Eagle Force: Systems Online...");
  const [dataStream, setDataStream] = useState("0x4A... 0xB1... 0xCF...");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0.2]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gridX = (mousePosition.x / window.innerWidth - 0.5) * 40;
  const gridY = (mousePosition.y / window.innerHeight - 0.5) * 40;

  useEffect(() => {
    const logs = [
      "Scanning Security Nodes...",
      "Cameras Active & Secure.",
      "Staff Attendance Verified.",
      "CCTV System Health: OK.",
      "Society Portal Operational.",
      "Welcome to Eagle Force."
    ];
    let i = 0;
    const intervalLog = setInterval(() => {
      setSystemLog(logs[i % logs.length]);
      i++;
    }, 3500);
    return () => clearInterval(intervalLog);
  }, []);

  useEffect(() => {
    const intervalData = setInterval(() => {
      const hex = () => Math.floor(Math.random()*16777215).toString(16).toUpperCase();
      setDataStream(`${hex()}.${hex()}.${hex()}.${hex()}`);
    }, 1500);
    return () => clearInterval(intervalData);
  }, []);

  const stats = [
    { num: 500, label: "CCTV Installations" },
    { num: 120, label: "Trusted Societies" },
    { num: 24, label: "Hours Support" },
    { num: 5, label: "Star Service" },
    { num: 1500, label: "Verified Staff" },
    { num: 50, label: "Service Areas" },
  ];

  const servicesDetailed = [
    {
      title: "Smart CCTV Systems",
      desc: "High-definition night vision cameras with mobile app control and 24/7 recording.",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800",
      path: "/cctv"
    },
    {
      title: "Housekeeping",
      desc: "Professional deep cleaning and maintenance services for homes and offices.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTQ4snx-MINaG8iz46P01jJTArLMUQyEpOw&s",
      path: "/housekeeping"
    },
    {
      title: "Society Solutions",
      desc: "Complete society management with trained guards and smart visitor entry systems.",
      img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800",
      path: "/security"
    }
  ];

  const serviceKeywords = ["CCTV INSTALLATION", "SOCIETY CARE", "HOME CLEANING", "24/7 MONITORING", "REPAIR EXPERTS"];
  const features = ["Trained Security Guards", "Emergency Quick Support", "Modern CCTV Tech", "Verified Cleaning Staff", "Services in Mumbai MMR", "Corporate Maintenance", "Detailed Work Reports", "Flexible Service Plans"];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse-cyan { 0% { opacity: 0.4; text-shadow: 0 0 5px rgba(0,224,255,0.4); } 50% { opacity: 1; text-shadow: 0 0 15px rgba(0,224,255,0.8); } 100% { opacity: 0.4; text-shadow: 0 0 5px rgba(0,224,255,0.4); } }
        @keyframes text-glow { 0% { text-shadow: 0 0 10px rgba(255,255,255,0.5); } 50% { text-shadow: 0 0 20px rgba(0,224,255,0.8), 0 0 30px rgba(0,224,255,0.6); } 100% { text-shadow: 0 0 10px rgba(255,255,255,0.5); } }
        @keyframes bg-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes status-blink { 0% { background: rgba(0,224,255,0.1); } 50% { background: rgba(0,224,255,1); box-shadow: 0 0 10px rgba(0,224,255,0.8); } 100% { background: rgba(0,224,255,0.1); } }
        
        .log-text { font-family: 'Share Tech Mono', monospace; font-size: 11px; color: #00e0ff; letter-spacing: 1px; }
        .hud-stream { font-family: 'Share Tech Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.4); }
        .shimmer-active { animation: bg-shimmer 2s infinite ease-out; }
        .status-dot-active { animation: status-blink 1.5s infinite ease-in-out; }
        
        @media (max-width: 768px) {
          .hero-content { padding: 0 5% !important; text-align: center; justify-content: center; }
          .hero-title { font-size: clamp(30px, 10vw, 42px) !important; line-height: 1.1 !important; }
          .hero-sub { font-size: 15px !important; margin: 15px auto !important; }
          .cta-row { flex-direction: column !important; gap: 12px !important; align-items: center; }
          .cta-btn { width: 100% !important; max-width: 300px; padding: 15px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-box { padding: 30px 10px !important; }
          .stat-num { font-size: 32px !important; }
          .spec-grid { grid-template-columns: 1fr !important; gap: 30px !important; justify-items: center !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .floating-group { right: 15px !important; bottom: 15px !important; }
          .float-btn { width: 50px !important; height: 50px !important; }
          .final-box { padding: 40px 15px !important; }
          .trust-bar { justify-content: center !important; }
          .hide-mobile { display: none !important; }
          .final-title-mobile { font-size: 24px !important; }
        }
        .float-btn:hover .tooltip { opacity: 1 !important; transform: translateX(-10px); }
      `}</style>

      {/* STATUS BAR */}
      <div style={styles.statusBar}>
        <div style={styles.statusInner}>
          <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>●</motion.span>
          &nbsp; SECURE CONNECTION | EAGLE FORCE SOLUTIONS | EST. 2026
        </div>
      </div>

      {/* HUD BAR */}
      <div style={styles.hudBar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={styles.livePulse}>● ONLINE</span>
          <span className="log-text">{systemLog}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="hide-mobile">
          <span className="hud-stream">DATA:{dataStream}</span>
          <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>MUMBAI MMR REGION</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <motion.div style={{ ...styles.heroBg, y: bgY }} />
        <motion.div 
          style={{ ...styles.cyberGrid, x: gridX, y: gridY }} 
        />
        <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={styles.scanLine} />
        <div style={styles.heroOverlay} className="hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={styles.heroContent}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }} className="trust-bar"><span style={styles.tagline}><FaShieldAlt /> TOTAL PROTECTION & MAINTENANCE</span></div>
            <h1 style={{ ...styles.heroTitle, animation: 'text-glow 4s infinite' }} className="hero-title">BEST <span style={styles.cyanText}>CCTV & SOCIETY</span><br />SERVICES</h1>
            <div style={styles.keywordCloud} className="trust-bar">{serviceKeywords.map((k, i) => (<span key={i} style={styles.miniTag}>{k}</span>))}</div>
            <p style={styles.heroSub} className="hero-sub">Complete security and cleaning solutions. We offer high-quality CCTV installation, professional housekeeping, and society management for your safety.</p>
            
            <div style={styles.trustBar} className="trust-bar">
              <div style={styles.trustItem}><FaShieldAlt style={{color: '#00e0ff', marginRight: '5px'}}/> ⭐ 4.9 Rating</div>
              <div style={styles.trustItem}><FaSatellite style={{color: '#00e0ff', marginRight: '5px'}}/> 500+ CCTV Nodes</div>
              <div style={styles.trustItem}><FaMicrochip style={{color: '#00e0ff', marginRight: '5px'}}/> Certified Team</div>
            </div>
            
            <div style={styles.ctaRow} className="cta-row">
              <motion.button whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000", boxShadow: "0 0 30px #00e0ff" }} onClick={() => window.location.href = "tel:+919967875227"} style={styles.mainBtn} className="cta-btn">CALL EXPERT</motion.button>
              <button onClick={() => handleNavigation("/contact")} style={styles.secBtn} className="cta-btn">GET FREE QUOTE</button>
            </div>
          </motion.div>
        </div>
        <div className="hide-mobile" style={styles.techSideText}>EAGLE FORCE // CCTV // HOUSEKEEPING // SOCIETY SERVICES // 2026</div>
      </section>

      {/* --- STATS SECTION --- */}
      <section style={styles.statsGrid} className="stats-grid">
        {stats.map((s, i) => (
          <motion.div key={i} style={styles.statBox} className="stat-box" whileHover={{ background: "#060606", borderColor: "#00e0ff" }}>
            <h2 style={{ ...styles.statNum, animation: s.label.includes("Support") ? 'pulse-cyan 3s infinite' : 'none' }} className="stat-num"><CountUp end={s.num} duration={2.5} suffix={s.label.includes("Rating") ? "★" : "+"} /></h2>
            <p style={styles.statLabel}>{s.label.toUpperCase()}</p>
          </motion.div>
        ))}
      </section>

      {/* --- TECH CARDS --- */}
      <section style={{ padding: '80px 8%', background: '#030303', borderBottom: '1px solid #111' }}>
          <div style={styles.featureGrid} className="feature-grid">
              <motion.div whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0,224,255,0.2)" }} style={styles.techCard}><FaSatellite style={{ color: '#00e0ff', fontSize: '28px', marginBottom: '15px' }} /><h4>MOBILE MONITORING</h4><p>Check your CCTV cameras anytime from anywhere on your phone.</p></motion.div>
              <motion.div whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0,224,255,0.2)" }} style={styles.techCard}><FaUserSecret style={{ color: '#00e0ff', fontSize: '28px', marginBottom: '15px' }} /><h4>VERIFIED STAFF</h4><p>Background checked housekeeping and security staff for your peace of mind.</p></motion.div>
          </div>
      </section>

      {/* --- SERVICES --- */}
      <section style={styles.specSection}>
        <motion.div style={styles.sectionHeader} initial="hidden" whileInView="visible" variants={sentence}>
          <h2 style={{fontSize: '28px', fontWeight: 900}} className="premium-title">
            {"// OUR EXPERT SERVICES".split(" ").map((word, i) => (
              <motion.span key={i} variants={letter} style={{display: 'inline-block', marginRight: '5px'}}>
                {word}
              </motion.span>
            ))}
          </h2>
          <div style={styles.headerLine} className="shimmer-active" />
        </motion.div>
        
        <div style={styles.specGrid} className="spec-grid">
          {servicesDetailed.map((service, idx) => (
            <LocalSecurityProtocolCard 
              key={idx}
              title={service.title}
              desc={service.desc}
              img={service.img}
              onClick={() => handleNavigation(service.path)}
            />
          ))}
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section style={styles.featureSection}>
        <h2 style={{...styles.centerTitle, color: '#fff'}} className="feature-title-g">WHY CHOOSE EAGLE FORCE?</h2>
        <div style={{ ...styles.featureGrid, gridTemplateColumns: "repeat(2, 1fr)" }} className="feature-grid">
          {features.map((f, i) => (
            <motion.div key={i} whileInView={{ opacity: [0, 1], x: [-20, 0] }} whileHover={{ x: 10, borderColor: "#00e0ff", color: '#00e0ff' }} style={styles.featureItem} transition={{ delay: i * 0.1 }}>
              <span style={{ color: "#00e0ff", marginRight: '10px' }}>▶</span> {f.toUpperCase()}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section style={styles.finalSection}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} style={styles.finalBox} className="final-box" transition={{ duration: 0.8 }}>
          <h2 style={styles.finalTitle} className="final-title-mobile">READY TO SECURE YOUR SPACE?</h2>
          <p style={{ opacity: 0.7, color: '#aaa' }}>Eagle Force team is available for services across Mumbai, Kalyan, and Thane.</p>
          <div style={styles.finalBtns} className="cta-row">
            <button style={styles.primaryFinal} className="cta-btn" onClick={() => window.location.href = "tel:+919967875227"}>CALL US NOW</button>
            <button style={styles.secondaryFinal} className="cta-btn" onClick={() => handleNavigation("/contact")}>SEND ENQUIRY</button>
          </div>
        </motion.div>
      </section>

      {/* --- FLOATING BUTTONS --- */}
      <div style={styles.floatingGroup} className="floating-group">
        <motion.a href="https://wa.me/+919967875227" target="_blank" rel="noreferrer" className="float-btn" style={{ ...styles.floatBtn, background: "#25D366", boxShadow: "0 0 15px rgba(37,211,102,0.5)" }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
          <FaWhatsapp size={28} /><span className="tooltip" style={styles.tooltip}>WhatsApp Chat</span>
        </motion.a>
        <motion.a href="mailto:info@eagleforce.in" className="float-btn" style={{ ...styles.floatBtn, background: "#fff", color: '#000', boxShadow: "0 0 15px rgba(255,255,255,0.4)" }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}>
          <FaEnvelope size={22} /><span className="tooltip" style={styles.tooltip}>Send Email</span>
        </motion.a>
      </div>
    </div>
  );
}

// ... styles object remains exactly the same as you provided ...

// --- ALL PREMIUM STYLES ---

const cardStyles = {
  card: { width: "100%", maxWidth: "340px", background: "#02040a", borderRadius: "1px", overflow: "hidden", cursor: "pointer", border: "1px solid rgba(0,224,255,0.1)", position: "relative", transition: "all 0.4s ease", marginBottom: "20px" },
  shimmer: { position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(0,224,255,0.2), transparent)', zIndex: 3, pointerEvents: 'none' },
  cardHeaderDecor: { display: 'flex', alignItems: 'center', padding: '12px 15px', gap: '10px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid #111' },
  statusDot: { width: 7, height: 7, borderRadius: '50%', background: '#ff4d4d' },
  protocolLine: { flex: 1, height: '1px', background: 'linear-gradient(90deg, #1a1a1a, rgba(0,224,255,0.2))' },
  protocolId: { fontFamily: 'Share Tech Mono', color: 'rgba(255,255,255,0.4)', fontSize: '10px' },
  imgWrap: { position: "relative", height: 180, overflow: "hidden", borderBottom: '1px solid rgba(0,224,255,0.15)' },
  img: { width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.6) brightness(0.7)" },
  overlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, transparent, #02040a)' },
  scanLine: { position: 'absolute', left: 0, width: '100%', height: '2px', background: 'rgba(0,224,255,0.5)', boxShadow: '0 0 15px rgba(0,224,255,0.8)', zIndex: 2 },
  scanCornerTL: { position: 'absolute', top: 10, left: 10, width: 20, height: 20, borderTop: '2px solid rgba(0,224,255,0.6)', borderLeft: '2px solid rgba(0,224,255,0.6)', zIndex: 3 },
  scanCornerBR: { position: 'absolute', bottom: 10, right: 10, width: 20, height: 20, borderBottom: '2px solid rgba(0,224,255,0.6)', borderRight: '2px solid rgba(0,224,255,0.6)', zIndex: 3 },
  content: { padding: "20px 25px" },
  categoryTag: { fontFamily: 'Share Tech Mono', fontSize: '9px', color: '#aaa', letterSpacing: '2px', marginBottom: '8px', fontWeight: 'bold' },
  title: { margin: 0, fontSize: 19, color: "#fff", fontWeight: 900, letterSpacing: 1 },
  desc: { marginTop: 10, fontSize: 13, color: "#aaa", lineHeight: 1.6, minHeight: '60px' },
  btn: { marginTop: 20, display: "block", textAlign: 'center', padding: "12px 20px", border: "1px solidrgba(255,255,255,0.2)", background: 'rgba(255,255,255,0.02)', fontSize: 11, fontWeight: 900, color: "#aaa", transition: "0.3s", letterSpacing: 1.5, textDecoration: 'none' },
  techCorner: { position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, background: '#00e0ff', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', opacity: 0.1 }
};

const styles = {
  container: { background: "#000", color: "#fff", fontFamily: "'Space Grotesk', sans-serif", overflowX: "hidden" },
  hudBar: { position: 'fixed', top: '150px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100000, background: 'linear-gradient(90deg, rgba(5,8,22,0.98) 0%, rgba(5,8,22,0.8) 100%)', padding: '8px 15px', borderLeft: '3px solid #00e0ff', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.02)' },
  statusBar: { position: "fixed", top: "110px", width: "100%", zIndex: 100001, background: "#000", borderBottom: '1px solid #111', boxShadow: '0 2px 10px rgba(0,0,0,0.5)' },
  statusInner: { background: "rgba(0,224,255,0.03)", color: "rgba(255,255,255,0.7)", fontSize: "10px", fontWeight: "bold", padding: "8px 20px", width: "100%", letterSpacing: "1px", textAlign: 'center' },
  livePulse: { fontFamily: 'Share Tech Mono', fontSize: '10px', fontWeight: 'bold', color: '#ff4d4d', marginRight: '5px' },
  hero: { minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: '180px', paddingBottom: '80px' },
  cyberGrid: { position: "absolute", inset: "-50px", backgroundImage: "linear-gradient(rgba(0,224,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,224,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px", zIndex: 1, maskImage: "radial-gradient(circle at center, white 30%, transparent 80%)" },
  heroBg: { position: "absolute", width: "100%", height: "130%", backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0, filter: "brightness(0.3) grayscale(0.5)" },
  scanLine: { position: 'absolute', width: '100%', height: '2px', background: 'rgba(0, 224, 255, 0.2)', boxShadow: '0 0 15px #00e0ff', zIndex: 5, pointerEvents: 'none' },
  heroOverlay: { zIndex: 10, padding: "0 8%", width: "100%", display: 'flex', alignItems: 'center' },
  heroContent: { maxWidth: "800px" },
  tagline: { color: '#00e0ff', fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' },
  heroTitle: { fontSize: "clamp(38px, 9vw, 82px)", fontWeight: "900", lineHeight: 1, letterSpacing: "-2px", margin: 0 },
  cyanText: { color: "#00e0ff", textShadow: "0 0 20px rgba(0,224,255,0.3)" },
  keywordCloud: { display: "flex", gap: "8px", flexWrap: "wrap", margin: "25px 0" },
  miniTag: { fontSize: "10px", border: "1px solid #1a1a1a", padding: "5px 10px", color: "#aaa", background: "rgba(255,255,255,0.02)", textTransform: 'uppercase' },
  heroSub: { fontSize: "17px", color: "#aaa", margin: "20px 0", lineHeight: 1.6, maxWidth: "550px" },
  trustBar: { display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "15px" },
  trustItem: { fontSize: "12px", color: "#aaa", border: "1px solid #1a1a1a", background: "rgba(255,255,255,0.02)", padding: "6px 12px", fontWeight: "bold" },
  ctaRow: { display: "flex", gap: "15px", marginTop: "35px" },
  mainBtn: { background: "#fff", color: "#000", padding: "18px 40px", border: "none", fontWeight: "900", cursor: "pointer", fontSize: '15px' },
  secBtn: { background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "18px 40px", cursor: "pointer", fontSize: '15px' },
  techSideText: { position: 'absolute', right: '-120px', top: '50%', transform: 'rotate(90deg) translateY(-50%)', fontFamily: 'Share Tech Mono', fontSize: '11px', color: 'rgba(0,224,255,0.2)', letterSpacing: '8px' },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", background: "#030303", borderBottom: "1px solid #111" },
  statBox: { padding: "50px 20px", textAlign: "center", borderRight: "1px solid #111", borderTop: '2px solid transparent', transition: '0.3s' },
  statNum: { fontSize: "42px", color: "#fff", margin: 0, fontWeight: "900" },
  statLabel: { fontSize: "11px", color: "#666", letterSpacing: "1px", marginTop: "8px" },
  techCard: { background: '#02040a', padding: '35px', border: '1px solid #111', textAlign: 'center', flex: 1, borderRadius: '2px' },
  specSection: { padding: "100px 8%" },
  sectionHeader: { position: "relative", marginBottom: "50px", display: "inline-block" },
  headerLine: { height: "2px", background: "linear-gradient(90deg, transparent, #00e0ff, transparent)", marginTop: "8px" },
  specGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" },
  featureSection: { padding: "100px 8%", background: "linear-gradient(to bottom, #030303, #000)" },
  centerTitle: { textAlign: "center", fontSize: "32px", color: "#00e0ff", marginBottom: "60px", letterSpacing: "3px", fontWeight: 900 },
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" },
  featureItem: { background: "#05080e", padding: "20px 25px", border: "1px solidrgba(255,255,255,0.03)", fontSize: '14px', letterSpacing: 1 },
  finalSection: { padding: "120px 8%", textAlign: "center" },
  finalBox: { border: "1px solidrgba(0,224,255,0.2)", padding: "70px 40px", background: "linear-gradient(135deg, #010811 0%, #000 100%)", borderRadius: '2px', position: 'relative' },
  finalTitle: { fontSize: "36px", fontWeight: "900", marginBottom: "15px", letterSpacing: '-1px' },
  finalBtns: { display: "flex", gap: "15px", justifyContent: "center", marginTop: "40px" },
  primaryFinal: { background: "#fff", color: '#000', border: "none", padding: "18px 40px", fontWeight: "bold", cursor: "pointer" },
  secondaryFinal: { background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "18px 40px", cursor: "pointer" },
  floatingGroup: { position: "fixed", bottom: "35px", right: "35px", display: "flex", flexDirection: "column", gap: "15px", zIndex: 1000000 },
  floatBtn: { width: "65px", height: "65px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", position: 'relative' },
  tooltip: { position: "absolute", right: "80px", background: "#02040a", border: '1px solid #1a1a1a', color: "#fff", padding: "5px 12px", borderRadius: "1px", fontSize: "12px", fontWeight: "bold", opacity: 0, transition: "0.3s", pointerEvents: "none", whiteSpace: 'nowrap' }
};
