import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        ...styles.nav,
        // Responsive Padding: Mobile par kam, Desktop par zyada
        padding: scrolled ? "12px 20px" : "20px 20px",
        background: scrolled ? "rgba(2, 4, 15, 0.95)" : "rgba(2, 4, 15, 0.7)",
        borderBottom: scrolled ? "1px solid #00e0ff" : "1px solid rgba(0,224,255,0.1)",
      }}
    >
      {/* Container for fluid width */}
      <div style={styles.container}>
        
        {/* 🚀 TECH SCANNER LINE */}
        {scrolled && (
          <motion.div 
            layoutId="navScan"
            style={styles.navScanner}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
          />
        )}

        {/* 🦅 LOGO */}
        <motion.div
          style={styles.logoContainer}
          onClick={() => { navigate("/"); setMobile(false); }}
          whileHover="hover"
        >
          <motion.h2
            style={styles.logo}
            variants={{
              hover: { x: [0, -2, 2, 0], transition: { repeat: Infinity, duration: 0.2 } }
            }}
          >
            🦅 EAGLE FORCE
          </motion.h2>
          <span style={styles.logoSubText}>SECURITY SYSTEMS</span>
        </motion.div>

        {/* 💻 DESKTOP MENU (Hidden on Mobile) */}
        <div style={styles.menuDesktop} className="desktop-only">
          <NavItem to="/" label="HOME" active={isActive("/")} />
          <NavItem to="/about" label="ABOUT" active={isActive("/about")} />

          <div
            style={styles.dropdown}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/services"
                style={{
                  ...styles.link,
                  color: (location.pathname.startsWith("/services") || location.pathname.match(/\/(cctv|housekeeping|security)/))
                    ? "#00e0ff" : "#fff",
                }}
              >
                SERVICES <span style={{fontSize: 10, verticalAlign: 'middle'}}>▼</span>
              </Link>
              {(location.pathname.startsWith("/services") || location.pathname.match(/\/(cctv|housekeeping|security)/)) && (
                <motion.div layoutId="underline" style={styles.activeLine} />
              )}
            </motion.div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  style={styles.dropdownMenu}
                >
                  <Link style={styles.ddItem} to="/cctv" className="dd-item-hover">🎥 CCTV SURVEILLANCE</Link>
                  <Link style={styles.ddItem} to="/housekeeping" className="dd-item-hover">🧹 ELITE HOUSEKEEPING</Link>
                  <Link style={styles.ddItem} to="/security" className="dd-item-hover">🛡 SOCIETY PROTECTION</Link>
                  <div style={styles.ddGlow} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem to="/contact" label="CONTACT" active={isActive("/contact")} />
        </div>

        {/* 🌐 SOCIALS (Hidden on Mobile) */}
        <div style={styles.socialWrap} className="desktop-only">
          <SocialIcon href="#"><FaInstagram /></SocialIcon>
          <SocialIcon href="#"><FaFacebookF /></SocialIcon>
          <SocialIcon href="#"><FaYoutube /></SocialIcon>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#00e0ff", color: "#000" }}
            style={styles.navCallBtn}
            onClick={() => window.location.href="tel:+918998998989"}
          >
            CALL NOW
          </motion.button>
        </div>

        {/* 📱 MOBILE TOGGLE (Visible only on Mobile) */}
        <div style={styles.hamburger} className="hamburger-menu" onClick={() => setMobile(!mobile)}>
          <motion.div animate={mobile ? { rotate: 45, y: 8 } : {}} style={styles.bar} />
          <motion.div animate={mobile ? { opacity: 0 } : {}} style={styles.bar} />
          <motion.div animate={mobile ? { rotate: -45, y: -8 } : {}} style={styles.bar} />
        </div>
      </div>

      {/* 📱 MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobile(false)}
              style={styles.mobileOverlay}
            />
            <motion.div 
              initial={{ x: "100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={styles.mobileMenu}
            >
               <h3 style={{color:'#00e0ff', fontSize: 10, letterSpacing: 5, marginBottom: 40}}>MENU_SYSTEM</h3>
               <Link onClick={() => setMobile(false)} style={styles.mobileLink} to="/">HOME</Link>
               <Link onClick={() => setMobile(false)} style={styles.mobileLink} to="/about">ABOUT</Link>
               <Link onClick={() => setMobile(false)} style={styles.mobileLink} to="/services">SERVICES</Link>
               <Link onClick={() => setMobile(false)} style={styles.mobileLink} to="/contact">CONTACT</Link>
               
               <div style={{marginTop: 'auto', display: 'flex', gap: 20}}>
                  <FaInstagram size={22} color="#00e0ff"/> 
                  <FaFacebookF size={22} color="#00e0ff"/> 
                  <FaYoutube size={22} color="#00e0ff"/>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-only { display: none !important; }
          .hamburger-menu { display: flex !important; }
        }
        .dd-item-hover:hover { background: rgba(0,224,255,0.1); color: #00e0ff !important; }
      `}</style>
    </nav>
  );
}

// Sub-components as requested
function NavItem({ to, label, active }) {
  return (
    <motion.div style={{ position: 'relative' }} whileHover={{ y: -2 }}>
      <Link to={to} style={{ ...styles.link, color: active ? "#00e0ff" : "#fff" }}>
        {label}
      </Link>
      {active && <motion.div layoutId="underline" style={styles.activeLine} />}
    </motion.div>
  );
}

function SocialIcon({ href, children }) {
  return (
    <motion.a href={href} target="_blank" style={styles.socialIcon} whileHover={{ scale: 1.2, color: "#00e0ff" }}>
      {children}
    </motion.a>
  );
}

const styles = {
  nav: {
    position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999,
    backdropFilter: "blur(20px)", transition: "all 0.4s ease", boxSizing: 'border-box'
  },
  container: {
    maxWidth: "1400px", margin: "0 auto", display: "flex", 
    justifyContent: "space-between", alignItems: "center", width: "100%"
  },
  navScanner: { position: 'absolute', bottom: 0, left: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #00e0ff, transparent)' },
  logoContainer: { cursor: "pointer", display: 'flex', flexDirection: 'column' },
  logo: { color: "#fff", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 900, margin: 0, letterSpacing: 2, fontFamily: "'Syncopate', sans-serif" },
  logoSubText: { fontSize: 8, color: "#00e0ff", letterSpacing: 2, fontWeight: "bold" },
  menuDesktop: { display: "flex", gap: 35, alignItems: "center" },
  link: { textDecoration: "none", fontWeight: 800, fontSize: 13, letterSpacing: 1 },
  activeLine: { position: 'absolute', bottom: -8, left: 0, width: '100%', height: '2px', background: '#00e0ff', boxShadow: '0 0 10px #00e0ff' },
  dropdown: { position: "relative" },
  dropdownMenu: { position: "absolute", top: 40, left: '50%', transform: 'translateX(-50%)', background: "rgba(5, 8, 22, 0.98)", borderRadius: 4, minWidth: 240, padding: '10px 0', border: "1px solid #00e0ff", overflow: 'hidden' },
  ddItem: { display: "block", padding: "15px 25px", color: "#fff", textDecoration: "none", fontSize: 12, fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  socialWrap: { display: "flex", gap: 15, alignItems: "center" },
  socialIcon: { color: "#fff", fontSize: 18, transition: '0.3s' },
  navCallBtn: { background: 'transparent', border: '1px solid #00e0ff', color: '#00e0ff', padding: '8px 16px', fontSize: 11, fontWeight: '900', cursor: 'pointer', letterSpacing: 1 },
  hamburger: { display: "none", flexDirection: 'column', gap: 6, cursor: "pointer" },
  bar: { width: 25, height: 2, background: '#00e0ff' },
  mobileOverlay: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' },
  mobileMenu: { position: "fixed", right: 0, top: 0, height: "100vh", width: "80%", maxWidth: 320, background: "#02040f", padding: "60px 40px", display: "flex", flexDirection: "column", gap: 35, borderLeft: '1px solid #00e0ff' },
  mobileLink: { color: "#fff", textDecoration: "none", fontSize: 28, fontWeight: 900, letterSpacing: 1 },
};