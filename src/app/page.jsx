'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { COMPANY_INFO, SERVICES_LIST, PROJECTS_GALLERY, FAQS, TESTIMONIALS, EQUIPMENT_FLEET, REGIONAL_CORRIDORS } from '../data/companyData';
import { useModal } from '../context/ModalContext';
import {
  Flame, ShieldCheck, Warehouse, Compass, Wrench, Factory, ShieldAlert,
  Sparkles, Truck, ArrowRight, Phone, MessageSquare, MapPin,
  CheckCircle2, ChevronDown, Award, Hammer, Zap, Quote, Star,
  Building2, Clock, Users
} from 'lucide-react';

/* ── Animated counter ── */
function useCounter(target, duration = 1600) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const e = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(numericTarget * e));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { ref, count };
}

function StatItem({ value, label }) {
  const suffix = value.replace(/[0-9.]/g, '');
  const { ref, count } = useCounter(value);
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.1rem, 5vw, 2.75rem)',
        color: '#ea580c',
        lineHeight: 1,
        letterSpacing: '1px'
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontSize: '0.78rem',
        color: '#475569',
        marginTop: '0.4rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        lineHeight: 1.25
      }}>
        {label}
      </div>
    </div>
  );
}

function getServiceIcon(iconName, size = 20) {
  const color = '#ea580c';
  switch (iconName) {
    case 'Flame': return <Flame size={size} color={color} />;
    case 'Warehouse': return <Warehouse size={size} color={color} />;
    case 'Compass': return <Compass size={size} color={color} />;
    case 'Wrench': return <Wrench size={size} color={color} />;
    case 'Factory': return <Factory size={size} color={color} />;
    case 'ShieldAlert': return <ShieldAlert size={size} color={color} />;
    case 'Sparkles': return <Sparkles size={size} color={color} />;
    case 'Truck': return <Truck size={size} color={color} />;
    default: return <Flame size={size} color={color} />;
  }
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const { openQuote, openProject } = useModal();

  return (
    <div style={{ backgroundColor: '#f8fafc' }}>

      {/* ══════════════════════════════════════
          PROFESSIONAL HERO SECTION
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>

            {/* ── Left: Content ── */}
            <div style={{ animation: 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both' }}>

              {/* Main heading */}
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '0.5px',
                color: '#0f172a',
                marginBottom: '1.1rem'
              }}>
                Heavy Industrial<br />
                <span style={{ color: '#ea580c' }}>Fabrication</span> &<br />
                Demolition Works
              </h1>

              {/* Divider bar */}
              <div style={{
                width: '52px', height: '3px',
                background: 'linear-gradient(90deg, #ea580c, #d97706)',
                borderRadius: '2px',
                marginBottom: '1.25rem'
              }} />

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: '1.7',
                marginBottom: '2rem',
                maxWidth: '540px'
              }}>
                Specialists in <strong style={{ color: '#0f172a' }}>Toll Plaza Demolition & Canopy Steelwork</strong>, Structural Warehouse Sheds, Geodesic Domes, and Custom Steel Fabrication across Pali District and Rajasthan.
              </p>

              {/* CTA buttons */}
              <div className="hero-cta-group">
                <button onClick={openQuote} className="btn-primary" style={{ padding: '0.8rem 1.75rem', fontSize: '1rem' }}>
                  <Zap size={16} />
                  <span>Get Instant Quote</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.contact.phonePrimary}`}
                  className="btn-outline"
                  style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}
                >
                  <Phone size={16} color="#ea580c" />
                  <span>Call: {COMPANY_INFO.contact.phonePrimary}</span>
                </a>
              </div>

              {/* Trust points */}
              <div style={{
                display: 'flex', gap: '1.25rem', flexWrap: 'wrap',
                paddingTop: '1.25rem',
                borderTop: '1px solid #f1f5f9'
              }}>
                {['Toll Plaza Dismantling', 'PEB Structural Sheds', '24×7 Mobile Workshop'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.83rem', color: '#64748b', fontWeight: 600 }}>
                    <CheckCircle2 size={13} color="#ea580c" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* ── Right: Visual Showcase Card ── */}
            <div style={{ animation: 'fadeUp 0.7s 0.15s cubic-bezier(0.22,1,0.36,1) both' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 12px 36px rgba(15,23,42,0.10)',
                backgroundColor: '#ffffff'
              }}>
                {/* Image */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img
                    src="/images/toll_plaza_work.jpg"
                    alt="Toll Plaza Canopy Fabrication"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.8) 100%)'
                  }} />
                  <span style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    background: '#ea580c', color: '#fff',
                    padding: '0.25rem 0.65rem', borderRadius: '4px',
                    fontSize: '0.72rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.5px'
                  }}>
                    ● Live Project
                  </span>
                  <div style={{ position: 'absolute', bottom: '0.85rem', left: '1rem' }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>
                      Toll Plaza Demolition & Steel Canopy
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem', marginTop: '1px' }}>
                      Fast-track execution over active highway lanes
                    </div>
                  </div>
                </div>

                {/* Mini stats inside card */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '0',
                  backgroundColor: '#f8fafc',
                  borderTop: '1px solid #e2e8f0'
                }}>
                  {[
                    { val: '25+', lbl: 'Projects' },
                    { val: '48h', lbl: 'Turnaround' },
                    { val: '100%', lbl: 'Safety' }
                  ].map((s, i) => (
                    <div key={i} style={{
                      textAlign: 'center', padding: '0.9rem 0.5rem',
                      borderRight: i < 2 ? '1px solid #e2e8f0' : 'none'
                    }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#ea580c' }}>{s.val}</div>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>

                {/* Quick contact row */}
                <div style={{
                  padding: '0.9rem 1.1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem',
                  borderTop: '1px solid #f1f5f9'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: '#475569' }}>
                    <MapPin size={13} color="#ea580c" />
                    <span>Mahadev Weld, Bali Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phonePrimary}`}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        fontSize: '0.82rem', fontWeight: 700, color: '#ea580c', textDecoration: 'none'
                      }}
                    >
                      <Phone size={12} />
                      {COMPANY_INFO.contact.phonePrimary}
                    </a>
                    <span style={{ color: '#cbd5e1' }}>|</span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phoneSecondary}`}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        fontSize: '0.82rem', fontWeight: 700, color: '#0284c7', textDecoration: 'none'
                      }}
                    >
                      <Phone size={12} />
                      {COMPANY_INFO.contact.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Below card — industry badges */}
              <div style={{
                display: 'flex', gap: '0.6rem', marginTop: '0.85rem', flexWrap: 'wrap'
              }}>
                {[
                  { icon: <Building2 size={13} color="#0284c7" />, text: '350+ Projects', color: '#eff6ff', border: '#bfdbfe', textColor: '#1d4ed8' },
                  { icon: <Clock size={13} color="#16a34a" />, text: '15+ Years', color: '#f0fdf4', border: '#bbf7d0', textColor: '#15803d' },
                  { icon: <ShieldCheck size={13} color="#9333ea" />, text: '100% Safety', color: '#faf5ff', border: '#e9d5ff', textColor: '#7e22ce' },
                ].map((b, i) => (
                  <div key={i} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: b.color, border: `1px solid ${b.border}`,
                    borderRadius: '6px', padding: '0.3rem 0.75rem',
                    fontSize: '0.75rem', fontWeight: 700, color: b.textColor
                  }}>
                    {b.icon}
                    {b.text}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div className="stats-grid">
            {COMPANY_INFO.stats.map((st, idx) => (
              <div key={idx} className="stat-card">
                <StatItem value={st.value} label={st.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            <span className="section-pill">Our Services</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.75rem',
              marginBottom: '0.6rem',
              lineHeight: 1.1
            }}>
              Specialized <span style={{ color: '#ea580c' }}>Fabrication & Demolition</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.65' }}>
              High-durability structural solutions engineered to meet strict technical specifications.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.25rem'
          }}>
            {SERVICES_LIST.map((serv, idx) => (
              <div
                key={serv.id}
                className="clean-card"
                style={{
                  display: 'flex', flexDirection: 'column',
                  animation: `fadeUp 0.5s ${idx * 0.06}s cubic-bezier(0.22,1,0.36,1) both`
                }}
              >
                {/* Card image */}
                <div style={{ height: '175px', position: 'relative', overflow: 'hidden', borderRadius: '15px 15px 0 0' }}>
                  <img
                    src={serv.image} alt={serv.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, transparent 30%, rgba(15,23,42,0.75) 100%)'
                  }} />
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '7px',
                      background: 'rgba(255,255,255,0.95)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                    }}>
                      {getServiceIcon(serv.icon, 16)}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.65rem', color: '#fb923c', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700, display: 'block' }}>{serv.subtitle}</span>
                      <h3 style={{ fontSize: '1.05rem', color: '#fff', lineHeight: 1.15, fontFamily: 'var(--font-heading)' }}>{serv.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.1rem 1.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '0.9rem' }}>
                    {serv.shortDesc}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem' }}>
                    {serv.features.slice(0, 3).map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.8rem', color: '#64748b' }}>
                        <CheckCircle2 size={12} color="#ea580c" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <Link href={`/services#${serv.id}`} className="btn-outline" style={{ flex: 1, justifyContent: 'center', padding: '0.55rem', fontSize: '0.85rem', textDecoration: 'none' }}>
                      Details
                    </Link>
                    <button onClick={openQuote} className="btn-primary" style={{ padding: '0.55rem 0.9rem', fontSize: '0.85rem' }}>
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TOLL PLAZA SPOTLIGHT
      ══════════════════════════════════════ */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>

            <div>
              <span className="section-pill" style={{ marginBottom: '1rem' }}>
                <ShieldAlert size={13} />
                Highway Operational Safety
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.1,
                marginBottom: '1rem'
              }}>
                High-Hazard <span style={{ color: '#ea580c' }}>Toll Plaza Demolition</span> & Structural Erection
              </h2>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Dismantling heavy steel canopy trusses over operational highway lanes demands absolute timing, torch-cutting skill, and specialized crane rigging. <strong>Mahadev Weld</strong> delivers fast-track execution across Rajasthan highway corridors.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { step: "01", title: "Structural Load Relief & Slings", desc: "Rigging 50-Ton crane slings to support main canopy trusses prior to torch cutting." },
                  { step: "02", title: "Phased Single-Lane Containment", desc: "Coordinated traffic diversions with overhead debris shields to maintain flow." },
                  { step: "03", title: "Oxy-Plasma Sectioning", desc: "High-speed flame slicing and controlled crane lowering of heavy steel members." },
                  { step: "04", title: "48-Hour Highway Clearance", desc: "Rapid gantry removal and full highway clearance for zero traffic disruption." }
                ].map((item, i) => (
                  <div key={i} className="protocol-box">
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem', fontWeight: 800,
                      color: '#ea580c', background: '#fff7ed',
                      border: '1px solid #fed7aa',
                      padding: '0.2rem 0.55rem', borderRadius: '4px',
                      lineHeight: 1
                    }}>
                      {item.step}
                    </span>
                    <div>
                      <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'var(--font-heading)' }}>{item.title}</div>
                      <div style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '2px', lineHeight: '1.4' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button onClick={openQuote} className="btn-primary">
                  <span>Inquire for Toll Plaza Project</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.contact.phonePrimary}`}
                  className="btn-outline"
                >
                  <Phone size={15} color="#ea580c" />
                  <span>Call Emergency Line</span>
                </a>
              </div>
            </div>

            <div>
              <div style={{
                borderRadius: '14px', overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 28px rgba(15,23,42,0.08)'
              }}>
                <img
                  src="/images/demolition_work.jpg"
                  alt="Industrial Demolition Work"
                  style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Safety Compliance Callout */}
              <div style={{
                marginTop: '1.25rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '1.1rem 1.25rem',
                display: 'flex', alignItems: 'center', gap: '0.85rem'
              }}>
                <ShieldCheck size={28} color="#16a34a" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.92rem', fontFamily: 'var(--font-heading)' }}>
                    IS 4014 & OSHA Structural Safety Standards
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                    Strict hot-work permit compliance, fire-watch teams, and full fall-arrest harness rigging on every project site.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EQUIPMENT FLEET & REGIONAL CORRIDORS
      ══════════════════════════════════════ */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            <span className="section-pill">Machinery & Fleet</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.5rem',
              marginBottom: '0.6rem',
              lineHeight: 1.1
            }}>
              Heavy-Duty <span style={{ color: '#ea580c' }}>Equipment & Regional Fleet</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.65' }}>
              Equipped with self-powered machinery ready for instant site deployment across Rajasthan.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}>
            {EQUIPMENT_FLEET.map((eq, idx) => (
              <div key={idx} className="spec-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', fontFamily: 'var(--font-heading)' }}>
                    {eq.name}
                  </div>
                  <span className="tech-badge tech-badge-flame" style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem' }}>
                    {eq.badge}
                  </span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.5' }}>
                  {eq.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Regional Corridors Grid */}
          <div style={{
            backgroundColor: '#0f172a',
            borderRadius: '12px',
            padding: '2.2rem',
            color: '#f8fafc'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ color: '#fb923c', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, fontSize: '0.78rem', fontFamily: 'var(--font-heading)' }}>
                  On-Site Deployment Corridors
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.3rem' }}>
                  Serving All Major Industrial Hubs & Highways Across Rajasthan
                </h3>
              </div>
              <button onClick={openQuote} className="btn-primary" style={{ padding: '0.65rem 1.3rem', fontSize: '0.9rem' }}>
                <Truck size={15} />
                <span>Dispatch Mobile Crew</span>
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {REGIONAL_CORRIDORS.map((c, i) => (
                <div key={i} style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '6px',
                  padding: '0.9rem'
                }}>
                  <div style={{ color: '#ea580c', fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                    {c.area}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.78rem', lineHeight: '1.4' }}>
                    {c.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem'
          }}>
            <div>
              <span className="section-pill">Portfolio</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                color: '#0f172a',
                marginTop: '0.6rem',
                lineHeight: 1.1
              }}>
                Featured <span style={{ color: '#ea580c' }}>Project Showcase</span>
              </h2>
            </div>
            <Link href="/projects" className="btn-secondary" style={{ padding: '0.65rem 1.3rem', fontSize: '0.9rem', textDecoration: 'none' }}>
              <span>All Projects ({PROJECTS_GALLERY.length})</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.25rem'
          }}>
            {PROJECTS_GALLERY.slice(0, 3).map((proj, idx) => (
              <div
                key={proj.id}
                className="clean-card"
                onClick={() => openProject(proj)}
                style={{ cursor: 'pointer', animation: `fadeUp 0.5s ${idx * 0.08}s cubic-bezier(0.22,1,0.36,1) both` }}
              >
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden', borderRadius: '15px 15px 0 0' }}>
                  <img
                    src={proj.image} alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.7) 100%)' }} />
                  <span style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    backgroundColor: '#ffffff', color: '#ea580c',
                    border: '1px solid #fed7aa',
                    padding: '0.25rem 0.65rem', borderRadius: '4px',
                    fontSize: '0.72rem', fontWeight: 700
                  }}>
                    {proj.category}
                  </span>
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', right: '0.75rem', display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <span key={i} style={{
                        background: 'rgba(255,255,255,0.9)', color: '#334155',
                        padding: '0.18rem 0.5rem', borderRadius: '4px',
                        fontSize: '0.67rem', fontWeight: 600
                      }}>{h}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '1.1rem 1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#94a3b8', fontSize: '0.78rem', marginBottom: '0.4rem' }}>
                    <MapPin size={12} color="#ea580c" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                    {proj.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.83rem', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                    {proj.description.slice(0, 88)}...
                  </p>
                  <span style={{ color: '#ea580c', fontSize: '0.83rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    View Specifications <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-pill">Testimonials</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.75rem'
            }}>
              What Our <span style={{ color: '#ea580c' }}>Clients Say</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.5rem',
                transition: 'all 0.25s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#fed7aa'; e.currentTarget.style.background = '#fffbf7'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8fafc'; }}
              >
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.75rem' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} color="#f59e0b" fill="#f59e0b" />)}
                </div>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.65', marginBottom: '1.1rem', fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.85rem' }}>
                  <div style={{ color: '#0f172a', fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>{t.name}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>{t.role} · {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-pill">Questions</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.75rem'
            }}>
              Frequently Asked <span style={{ color: '#ea580c' }}>Questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: isOpen ? '#fff7ed' : '#ffffff',
                    border: isOpen ? '1px solid #fed7aa' : '1px solid #e2e8f0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    style={{
                      width: '100%', padding: '1rem 1.25rem',
                      background: 'none', border: 'none',
                      color: isOpen ? '#ea580c' : '#0f172a',
                      fontSize: '0.97rem', fontFamily: 'var(--font-heading)', fontWeight: 700,
                      textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      cursor: 'pointer', transition: 'color 0.2s'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} color={isOpen ? '#ea580c' : '#94a3b8'}
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.28s ease', flexShrink: 0 }} />
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: '0 1.25rem 1rem 1.25rem',
                      color: '#475569', fontSize: '0.9rem', lineHeight: '1.65',
                      borderTop: '1px solid #fed7aa',
                      paddingTop: '0.85rem',
                      animation: 'fadeIn 0.2s ease'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: '#0f172a',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            color: '#fb923c', fontSize: '0.8rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '1.5px',
            marginBottom: '1rem'
          }}>
            <Zap size={14} />
            <span>Get Started Today</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800, color: '#f1f5f9',
            lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '0.5px'
          }}>
            Need Professional Fabrication or Demolition Services?
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.97rem', marginBottom: '2rem', lineHeight: '1.65' }}>
            Contact our engineering team at Khudala, Rajasthan for site inspection, structural drawing evaluation, and an accurate quote.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={openQuote} className="btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              <Zap size={17} />
              <span>Request Quote Now</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.contact.phonePrimary}`}
              className="btn-outline"
              style={{ padding: '0.9rem 1.6rem', fontSize: '0.95rem', color: '#e2e8f0', borderColor: '#334155' }}
            >
              <Phone size={16} color="#ea580c" />
              <span>Call: {COMPANY_INFO.contact.phonePrimary}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.contact.phoneSecondary}`}
              className="btn-outline"
              style={{ padding: '0.9rem 1.6rem', fontSize: '0.95rem', color: '#e2e8f0', borderColor: '#334155' }}
            >
              <Phone size={16} color="#38bdf8" />
              <span>Call: {COMPANY_INFO.contact.phoneSecondary}</span>
            </a>
          </div>

          <div style={{
            marginTop: '2rem', paddingTop: '1.5rem',
            borderTop: '1px solid #1e293b',
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem',
            color: '#475569', fontSize: '0.8rem'
          }}>
            <MapPin size={13} color="#ea580c" />
            Mahadev Weld, Bali Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
