"use client";
import React from 'react';

export default function ReferralEngine() {
  return (
    <section className="referralEngineSection" style={{
      padding: 'clamp(48px, 6vw, 80px) var(--apply-section-x, 20px)',
      backgroundColor: '#050608',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      overflow: 'hidden'
    }}>
      <div className="referralEngineInner" style={{
        maxWidth: '1000px',
        width: '100%',
        backgroundColor: '#0a0b0e',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: 'clamp(32px, 5vw, 60px) clamp(18px, 4vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
      }}>
        
        <span style={{
          color: '#dafd55',
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginBottom: '16px'
        }}>
          Community Referral Engine
        </span>
        
        <h2 style={{
          color: '#fff',
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          margin: '0 0 16px 0',
          letterSpacing: '-0.02em',
          lineHeight: 1.15
        }}>
          Refer & Earn ₹2,000
        </h2>
        
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: 'clamp(15px, 2vw, 18px)',
          margin: '0 0 clamp(32px, 4vw, 48px) 0',
          maxWidth: '600px',
          lineHeight: 1.5
        }}>
          Your friend gets ₹2,000 off. You get ₹2,000 cashback after their enrolment is verified.
        </p>

        <div className="referralSteps" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '20px',
          width: '100%',
          marginBottom: 'clamp(32px, 4vw, 48px)',
          textAlign: 'left'
        }}>
          <div className="rStepCard" style={{
            padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 24px)',
            backgroundColor: '#111216',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <span style={{
              display: 'inline-block',
              border: '1px solid #dafd55',
              color: '#dafd55',
              fontSize: '10px',
              fontWeight: 700,
              padding: '4px 8px',
              borderRadius: '4px',
              marginBottom: '16px'
            }}>STEP 01</span>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, margin: '0 0 10px 0' }}>Apply to Idea School</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
              Submit your application for the Video Editing Workshop to secure your seat and generate your unique referral code.
            </p>
          </div>

          <div className="rStepCard" style={{
            padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 24px)',
            backgroundColor: '#111216',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <span style={{
              display: 'inline-block',
              border: '1px solid #dafd55',
              color: '#dafd55',
              fontSize: '10px',
              fontWeight: 700,
              padding: '4px 8px',
              borderRadius: '4px',
              marginBottom: '16px'
            }}>STEP 02</span>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, margin: '0 0 10px 0' }}>Share Your Link</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
              Share your personal referral link or code with creators, editors, and friends via WhatsApp, Instagram, or direct message.
            </p>
          </div>

          <div className="rStepCard" style={{
            padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 24px)',
            backgroundColor: '#111216',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <span style={{
              display: 'inline-block',
              border: '1px solid #dafd55',
              color: '#dafd55',
              fontSize: '10px',
              fontWeight: 700,
              padding: '4px 8px',
              borderRadius: '4px',
              marginBottom: '16px'
            }}>STEP 03</span>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, margin: '0 0 10px 0' }}>Get ₹2,000 Cashback</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
              When their eligible enrolment is verified, they receive ₹2,000 off and you receive ₹2,000 cashback directly.
            </p>
          </div>
        </div>

        <a href="#enroll" style={{
          backgroundColor: '#dafd55',
          color: '#000',
          padding: '16px clamp(20px, 4vw, 32px)',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 800,
          textTransform: 'uppercase',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '8px',
          boxShadow: '0 4px 20px rgba(218, 253, 85, 0.2)',
          transition: 'transform 0.2s',
          maxWidth: '100%'
        }}>
          <span>🎁</span> APPLY & GET MY REFERRAL CODE
        </a>

      </div>
    </section>
  );
}
