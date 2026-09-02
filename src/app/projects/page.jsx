'use client';

import React, { useState } from 'react';
import { PROJECTS_GALLERY } from '../../data/companyData';
import { useModal } from '../../context/ModalContext';
import { MapPin, ArrowRight, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const { openQuote, openProject } = useModal();

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'toll-plaza', label: 'Toll Plaza Work' },
    { id: 'sheds', label: 'Structural Sheds' },
    { id: 'domes', label: 'Dome Fabrication' },
    { id: 'demolition', label: 'Demolition Work' },
    { id: 'custom', label: 'Custom Metal' }
  ];

  const filteredProjects = filter === 'all'
    ? PROJECTS_GALLERY
    : PROJECTS_GALLERY.filter(p => p.catKey === filter);

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#0f172a', paddingBottom: '6rem' }}>
      
      {/* BANNER */}
      <section style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '4rem 0 3rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-pill" style={{ marginBottom: '0.8rem' }}>
            <Filter size={16} />
            Proven Execution Track Record
          </span>
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>
            Projects & <span style={{ color: '#ea580c' }}>Portfolio</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Explore our completed toll plaza demolitions, structural warehouse sheds, architectural geodesic metal domes, and customized heavy steel installations.
          </p>
        </div>
      </section>

      {/* FILTER TABS & GALLERY */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          
          {/* Category Filter Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  style={{
                    background: isActive ? '#ea580c' : '#ffffff',
                    color: isActive ? '#ffffff' : '#0f172a',
                    border: isActive ? 'none' : '1px solid #cbd5e1',
                    padding: '0.65rem 1.4rem',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 4px 14px rgba(234, 88, 12, 0.25)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProjects.map((proj) => (
              <div 
                key={proj.id} 
                className="clean-card"
                onClick={() => openProject(proj)}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: '230px', position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.75) 100%)'
                  }} />
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: '#ffffff',
                    color: '#ea580c',
                    border: '1px solid #fed7aa',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    {proj.category}
                  </span>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', backgroundColor: '#ffffff' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                      <MapPin size={14} color="#ea580c" />
                      <span>{proj.location}</span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                      {proj.title}
                    </h3>

                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                      {proj.highlights?.map((hl, idx) => (
                        <span key={idx} style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          color: '#475569',
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          fontWeight: 600
                        }}>
                          {hl}
                        </span>
                      ))}
                    </div>

                    <div style={{ color: '#ea580c', fontSize: '0.9rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span>View Specifications & Case Study</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div style={{
            marginTop: '4rem',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2.5rem',
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Have a Custom Steel Project or Demolition Requirement?
            </h3>
            <p style={{ color: '#475569', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
              We custom engineer solution blueprints tailored to your budget, structural load drawings, and tight site delivery timelines.
            </p>
            <button onClick={openQuote} className="btn-primary">
              <span>Request Custom Proposal</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
