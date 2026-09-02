'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { useModal } from '../../context/ModalContext';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { sendInquiry } from '../../services/api';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Demolition Work',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const res = await sendInquiry({
      formType: 'contact',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      message: formData.message
    });

    setLoading(false);
    if (res.success) {
      setFormSubmitted(true);
    } else {
      setErrorMessage(res.error || 'Failed to deliver message. Please contact us directly via phone.');
    }
  };

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
            <MapPin size={16} />
            Visit Us & Connect
          </span>
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>
            Contact <span style={{ color: '#ea580c' }}>Mahadev Weld</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Get in touch with our fabrication and demolition engineers for site inspections, structural drawings, or urgent on-site deployment.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem'
          }}>

            {/* Left Column: Official Location & Phone Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Address Card */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontFamily: 'var(--font-heading)' }}>
                      Main Workshop & Office Address
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#ea580c', fontWeight: 700 }}>Mahadev Weld Hub</span>
                  </div>
                </div>

                <div style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#0f172a', display: 'block', fontSize: '1.2rem' }}>Mahadev Weld</strong>
                  Bali Falna Road, Near Devshri Hotel, Santosh Dhaba,<br />
                  Khudala – <strong>306116</strong>
                </div>

                <a
                  href="https://maps.google.com/?q=Mahadev+Weld+Bali+Falna+Road+Near+Devshri+Hotel+Santosh+Dhaba+Khudala+306116"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.7rem' }}
                >
                  <MapPin size={18} color="#ea580c" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Phone & Direct Contacts */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '1.2rem', fontFamily: 'var(--font-heading)' }}>
                  Direct Hotline & Email
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Primary Contact Phone</div>
                      <a href={`tel:${COMPANY_INFO.contact.phonePrimary}`} style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 800, fontSize: '1.15rem' }}>
                        {COMPANY_INFO.contact.phonePrimary}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Secondary Direct Line</div>
                      <a
                        href={`tel:${COMPANY_INFO.contact.phoneSecondary}`}
                        style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 800, fontSize: '1.15rem' }}
                      >
                        {COMPANY_INFO.contact.phoneSecondary}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706' }}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Working Hours</div>
                      <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.95rem' }}>
                        Mon – Sat: 8:00 AM – 8:00 PM
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Column: Web Inquiry Form */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
            }}>

              <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Send Us a Direct Message
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Fill in your project requirements below. Our engineering team will review and reply promptly.
              </p>

              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#dcfce7',
                    border: '2px solid #25D366',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <CheckCircle2 size={36} color="#25D366" />
                  </div>
                  <h4 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                    Message Sent Successfully!
                  </h4>
                  <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
                    Thank you <strong>{formData.name}</strong>. We have received your inquiry for {formData.service}. Our representative will call you shortly.
                  </p>
                  <button className="btn-outline" onClick={() => setFormSubmitted(false)}>
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                  <div>
                    <label style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Singh"
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        padding: '0.8rem',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 76651 XXXXX"
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          color: '#0f172a',
                          padding: '0.8rem',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          color: '#0f172a',
                          padding: '0.8rem',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Primary Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        padding: '0.8rem',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="Demolition Work">Demolition Work (Toll Plaza / Commercial)</option>
                      <option value="Structural Shed Fabrication">Structural Shed Fabrication (PEB / Warehouse)</option>
                      <option value="Dome Fabrication">Dome Fabrication (Geodesic / Spherical)</option>
                      <option value="Welding & Metal Fabrication">Welding & Heavy Steel Fabrication</option>
                      <option value="Industrial Fabrication Work">Industrial Fabrication & Support Structures</option>
                      <option value="Toll Plaza Work">Toll Plaza Work & Canopy Steelwork</option>
                      <option value="Customized Steel Structures">Customized Steel Gates & Railings</option>
                      <option value="On-Site Fabrication & Installation">On-Site Mobile Welding Team</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Project Location & Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe project scope, dimensions, location, and preferred execution date..."
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        padding: '0.8rem',
                        borderRadius: '8px',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)'
                      }}
                    />
                  </div>

                  {errorMessage && (
                    <div style={{
                      backgroundColor: '#fef2f2',
                      border: '1px solid #fecaca',
                      color: '#b91c1c',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <AlertCircle size={18} color="#dc2626" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="btn-primary" 
                    style={{ 
                      justifyContent: 'center', 
                      padding: '0.9rem', 
                      fontSize: '1.1rem',
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending Inquiry via SMTP...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>

          </div>

          {/* Map Embed Section */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1rem', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>
              Find Us at Mahadev Weld, Bali Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116
            </h3>

            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              height: '400px',
              backgroundColor: '#ffffff',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
            }}>
              <iframe
                title="Mahadev Weld Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14392.215!2d73.15!3d25.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942fc0000000001%3A0x1!2sKhudala%2C+Rajasthan+306116!5e0!3m2!1sen!2sin!4v1680000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
