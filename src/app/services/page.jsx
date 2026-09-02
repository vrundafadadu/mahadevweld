'use client';

import React, { useState, useEffect } from 'react';
import { SERVICES_LIST } from '../../data/companyData';
import { useModal } from '../../context/ModalContext';
import { Flame, CheckCircle2, ArrowRight, Wrench, Warehouse, Compass, Factory, ShieldAlert, Sparkles, Truck, Zap } from 'lucide-react';

function getIcon(name, size = 18) {
  const color = '#ea580c';
  switch (name) {
    case 'Flame':       return <Flame size={size} color={color} />;
    case 'Warehouse':   return <Warehouse size={size} color={color} />;
    case 'Compass':     return <Compass size={size} color={color} />;
    case 'Wrench':      return <Wrench size={size} color={color} />;
    case 'Factory':     return <Factory size={size} color={color} />;
    case 'ShieldAlert': return <ShieldAlert size={size} color={color} />;
    case 'Sparkles':    return <Sparkles size={size} color={color} />;
    case 'Truck':       return <Truck size={size} color={color} />;
    default:            return <Flame size={size} color={color} />;
  }
}

export default function ServicesPage() {
  const [selectedTab, setSelectedTab] = useState(SERVICES_LIST[0].id);
  const { openQuote } = useModal();

  useEffect(() => {
    // If there is a hash like #demolition-work in URL, switch to that tab
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (SERVICES_LIST.some(s => s.id === hash)) {
        setSelectedTab(hash);
      }
    }
  }, []);

  const activeService = SERVICES_LIST.find(s => s.id === selectedTab) || SERVICES_LIST[0];

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#0f172a', paddingBottom: '4rem' }}>

      {/* ── BANNER ── */}
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
            <Wrench size={13} />
            Comprehensive Capabilities
          </span>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '0.85rem',
            lineHeight: 1.08
          }}>
            Our Professional <span style={{ color: '#ea580c' }}>Services</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '640px', margin: '0 auto', lineHeight: '1.65' }}>
            Specializing in demolition work, industrial fabrication, structural sheds, domes, toll plazas, and customized metal works in Rajasthan.
          </p>
        </div>
      </section>

      {/* ── SERVICE SELECTOR + DETAIL ── */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '1.75rem',
            alignItems: 'start'
          }} className="services-grid">

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '110px', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '0.6rem', paddingLeft: '0.4rem' }}>
                Select Service
              </div>
              {SERVICES_LIST.map(s => {
                const isActive = s.id === selectedTab;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedTab(s.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.65rem',
                      background: isActive ? '#fff7ed' : 'transparent',
                      border: isActive ? '1px solid #fed7aa' : '1px solid transparent',
                      color: isActive ? '#ea580c' : '#475569',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 700 : 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.background = '#f8fafc'; } }}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent'; } }}
                  >
                    {isActive && (
                      <span style={{
                        position: 'absolute', left: 0, top: '15%', bottom: '15%',
                        width: '3px',
                        background: 'linear-gradient(180deg, #ea580c, #d97706)',
                        borderRadius: '2px'
                      }} />
                    )}
                    <span style={{
                      width: '28px', height: '28px',
                      borderRadius: '6px',
                      background: isActive ? '#fff7ed' : '#f1f5f9',
                      border: `1px solid ${isActive ? '#fed7aa' : '#e2e8f0'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {getIcon(s.icon, 14)}
                    </span>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.9rem' }}>{s.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Detail card */}
            <div key={activeService.id} style={{ animation: 'fadeIn 0.25s ease' }}>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(15,23,42,0.06)'
              }}>

                {/* Image */}
                <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.85) 100%)'
                  }} />
                  <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', right: '1.5rem' }}>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      color: '#ea580c',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.5rem'
                    }}>
                      {activeService.subtitle}
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', fontWeight: 800, lineHeight: 1.1 }}>
                      {activeService.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                    {activeService.detailedDescription}
                  </p>

                  <h4 style={{ fontFamily: 'var(--font-heading)', color: '#0f172a', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '1rem' }}>
                    Key Capabilities
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem', marginBottom: '2rem' }}>
                    {activeService.features.map((feat, idx) => (
                      <div key={idx} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                        fontSize: '0.85rem', color: '#334155',
                        padding: '0.65rem 0.9rem',
                        background: '#f8fafc', border: '1px solid #e2e8f0',
                        borderRadius: '7px', transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#fed7aa'; e.currentTarget.style.background = '#fff7ed'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8fafc'; }}
                      >
                        <CheckCircle2 size={13} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-heading)', color: '#0f172a', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '1rem' }}>
                    Technical Specifications
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                    {activeService.specs.map((sp, idx) => (
                      <div key={idx} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                        flexWrap: 'wrap', gap: '0.5rem',
                        padding: '0.85rem 1.1rem',
                        background: idx % 2 === 0 ? '#f8fafc' : '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '7px', fontSize: '0.88rem',
                        transition: 'border-color 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#fed7aa'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                      >
                        <span style={{ color: '#64748b', fontWeight: 600 }}>{sp.key}</span>
                        <span style={{ color: '#0f172a', fontWeight: 700, textAlign: 'right', maxWidth: '60%' }}>{sp.val}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={openQuote}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '1rem' }}
                  >
                    <Zap size={16} />
                    <span>Request Quote for {activeService.title}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ALL SERVICES QUICK GRID ── */}
      <section style={{
        padding: '3.5rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
              All <span style={{ color: '#ea580c' }}>8 Core Services</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {SERVICES_LIST.map(s => (
              <div
                key={s.id}
                onClick={() => { setSelectedTab(s.id); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                style={{
                  backgroundColor: s.id === selectedTab ? '#fff7ed' : '#f8fafc',
                  border: s.id === selectedTab ? '1px solid #fed7aa' : '1px solid #e2e8f0',
                  borderRadius: '11px',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => { if (s.id !== selectedTab) { e.currentTarget.style.borderColor = '#fed7aa'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                onMouseLeave={e => { if (s.id !== selectedTab) { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)'; } }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
                  <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', padding: '0.45rem', borderRadius: '7px' }}>
                    {getIcon(s.icon)}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: '#0f172a', fontWeight: 700 }}>{s.title}</h3>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: '1.5' }}>{s.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @media (max-width: 860px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid > div:first-child {
            position: static !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
