import { motion } from "framer-motion";
import { FaShieldAlt, FaUserSecret, FaGavel, FaFileSignature, FaUserCheck, FaUserShield, FaBuilding, FaHandshake } from "react-icons/fa";

export default function Security() {
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
      title: "RENTAL AGREEMENTS",
      icon: <FaFileSignature />,
      desc: "Seamless digital and physical rental agreement services for flat owners & tenants.",
      link: "https://example-lawyer-site.com" // Aap yahan apna link daal sakte hain
    },
    {
      title: "LEGAL CONSULTANCY",
      icon: <FaGavel />,
      desc: "Society by-laws, legal disputes, and property documentation handled by experts.",
      link: "https://example-lawyer-site.com"
    },
    {
      title: "NOTARY & STAMP DUTY",
      icon: <FaHandshake />,
      desc: "Instant notary services and e-stamping protocols for all society documents.",
      link: "https://example-lawyer-site.com"
    }
  ];

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 900px) {
          .sec-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .sec-grid, .legal-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 30px !important; }
        }
        .legal-card:hover { border-color: #00e0ff !important; background: rgba(0, 224, 255, 0.05) !important; }
      `}</style>

      <div style={styles.wrapper}>
        {/* 🔥 HERO SECTION */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={styles.header}>
          <div style={styles.tag}>// SECURITY_&_COMPLIANCE_DIVISION</div>
          <h1 className="hero-title" style={styles.title}>ELITE <span style={{color: '#00e0ff'}}>PROTECTION</span></h1>
          <p style={styles.subtitle}>
            From tactical manpower deployment to legal documentation compliance. 
            Eagle Force provides a 360° shield for your society.
          </p>
        </motion.div>

        {/* 🛡 MANPOWER GRID */}
        <div style={styles.grid} className="sec-grid">
          {securityUnits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={styles.card}
            >
              <div style={styles.imgWrap}>
                <img src={item.img} alt={item.title} style={styles.img} />
                <div style={styles.iconOverlay}>{item.icon}</div>
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ⚖️ LEGAL & LAWYER SECTION */}
        <div style={styles.legalSection}>
          <div style={styles.legalHeader}>
            <FaGavel style={{color: '#00e0ff', fontSize: '24px'}} />
            <h2 style={{margin: 0, fontSize: '22px', letterSpacing: '2px'}}>LEGAL & DOCUMENTATION UNIT</h2>
            <div style={styles.line} />
          </div>

          <div style={styles.grid} className="legal-grid">
            {legalServices.map((service, idx) => (
              <motion.a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="legal-card"
                style={styles.legalCard}
                whileHover={{ y: -5 }}
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
          whileHover={{ scale: 1.01 }}
          style={styles.cta}
          onClick={() => window.location.href="tel:+919876543210"}
        >
          <FaUserShield style={{marginRight: '15px'}} />
          NEED EMERGENCY SECURITY OR LEGAL AID? CONNECT_NOW
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
  card: { background: "#0a0c14", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 4, overflow: "hidden" },
  imgWrap: { position: "relative", height: 180 },
  img: { width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6)" },
  iconOverlay: { position: 'absolute', bottom: 15, left: 15, background: '#00e0ff', color: '#000', padding: '10px', borderRadius: '2px', display: 'flex' },
  
  cardContent: { padding: 25 },
  cardTitle: { fontSize: 17, fontWeight: "900", marginBottom: 10, letterSpacing: 1 },
  cardDesc: { fontSize: 13, color: "#888", lineHeight: 1.6 },

  legalSection: { marginTop: 100, padding: '40px', background: 'rgba(255,255,255,0.01)', border: '1px solid #111' },
  legalHeader: { display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 },
  line: { flex: 1, height: '1px', background: 'rgba(0,224,255,0.2)' },

  legalCard: { 
    background: "transparent", border: "1px solid rgba(255,255,255,0.05)", padding: "30px", 
    textDecoration: 'none', color: 'inherit', transition: '0.3s' 
  },
  legalIcon: { fontSize: '28px', color: '#00e0ff', marginBottom: '15px' },
  legalTitle: { fontSize: '16px', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '1px' },
  legalDesc: { fontSize: '12px', color: '#aaa', lineHeight: '1.5', marginBottom: '20px' },
  visitLink: { fontSize: '10px', fontWeight: 'bold', color: '#00e0ff', letterSpacing: '1px' },

  cta: {
    marginTop: 60, background: '#00e0ff', color: '#000', padding: '25px', 
    textAlign: 'center', fontWeight: '900', cursor: 'pointer', fontSize: '14px',
    display: 'flex', justifyContent: 'center', alignItems: 'center', letterSpacing: '1px'
  }
};