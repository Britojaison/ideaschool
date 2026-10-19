export default function WorkshopVenueSection() {
  return (
    <section className="venueSection" aria-label="Workshop Venue">
      <div className="venueInner">
        
        <div className="venueHeader">
          <span className="venueSubtitle">WORKSHOP VENUE IN-PERSON EDIT STUDIO</span>
          <h2>WHERE THE WORK HAPPENS</h2>
          <p>Physical, hands-on workshop held inside IDEA School at 88GB Creative Agency HQ in HSR Layout, Bengaluru. Bring your laptop and your edit drive—everything else is set up for you.</p>
        </div>

        <div className="venueGrid">
          <div className="venueLeft">
            <span className="vStudioPill">STUDIO HQ</span>
            <h3>88GB HQ &middot; IDEA SCHOOL</h3>
            <p className="vLocation">HSR Layout, Bengaluru, Karnataka</p>

            <div className="vDetailsBlock">
              <span className="vDetailsTitle">DATE & TIME</span>
              <p>Saturday, 19 September 2026 &middot; 11 AM - 5 PM IST</p>
            </div>
            <div className="vDetailsBlock">
              <span className="vDetailsTitle">VENUE TYPE</span>
              <p>Working agency edit bays & interactive workshop floor</p>
            </div>
            <div className="vDetailsBlock">
              <span className="vDetailsTitle">TRANSIT & ACCESS</span>
              <p>Easy cab/auto drop-off via 27th Main HSR & Outer Ring Road. On-premise parking available.</p>
            </div>

            <div className="vFeaturesGrid">
              <div className="vFeature">⚡ Dedicated Power at Every Seat</div>
              <div className="vFeature">📶 High-Speed Gigabit Fiber</div>
              <div className="vFeature">👥 Live 1-on-1 Mentor Access</div>
              <div className="vFeature">☕ Beverages & Snacks Included</div>
            </div>

            <div className="vButtons">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="vMapBtn">
                📍 Open in Google Maps ↗
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="vDirBtn">
                Get Directions &rarr;
              </a>
            </div>
          </div>

          <div className="venueRight">
            <div className="vMapTop">
              <span className="vMapLabel"><span className="vMapDot"></span> LIVE MAP HSR LAYOUT, BENGALURU</span>
              <a href="https://maps.google.com" className="vMapLink">View Larger Map ↗</a>
            </div>
            <div className="vMapEmbed">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750917027581!2d77.6480!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzUwLjgiTiA3N8KwMzgnNTIuOCJF!5e0!3m2!1sen!2sin!4v1635859345094!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="IDEA School Map Location"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
