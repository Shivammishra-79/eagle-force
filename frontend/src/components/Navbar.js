import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube, FaChevronRight } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false); 
  const [mobile, setMobile] = useState(false); 
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Social Links configuration
  const socialLinks = {
    instagram: "https://instagram.com/your_id",
    facebook: "https://facebook.com/your_id",
    youtube: "https://youtube.com/@your_channel"
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div style={{ height: scrolled ? "65px" : "85px", transition: "0.4s" }} />

      <nav
        style={{
          ...styles.nav,
          padding: scrolled ? "12px 20px" : "20px 20px",
          background: scrolled ? "rgba(2, 4, 15, 0.98)" : "rgba(2, 4, 15, 0.7)",
          borderBottom: scrolled ? "1px solid #00e0ff" : "1px solid rgba(0,224,255,0.1)",
        }}
      >
        <div style={styles.container}>
          
          {scrolled && (
            <motion.div 
              layoutId="navScan"
              style={styles.navScanner}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
            />
          )}

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
                  SERVICES <span style={{fontSize: 10}}>▼</span>
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem to="/contact" label="CONTACT" active={isActive("/contact")} />
          </div>

          <div style={styles.socialWrap} className="desktop-only">
            <SocialIcon href={socialLinks.instagram}><FaInstagram /></SocialIcon>
            <SocialIcon href={socialLinks.facebook}><FaFacebookF /></SocialIcon>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#00e0ff", color: "#000" }}
              style={styles.navCallBtn}
              onClick={() => window.location.href="tel:+918998998989"}
            >
              CALL NOW
            </motion.button>
          </div>

          <div 
            style={{...styles.hamburger, height: 20, justifyContent: 'space-between'}} 
            className="hamburger-menu" 
            onClick={() => setMobile(!mobile)}
          >
            <motion.div 
              animate={mobile ? { rotate: 45, y: 9, width: 30 } : { rotate: 0, y: 0, width: 25 }} 
              style={styles.bar} 
            />
            <motion.div 
              animate={mobile ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }} 
              style={styles.bar} 
            />
            <motion.div 
              animate={mobile ? { rotate: -45, y: -9, width: 30 } : { rotate: 0, y: 0, width: 25 }} 
              style={styles.bar} 
            />
          </div>
        </div>

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
                 <h3 style={styles.mobileLabel}>COMMAND_CENTER</h3>
                 
                 <Link onClick={() => setMobile(false)} style={styles.mobileLink} to="/">HOME</Link>
                 <Link onClick={() => setMobile(false)} style={styles.mobileLink} to="/about">ABOUT</Link>
                 
                 <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      style={{ ...styles.mobileLink, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                    >
                      SERVICES 
                      <motion.div animate={{ rotate: mobileServicesOpen ? 90 : 0 }}>
                        <FaChevronRight size={18} color="#00e0ff" />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          style={{ overflow: 'hidden', paddingLeft: 15, display: 'flex', flexDirection: 'column', gap: 18, marginTop: 15 }}
                        >
                          <Link onClick={() => setMobile(false)} style={styles.mobileSubLink} to="/cctv">🎥 CCTV SYSTEM</Link>
                          <Link onClick={() => setMobile(false)} style={styles.mobileSubLink} to="/housekeeping">🧹 HOUSEKEEPING</Link>
                          <Link onClick={() => setMobile(false)} style={styles.mobileSubLink} to="/security">🛡 SOCIETY GUARD</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>

                 <Link onClick={() => setMobile(false)} style={styles.mobileLink} to="/contact">CONTACT</Link>
                 
                 <div style={styles.mobileSocials}>
                    <a href={socialLinks.instagram} target="_blank" rel="noreferrer"><FaInstagram size={28} color="#00e0ff"/></a>
                    <a href={socialLinks.facebook} target="_blank" rel="noreferrer"><FaFacebookF size={28} color="#00e0ff"/></a>
                    <a href={socialLinks.youtube} target="_blank" rel="noreferrer"><FaYoutube size={28} color="#00e0ff"/></a>
                 </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <style>{`
          @media (max-width: 1100px) {
            .desktop-only { display: none !important; }
            .hamburger-menu { display: flex !important; z-index: 10001; position: relative; }
          }
          .dd-item-hover:hover { background: rgba(0,224,255,0.1); color: #00e0ff !important; }
        `}</style>
      </nav>
    </>
  );
}

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
    <motion.a href={href} target="_blank" rel="noreferrer" style={styles.socialIcon} whileHover={{ scale: 1.2, color: "#00e0ff" }}>
      {children}
    </motion.a>
  );
}

const styles = {
  // ... (Baaki styles wahi hain)
  nav: { position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999, backdropFilter: "blur(20px)", transition: "all 0.4s ease", boxSizing: 'border-box' },
  container: { maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
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
  socialIcon: { color: "#fff", fontSize: 18, transition: '0.3s', textDecoration: 'none' },
  navCallBtn: { background: 'transparent', border: '1px solid #00e0ff', color: '#00e0ff', padding: '8px 16px', fontSize: 11, fontWeight: '900', cursor: 'pointer' },
  hamburger: { display: "none", flexDirection: 'column', gap: 6, cursor: "pointer", position: 'relative', zIndex: 10001 },
  bar: { width: 25, height: 2, background: '#00e0ff', borderRadius: 2 },
  mobileOverlay: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 9998 },
  mobileMenu: { position: "fixed", right: 0, top: 0, height: "100vh", width: "85%", maxWidth: 350, background: "#02040f", padding: "80px 30px 40px", display: "flex", flexDirection: "column", gap: 22, borderLeft: '1px solid #00e0ff', overflowY: 'auto', zIndex: 9999 },
  mobileLabel: { color:'#00e0ff', fontSize: 10, letterSpacing: 5, marginBottom: 15, opacity: 0.7 },
  mobileLink: { color: "#fff", textDecoration: "none", fontSize: 26, fontWeight: 900, letterSpacing: 1 },
  mobileSubLink: { color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 600, borderLeft: '2px solid #00e0ff', paddingLeft: 15, opacity: 0.9 },
  mobileSocials: { marginTop: 'auto', display: 'flex', gap: 25, paddingTop: 30 }
};