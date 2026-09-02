'use client';

import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { X, Calculator, CheckCircle, Send, Loader2, AlertCircle } from 'lucide-react';
import { sendInquiry } from '../services/api';

export default function QuoteModal({ isOpen, onClose }) {
  const [selectedService, setSelectedService] = useState('structural-shed-fabrication');
  const [areaSize, setAreaSize] = useState('2500');
  const [location, setLocation] = useState('Falna / Bali / Khudala');
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const currentServObj = SERVICES_LIST.find(s => s.id === selectedService) || SERVICES_LIST[0];

  const sizeNum = parseFloat(areaSize) || 1000;
  let estimatedPriceRange = "Contact for Site Inspection";
  if (selectedService === 'structural-shed-fabrication') {
    estimatedPriceRange = `₹${(sizeNum * 140).toLocaleString('en-IN')} – ₹${(sizeNum * 180).toLocaleString('en-IN')}`;
  } else if (selectedService === 'demolition-work') {
    estimatedPriceRange = `₹${(sizeNum * 45).toLocaleString('en-IN')} – ₹${(sizeNum * 70).toLocaleString('en-IN')}`;
  } else if (selectedService === 'dome-fabrication') {
    estimatedPriceRange = `₹${(sizeNum * 220).toLocaleString('en-IN')} – ₹${(sizeNum * 320).toLocaleString('en-IN')}`;
  } else if (selectedService === 'toll-plaza-work') {
    estimatedPriceRange = `Custom Turnkey Scope (Fast-Track Highway Dispatch)`;
  } else {
    estimatedPriceRange = `₹${(sizeNum * 120).toLocaleString('en-IN')} – ₹${(sizeNum * 160).toLocaleString('en-IN')}`;
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const res = await sendInquiry({
      formType: 'quote',
      name: clientName,
      phone: phone,
      service: currentServObj.title,
      areaSize: areaSize,
      location: location,
      estimatedPrice: estimatedPriceRange,
      notes: notes
    });

    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(res.error || 'Failed to submit quote inquiry. Please call us directly.');
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '1.25rem 1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#ea580c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calculator size={20} color="#ffffff" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                Request Formal Quote & Estimate
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                Mahadev Weld • Bali Falna Road, Near Devshri Hotel, Santosh Dhaba, Khudala 306116
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#cbd5e1',
              cursor: 'pointer',
              padding: '0.4rem',
              borderRadius: '6px'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.75rem', backgroundColor: '#ffffff' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#dcfce7',
                border: '2px solid #16a34a',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <CheckCircle size={36} color="#16a34a" />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Inquiry Received!
              </h3>
              <p style={{ color: '#475569', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                Thank you for contacting <strong>Mahadev Weld</strong>. Our team will review your requirements for {currentServObj.title} and contact you shortly.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn-outline" onClick={() => setSubmitted(false)}>
                  Calculate Another Project
                </button>
                <button className="btn-primary" onClick={onClose}>
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitForm} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* Service Selection */}
              <div>
                <label style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Select Service Required
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.id}>{s.title} — ({s.subtitle})</option>
                  ))}
                </select>
              </div>

              {/* Area / Size Input */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Approx. Area / Size (Sq. Ft)
                  </label>
                  <input
                    type="number"
                    value={areaSize}
                    onChange={(e) => setAreaSize(e.target.value)}
                    placeholder="e.g. 2500"
                    style={{
                      width: '100%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Site Location / City
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Falna, Pali, Jodhpur, Udaipur"
                    style={{
                      width: '100%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              {/* Instant Estimation Highlight Box */}
              <div style={{
                backgroundColor: '#fff7ed',
                border: '1px solid #ffedd5',
                borderRadius: '10px',
                padding: '1rem 1.2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#c2410c', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                    Estimated Budget Range (Approx)
                  </span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>
                    {estimatedPriceRange}
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', maxWidth: '200px', textAlign: 'right' }}>
                  * Final quote subject to physical site inspection
                </span>
              </div>

              {/* Contact Inputs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Enter full name"
                    required
                    style={{
                      width: '100%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    style={{
                      width: '100%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Specific Requirements / Drawings / Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Urgent highway toll plaza demolition required in Pali..."
                  style={{
                    width: '100%',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    padding: '0.75rem',
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

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ 
                    width: '100%', 
                    justifyContent: 'center', 
                    padding: '0.85rem', 
                    fontSize: '1.05rem',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending Quote via SMTP...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Engineering Quote Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
