export default function QualificationSection() {
  return (
    <section className="qualificationSection" aria-label="Honest Qualification">
      <div className="qualificationInner">
        
        <div className="qualificationHeader">
          <span className="qualificationSubtitle">HONEST QUALIFICATION ACTIVE EDITORS ONLY</span>
          <h2>BOOK A SEAT IF &middot; SKIP THIS IF</h2>
          <p>This workshop is intentionally designed for active editors who want direct feedback, not casual passive viewers.</p>
        </div>

        <div className="qualificationCards">
          <div className="qCard qCardBook">
            <div className="qBadgeWrap">
              <span className="qBadge qBadgeGreen">✓ RECOMMENDED</span>
            </div>
            <h3>BOOK A SEAT IF:</h3>
            <ul>
              <li><span className="qIcon">✓</span> <span>Tutorials haven't improved your edits enough and you feel stuck on the timeline.</span></li>
              <li><span className="qIcon">✓</span> <span>You understand the basics but struggle to finish edits confidently and decisively.</span></li>
              <li><span className="qIcon">✓</span> <span>You want stronger freelance, creator, or agency editing skills that clients pay for.</span></li>
              <li><span className="qIcon">✓</span> <span>You want to build stronger portfolio pieces that stand out from generic template cuts.</span></li>
              <li><span className="qIcon">✓</span> <span>You learn significantly faster by doing with live mentors beside you.</span></li>
              <li><span className="qIcon">✓</span> <span>You want direct, honest feedback on your editing choices before releasing work.</span></li>
            </ul>
          </div>

          <div className="qCard qCardSkip">
            <div className="qBadgeWrap">
              <span className="qBadge qBadgeGray">✕ NOT A FIT</span>
            </div>
            <h3>SKIP THIS IF:</h3>
            <ul>
              <li><span className="qIcon">✕</span> <span>You want passive recorded content that sits in your bookmark folder.</span></li>
              <li><span className="qIcon">✕</span> <span>You don't want to open software and edit during the session.</span></li>
              <li><span className="qIcon">✕</span> <span>You cannot attend in person at 88GB HQ in HSR Layout, Bengaluru.</span></li>
              <li><span className="qIcon">✕</span> <span>You are only looking for keyboard shortcuts rather than editorial thinking.</span></li>
              <li><span className="qIcon">✕</span> <span>You expect a single day to make you an expert without continuous practice.</span></li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
