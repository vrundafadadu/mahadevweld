'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TESTIMONIALS } from '../data/companyData';
import { useModal } from '../context/ModalContext';
import {
  Phone, Zap, CheckCircle2, ChevronDown, MapPin,
  ShieldCheck, Wrench, Factory, Warehouse, Compass,
  Flame, Truck, ArrowRight, Star, Hammer,
  ShieldAlert
} from 'lucide-react';

export default function HomeView() {
  const [openFaq, setOpenFaq] = useState(0);
  const { openQuote } = useModal();

  const servicesTable = [
    {
      service: 'Demolition & dismantling',
      covers: 'Controlled cutting and removal of steel structures',
      used: 'Old factories, toll plazas, plant equipment',
      icon: <Hammer size={18} color="#ea580c" />
    },
    {
      service: 'PEB & industrial sheds',
      covers: 'Columns, trusses, purlins, roof frames',
      used: 'Warehouses, factories, godowns',
      icon: <Warehouse size={18} color="#ea580c" />
    },
    {
      service: 'Geodesic & steel domes',
      covers: 'Roll-bent sections, precise pipe jointing',
      used: 'Temples, atriums, commercial buildings',
      icon: <Compass size={18} color="#ea580c" />
    },
    {
      service: 'Welding',
      covers: 'MIG, TIG and arc welding',
      used: 'Beams, pipes, structural plates',
      icon: <Flame size={18} color="#ea580c" />
    },
    {
      service: 'Industrial fabrication',
      covers: 'Platforms, hoppers, silos, conveyor frames',
      used: 'Plants, mills, processing units',
      icon: <Factory size={18} color="#ea580c" />
    },
    {
      service: 'On-site service',
      covers: 'Mobile welding crews and erection',
      used: 'Remote sites, emergency repairs',
      icon: <Truck size={18} color="#ea580c" />
    }
  ];

  const serviceCapabilities = [
    {
      title: 'Steel Structure Dismantling Contractor',
      desc: 'Old steel buildings cannot simply be pulled down. Our team plans each cut, supports the load with slings, and removes members in a safe sequence using oxy-fuel and plasma cutting. We clear factory buildings, old sheds and heavy plant equipment, and hand the site back ready for the next stage.',
      items: [
        'Factory and industrial building clearing',
        'Steel structure oxy and plasma cutting',
        'Toll plaza structural dismantling'
      ],
      icon: <Hammer size={22} color="#ea580c" />,
      badge: 'Controlled Dismantling'
    },
    {
      title: 'PEB Shed Manufacturer in Rajasthan',
      desc: 'We design, fabricate and erect pre-engineered building (PEB) sheds for factories, warehouses and storage yards. Columns, heavy trusses and purlins are built to handle Rajasthan’s strong winds and heat, so the shed stays stable season after season.',
      icon: <Warehouse size={22} color="#ea580c" />,
      badge: 'Clear Span Sheds'
    },
    {
      title: 'Geodesic Dome Manufacturer in India',
      desc: 'Domes need accuracy that ordinary fabrication does not. We roll-bend steel sections on CNC benders and join them with careful pipe jointing to form geodesic and spherical frames. Our domes are used for temple roofs, commercial atriums and architectural skylights.',
      icon: <Compass size={22} color="#ea580c" />,
      badge: 'CNC Precision Curves'
    },
    {
      title: 'Industrial Welding Services',
      desc: 'Strong joints decide whether a structure lasts. Our certified welders work with MIG, TIG and shielded metal arc processes on beams, pipes and thick plates, including bevelling and high-pressure pipe work.',
      icon: <Flame size={22} color="#ea580c" />,
      badge: 'MIG / TIG / ARC'
    },
    {
      title: 'Heavy Industrial Fabrication Works',
      desc: 'Plants need steel that carries real loads every day. We build machinery base frames, pipe racks, walkways, catwalks, handrails, storage silos, hoppers and conveyor frames, made to your drawings.',
      icon: <Factory size={22} color="#ea580c" />,
      badge: 'Plant Steelwork'
    },
    {
      title: 'Toll Plaza Demolition Contractor',
      desc: 'Toll plazas are among our most frequent jobs. We dismantle old canopies and booths, and also fabricate new canopy steelwork, booth framing and height barrier gantries. Our experience here is what many highway project managers call us for first.',
      icon: <ShieldAlert size={22} color="#ea580c" />,
      badge: 'Live Highway Operations'
    },
    {
      title: 'Structural Steel Fabrication & Custom Steelwork',
      desc: 'Not every project is industrial. We also make commercial gates, rolling shutters, spiral and straight staircases, heavy railings and decorative facade screens, all finished to match the building.',
      icon: <Wrench size={22} color="#ea580c" />,
      badge: 'Architectural & Custom'
    },
    {
      title: 'On-Site Welding Service & Installation',
      desc: 'When the structure cannot come to the workshop, we go to it. Our mobile units carry their own generator and welding machines, so work continues on remote highways and construction sites. We also handle high-altitude erection and emergency repairs.',
      icon: <Truck size={22} color="#ea580c" />,
      badge: '24×7 Mobile Vans'
    }
  ];

  const tollPlazaSteps = [
    {
      number: '01',
      step: 'Load Relief & Crane Slinging',
      happens: '50-ton crane slings support the main trusses before any cutting',
      matters: 'Prevents sudden movement or collapse'
    },
    {
      number: '02',
      step: 'Phased Single-Lane Containment',
      happens: 'Traffic is diverted in phases with overhead debris shields',
      matters: 'Keeps the highway open and safe'
    },
    {
      number: '03',
      step: 'Oxy-Plasma Steel Sectioning',
      happens: 'Members are cut and lowered under crane control',
      matters: 'Fast, clean and controlled removal'
    },
    {
      number: '04',
      step: '48-Hour Highway Clearance',
      happens: 'Gantry removed and the road cleared',
      matters: 'Minimal disruption for commuters'
    }
  ];

  const equipmentList = [
    {
      equipment: '60 kVA mobile diesel generator vans',
      purpose: 'Power for welding and cutting at remote sites',
      badge: 'Autonomous Power'
    },
    {
      equipment: 'Hydraulic shears and cutters',
      purpose: 'Fast deconstruction of heavy beams',
      badge: 'Demolition Rig'
    },
    {
      equipment: 'MIG, TIG and arc welding machines',
      purpose: 'Deep, reliable weld joints',
      badge: 'Multi-Process'
    },
    {
      equipment: '50-ton crane slings and rigging gear',
      purpose: 'Lifting and placing trusses at height',
      badge: 'Heavy Rigging'
    },
    {
      equipment: 'CNC hydraulic pipe and profile benders',
      purpose: 'Accurate curves for domes and arches',
      badge: 'CNC Precision'
    },
    {
      equipment: 'Oxygen-acetylene and plasma torches',
      purpose: 'Cutting steel plates up to 100 mm thick',
      badge: 'Thermal Slice'
    }
  ];

  const regionalAreas = [
    {
      area: 'Pali & Falna',
      task: 'Workshop base, factory sheds, industrial fabrication',
      badge: 'HQ Base · Rapid Deployment'
    },
    {
      area: 'Bali & Sumerpur',
      task: 'Warehouse sheds and agricultural steel',
      badge: 'Agri & Industrial'
    },
    {
      area: 'Jodhpur Highway',
      task: 'Toll plazas and commercial domes',
      badge: 'NH-62 Corridors'
    },
    {
      area: 'Udaipur & Rajsamand',
      task: 'Processing plants and crane gantry erection',
      badge: 'Processing Plants'
    },
    {
      area: 'Sirohi & Abu Road',
      task: 'Highway expansion, canopy dismantling, bridge steelwork',
      badge: 'Highway & Infrastructure'
    }
  ];

  const projects = [
    {
      title: 'Toll Plaza Demolition & Canopy Project, Pali–Sirohi Highway',
      desc: 'We dismantled an old six-lane toll canopy and then built new structural steel in its place. The work finished in 48 hours with no stoppage of traffic.',
      tag: 'Toll Plaza Demolition & Erection',
      image: '/images/toll_plaza_work.jpg',
      stat: '48 Hours Live Highway Execution'
    },
    {
      title: '45M Span Industrial Shed Fabrication, Falna',
      desc: 'A pillar-free storage shed with heavy-duty lattice trusses, built for high wind resistance and long service life.',
      tag: 'Industrial PEB Shed',
      image: '/images/structural_shed.jpg',
      stat: '45-Metre Pillar-Free Span'
    },
    {
      title: 'Steel Dome Fabrication Project, Jodhpur',
      desc: 'An 18-metre geodesic dome for a commercial complex, with CNC-bent sections and careful pipe jointing.',
      tag: 'Geodesic Steel Dome',
      image: '/images/dome_fabrication.jpg',
      stat: '18M Geodesic Diameter'
    }
  ];

  const faqs = [
    {
      q: 'Where is Mahadev Weld located and which areas do you serve?',
      a: 'Our workshop is at Bali Falna Road, near Devshri Hotel, Santosh Dhaba, Khudala 306116. We serve Pali, Jodhpur, Udaipur, Sirohi, Rajsamand and the rest of Rajasthan, and take projects in neighbouring states too.'
    },
    {
      q: 'Are you a toll plaza demolition contractor?',
      a: 'Yes. We dismantle old canopies and booths, and we also fabricate new canopy trusses, booth framing and barrier gantries.'
    },
    {
      q: 'What types of industrial sheds do you build?',
      a: 'We build PEB sheds, factory roofs, warehouse frames and long-span storage sheds with heavy trusses and purlins.'
    },
    {
      q: 'Can your team come to our site for welding and demolition?',
      a: 'Yes. Our mobile crews bring their own generators and welding machines to your location.'
    },
    {
      q: 'How do I get a quote?',
      a: 'Call us or send your drawings and requirements. We usually visit the site, check the scope and then share a detailed estimate.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#0f172a' }}>

      {/* ══════════════════════════════════════
          1. HERO SECTION (DYNAMIC SPLIT SHOWCASE)
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden',
        padding: '3.5rem 0 4rem 0'
      }}>
        {/* Subtle background industrial grid pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(#e2e8f0 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          opacity: 0.55,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>

            {/* Left Column: Heading & Text */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#fff7ed',
                border: '1px solid #fed7aa',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                color: '#ea580c',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.25rem'
              }}>
                <MapPin size={13} color="#ea580c" />
                <span>Khudala, Pali District, Rajasthan</span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#0f172a',
                marginBottom: '1rem',
                letterSpacing: '0.3px'
              }}>
                Fabrication and Demolition <span style={{ color: '#ea580c' }}>Contractor in Rajasthan</span>
              </h1>

              <div style={{
                width: '56px',
                height: '4px',
                background: 'linear-gradient(90deg, #ea580c, #f97316)',
                borderRadius: '2px',
                marginBottom: '1.4rem'
              }} />

              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.75',
                color: '#334155',
                marginBottom: '1.85rem'
              }}>
                Mahadev Weld is a fabrication and demolition contractor in Rajasthan, working from our own workshop at Khudala, on the Bali–Falna road in Pali district. For over 15 years we have taken on jobs that many contractors avoid: dismantling toll plaza canopies above live highway lanes, raising wide-span industrial sheds, and bending steel into geodesic domes. As a steel fabrication company with our own crews, machines and power backup, we handle a project from drawing to installation, so you deal with one team instead of three.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-group" style={{ marginBottom: '1.75rem' }}>
                <button
                  onClick={openQuote}
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.85rem', fontSize: '1rem' }}
                >
                  <Zap size={16} />
                  <span>Request a Quote</span>
                </button>
                <a
                  href="tel:+917665125621"
                  className="btn-outline"
                  style={{ padding: '0.85rem 1.5rem', fontSize: '1rem' }}
                >
                  <Phone size={15} color="#ea580c" />
                  <span>Call: +91 76651 25621</span>
                </a>
                <a
                  href="tel:+917073739837"
                  className="btn-outline"
                  style={{ padding: '0.85rem 1.5rem', fontSize: '1rem' }}
                >
                  <Phone size={15} color="#0284c7" />
                  <span>Call: +91 70737 39837</span>
                </a>
              </div>

              {/* Highlights */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid #f1f5f9',
                fontSize: '0.85rem',
                color: '#64748b',
                fontWeight: 600
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle2 size={15} color="#ea580c" />
                  <span>15+ Years Experience</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle2 size={15} color="#ea580c" />
                  <span>In-House Crews & Machinery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle2 size={15} color="#ea580c" />
                  <span>Drawing to Installation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Industrial Showcase Card */}
            <div>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(15,23,42,0.10)',
                position: 'relative'
              }}>
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img
                    src="/images/toll_plaza_work.jpg"
                    alt="Toll Plaza Demolition & Canopy Steelwork"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 35%, rgba(15,23,42,0.85) 100%)'
                  }} />
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: '#ea580c',
                    color: '#ffffff',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}>
                    ● Live Site Operations
                  </span>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
                    <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.15rem', fontFamily: 'var(--font-heading)' }}>
                      Toll Plaza Demolition & High-Span Canopy
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.82rem', marginTop: '2px' }}>
                      Fast-track execution over operational highway corridors in Rajasthan
                    </div>
                  </div>
                </div>

                {/* 3 Metric Badges */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  backgroundColor: '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  borderBottom: '1px solid #e2e8f0'
                }}>
                  {[
                    { val: '15+', label: 'Years Serving' },
                    { val: '48h', label: 'Toll Clearance' },
                    { val: '100%', label: 'In-House Crew' }
                  ].map((stat, i) => (
                    <div key={i} style={{
                      textAlign: 'center',
                      padding: '1rem 0.5rem',
                      borderRight: i < 2 ? '1px solid #e2e8f0' : 'none'
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.45rem',
                        fontWeight: 800,
                        color: '#ea580c',
                        lineHeight: 1
                      }}>
                        {stat.val}
                      </div>
                      <div style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#64748b',
                        textTransform: 'uppercase',
                        marginTop: '0.35rem',
                        letterSpacing: '0.4px'
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Location Strip */}
                <div style={{
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  color: '#475569',
                  backgroundColor: '#ffffff'
                }}>
                  <MapPin size={16} color="#ea580c" style={{ flexShrink: 0 }} />
                  <span>Workshop: Bali–Falna Road, near Devshri Hotel, Santosh Dhaba, Khudala 306116</span>
                </div>
              </div>

              {/* Badges beneath card */}
              <div style={{
                display: 'flex',
                gap: '0.65rem',
                marginTop: '1rem',
                flexWrap: 'wrap'
              }}>
                {[
                  { icon: <ShieldCheck size={14} color="#16a34a" />, text: 'IS 4014 Demolition Safety', bg: '#f0fdf4', border: '#bbf7d0', color: '#15803d' },
                  { icon: <Factory size={14} color="#0284c7" />, text: 'Heavy PEB Sheds', bg: '#eff6ff', border: '#bfdbfe', color: '#1d4ed8' },
                  { icon: <Compass size={14} color="#ea580c" />, text: 'Geodesic Domes', bg: '#fff7ed', border: '#fed7aa', color: '#c2410c' }
                ].map((b, i) => (
                  <div key={i} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    background: b.bg,
                    border: `1px solid ${b.border}`,
                    color: b.color,
                    padding: '0.35rem 0.8rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    {b.icon}
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. CORE SERVICES OVERVIEW TABLE & MATRIX
      ══════════════════════════════════════ */}
      <section style={{ padding: '4.5rem 0 4rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '2.25rem' }}>
            <span className="section-pill" style={{ marginBottom: '0.6rem', display: 'inline-flex' }}>
              Scope of Capabilities
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '0.75rem'
            }}>
              Steel Fabrication Company for Industrial Sheds, Domes & Demolition
            </h2>
            <p style={{
              color: '#475569',
              fontSize: '1.02rem',
              lineHeight: '1.7'
            }}>
              Every project starts with a site visit and a clear scope of work. Whether it is a factory roof in Falna or a canopy on a national highway, we plan around what the structure actually needs. Here is a quick look at what we do.
            </p>
          </div>

          {/* Precision Engineering Matrix Table */}
          <div style={{
            background: '#ffffff',
            borderRadius: '14px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 6px 24px rgba(15,23,42,0.05)',
            overflow: 'hidden'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                minWidth: '680px'
              }}>
                <thead>
                  <tr style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    borderBottom: '3px solid #ea580c'
                  }}>
                    <th style={{
                      padding: '1.15rem 1.4rem',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
                      fontWeight: 800,
                      width: '28%',
                      letterSpacing: '0.5px'
                    }}>
                      Service
                    </th>
                    <th style={{
                      padding: '1.15rem 1.4rem',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
                      fontWeight: 800,
                      width: '40%',
                      letterSpacing: '0.5px'
                    }}>
                      What it covers
                    </th>
                    <th style={{
                      padding: '1.15rem 1.4rem',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
                      fontWeight: 800,
                      width: '32%',
                      letterSpacing: '0.5px'
                    }}>
                      Where it is used
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {servicesTable.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: i < servicesTable.length - 1 ? '1px solid #f1f5f9' : 'none',
                        backgroundColor: i % 2 === 0 ? '#ffffff' : '#fafafa',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fff7ed'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = (i % 2 === 0 ? '#ffffff' : '#fafafa')}
                    >
                      <td style={{
                        padding: '1.15rem 1.4rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        fontSize: '0.96rem',
                        fontFamily: 'var(--font-heading)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <span style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            backgroundColor: '#fff7ed',
                            border: '1px solid #fed7aa',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            {row.icon}
                          </span>
                          <span style={{ fontSize: '1rem' }}>{row.service}</span>
                        </div>
                      </td>
                      <td style={{
                        padding: '1.15rem 1.4rem',
                        color: '#334155',
                        fontSize: '0.92rem',
                        lineHeight: '1.55'
                      }}>
                        {row.covers}
                      </td>
                      <td style={{
                        padding: '1.15rem 1.4rem',
                        color: '#475569',
                        fontSize: '0.9rem'
                      }}>
                        <span style={{
                          display: 'inline-block',
                          backgroundColor: '#f1f5f9',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#1e293b'
                        }}>
                          {row.used}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. 8 DETAILED SPECIALIZED CAPABILITIES
      ══════════════════════════════════════ */}
      <section style={{
        padding: '4.5rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="section-pill">Our Core Expertise</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.5rem',
              lineHeight: 1.15
            }}>
              Industrial Execution & Steel Fabrication
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {serviceCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="clean-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 10px rgba(15,23,42,0.04)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: '#fff7ed',
                      border: '1px solid #fed7aa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <span style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      color: '#ea580c',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1.25,
                    marginBottom: '0.75rem'
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    color: '#475569',
                    fontSize: '0.92rem',
                    lineHeight: '1.65',
                    marginBottom: item.items ? '1.15rem' : '0'
                  }}>
                    {item.desc}
                  </p>

                  {item.items && (
                    <div style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '0.85rem 1rem'
                    }}>
                      <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem'
                      }}>
                        {item.items.map((sub, sIdx) => (
                          <li key={sIdx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#1e293b',
                            fontSize: '0.86rem',
                            fontWeight: 600
                          }}>
                            <CheckCircle2 size={14} color="#ea580c" style={{ flexShrink: 0 }} />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. TOLL PLAZA DEMOLITION CONTRACTOR (4-STAGE PROCESS)
      ══════════════════════════════════════ */}
      <section style={{
        padding: '4.5rem 0',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#fb923c',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontFamily: 'var(--font-heading)',
              marginBottom: '0.5rem'
            }}>
              <ShieldAlert size={14} />
              Highway Engineering Execution
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '0.85rem'
            }}>
              Toll Plaza Demolition Contractor for Highway Projects
            </h2>
            <p style={{
              color: '#cbd5e1',
              fontSize: '1.02rem',
              lineHeight: '1.7'
            }}>
              Removing a steel canopy over operating lanes leaves no room for error. The trusses are heavy, traffic keeps moving, and the timeline is tight. We follow the same four-stage process on every highway job.
            </p>
          </div>

          {/* Stepped Process Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}>
            {tollPlazaSteps.map((stepItem, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '1rem',
                  fontSize: '2.2rem',
                  fontFamily: 'var(--font-display)',
                  color: 'rgba(234,88,12,0.18)',
                  lineHeight: 1
                }}>
                  {stepItem.number}
                </div>

                <div>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#ea580c',
                    color: '#ffffff',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem'
                  }}>
                    Stage {stepItem.number}
                  </span>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.18rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    marginBottom: '0.75rem'
                  }}>
                    {stepItem.step}
                  </h3>

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
                      What happens:
                    </div>
                    <p style={{ color: '#e2e8f0', fontSize: '0.88rem', lineHeight: '1.55' }}>
                      {stepItem.happens}
                    </p>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '6px',
                  padding: '0.75rem',
                  marginTop: '0.5rem'
                }}>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#fb923c', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '0.15rem' }}>
                    Why it matters:
                  </div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.82rem', fontWeight: 600 }}>
                    {stepItem.matters}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table View of 4-Stage Highway Process */}
          <div style={{
            background: '#1e293b',
            borderRadius: '12px',
            border: '1px solid #334155',
            overflow: 'hidden',
            marginBottom: '1.75rem'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                minWidth: '640px'
              }}>
                <thead>
                  <tr style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    borderBottom: '2px solid #ea580c'
                  }}>
                    <th style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, width: '30%' }}>
                      Step
                    </th>
                    <th style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, width: '42%' }}>
                      What happens
                    </th>
                    <th style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, width: '28%' }}>
                      Why it matters
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tollPlazaSteps.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: i < tollPlazaSteps.length - 1 ? '1px solid #334155' : 'none',
                        backgroundColor: i % 2 === 0 ? '#1e293b' : '#172234'
                      }}
                    >
                      <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#fb923c', fontSize: '0.92rem' }}>
                        {row.step}
                      </td>
                      <td style={{ padding: '1rem 1.25rem', color: '#e2e8f0', fontSize: '0.88rem' }}>
                        {row.happens}
                      </td>
                      <td style={{ padding: '1rem 1.25rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                        {row.matters}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Safety Compliance Alert */}
          <div style={{
            backgroundColor: '#1e293b',
            border: '1px solid #ea580c',
            borderLeft: '5px solid #ea580c',
            borderRadius: '10px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <ShieldCheck size={28} color="#ea580c" style={{ flexShrink: 0 }} />
            <p style={{ color: '#f8fafc', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, fontWeight: 500 }}>
              Every site follows hot-work permits, fire-watch teams and full fall-arrest rigging. Safety is planned before the first cut, not added afterwards.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. INDUSTRIAL SHED FABRICATION & PEB STRUCTURES
      ══════════════════════════════════════ */}
      <section style={{
        padding: '4.5rem 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>

            {/* Left Column: Text & List */}
            <div>
              <span className="section-pill" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
                Clear-Span Heavy Structures
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.15,
                marginBottom: '1rem'
              }}>
                Industrial Shed Fabrication & PEB Structures
              </h2>

              <p style={{
                color: '#475569',
                fontSize: '1.02rem',
                lineHeight: '1.75',
                marginBottom: '1.75rem'
              }}>
                Good industrial shed fabrication begins with the right frame. A shed for a stone processing unit has different needs than one for grain or textile storage, so we confirm span, height, crane load and roofing before we fabricate anything. Our Falna project, for example, delivered a 45-metre pillar-free span with heavy lattice trusses and anti-corrosion treatment.
              </p>

              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Here is what we usually build:
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '0.85rem'
                }}>
                  {[
                    'Factory and warehouse roof sheds',
                    'Pre-engineered building steel columns',
                    'Heavy truss and purlin frames',
                    'Agricultural and storage sheds'
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '0.75rem 0.9rem',
                        fontSize: '0.88rem',
                        color: '#0f172a',
                        fontWeight: 600
                      }}
                    >
                      <CheckCircle2 size={16} color="#ea580c" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#fff7ed',
                border: '1px solid #fed7aa',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                <p style={{
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Tell us your span, height and use, and we will suggest the most practical structure.
                </p>
                <button
                  onClick={openQuote}
                  className="btn-primary"
                  style={{ padding: '0.55rem 1.15rem', fontSize: '0.88rem' }}
                >
                  <Zap size={14} />
                  <span>Get Suggestion</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Industrial Shed Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 12px 32px rgba(15,23,42,0.08)'
              }}>
                <img
                  src="/images/structural_shed.jpg"
                  alt="Industrial Shed Fabrication"
                  style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  padding: '1.15rem 1.35rem',
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  <div>
                    <div style={{ fontWeight: 800, fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: '#ea580c' }}>
                      45-Metre Pillar-Free Span Shed
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                      High Wind Resistance · Anti-Corrosive Primer · Falna Project
                    </div>
                  </div>
                  <span style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    color: '#f8fafc',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700
                  }}>
                    Tata Steel Sections
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. HEAVY-DUTY EQUIPMENT FLEET
      ══════════════════════════════════════ */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
            <span className="section-pill">Machinery & Deployment</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.5rem',
              lineHeight: 1.15,
              marginBottom: '0.75rem'
            }}>
              Heavy-Duty Equipment for Structural Steel Fabrication
            </h2>
            <p style={{
              color: '#475569',
              fontSize: '1.02rem',
              lineHeight: '1.7'
            }}>
              Good equipment lets us finish on time. Everything below is owned and ready for deployment across Rajasthan.
            </p>
          </div>

          {/* Equipment Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem'
          }}>
            {equipmentList.map((eq, idx) => (
              <div
                key={idx}
                className="spec-item"
                style={{
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '12px'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.6rem'
                  }}>
                    <div style={{
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      color: '#0f172a',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {eq.equipment}
                    </div>
                    <span className="tech-badge tech-badge-flame" style={{ flexShrink: 0 }}>
                      {eq.badge}
                    </span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.55' }}>
                    {eq.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Exact Equipment Table */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(15,23,42,0.04)'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                minWidth: '580px'
              }}>
                <thead>
                  <tr style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    borderBottom: '2px solid #ea580c'
                  }}>
                    <th style={{ padding: '1rem 1.3rem', fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, width: '45%' }}>
                      Equipment
                    </th>
                    <th style={{ padding: '1rem 1.3rem', fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, width: '55%' }}>
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {equipmentList.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: i < equipmentList.length - 1 ? '1px solid #f1f5f9' : 'none',
                        backgroundColor: i % 2 === 0 ? '#ffffff' : '#fafafa'
                      }}
                    >
                      <td style={{ padding: '1rem 1.3rem', fontWeight: 700, color: '#0f172a', fontSize: '0.92rem' }}>
                        {row.equipment}
                      </td>
                      <td style={{ padding: '1rem 1.3rem', color: '#475569', fontSize: '0.9rem' }}>
                        {row.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. REGIONAL CORRIDORS ACROSS RAJASTHAN
      ══════════════════════════════════════ */}
      <section style={{
        padding: '4.5rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
            <span className="section-pill">Service Corridors</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.5rem',
              lineHeight: 1.15,
              marginBottom: '0.75rem'
            }}>
              Fabrication & Demolition Services Across Rajasthan
            </h2>
            <p style={{
              color: '#475569',
              fontSize: '1.02rem',
              lineHeight: '1.7'
            }}>
              Our base is close to Pali and Falna, so local crews reach most industrial areas within about 30 minutes. For larger jobs we travel along the main highway corridors.
            </p>
          </div>

          {/* Regional Table with High-End Styling */}
          <div style={{
            background: '#ffffff',
            borderRadius: '14px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(15,23,42,0.05)',
            marginBottom: '2rem'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                minWidth: '580px'
              }}>
                <thead>
                  <tr style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    borderBottom: '3px solid #ea580c'
                  }}>
                    <th style={{ padding: '1.15rem 1.4rem', fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 800, width: '32%' }}>
                      Area
                    </th>
                    <th style={{ padding: '1.15rem 1.4rem', fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 800, width: '68%' }}>
                      What we usually do there
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {regionalAreas.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: i < regionalAreas.length - 1 ? '1px solid #f1f5f9' : 'none',
                        backgroundColor: i % 2 === 0 ? '#ffffff' : '#fafafa',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fff7ed'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = (i % 2 === 0 ? '#ffffff' : '#fafafa')}
                    >
                      <td style={{
                        padding: '1.15rem 1.4rem',
                        fontWeight: 800,
                        color: '#ea580c',
                        fontSize: '1.02rem',
                        fontFamily: 'var(--font-heading)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <MapPin size={16} color="#ea580c" />
                          <span>{row.area}</span>
                        </div>
                      </td>
                      <td style={{
                        padding: '1.15rem 1.4rem',
                        color: '#334155',
                        fontSize: '0.92rem',
                        lineHeight: '1.5'
                      }}>
                        {row.task}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Blueprint Banner for Regional Deployment */}
          <div style={{
            backgroundColor: '#0f172a',
            borderRadius: '12px',
            padding: '1.75rem 2rem',
            color: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <div>
              <div style={{ color: '#fb923c', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                Rapid Dispatch Fleet
              </div>
              <div style={{ fontSize: '1.18rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#ffffff', marginTop: '0.2rem' }}>
                Crews Mobilized for Remote Site Projects & Emergency Demolition
              </div>
            </div>
            <button
              onClick={openQuote}
              className="btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
            >
              <Truck size={16} />
              <span>Dispatch Mobile Crew</span>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. OUR FABRICATION & DEMOLITION PROJECTS
      ══════════════════════════════════════ */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.75rem auto' }}>
            <span className="section-pill">Case Studies</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.5rem',
              lineHeight: 1.15
            }}>
              Our Fabrication & Demolition Projects
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem'
          }}>
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="clean-card"
                style={{
                  borderRadius: '14px',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(15,23,42,0.06)'
                }}
              >
                <div style={{ height: '210px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.7) 100%)'
                  }} />
                  <span style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    background: '#ea580c',
                    color: '#ffffff',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {proj.tag}
                  </span>
                  <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.85rem',
                    right: '0.85rem'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      color: '#0f172a',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      {proj.stat}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.4rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.22rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '0.65rem',
                      lineHeight: 1.25
                    }}>
                      {proj.title}
                    </h3>
                    <p style={{
                      color: '#475569',
                      fontSize: '0.9rem',
                      lineHeight: '1.6'
                    }}>
                      {proj.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                    <button
                      onClick={openQuote}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#ea580c',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: 0
                      }}
                    >
                      <span>Inquire About Similar Project</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. WHAT OUR CLIENTS SAY (TESTIMONIALS)
      ══════════════════════════════════════ */}
      <section style={{
        padding: '4.5rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.75rem auto' }}>
            <span className="section-pill">Proven Track Record</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.5rem',
              lineHeight: 1.15,
              marginBottom: '0.75rem'
            }}>
              What Our Clients Say About Our Fabrication Work
            </h2>
            <p style={{
              color: '#475569',
              fontSize: '1.02rem',
              lineHeight: '1.7'
            }}>
              Clients mention three things most often: work finished on schedule, clean welds, and a team that stays safe around live traffic.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(15,23,42,0.03)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#fed7aa';
                  e.currentTarget.style.backgroundColor = '#fffbf7';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} color="#f59e0b" fill="#f59e0b" />
                    ))}
                  </div>
                  <p style={{
                    color: '#334155',
                    fontSize: '0.92rem',
                    lineHeight: '1.7',
                    fontStyle: 'italic',
                    marginBottom: '1.5rem'
                  }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    color: '#0f172a'
                  }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. FABRICATION & DEMOLITION FAQS
      ══════════════════════════════════════ */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-pill">Clarifications & Details</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '0.5rem',
              lineHeight: 1.15
            }}>
              Fabrication & Demolition FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: isOpen ? '#fff7ed' : '#ffffff',
                    border: isOpen ? '1px solid #fed7aa' : '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.03)',
                    transition: 'all 0.22s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '1.2rem 1.4rem',
                      background: 'none',
                      border: 'none',
                      color: isOpen ? '#ea580c' : '#0f172a',
                      fontSize: '1.02rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color={isOpen ? '#ea580c' : '#94a3b8'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                        marginLeft: '1rem'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.4rem 1.35rem 1.4rem',
                      color: '#475569',
                      fontSize: '0.94rem',
                      lineHeight: '1.7',
                      borderTop: '1px solid #fed7aa',
                      paddingTop: '0.95rem'
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
          11. GET A QUOTE (FINAL HEROIC CALLOUT)
      ══════════════════════════════════════ */}
      <section style={{
        padding: '4.5rem 0',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow backdrop accent */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '840px', position: 'relative' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            color: '#fb923c',
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '1rem'
          }}>
            <Zap size={15} />
            <span>Direct Engineering Desk</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4.2vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.15rem'
          }}>
            Get a Quote from a Trusted Fabrication & Demolition Contractor
          </h2>

          <p style={{
            color: '#94a3b8',
            fontSize: '1.05rem',
            lineHeight: '1.75',
            marginBottom: '2.25rem',
            maxWidth: '720px',
            margin: '0 auto 2.25rem auto'
          }}>
            Planning a shed, dome, toll plaza job or demolition? Call +91 76651 25621 or +91 70737 39837, or request a quote online. Our engineering team will inspect the site, review your drawings and give you an accurate estimate.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={openQuote}
              className="btn-primary"
              style={{ padding: '0.95rem 2rem', fontSize: '1.02rem' }}
            >
              <Zap size={17} />
              <span>Request a Quote Online</span>
            </button>
            <a
              href="tel:+917665125621"
              className="btn-outline"
              style={{
                padding: '0.95rem 1.75rem',
                fontSize: '1rem',
                color: '#ffffff',
                borderColor: '#334155'
              }}
            >
              <Phone size={16} color="#ea580c" />
              <span>Call: +91 76651 25621</span>
            </a>
            <a
              href="tel:+917073739837"
              className="btn-outline"
              style={{
                padding: '0.95rem 1.75rem',
                fontSize: '1rem',
                color: '#ffffff',
                borderColor: '#334155'
              }}
            >
              <Phone size={16} color="#38bdf8" />
              <span>Call: +91 70737 39837</span>
            </a>
          </div>

          <div style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #1e293b',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.45rem',
            color: '#64748b',
            fontSize: '0.85rem'
          }}>
            <MapPin size={14} color="#ea580c" />
            <span>Mahadev Weld, Bali–Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116</span>
          </div>
        </div>
      </section>

    </div>
  );
}
