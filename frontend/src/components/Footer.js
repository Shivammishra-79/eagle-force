import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* 🛠 MOBILE RESPONSIVE CSS */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 30px !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .footer-col { align-items: center !important; }
          .footer-info { justify-content: center !important; }
        }
      `}</style>

      <div style={styles.container} className="footer-grid">
        {/* 🦅 BRAND SECTION */}
        <div style={styles.col} className="footer-col">
          <motion.div whileHover={{ scale: 1.02 }} style={styles.logoGroup}>
            <h2 style={styles.logo}>
              <FaShieldAlt style={{ color: "#00e0ff", marginRight: 10 }} />
              EAGLE FORCE
            </h2>
            <span style={styles.logoSubText}>SECURITY SYSTEMS</span>
          </motion.div>
          <p style={styles.desc}>
            Professional Security & Facility Management Solutions. We provide advanced AI surveillance and elite guard forces across India.
          </p>
          <div style={styles.socialRow}>
            <SocialIcon href="#"><FaInstagram /></SocialIcon>
            <SocialIcon href="#"><FaFacebookF /></SocialIcon>
            <SocialIcon href="#"><FaYoutube /></SocialIcon>
          </div>
        </div>

        {/* 🔗 QUICK NAVIGATION */}
        <div style={styles.col} className="footer-col">
          <h4 style={styles.heading}>QUICK LINKS</h4>
          <FooterLink to="/">HOME</FooterLink>
          <FooterLink to="/about">ABOUT US</FooterLink>
          <FooterLink to="/services">OUR SERVICES</FooterLink>
          <FooterLink to="/contact">CONTACT US</FooterLink>
        </div>

        {/* 🛡 OUR SERVICES */}
        <div style={styles.col} className="footer-col">
          <h4 style={styles.heading}>OUR SERVICES</h4>
          <FooterLink to="/cctv">CCTV SURVEILLANCE</FooterLink>
          <FooterLink to="/housekeeping">ELITE HOUSEKEEPING</FooterLink>
          <FooterLink to="/security">SOCIETY PROTECTION</FooterLink>
        </div>

        {/* 📞 CONTACT INFO */}
        <div style={styles.col} className="footer-col">
          <h4 style={styles.heading}>CONTACT INFO</h4>
          <div style={styles.info} className="footer-info">
            <FaPhoneAlt style={{color: '#00e0ff'}} /> +91 98765 43210
          </div>
          <div style={styles.info} className="footer-info">
            <FaEnvelope style={{color: '#00e0ff'}} /> info@eagleforce.in
          </div>
          <div style={styles.info} className="footer-info">
            <FaMapMarkerAlt style={{color: '#00e0ff'}} /> Mumbai, Maharashtra
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#00e0ff", color: "#000" }}
            style={styles.footerBtn}
            onClick={() => window.location.href="tel:+919876543210"}
          >
            FREE CONSULTATION
          </motion.button>
        </div>
      </div>

      {/* 🔻 BOTTOM BAR */}
      <div style={styles.bottom}>
        <div style={styles.bottomContent}>
          <p>© {new Date().getFullYear()} EAGLE FORCE SECURITY SERVICES PVT. LTD. DEVELOPED BY SHIVAM MISHRA</p>
          <p style={{color: '#00e0ff', fontWeight: 'bold'}}>ALL RIGHTS RESERVED.</p>
        </div>
      </div>

      {/* 🦅 WATERMARK (Low Opacity for Premium Feel) */}
      <div style={styles.watermark}>EAGLE FORCE</div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <motion.div whileHover={{ x: 5 }}>
      <Link to={to} style={styles.link}>
        <FaChevronRight style={{fontSize: 10, marginRight: 8, color: '#00e0ff'}} />
        {children}
      </Link>
    </motion.div>
  );
}

function SocialIcon({ href, children }) {
  return (
    <motion.a
      href={href} target="_blank" rel="noreferrer"
      style={styles.socialIcon}
      whileHover={{ y: -5, color: "#00e0ff", boxShadow: "0 5px 15px rgba(0,224,255,0.3)" }}
    >
      {children}
    </motion.a>
  );
}

const styles = {
  footer: {
    background: "#02040f", // Match your Navbar background
    color: "#fff",
    marginTop: 80,
    position: "relative",
    overflow: "hidden",
    borderTop: "1px solid #00e0ff",
    fontFamily: "inherit", // Uses the same font as your app
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "80px 20px 60px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 40,
    position: "relative",
    zIndex: 2,
  },
  col: { display: "flex", flexDirection: "column", gap: 18 },
  logoGroup: { cursor: 'pointer', marginBottom: 10 },
  logo: {
    color: "#fff", fontSize: 24, fontWeight: 900, margin: 0,
    letterSpacing: 2, display: 'flex', alignItems: 'center'
  },
  logoSubText: { fontSize: 8, color: "#00e0ff", letterSpacing: 4, fontWeight: "bold" },
  desc: { opacity: 0.7, fontSize: 14, lineHeight: 1.7, maxWidth: 300 },
  heading: { 
    color: "#00e0ff", fontSize: 16, fontWeight: "bold", 
    letterSpacing: 2, marginBottom: 10, borderLeft: "3px solid #00e0ff", paddingLeft: 10 
  },
  link: { 
    color: "#ccc", textDecoration: "none", fontSize: 14, 
    fontWeight: "600", transition: "0.3s", display: 'flex', alignItems: 'center' 
  },
  info: { display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#eee" },
  socialRow: { display: "flex", gap: 15, marginTop: 10 },
  socialIcon: {
    width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.05)",
    display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "0.3s"
  },
  footerBtn: {
    marginTop: 15, background: 'transparent', border: '1px solid #00e0ff',
    color: '#00e0ff', padding: '12px 20px', fontSize: 12, fontWeight: 'bold',
    cursor: 'pointer', letterSpacing: 1, transition: '0.3s'
  },
  bottom: { 
    padding: "25px 20px", borderTop: "1px solid rgba(255,255,255,0.05)", 
    background: "rgba(0,0,0,0.3)" 
  },
  bottomContent: { 
    maxWidth: 1200, margin: "0 auto", display: "flex", 
    justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", fontSize: 12, opacity: 0.7 
  },
  watermark: {
    position: "absolute", bottom: -20, right: 20, fontSize: 100, 
    fontWeight: "900", color: "rgba(0,224,255,0.03)", pointerEvents: "none", zIndex: 1
  }
};