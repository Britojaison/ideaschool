import React from 'react';

type ProgramNoticeCardProps = {
  paymentLink: string;
};

export default function ProgramNoticeCard({ paymentLink }: ProgramNoticeCardProps) {
  return (
    <div className="newPricingContainer pncContainer" style={{ padding: '0', background: 'transparent' }}>
      <div className="newPricingCards" style={{ justifyContent: 'center' }}>
        
        {/* Main Workshop Card */}
        <div className="newPricingCard darkCard pncCard">
          
          <div className="cardTop">
            <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <span style={{ background: '#fff', color: '#000', padding: '6px 14px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                Early Bird Offer
              </span>
              <span style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '6px 14px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                Offline Workshop
              </span>
            </div>

            <h3 className="pncTitle">
              Reserve your video editing sprint seat
            </h3>

            <div className="pncFeaturesGrid">
              
              <div className="pncFeatureItem">
                <div className="pncFeatureHeader">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d4ff00" strokeWidth="2.5" style={{ width: '20px', height: '20px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>6+ Hours</span>
                </div>
                <div className="pncFeatureDesc">of hands-on video editing training</div>
              </div>

              <div className="pncFeatureItem">
                <div className="pncFeatureHeader">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d4ff00" strokeWidth="2.5" style={{ width: '20px', height: '20px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Industry Workflows</span>
                </div>
                <div className="pncFeatureDesc">learn directly from a global creative agency</div>
              </div>

              <div className="pncFeatureItem">
                <div className="pncFeatureHeader">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d4ff00" strokeWidth="2.5" style={{ width: '20px', height: '20px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Build Live</span>
                </div>
                <div className="pncFeatureDesc">Edit your professional video during the workshop</div>
              </div>

              <div className="pncFeatureItem">
                <div className="pncFeatureHeader">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d4ff00" strokeWidth="2.5" style={{ width: '20px', height: '20px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>AI Workflows</span>
                </div>
                <div className="pncFeatureDesc">Learn how AI can speed up your editing process</div>
              </div>

            </div>
          </div>

          <div className="pncBottomRow">
            
            <div className="pncPriceBlock">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>₹1999</span>
                <span style={{ fontSize: '0.85rem', color: '#999', fontWeight: 600 }}>(Incl. Taxes)</span>
              </div>
              <del style={{ color: '#666', fontSize: '1rem', fontWeight: 600, textDecorationThickness: '2px' }}>₹4999</del>
            </div>

            <div className="pncDivider"></div>

            <div className="pncMetaDetails">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <small style={{ color: '#999', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Date</small>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.3 }}>19 September,<br/>2026</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <small style={{ color: '#999', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</small>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.3 }}>Bangalore,<br/>HSR Layout</div>
              </div>
            </div>

            <div className="pncCtaBlock">
              <a href={paymentLink} className="actionBtn limeBtn pncCtaBtn">Book Now &rarr;</a>
              <span className="pncSeatsNotice">Only 2 seats left</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
