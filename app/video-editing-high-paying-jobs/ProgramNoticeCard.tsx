import React from 'react';

type ProgramNoticeCardProps = {
  paymentLink: string;
};

export default function ProgramNoticeCard({ paymentLink }: ProgramNoticeCardProps) {
  return (
    <div className="newPricingContainer" style={{ padding: '0', background: 'transparent' }}>
      <div className="newPricingCards" style={{ justifyContent: 'center' }}>
        
        {/* Main Workshop Card */}
        <div className="newPricingCard darkCard" style={{ maxWidth: '900px', width: '100%', padding: '48px', gap: '48px' }}>
          
          <div className="cardTop">
            <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
              <span style={{ background: '#fff', color: '#000', padding: '6px 16px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                Early Bird Offer
              </span>
              <span style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '6px 16px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                Offline Workshop
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 600, lineHeight: 1.1, marginBottom: '40px' }}>
              Reserve your video editing sprint seat
            </h3>

            <div className="gridList" style={{ gridTemplateColumns: '1fr 1fr', gap: '32px 24px' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', fontWeight: 700 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d4ff00" strokeWidth="2.5" style={{ width: '20px', height: '20px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  6+ Hours
                </div>
                <div style={{ color: '#aaa', fontSize: '0.95rem', paddingLeft: '32px' }}>of hands-on video editing training</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', fontWeight: 700 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d4ff00" strokeWidth="2.5" style={{ width: '20px', height: '20px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Industry Workflows
                </div>
                <div style={{ color: '#aaa', fontSize: '0.95rem', paddingLeft: '32px' }}>learn directly from a global creative agency</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', fontWeight: 700 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d4ff00" strokeWidth="2.5" style={{ width: '20px', height: '20px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Build Live
                </div>
                <div style={{ color: '#aaa', fontSize: '0.95rem', paddingLeft: '32px' }}>Edit your professional video during the workshop</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', fontWeight: 700 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d4ff00" strokeWidth="2.5" style={{ width: '20px', height: '20px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  AI Workflows
                </div>
                <div style={{ color: '#aaa', fontSize: '0.95rem', paddingLeft: '32px' }}>Learn how AI can speed up your editing process</div>
              </div>

            </div>
          </div>

          <div className="cardBottom" style={{ marginTop: '0', display: 'grid', gridTemplateColumns: 'auto auto auto 1fr', gap: '24px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '24px 32px', borderRadius: '16px' }}>
            
            <div className="price" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>₹499</span>
                <span style={{ fontSize: '0.9rem', color: '#999', fontWeight: 600 }}>(Incl. Taxes)</span>
              </div>
              <del style={{ color: '#666', fontSize: '1.1rem', fontWeight: 600, textDecorationThickness: '2px' }}>₹1999</del>
            </div>

            <div style={{ width: '1px', height: '100%', background: 'rgba(255,255,255,0.1)' }}></div>

            <div style={{ display: 'flex', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <small style={{ color: '#999', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Date</small>
                <div style={{ fontSize: '1.05rem', fontWeight: 600 }}>August 16,<br/>2026</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <small style={{ color: '#999', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</small>
                <div style={{ fontSize: '1.05rem', fontWeight: 600 }}>Bangalore,<br/>HSR layout</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', marginLeft: 'auto' }}>
              <a href={paymentLink} className="actionBtn limeBtn" style={{ padding: '0 32px', height: '48px', fontSize: '1.1rem', width: '100%' }}>Book Now &rarr;</a>
              <span style={{ color: '#d4ff00', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Only 2 seats left</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
