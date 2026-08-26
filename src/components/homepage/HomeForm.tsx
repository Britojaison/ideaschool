"use client";

import React, { useState, useRef } from 'react';
import styles from './HomeForm.module.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image06 from "@public/assets/home/06-optimized.webp";
import ideaLogo from "@public/assets/logo/idea logo.webp";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useGSAP(() => {
    const triggerEl = document.querySelector("#workshops");
    if (!triggerEl) return;

    // Reveal form after the 3rd section (WorkshopsStrip)
    ScrollTrigger.create({
      trigger: triggerEl, 
      start: "bottom center", // When bottom of workshops section passes the center
      onEnter: () => {
        if (!isClosed) setIsVisible(true);
      },
      once: true // Only trigger this once
    });
  });

  React.useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  React.useEffect(() => {
    const handleOpen = () => {
      setIsVisible(true);
      setIsClosed(false);
    };
    window.addEventListener('open-home-form', handleOpen);
    return () => {
      window.removeEventListener('open-home-form', handleOpen);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error || 'Failed to submit application. Please try again.');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', program: '' });
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
    }
  };

  if (isClosed) return null;

  return (
    <div className={`${styles.formWrapper} ${isVisible ? styles.visible : ''}`} ref={formRef}>
      <div className={styles.modalBox}>
        {/* Top Left Logo (over the image) */}
        <div className={styles.logoTopLeft}>
          <Image src={ideaLogo} alt="Idea School Logo" width={32} height={32} style={{ objectFit: "contain" }} />
        </div>

        <div className={styles.leftPane}>
          {isVisible && (
            <Image
              src={image06}
              alt="Background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        
        <div className={styles.rightPane}>
          <button className={styles.closeBtn} onClick={() => { setIsVisible(false); setIsClosed(true); }} aria-label="Close" disabled={status === 'loading'}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <div className={styles.formContainer}>
            {status === 'success' ? (
              <div className={styles.successMessage} role="status">
                <span aria-hidden="true">✓</span>
                <h2>Application received</h2>
                <p>Thanks for applying. We’ve emailed you a confirmation and our admissions team will be in touch.</p>
                <button type="button" className={styles.submitBtn} onClick={() => { setIsVisible(false); setIsClosed(true); }}>Done</button>
              </div>
            ) : <>
              <div className={styles.formHeader}>
                <h2>Take the first step<br />Enquire today</h2>
                <p>Apply now to join the next cohort.</p>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="name@example.com" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required 
                  disabled={status === 'loading'}
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  id="fullname" 
                  placeholder="Full Name" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required 
                  disabled={status === 'loading'}
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  required 
                  disabled={status === 'loading'}
                />
              </div>

              <div className={styles.selectGroup}>
                <select 
                  id="program" 
                  value={formData.program} 
                  onChange={e => setFormData({...formData, program: e.target.value})}
                  required
                  disabled={status === 'loading'}
                >
                  <option value="" disabled hidden>Select a Program</option>
                  <option value="visual">Visual School</option>
                  <option value="tech">Tech School</option>
                  <option value="marketing">Marketing School</option>
                </select>
              </div>

              {status === 'error' && (
                <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '-8px', textAlign: 'center' }}>
                  {errorMessage}
                </div>
              )}

              <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : 'Submit Application'}
              </button>
              </form>

              <div className={styles.termsText}>
                By clicking continue, you agree to our<br/>
                <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </div>
            </>}
          </div>
        </div>
      </div>
    </div>
  );
}
