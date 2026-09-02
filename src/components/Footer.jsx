'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { useModal } from '../context/ModalContext';
import { Flame, MapPin, Phone, Clock, ArrowUpRight, Zap } from 'lucide-react';

export default function Footer() {
  const { openQuote } = useModal();

  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: '#94a3b8',
      borderTop: '1px solid #1e293b'
    }}>

      {/* ── CTA Strip ── */}
      <div className="footer-cta-strip">
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}>
          <div>
            <p style={{ color: '#64748b', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '0.25rem' }}>
              Ready to Start?
            </p>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              color: '#f1f5f9', fontWeight: 800, lineHeight: 1.1
            }}>
              Get a Free Project Quote Today
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            <button onClick={openQuote} className="btn-primary" style={{ padding: '0.6rem 1.3rem', fontSize: '0.9rem' }}>
              <Zap size={14} />
              <span>Request Quote</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.contact.phonePrimary}`}
              className="btn-outline"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', color: '#e2e8f0', borderColor: '#334155' }}
            >
              <Phone size={14} color="#ea580c" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="container footer-container" style={{ paddingTop: '2.5rem', paddingBottom: '0.5rem' }}>
        <div className="footer-main-grid">

          {/* Brand */}
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '34px', height: '34px',
                borderRadius: '7px',
                background: 'linear-gradient(135deg, #ea580c, #c2410c)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 3px 10px rgba(234,88,12,0.4)',
                flexShrink: 0
              }}>
                <Flame size={18} color="#fff" />
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#f1f5f9', letterSpacing: '0.5px' }}>
                MAHADEV <span style={{ color: '#f97316' }}>WELD</span>
              </div>
            </div>
            <p className="footer-brand-desc" style={{ fontSize: '0.83rem', lineHeight: '1.6', marginBottom: '0.5rem', color: '#64748b' }}>
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontSize: '0.72rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {SERVICES_LIST.slice(0, 5).map(serv => (
                <li key={serv.id}>
                  <Link
                    href={`/services#${serv.id}`}
                    style={{
                      color: '#64748b', textDecoration: 'none',
                      fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      textAlign: 'left', transition: 'color 0.2s', padding: '0.05rem 0'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                  >
                    <ArrowUpRight size={11} color="#ea580c" />
                    {serv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontSize: '0.72rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Projects Gallery', href: '/projects' },
                { label: 'Contact Us', href: '/contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: '#64748b', textDecoration: 'none',
                      fontSize: '0.82rem', transition: 'color 0.2s', padding: '0.05rem 0'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-col">
            <h4 style={{ color: '#f1f5f9', fontSize: '0.72rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>
              Workshop Location
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', gap: '0.45rem', color: '#94a3b8' }}>
                <MapPin size={14} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: '1.4' }}>Mahadev Weld, Bali Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <a href={`tel:${COMPANY_INFO.contact.phonePrimary}`}
                  style={{ display: 'flex', gap: '0.45rem', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  <Phone size={14} color="#ea580c" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: '#e2e8f0' }}>{COMPANY_INFO.contact.phonePrimary}</span>
                </a>
                <a href={`tel:${COMPANY_INFO.contact.phoneSecondary}`}
                  style={{ display: 'flex', gap: '0.45rem', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  <Phone size={14} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: '#e2e8f0' }}>{COMPANY_INFO.contact.phoneSecondary}</span>
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.45rem', color: '#64748b' }}>
                <Clock size={14} color="#f59e0b" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.78rem' }}>Mon–Sat: 8:00 AM – 8:00 PM (24/7 Highway Emergency)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-copyright" style={{
          borderTop: '1px solid #1e293b',
          paddingTop: '1.2rem', paddingBottom: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.6rem', fontSize: '0.75rem'
        }}>
          <div style={{ color: '#475569' }}>
            © {new Date().getFullYear()} <strong style={{ color: '#94a3b8' }}>Mahadev Weld</strong>. Demolition · Sheds · Domes · Toll Plazas
          </div>
          <div style={{ color: '#334155', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Flame size={10} color="#ea580c" />
            Bali Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116
          </div>
        </div>

      </div>

    </footer>
  );
}
