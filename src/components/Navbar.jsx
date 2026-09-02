'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_INFO } from '../data/companyData';
import { useModal } from '../context/ModalContext';
import { 
  Flame, Phone, MapPin, Menu, X, ChevronRight, ShieldCheck, Zap
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuote } = useModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/',         label: 'Home' },
    { href: '/about',    label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact',  label: 'Contact' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 900 }}>

      {/* ── Top Info Bar ── */}
      <div className="top-info-bar" style={{
        backgroundColor: '#0f172a',
        color: '#94a3b8',
        padding: '0.3rem 0',
        fontSize: '0.78rem',
        borderBottom: '1px solid #1e293b'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.4rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={11} color="#ea580c" />
              Bali Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={11} color="#22d3ee" />
              Toll Plaza & Demolition Specialists
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <a
              href={`tel:${COMPANY_INFO.contact.phonePrimary}`}
              style={{ color: '#e2e8f0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
              onMouseLeave={e => e.currentTarget.style.color = '#e2e8f0'}
            >
              <Phone size={11} color="#ea580c" />
              {COMPANY_INFO.contact.phonePrimary}
            </a>
            <a
              href={`tel:${COMPANY_INFO.contact.phoneSecondary}`}
              style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
            >
              <Phone size={11} color="#38bdf8" />
              {COMPANY_INFO.contact.phoneSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: isScrolled ? '1px solid #e2e8f0' : '1px solid #f1f5f9',
        boxShadow: isScrolled ? '0 2px 16px rgba(15,23,42,0.08)' : 'none',
        padding: isScrolled ? '0.6rem 0' : '0.75rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Brand */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', minWidth: 0 }}
          >
            <div style={{
              width: '36px', height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #ea580c, #c2410c)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(234,88,12,0.3)',
              flexShrink: 0
            }}>
              <Flame size={19} color="#fff" />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.3rem, 4vw, 1.55rem)',
                fontWeight: 800,
                lineHeight: 1,
                color: '#0f172a',
                letterSpacing: '0.5px',
                whiteSpace: 'nowrap'
              }}>
                MAHADEV <span style={{ color: '#ea580c' }}>WELD</span>
              </div>
              <div className="navbar-brand-subtitle">
                Demolition · Fabrication · Steel Works
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="desktop-nav" style={{ display: 'none', gap: '0.1rem', alignItems: 'center' }}>
            {navItems.map(item => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    position: 'relative',
                    background: isActive ? '#fff7ed' : 'transparent',
                    color: isActive ? '#ea580c' : '#475569',
                    padding: '0.5rem 0.85rem',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap',
                    display: 'inline-block'
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.background = '#f8fafc'; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent'; } }}
                >
                  {item.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '2px', left: '0.85rem', right: '0.85rem',
                      height: '2px',
                      background: 'linear-gradient(90deg, #ea580c, #d97706)',
                      borderRadius: '1px',
                      animation: 'fadeIn 0.2s ease'
                    }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <button
              onClick={openQuote}
              className="btn-primary nav-cta-desktop"
              style={{ padding: '0.5rem 1rem', fontSize: '0.88rem', whiteSpace: 'nowrap' }}
            >
              <Zap size={14} />
              <span>Get Quote</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                color: '#334155',
                width: '38px', height: '38px',
                borderRadius: '7px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                flexShrink: 0
              }}
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #f1f5f9',
            padding: '0.75rem 1.5rem 1.25rem',
            display: 'flex', flexDirection: 'column', gap: '0.35rem',
            animation: 'fadeDown 0.2s ease'
          }}>
            {navItems.map(item => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: isActive ? '#fff7ed' : '#f8fafc',
                    border: isActive ? '1px solid #fed7aa' : '1px solid #f1f5f9',
                    color: isActive ? '#ea580c' : '#334155',
                    padding: '0.7rem 1rem',
                    borderRadius: '7px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={15} />
                </Link>
              );
            })}
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={`tel:${COMPANY_INFO.contact.phonePrimary}`}
                  className="btn-outline"
                  style={{ flex: 1, justifyContent: 'center', padding: '0.6rem 0.4rem', fontSize: '0.82rem', gap: '0.35rem' }}
                >
                  <Phone size={13} color="#ea580c" />
                  <span>{COMPANY_INFO.contact.phonePrimary}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneSecondary}`}
                  className="btn-outline"
                  style={{ flex: 1, justifyContent: 'center', padding: '0.6rem 0.4rem', fontSize: '0.82rem', gap: '0.35rem' }}
                >
                  <Phone size={13} color="#0284c7" />
                  <span>{COMPANY_INFO.contact.phoneSecondary}</span>
                </a>
              </div>
              <button
                onClick={() => { openQuote(); setMobileMenuOpen(false); }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', fontSize: '0.9rem' }}
              >
                <Zap size={14} />
                <span>Get Instant Quote</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </header>
  );
}
