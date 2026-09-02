'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '../../data/companyData';
import { useModal } from '../../context/ModalContext';
import { Flame, ShieldCheck, MapPin, Truck, Wrench, Hammer, Phone, ArrowRight, Award } from 'lucide-react';

export default function AboutPage() {
  const { openQuote } = useModal();

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#0f172a', paddingBottom: '4rem' }}>

      {/* ── HEADER BANNER ── */}
      <section style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '3.5rem 0 2.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-pill" style={{ marginBottom: '0.85rem' }}>
            <Flame size={13} />
            Who We Are
          </span>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '0.85rem',
            lineHeight: 1.08
          }}>
            About <span style={{ color: '#ea580c' }}>Mahadev Weld</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '660px', margin: '0 auto', lineHeight: '1.65' }}>
            A trusted name in heavy industrial welding, demolition work, structural shed fabrication, geodesic domes, and highway toll plaza installations across Rajasthan.
          </p>
        </div>
      </section>

      {/* ── STORY & MISSION ── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>

            <div>
              <span className="section-pill" style={{ marginBottom: '1rem' }}>Our Story</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '1rem',
                lineHeight: 1.1
              }}>
                Delivering High-Strength Structural Solutions & Safe Controlled Demolition
              </h2>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                Established with a vision for engineering excellence, <strong>Mahadev Weld</strong> operates from Bali–Falna Road in Khudala, Rajasthan. We have built an enviable reputation for handling high-complexity fabrication and high-risk commercial demolition projects.
              </p>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Our experienced team has successfully executed multiple <strong>Toll Plaza canopy dismantlings and rebuilds</strong> along major highway corridors where safety, fast execution, and strict alignment are paramount.
              </p>

              {/* Mini stat cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                {[
                  { val: '15+ Years', sub: 'Field Demolition & Fabrication Experience', color: '#ea580c' },
                  { val: '100% Zero', sub: 'Accident Safety Track Record', color: '#0284c7' },
                ].map((s, i) => (
                  <div key={i} style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    padding: '1.1rem',
                    borderRadius: '11px',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)'
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem', fontWeight: 800,
                      color: s.color, lineHeight: 1
                    }}>{s.val}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.3rem', lineHeight: '1.4' }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{
                borderRadius: '14px', overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 28px rgba(15,23,42,0.08)'
              }}>
                <div style={{ position: 'relative', height: '320px' }}>
                  <img
                    src="/images/hero_welding.jpg"
                    alt="Mahadev Weld Workshop & Team"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.85) 100%)'
                  }} />
                  <div style={{ position: 'absolute', bottom: '1.1rem', left: '1.1rem', right: '1.1rem' }}>
                    <div style={{
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem'
                    }}>
                      <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.92rem', fontFamily: 'var(--font-heading)' }}>
                        Mahadev Weld Engineering Base
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '2px' }}>
                        Mahadev Weld, Bali Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE EXPERTISE ── */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            <span className="section-pill">Specialization</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.75rem',
              lineHeight: 1.1
            }}>
              Our Key Areas of <span style={{ color: '#ea580c' }}>Mastery</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {[
              {
                icon: <ShieldCheck size={24} color="#ea580c" />,
                bg: '#fff7ed', border: '#fed7aa',
                title: 'Demolition Work',
                desc: 'Controlled dismantling of commercial steel buildings, old toll plaza canopies, factory structures, and heavy industrial plant equipment with zero-accident safety records.'
              },
              {
                icon: <Truck size={24} color="#0284c7" />,
                bg: '#eff6ff', border: '#bfdbfe',
                title: 'Toll Plaza Canopy Projects',
                desc: 'High-altitude structural canopy fabrication, gantry erection, booth framing, and live-highway lane clearing across national & state highways.'
              },
              {
                icon: <Hammer size={24} color="#d97706" />,
                bg: '#fefce8', border: '#fde68a',
                title: 'Structural Sheds & Domes',
                desc: 'Engineering heavy warehouse roofs up to 60m clear span, PEB frames, geodesic metal domes, and decorative architectural steel cupolas.'
              },
            ].map((c, i) => (
              <div key={i} style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '13px',
                padding: '1.75rem',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#fed7aa'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(15,23,42,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: '46px', height: '46px', borderRadius: '10px',
                  background: c.bg, border: `1px solid ${c.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.1rem'
                }}>
                  {c.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.6rem', fontWeight: 700 }}>
                  {c.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINEERING STANDARDS & SAFETY CERTIFICATION ── */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            <span className="section-pill">Quality & Standards</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.75rem',
              lineHeight: 1.1
            }}>
              Certified <span style={{ color: '#ea580c' }}>Safety & Weld Integrity</span> Protocols
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {[
              { title: "IS 2062 Certified Steel", desc: "Using prime structural steel with verified test certificates from Tata Structura and Jindal Steel for zero structural fatigue." },
              { title: "IS 4014 Controlled Demolition", desc: "Engineered load-relief protocol and crane rigging before torch-cutting any operational structural column or canopy truss." },
              { title: "100% PPE & Fall Arrest", desc: "Double-lanyard safety harnesses, fire-watch crews, and overhead debris netting strictly enforced on live highway zones." },
              { title: "Ultrasonic & DP Testing", desc: "Dye-penetrant (DP) testing and visual joint inspection guaranteeing 100% weld penetration without porosity." }
            ].map((std, i) => (
              <div key={i} className="spec-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ea580c', fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  <ShieldCheck size={18} color="#ea580c" />
                  <span>{std.title}</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION CTA ── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '2.5rem',
            boxShadow: '0 4px 16px rgba(15,23,42,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.75rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Left accent bar */}
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
              background: 'linear-gradient(180deg, #ea580c, #d97706)'
            }} />

            <div style={{ paddingLeft: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ea580c', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                <MapPin size={14} />
                Strategic Rajasthan Base
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#0f172a', fontWeight: 800, marginBottom: '0.4rem' }}>
                Mahadev Weld, Bali Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.6', maxWidth: '580px' }}>
                Positioned on Bali Falna Road, near Devshri Hotel and Santosh Dhaba in Khudala 306116. Prompt mobilization to Pali, Jodhpur, Udaipur, Sirohi, Sumerpur & industrial corridors.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-outline" style={{ textDecoration: 'none' }}>
                <MapPin size={15} />
                <span>View Map & Contact</span>
              </Link>
              <button onClick={openQuote} className="btn-primary">
                <span>Request Proposal</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
