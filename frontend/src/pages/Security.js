import { motion } from "framer-motion";
import { useEffect } from "react";
import { 
  FaShieldAlt, FaUserSecret, FaGavel, FaFileSignature, FaUserCheck, 
  FaUserShield, FaBuilding, FaHandshake, FaBalanceScale, FaFileContract 
} from "react-icons/fa";

export default function Security() {
  // Page load par top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🚀 Har portal link par aapka portfolio khulega
  const portfolioLink = "#";

  const securityUnits = [
    {
      title: "SOCIETY GUARD FORCE",
      icon: <FaBuilding />,
      desc: "24/7 gate management, visitor tracking, and perimeter patrolling for residential complexes.",
      img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=800"
    },
    {
      title: "BOUNCER & BODYGUARDS",
      icon: <FaUserSecret />,
      desc: "Elite personal protection and event security management for high-profile assets.",
      img: "https://images.unsplash.com/photo-1577033282163-5483f82730ca?q=80&w=800"
    },
    {
      title: "POLICE VERIFICATION",
      icon: <FaUserCheck />,
      desc: "Mandatory background checks and police verification for tenants and staff units.",
      img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800"
    }
  ];

  const legalServices = [
    {
      title: "SOCIETY FORMATION",
      icon: <FaBuilding />,
      desc: "Full legal assistance in registration and formation of new Housing Societies.",
    },
    {
      title: "RENTAL AGREEMENTS",
      icon: <FaFileSignature />,
      desc: "Seamless digital and physical rental agreement services for flat owners & tenants.",
    },
    {
      title: "DEEMED CONVEYANCE",
      icon: <FaFileContract />,
      desc: "Legal processing for land ownership transfer from builder to the society.",
    },
    {
      title: "LEGAL CONSULTANCY",
      icon: <FaGavel />,
      desc: "Handling society by-laws, legal disputes, and property documentation.",
    },
    {
      title: "NOTARY & STAMP DUTY",
      icon: <FaHandshake />,
      desc: "Instant notary services and e-stamping protocols for all legal documents.",
    },
    {
      title: "DISPUTE RESOLUTION",
      icon: <FaBalanceScale />,
      desc: "Mediation and legal support for internal society or builder-related conflicts.",
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 900px) {
          .sec-grid, .legal-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .sec-grid, .legal-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 32px !important; }
          .container-padding { padding: 120px 15px 50px !important; }
        }
        .legal-card:hover { 
            border-color: #00e0ff !important; 
            background: rgba(0, 224, 255, 0.05) !important; 
            box-shadow: 0 0 20px rgba(0, 224, 255, 0.1);
        }
        .security-card:hover img { transform: scale(1.1); filter: brightness(0.8) grayscale(0); }
      `}</style>

      <div style={styles.wrapper} className="container-padding">
        {/* 🔥 HERO SECTION */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={styles.header}>
          <div style={styles.tag}>// SECURITY_&_LEGAL_COMPLIANCE_2026</div>
          <h1 className="hero-title" style={styles.title}>ELITE <span style={styles.cyanText}>PROTECTION</span></h1>
          <p style={styles.subtitle}>
            Tactical manpower deployment and professional legal documentation. 
            Eagle Force handles everything from on-ground security to complex society by-laws.
          </p>
        </motion.div>

        {/* 🛡 MANPOWER GRID */}
        
        <div style={styles.grid} className="sec-grid">
          {securityUnits.map((item, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={styles.card} className="security-card">
              <div style={styles.imgWrap}>
                <img src={item.img} alt={item.title} style={styles.img} />
                <div style={styles.iconOverlay}>{item.icon}</div>
                <div style={styles.cardGlow} />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
                <div style={styles.statusBox}>
                  <div style={styles.pulseDot} />
                  <span style={styles.statusText}>ACTIVE_DEPLOYMENT</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ⚖️ LEGAL & LAWYER SECTION */}
        
        <div style={styles.legalSection}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={styles.legalHeader}>
            <FaGavel style={{color: '#00e0ff', fontSize: '24px'}} />
            <h2 style={styles.legalSectionTitle}>LEGAL & DOCUMENTATION UNIT</h2>
            <div style={styles.line} />
          </motion.div>

          <div style={styles.grid} className="legal-grid">
            {legalServices.map((service, idx) => (
              <motion.a
                href={portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="legal-card"
                style={styles.legalCard}
                whileHover={{ y: -8 }}
              >
                <div style={styles.legalIcon}>{service.icon}</div>
                <h4 style={styles.legalTitle}>{service.title}</h4>
                <p style={styles.legalDesc}>{service.desc}</p>
                <div style={styles.visitLink}>VISIT_LEGAL_PORTAL →</div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* 🚀 CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02, backgroundColor: '#00e0ff', color: '#000' }}
          style={styles.cta}
          onClick={() => window.location.href="tel:+919967875227"}
        >
          <FaUserShield style={{marginRight: '15px'}} />
          NEED EMERGENCY SECURITY OR LEGAL AID? INITIALIZE_CONTACT_NOW
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
  title: { fontSize: "clamp(35px, 7vw, 55px)", fontWeight: "900", margin: 0, letterSpacing: '-1px', fontFamily: "'Syncopate', sans-serif" },
  cyanText: { color: "#00e0ff", textShadow: "0 0 15px rgba(0,224,255,0.3)" },
  subtitle: { opacity: 0.5, fontSize: "16px", maxWidth: 750, margin: "25px auto", lineHeight: 1.8 },
  
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 25 },
  card: { background: "rgba(10, 12, 20, 0.4)", border: "1px solid rgba(0,224,255,0.08)", borderRadius: 2, overflow: "hidden", transition: '0.4s ease' },
  imgWrap: { position: "relative", height: 200, overflow: 'hidden' },
  img: { width: "100%", height: "100%", objectFit: "cover", transition: "0.8s ease", filter: "brightness(0.5) grayscale(0.8)" },
  cardGlow: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, #02040a, transparent)' },
  iconOverlay: { position: 'absolute', bottom: 15, left: 15, background: '#00e0ff', color: '#000', padding: '10px', borderRadius: '2px', display: 'flex', zIndex: 3 },
  
  cardContent: { padding: 25 },
  cardTitle: { fontSize: 16, fontWeight: "900", marginBottom: 10, letterSpacing: 1.5 },
  cardDesc: { fontSize: 13, color: "#888", lineHeight: 1.6, marginBottom: 20 },
  statusBox: { display: 'flex', alignItems: 'center', gap: 10 },
  pulseDot: { width: '6px', height: '6px', background: '#00e0ff', borderRadius: '50%', boxShadow: '0 0 10px #00e0ff' },
  statusText: { fontSize: '9px', fontWeight: 'bold', color: '#00e0ff', letterSpacing: '1px' },

  legalSection: { marginTop: 100, padding: '50px 40px', background: 'rgba(0, 224, 255, 0.02)', border: '1px solid rgba(0,224,255,0.05)', borderRadius: '2px' },
  legalHeader: { display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 },
  legalSectionTitle: { margin: 0, fontSize: '20px', letterSpacing: '3px', fontWeight: 'bold' },
  line: { flex: 1, height: '1px', background: 'rgba(0,224,255,0.1)' },
  
  legalCard: { background: "#05070a", border: "1px solid rgba(255,255,255,0.03)", padding: "35px", textDecoration: 'none', color: 'inherit', transition: '0.4s ease', display: 'block' },
  legalIcon: { fontSize: '30px', color: '#00e0ff', marginBottom: '18px' },
  legalTitle: { fontSize: '15px', fontWeight: '900', margin: '0 0 12px 0', letterSpacing: '1px' },
  legalDesc: { fontSize: '12px', color: '#777', lineHeight: '1.6', marginBottom: '22px' },
  visitLink: { fontSize: '10px', fontWeight: 'bold', color: '#00e0ff', letterSpacing: '2px' },
  
  cta: { marginTop: 80, border: '1px solid #00e0ff', color: '#00e0ff', padding: '30px', textAlign: 'center', fontWeight: '900', cursor: 'pointer', fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', letterSpacing: '3px', transition: 'all 0.4s ease', background: 'transparent' }
};