import React, { useState, useEffect, useMemo } from 'react';
  import { Link } from 'react-router-dom';

import LoadingPage from './loading';
import {
  Calendar,
  MapPin,
  Shield,
  Smartphone,
  Users,
  Star,
  AlertTriangle,
  CheckCircle,
  Menu,
  X,
  Bus,
  UserCheck,
  Settings,
  Flame,
  Clock4,
  Gift,
  Sparkles
} from 'lucide-react';

const BusSevaHomepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [stats, setStats] = useState({ buses: 0, cities: 0, travelers: 0 });
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);  // Simulated loading delay

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
   

  // Handle responsive breakpoint reactively
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const listener = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  // Animated counters
  useEffect(() => {
    const targets = { buses: 500, cities: 50, travelers: 1000 }; // 1M shown as 1000k
    const duration = 1200;
    const start = performance.now();

    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setStats({
        buses: Math.floor(p * targets.buses),
        cities: Math.floor(p * targets.cities),
        travelers: Math.floor(p * targets.travelers)
      });
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const styles = useMemo(
    () => ({
      page: { minHeight: '100vh', background: 'white' },
      container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
      nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'white',
        boxShadow: isScrolled ? '0 8px 24px rgba(0,0,0,0.12)' : 'none',
        padding: isScrolled ? '10px 0' : '18px 0',
        transition: 'all 0.3s ease'
      },
      navContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      },
      logo: { display: 'flex', alignItems: 'center', gap: '10px' },
      logoIcon: {
        width: '44px',
        height: '44px',
        background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 16px rgba(37,99,235,0.35)'
      },
      logoText: { fontSize: '24px', fontWeight: '800', color: '#1f2937', letterSpacing: '0.3px' },
      navLinks: {
        display: isMobile ? 'none' : 'flex',
        gap: '28px',
        alignItems: 'center'
      },
      navLink: {
        color: '#374151',
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative'
      },
      adminBtn: {
        background: '#2563eb',
        color: 'white',
        padding: '10px 18px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 700,
        transition: 'transform 0.15s ease, box-shadow 0.2s ease',
        boxShadow: '0 6px 14px rgba(37,99,235,0.35)'
      },
      hero: {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #eef2ff 0%, #e0f2fe 100%)',
        textAlign: 'center'
      },
      heroTitle: {
        fontSize: isMobile ? '2.6rem' : '4rem',
        fontWeight: 900,
        color: '#0f172a',
        marginBottom: '16px',
        lineHeight: 1.15,
        letterSpacing: '-0.5px'
      },
      heroTitleBlue: {
        display: 'block',
        background: 'linear-gradient(90deg,#2563eb,#22c55e,#7c3aed)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        animation: 'gradientShift 10s ease infinite'
      },
      heroSubtitle: {
        fontSize: '18px',
        color: '#334155',
        marginBottom: '36px',
        maxWidth: '780px',
        margin: '0 auto 36px'
      },
      searchBox: {
        position: 'relative',
        maxWidth: '1000px',
        margin: '0 auto 48px',
        background: 'white',
        borderRadius: '18px',
        boxShadow: '0 30px 50px -20px rgba(2,6,23,0.25)',
        padding: isMobile ? '18px' : '28px',
        border: '1px solid rgba(15,23,42,0.06)',
        backdropFilter: 'blur(6px)'
      },
      searchGrid: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, minmax(0,1fr))',
        gap: '14px',
        alignItems: 'end'
      },
      inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
      label: { fontSize: '13px', fontWeight: 700, color: '#0f172a', letterSpacing: '0.2px' },
      inputWrapper: { position: 'relative' },
      input: {
        width: '100%',
        paddingLeft: '42px',
        paddingRight: '14px',
        paddingTop: '12px',
        paddingBottom: '12px',
        border: '1px solid #e2e8f0',
        borderRadius: '10px',
        fontSize: '16px',
        outline: 'none',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease'
      },
      inputIcon: {
        position: 'absolute',
        left: '12px',
        top: '12px',
        width: '20px',
        height: '20px',
        color: '#94a3b8'
      },
      searchBtn: {
        background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
        color: 'white',
        padding: '14px 18px',
        borderRadius: '12px',
        border: 'none',
        fontSize: '16px',
        fontWeight: 800,
        cursor: 'pointer',
        transition: 'transform 0.12s ease, box-shadow 0.2s ease',
        boxShadow: '0 12px 24px rgba(37,99,235,0.35)'
      },
      statsGrid: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: '28px',
        maxWidth: '860px',
        margin: '0 auto'
      },
      statItem: { textAlign: 'center', background: 'white', padding: '18px', borderRadius: '14px', boxShadow: '0 10px 24px rgba(2,6,23,0.08)' },
      statNumber: { fontSize: '2rem', fontWeight: 900, color: '#0f172a', marginBottom: '6px' },
      statSuffix: { fontSize: '1rem', fontWeight: 800, color: '#2563eb', marginLeft: 4 },
      statLabel: { color: '#475569', fontWeight: 600 },
      section: { padding: '80px 0' },
      sectionWhite: { background: 'white' },
      sectionGray: { background: '#f8fafc' },
      sectionHeader: { textAlign: 'center', marginBottom: '56px' },
      sectionTitle: { fontSize: '2.3rem', fontWeight: 900, color: '#0f172a', marginBottom: '14px' },
      sectionSubtitle: { fontSize: '18px', color: '#475569', maxWidth: '780px', margin: '0 auto' },
      howItWorksGrid: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0,1fr))',
        gap: '36px'
      },
      processCard: { borderRadius: '18px', padding: '28px', border: '1px solid rgba(2,6,23,0.06)', boxShadow: '0 14px 28px rgba(2,6,23,0.08)' },
      processCardBlue: { background: '#eff6ff' },
      processCardGreen: { background: '#f0fdf4' },
      processHeader: { display: 'flex', alignItems: 'center', marginBottom: '18px' },
      processTitle: { fontSize: '22px', fontWeight: 800, color: '#0f172a', marginLeft: '12px' },
      processSteps: { display: 'flex', flexDirection: 'column', gap: '18px' },
      processStep: { display: 'flex', alignItems: 'flex-start', gap: '16px' },
      stepNumber: {
        width: '34px',
        height: '34px',
        borderRadius: '50%',
        color: 'white',
        fontSize: '14px',
        fontWeight: 900,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      },
      stepNumberBlue: { background: '#2563eb' },
      stepNumberGreen: { background: '#16a34a' },
      stepTitle: { fontWeight: 800, color: '#0f172a', marginBottom: '6px' },
      stepDescription: { color: '#334155', lineHeight: 1.6 },
      featuresGrid: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0,1fr))',
        gap: '24px'
      },
      featureCard: {
        background: 'white',
        borderRadius: '14px',
        padding: '22px',
        boxShadow: '0 12px 28px rgba(2,6,23,0.08)',
        border: '1px solid rgba(2,6,23,0.06)',
        transition: 'transform 0.15s ease, box-shadow 0.2s ease'
      },
      featureIcon: { width: '32px', height: '32px', marginBottom: '14px' },
      featureTitle: { fontSize: '20px', fontWeight: 900, color: '#0f172a', marginBottom: '10px' },
      featureDescription: { color: '#334155', lineHeight: 1.6 },
      platformsGrid: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0,1fr))',
        gap: '24px'
      },
      platformCard: { borderRadius: '16px', padding: '28px', color: 'white', position: 'relative', overflow: 'hidden' },
      platformCardBlue: { background: 'linear-gradient(135deg,#2563eb,#1d4ed8)' },
      platformCardGreen: { background: 'linear-gradient(135deg,#16a34a,#059669)' },
      platformCardPurple: { background: 'linear-gradient(135deg,#7c3aed,#6d28d9)' },
      platformTitle: { fontSize: '22px', fontWeight: 900, marginBottom: '14px' },
      platformFeatures: { display: 'flex', flexDirection: 'column', gap: '10px' },
      platformFeature: { display: 'flex', alignItems: 'center', gap: '8px' },
      cta: {
        position: 'relative',
        padding: '80px 0',
        background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden'
      },
      ctaTitle: { fontSize: '2.3rem', fontWeight: 900, marginBottom: '16px' },
      ctaSubtitle: {
        fontSize: '18px',
        marginBottom: '24px',
        maxWidth: '780px',
        margin: '0 auto 24px',
        opacity: 0.95
      },
      ctaButtons: { display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '14px', alignItems: 'center', justifyContent: 'center' },
      ctaButton: {
        background: 'white',
        color: '#1d4ed8',
        padding: '14px 24px',
        borderRadius: '12px',
        border: 'none',
        fontSize: '16px',
        fontWeight: 800,
        cursor: 'pointer',
        boxShadow: '0 14px 28px rgba(255,255,255,0.25)',
        animation: 'pulseGlow 3s ease-in-out infinite'
      },
      mobileMenu: { background: 'white', borderTop: '1px solid #e5e7eb', padding: '8px 16px' },
      mobileMenuItem: { display: 'block', padding: '8px 0', color: '#374151', textDecoration: 'none' },

      // Hero animation layers
      skyLayer: {
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden'
      },
      cloud: {
        position: 'absolute',
        top: '15%',
        left: '-20%',
        width: 220,
        height: 60,
        background: 'rgba(255,255,255,0.9)',
        borderRadius: 9999,
        filter: 'blur(0.5px)',
        animation: 'cloudDrift 30s linear infinite'
      },
      cloud2: {
        position: 'absolute',
        top: '35%',
        left: '-15%',
        width: 160,
        height: 44,
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 9999,
        filter: 'blur(0.5px)',
        animation: 'cloudDrift 40s linear infinite reverse'
      },
      skyline: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        background:
          'linear-gradient(to top, rgba(2,6,23,0.06), rgba(2,6,23,0.0)), repeating-linear-gradient(90deg, rgba(2,6,23,0.12) 0 20px, rgba(2,6,23,0.06) 20px 40px)',
        clipPath: 'polygon(0 100%, 0 45%, 10% 60%, 18% 50%, 28% 65%, 40% 48%, 55% 70%, 68% 52%, 82% 62%, 100% 44%, 100% 100%)'
      },
      road: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        height: 6,
        background:
          'repeating-linear-gradient(90deg, rgba(255,255,255,0.85) 0 40px, rgba(255,255,255,0.1) 40px 80px)',
        opacity: 0.6
      },
      busTrack: {
        position: 'absolute',
        bottom: 26,
        left: '-10%',
        height: 36,
        width: '120%',
        pointerEvents: 'none',
        animation: 'busDrive 9s cubic-bezier(.37,.01,.16,1) infinite'
      },
      cityMarqueeWrap: {
        marginTop: 12,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      },
      cityMarquee: {
        display: 'inline-block',
        padding: '6px 0',
        animation: 'marquee 18s linear infinite',
        color: '#334155',
        fontWeight: 700
      }
    }),
    [isScrolled, isMobile]
  );

  const cities = ['Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Jaipur', 'Kolkata', 'Lucknow'];

  return (
      <>
      {isLoading ? (
        <LoadingPage />   // LoadingPage component dikhega jab isLoading === true
      ) : (
    <div style={styles.page}>
      <style>{`
        @keyframes gradientShift {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(40deg); }
          100% { filter: hue-rotate(0deg); }
        }
        @keyframes cloudDrift {
          0% { transform: translateX(0); }
          100% { transform: translateX(140%); }
        }
        @keyframes busDrive {
          0% { transform: translateX(-15%) translateY(0) }
          45% { transform: translateX(40%) translateY(-3px) }
          50% { transform: translateX(50%) translateY(0) }
          95% { transform: translateX(115%) translateY(-2px) }
          100% { transform: translateX(130%) translateY(0) }
        }
        @keyframes tireSpin {
          to { transform: rotate(360deg) }
        }
        @keyframes puff {
          0% { transform: scale(0.6); opacity: 0.8 }
          100% { transform: scale(1.6); opacity: 0 }
        }
        @keyframes marquee {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(255,255,255,0.0) }
          50% { box-shadow: 0 0 24px rgba(255,255,255,0.35) }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
        .hover-bump:hover { transform: translateY(-3px); box-shadow: 0 16px 30px rgba(2,6,23,0.12) !important; }
        .pressable:active { transform: translateY(1px) scale(0.99); }
        .input-focus:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.2); }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Bus style={{ width: 24, height: 24, color: 'white' }} />
            </div>
            <span style={styles.logoText}><a href="#home" style={styles.navLink}>BusSeva</a></span>
          </div>

          {!isMobile && (
            <div style={styles.navLinks}>
              <a href="#home" style={styles.navLink}>Home</a>
              <a href="#how-it-works" style={styles.navLink}>How It Works</a>
              <a href="#features" style={styles.navLink}>Features</a>
              <a href="#platforms" style={styles.navLink}>Platforms</a>
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
         
          <Link to="/login" className="pressable" style={styles.adminBtn}>
            Admin Login
          </Link>

            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {mobileMenuOpen && isMobile && (
          <div style={styles.mobileMenu}>
            <a href="#home" style={styles.mobileMenuItem}>Home</a>
            <a href="#how-it-works" style={styles.mobileMenuItem}>How It Works</a>
            <a href="#features" style={styles.mobileMenuItem}>Features</a>
            <a href="#platforms" style={styles.mobileMenuItem}>Platforms</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" style={styles.hero}>
        {/* Sky/Clouds/Cityline/BUS */}
        <div style={styles.skyLayer}>
          <div style={styles.cloud} />
          <div style={styles.cloud2} />
          <div style={styles.skyline} />
          <div style={styles.road} />
          {/* Animated Bus */}
          <div style={styles.busTrack}>
            <svg width="180" height="36" viewBox="0 0 180 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              {/* puff */}
              <circle cx="12" cy="22" r="6" fill="rgba(2,6,23,0.18)" style={{ animation: 'puff 1.8s ease-out infinite' }} />
              {/* body */}
              <rect x="30" y="6" rx="6" width="120" height="22" fill="#ef4444" />
              <rect x="30" y="6" rx="6" width="120" height="10" fill="#fca5a5" opacity="0.3" />
              {/* windows */}
              {[0,1,2,3,4].map(i => (
                <rect key={i} x={40 + i*20} y="10" width="14" height="8" rx="2" fill="#e2e8f0" />
              ))}
              {/* door */}
              <rect x="140" y="12" width="8" height="12" rx="2" fill="#fee2e2" />
              {/* wheels */}
              <g transform="translate(50,26)">
                <circle r="6" fill="#0f172a" />
                <circle r="2.5" fill="#94a3b8" />
                <g style={{ transformOrigin: 'center', animation: 'tireSpin 0.9s linear infinite' }}>
                  <rect x="-1" y="-6" width="2" height="12" fill="#1e293b" />
                </g>
              </g>
              <g transform="translate(130,26)">
                <circle r="6" fill="#0f172a" />
                <circle r="2.5" fill="#94a3b8" />
                <g style={{ transformOrigin: 'center', animation: 'tireSpin 0.9s linear infinite' }}>
                  <rect x="-1" y="-6" width="2" height="12" fill="#1e293b" />
                </g>
              </g>
              {/* headlight */}
              <circle cx="154" cy="22" r="2.5" fill="#fde68a" />
            </svg>
          </div>
        </div>

        <div style={styles.container}>
          <h1 style={styles.heroTitle}>
            Smart Public Transport for
            <span style={styles.heroTitleBlue}>Tier-2 Cities</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Experience seamless bus travel with real-time tracking, verified reviews, and value offers inspired by the leading booking flows used by millions across India for confidence and convenience [1][6][8][16].
          </p>

          {/* Search */}
          <div style={styles.searchBox} className="hover-bump">
            <div style={styles.searchGrid}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>From</label>
                <div style={styles.inputWrapper}>
                  <MapPin style={styles.inputIcon} />
                  <input type="text" placeholder="Enter departure city" style={{ ...styles.input }} className="input-focus" />
                </div>
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>To</label>
                <div style={styles.inputWrapper}>
                  <MapPin style={styles.inputIcon} />
                  <input type="text" placeholder="Enter destination city" style={{ ...styles.input }} className="input-focus" />
                </div>
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Date</label>
                <div style={styles.inputWrapper}>
                  <Calendar style={styles.inputIcon} />
                  <input type="date" style={{ ...styles.input }} className="input-focus" />
                </div>
              </div>
              <button style={styles.searchBtn} className="pressable">
                <Clock4 size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                Search Buses
              </button>
            </div>

            {/* quick chips */}
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 13, color: '#64748b', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Flame size={16} color="#f59e0b" /> Popular corridors
              </span>
              <div style={styles.cityMarqueeWrap}>
                <div style={styles.cityMarquee}>
                  {cities.concat(cities).map((c, i) => (
                    <span key={i} style={{ marginRight: 22 }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={styles.statsGrid}>
            <div style={styles.statItem} className="hover-bump">
              <div style={styles.statNumber}>
                {stats.buses}
                <span style={styles.statSuffix}>+</span>
              </div>
              <div style={styles.statLabel}>Active Buses</div>
            </div>
            <div style={styles.statItem} className="hover-bump">
              <div style={styles.statNumber}>
                {stats.cities}
                <span style={styles.statSuffix}>+</span>
              </div>
              <div style={styles.statLabel}>Cities Connected</div>
            </div>
            <div style={styles.statItem} className="hover-bump">
              <div style={styles.statNumber}>
                {stats.travelers}
                <span style={styles.statSuffix}>k+</span>
              </div>
              <div style={styles.statLabel}>Happy Travelers</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ ...styles.section, ...styles.sectionWhite }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>How BusSeva Works</h2>
            <p style={styles.sectionSubtitle}>
              The flow mirrors familiar patterns: search, select with ratings, live track, and pay digitally for a smooth, trusted booking journey [1][6][8].
            </p>
          </div>
          <div style={styles.howItWorksGrid}>
            {/* Passengers */}
            <div style={{ ...styles.processCard, ...styles.processCardBlue }} className="hover-bump">
              <div style={styles.processHeader}>
                <Users style={{ width: 32, height: 32, color: '#2563eb' }} />
                <h3 style={styles.processTitle}>For Passengers</h3>
              </div>
              <div style={styles.processSteps}>
                <div style={styles.processStep}>
                  <div style={{ ...styles.stepNumber, ...styles.stepNumberBlue }}>1</div>
                  <div>
                    <h4 style={styles.stepTitle}>Search & Book</h4>
                    <p style={styles.stepDescription}>
                      Enter route, compare options with ratings, and book with digital payments for a fast, reliable experience [1][8].
                    </p>
                  </div>
                </div>
                <div style={styles.processStep}>
                  <div style={{ ...styles.stepNumber, ...styles.stepNumberBlue }}>2</div>
                  <div>
                    <h4 style={styles.stepTitle}>Track & Travel</h4>
                    <p style={styles.stepDescription}>
                      Track the bus live and get timely updates for stress-free boarding and accurate ETAs along the route [6][8][12].
                    </p>
                  </div>
                </div>
                <div style={styles.processStep}>
                  <div style={{ ...styles.stepNumber, ...styles.stepNumberBlue }}>3</div>
                  <div>
                    <h4 style={styles.stepTitle}>Safety & Feedback</h4>
                    <p style={styles.stepDescription}>
                      Use safety tools and share verified feedback to improve transparency and service quality for everyone [8][1].
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Drivers */}
            <div style={{ ...styles.processCard, ...styles.processCardGreen }} className="hover-bump">
              <div style={styles.processHeader}>
                <UserCheck style={{ width: 32, height: 32, color: '#16a34a' }} />
                <h3 style={styles.processTitle}>For Drivers</h3>
              </div>
              <div style={styles.processSteps}>
                <div style={styles.processStep}>
                  <div style={{ ...styles.stepNumber, ...styles.stepNumberGreen }}>1</div>
                  <div>
                    <h4 style={styles.stepTitle}>Identity Verification</h4>
                    <p style={styles.stepDescription}>
                      Secure onboarding and identity checks help build trust and accountability within the network [1][8].
                    </p>
                  </div>
                </div>
                <div style={styles.processStep}>
                  <div style={{ ...styles.stepNumber, ...styles.stepNumberGreen }}>2</div>
                  <div>
                    <h4 style={styles.stepTitle}>Route Management</h4>
                    <p style={styles.stepDescription}>
                      Follow assigned routes and keep occupancy info updated to reduce uncertainties during boarding [1][8].
                    </p>
                  </div>
                </div>
                <div style={styles.processStep}>
                  <div style={{ ...styles.stepNumber, ...styles.stepNumberGreen }}>3</div>
                  <div>
                    <h4 style={styles.stepTitle}>GPS Tracking</h4>
                    <p style={styles.stepDescription}>
                      Periodic location sharing powers passenger tracking and improves operational visibility end-to-end [6][12].
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ ...styles.section, ...styles.sectionGray }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Powerful Features</h2>
            <p style={styles.sectionSubtitle}>
              Designed around proven patterns: ratings for quality, live tracking for certainty, and offers that encourage adoption [8][6][16].
            </p>
          </div>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard} className="hover-bump">
              <Shield style={{ ...styles.featureIcon, color: '#2563eb' }} />
              <h3 style={styles.featureTitle}>Enhanced Security</h3>
              <p style={styles.featureDescription}>
                Identity checks and transparent activity help create a safer travel ecosystem passengers can trust [1][8].
              </p>
            </div>
            <div style={styles.featureCard} className="hover-bump">
              <MapPin style={{ ...styles.featureIcon, color: '#16a34a' }} />
              <h3 style={styles.featureTitle}>Real-time Tracking</h3>
              <p style={styles.featureDescription}>
                Live bus location and updates reduce wait anxiety and improve time-to-board accuracy [6][12][8].
              </p>
            </div>
            <div style={styles.featureCard} className="hover-bump">
              <AlertTriangle style={{ ...styles.featureIcon, color: '#dc2626' }} />
              <h3 style={styles.featureTitle}>SOS & Safety</h3>
              <p style={styles.featureDescription}>
                Built-in escalation and reporting options enhance confidence, especially on crowded corridors [8][1].
              </p>
            </div>
            <div style={styles.featureCard} className="hover-bump">
              <Smartphone style={{ ...styles.featureIcon, color: '#7c3aed' }} />
              <h3 style={styles.featureTitle}>Digital Ticketing</h3>
              <p style={styles.featureDescription}>
                Fast, multi-method checkout and confirmations mirror the best-in-class mobile booking experience [1][8].
              </p>
            </div>
            <div style={styles.featureCard} className="hover-bump">
              <Star style={{ ...styles.featureIcon, color: '#eab308' }} />
              <h3 style={styles.featureTitle}>Verified Reviews</h3>
              <p style={styles.featureDescription}>
                Ratings and reviews help riders choose reliable operators and premium-quality services [8][1].
              </p>
            </div>
            <div style={styles.featureCard} className="hover-bump">
              <Users style={{ ...styles.featureIcon, color: '#6366f1' }} />
              <h3 style={styles.featureTitle}>Occupancy Tracking</h3>
              <p style={styles.featureDescription}>
                Capacity visibility reduces overcrowding and improves boarding decisions during peak hours [6][8].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" style={{ ...styles.section, ...styles.sectionWhite }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Three Integrated Platforms</h2>
            <p style={styles.sectionSubtitle}>
              Passenger app, driver app, and admin web unify booking, tracking, verification, and analytics for reliability at scale [1][8].
            </p>
          </div>
          <div style={styles.platformsGrid}>
            <div style={{ ...styles.platformCard, ...styles.platformCardBlue }} className="hover-bump">
              <Users style={{ width: 48, height: 48, marginBottom: 18 }} />
              <h3 style={styles.platformTitle}>User Mobile App</h3>
              <div style={styles.platformFeatures}>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Bus search and booking</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Real-time tracking</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Digital payments</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Alerts & updates</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Safety tools</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Ratings & reviews</span></div>
              </div>
            </div>

            <div style={{ ...styles.platformCard, ...styles.platformCardGreen }} className="hover-bump">
              <UserCheck style={{ width: 48, height: 48, marginBottom: 18 }} />
              <h3 style={styles.platformTitle}>Driver Mobile App</h3>
              <div style={styles.platformFeatures}>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Verification & KYC</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>GPS trip tracking</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Route guidance</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Occupancy updates</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Incident reporting</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Trip management</span></div>
              </div>
            </div>

            <div style={{ ...styles.platformCard, ...styles.platformCardPurple }} className="hover-bump">
              <Settings style={{ width: 48, height: 48, marginBottom: 18 }} />
              <h3 style={styles.platformTitle}>Admin Web Dashboard</h3>
              <div style={styles.platformFeatures}>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Fleet management</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Driver verification</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Route planning</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Analytics & SLAs</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>Risk monitoring</span></div>
                <div style={styles.platformFeature}><CheckCircle size={20} /><span>System health</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers/CTA */}
      <section style={styles.cta}>
        <div style={styles.container}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 10, background: 'rgba(255,255,255,0.12)', padding: '8px 12px', borderRadius: 9999 }}>
            <Gift size={18} />
            <span style={{ fontWeight: 800 }}>Festive Offers Live</span>
            <Sparkles size={18} />
          </div>
          <h2 style={styles.ctaTitle}>Ready to Transform Public Transport?</h2>
          <p style={styles.ctaSubtitle}>
            Bring trusted search, live tracking, and compelling offers together to deliver a top-tier rider experience across India [1][6][16].
          </p>
          <div style={styles.ctaButtons}>
            <button style={styles.ctaButton} className="pressable">Download User App</button>
            <button style={styles.ctaButton} className="pressable">Download Driver App</button>
          </div>
        </div>
      </section>
    </div>
    )}
  </>
  );
};

export default BusSevaHomepage;
