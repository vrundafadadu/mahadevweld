'use client';

import React from 'react';
import { X, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '850px' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header Visual */}
        <div style={{
          position: 'relative',
          height: '280px',
          overflow: 'hidden',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px'
        }}>
          <img 
            src={project.image} 
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.85) 100%)'
          }} />

          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <X size={20} />
          </button>

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
            <span style={{
              backgroundColor: '#ea580c',
              color: '#ffffff',
              padding: '0.25rem 0.65rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'inline-block',
              marginBottom: '0.5rem'
            }}>
              {project.category}
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#ffffff', fontFamily: 'var(--font-heading)', marginTop: '0.2rem' }}>
              {project.title}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f1f5f9', fontSize: '0.95rem', marginTop: '0.3rem' }}>
              <MapPin size={16} color="#fbbf24" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Details Body */}
        <div style={{ padding: '1.75rem', backgroundColor: '#ffffff' }}>
          <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            {project.description}
          </p>

          <h4 style={{ color: '#0f172a', fontSize: '1.15rem', fontFamily: 'var(--font-heading)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Key Engineering Highlights
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {project.highlights?.map((hl, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <CheckCircle size={18} color="#ea580c" style={{ flexShrink: 0 }} />
                <span style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 600 }}>{hl}</span>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Need similar fabrication or demolition?</span>
              <div style={{ color: '#0f172a', fontWeight: 700 }}>Talk directly with Mahadev Weld engineers</div>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${COMPANY_INFO.contact.phonePrimary}`}
                className="btn-outline"
                style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}
              >
                Call: {COMPANY_INFO.contact.phonePrimary}
              </a>
              <a
                href={`tel:${COMPANY_INFO.contact.phoneSecondary}`}
                className="btn-outline"
                style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}
              >
                Call: {COMPANY_INFO.contact.phoneSecondary}
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="btn-primary"
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
              >
                Request Estimate
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
