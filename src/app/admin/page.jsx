'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Database, RefreshCw, Search, Filter, Phone, Mail, MapPin, 
  CheckCircle2, Clock, Calendar, FileText, ArrowLeft, AlertCircle, ShieldAlert
} from 'lucide-react';

export default function AdminPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const fetchInquiries = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/inquiries');
      const json = await res.json();
      if (json.success) {
        setInquiries(json.data || []);
      } else {
        setError(json.error || 'Failed to fetch records.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const json = await res.json();
      if (json.success) {
        setInquiries(prev => prev.map(item => item._id === id ? { ...item, status: newStatus } : item));
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const filtered = inquiries.filter(item => {
    const matchesSearch = 
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone?.includes(searchTerm) ||
      item.service?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: '#f8fafc', padding: '2rem 1rem' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <ArrowLeft size={14} /> Back to Website
            </Link>
            <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Database size={26} color="#ea580c" />
              Mahadev Weld — Lead & Inquiry Database
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              MongoDB Atlas connected inquiries and quote submissions.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button 
              onClick={fetchInquiries} 
              className="btn-outline" 
              style={{ padding: '0.6rem 1.2rem', color: '#f1f5f9', borderColor: '#334155' }}
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              <span>Refresh Data</span>
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div style={{
            backgroundColor: '#450a0a',
            border: '1px solid #7f1d1d',
            color: '#fca5a5',
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem'
          }}>
            <AlertCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ display: 'block', color: '#fecaca', marginBottom: '0.2rem' }}>MongoDB Configuration Notice:</strong>
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Stats Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Inquiries', val: inquiries.length, color: '#ea580c' },
            { label: 'New / Uncontacted', val: inquiries.filter(i => i.status === 'New').length, color: '#f59e0b' },
            { label: 'Quote Calculations', val: inquiries.filter(i => i.formType === 'quote').length, color: '#0284c7' },
            { label: 'Contact Messages', val: inquiries.filter(i => i.formType === 'contact').length, color: '#10b981' },
          ].map((st, i) => (
            <div key={i} style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '10px', padding: '1.2rem' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{st.label}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: st.color, fontFamily: 'var(--font-heading)', marginTop: '0.2rem' }}>
                {st.val}
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '10px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: 1, minWidth: '240px' }}>
            <Search size={16} color="#94a3b8" />
            <input 
              type="text" 
              placeholder="Search by name, phone, service, location..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                color: '#ffffff',
                padding: '0.55rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.9rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Filter size={15} color="#94a3b8" />
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Status:</span>
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              style={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                color: '#ffffff',
                padding: '0.55rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.88rem'
              }}
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Quoted">Quoted</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Table or Cards */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#94a3b8' }}>
            <RefreshCw size={28} className="animate-spin" style={{ margin: '0 auto 1rem auto', color: '#ea580c' }} />
            <div>Loading inquiries from MongoDB...</div>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '10px',
            padding: '3.5rem 1rem',
            textAlign: 'center',
            color: '#94a3b8'
          }}>
            <FileText size={36} color="#64748b" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ color: '#f1f5f9', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              No Inquiries Found
            </h3>
            <p style={{ fontSize: '0.9rem', maxWidth: '480px', margin: '0 auto' }}>
              {error 
                ? 'Please configure your MONGODB_URI in .env to begin saving inquiries.' 
                : 'Any new quote calculations or contact submissions on the website will appear here in real time.'}
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filtered.map(inq => (
              <div 
                key={inq._id}
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '10px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <span style={{
                        backgroundColor: inq.formType === 'quote' ? '#0369a1' : '#047857',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}>
                        {inq.formType === 'quote' ? 'Quote Request' : 'Contact Form'}
                      </span>
                      <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontFamily: 'var(--font-heading)', margin: 0 }}>
                        {inq.name}
                      </h3>
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} />
                      {new Date(inq.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Status:</span>
                    <select
                      value={inq.status}
                      onChange={e => handleStatusChange(inq._id, e.target.value)}
                      style={{
                        backgroundColor: '#0f172a',
                        border: '1px solid #475569',
                        color: '#f8fafc',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 600
                      }}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Quoted">Quoted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>

                {/* Details Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.75rem',
                  backgroundColor: '#0f172a',
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem'
                }}>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Phone Number:</span>
                    <a href={`tel:${inq.phone}`} style={{ color: '#ea580c', fontWeight: 700, textDecoration: 'none' }}>
                      {inq.phone}
                    </a>
                  </div>
                  {inq.email && (
                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Email:</span>
                      <a href={`mailto:${inq.email}`} style={{ color: '#38bdf8', textDecoration: 'none' }}>
                        {inq.email}
                      </a>
                    </div>
                  )}
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Service:</span>
                    <strong style={{ color: '#e2e8f0' }}>{inq.service}</strong>
                  </div>
                  {inq.location && (
                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Location:</span>
                      <span style={{ color: '#e2e8f0' }}>{inq.location}</span>
                    </div>
                  )}
                  {inq.areaSize && (
                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Area / Span:</span>
                      <span style={{ color: '#e2e8f0' }}>{inq.areaSize} sq ft</span>
                    </div>
                  )}
                  {inq.estimatedPrice && (
                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Calculated Estimate:</span>
                      <strong style={{ color: '#22c55e' }}>{inq.estimatedPrice}</strong>
                    </div>
                  )}
                </div>

                {(inq.message || inq.notes) && (
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5', background: 'rgba(255,255,255,0.03)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                    <span style={{ color: '#94a3b8', fontWeight: 600, marginRight: '0.4rem' }}>Message / Notes:</span>
                    {inq.message || inq.notes}
                  </div>
                )}

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
