import React from "react";

const learnHeading = "WHAT YOU'LL LEARN".split("");

export default function WorkshopCurriculumFlow() {
  return (
    <section className="curriculumFlowSection workshopGsapSection" aria-label="Workshop Curriculum">
      <div className="curriculumFlowBgText">
        <div className="whatYouWillLearnHugeText" aria-label="What you'll learn">
          {learnHeading.map((letter, index) => (
            <span
              className={letter === " " ? "learnHugeSpace" : "learnHugeLetter"}
              aria-hidden="true"
              key={`${letter}-${index}`}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
      <div className="flowContainer" style={{ marginTop: "60vh", paddingBottom: "20vh" }}>
        
        {/* SVG Connectors for Desktop */}
        <svg className="flowLines" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
            </linearGradient>
          </defs>
          
          <g stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none">
            {/* From Node 1 to Nodes 2, 3, 4 */}
            <path d="M 330 450 C 375 450, 375 180, 420 180" />
            <path d="M 330 450 L 420 450" />
            <path d="M 330 450 C 375 450, 375 720, 420 720" />
            
            {/* From Nodes 2, 3, 4 to Node 5 */}
            <path d="M 680 180 C 725 180, 725 450, 770 450" />
            <path d="M 680 450 L 770 450" />
            <path d="M 680 720 C 725 720, 725 450, 770 450" />

            {/* From Node 5 to Node 6 */}
            <path d="M 1030 450 L 1120 450" />
          </g>

          {/* Connection Dots */}
          <g fill="#000000">
            <circle cx="330" cy="450" r="4" />
            <circle cx="420" cy="180" r="4" />
            <circle cx="420" cy="450" r="4" />
            <circle cx="420" cy="720" r="4" />
            <circle cx="680" cy="180" r="4" />
            <circle cx="680" cy="450" r="4" />
            <circle cx="680" cy="720" r="4" />
            <circle cx="770" cy="450" r="4" />
            <circle cx="1030" cy="450" r="4" />
            <circle cx="1120" cy="450" r="4" />
          </g>
        </svg>

        {/* Node 1 */}
        <div className="flowNode node-light" style={{ left: '14.28%', top: '50%' }}>
          <h3 className="nodeLabel">HOOK ENGINEERING</h3>
          <div className="nodeBox">
            <ul>
              <li>Create attention-grabbing hooks in the first 3 seconds</li>
              <li>Hook frameworks used by top creators</li>
              <li>Curiosity and retention strategies</li>
            </ul>
          </div>
        </div>

        {/* Node 2 */}
        <div className="flowNode node-dark" style={{ left: '39.28%', top: '20%' }}>
          <h3 className="nodeLabel">RETENTION EDITING</h3>
          <div className="nodeBox">
            <ul>
              <li>Keep viewers engaged till the end</li>
              <li>Pacing, cuts, visual storytelling & motion graphics</li>
              <li>Retention techniques behind viral content</li>
            </ul>
          </div>
        </div>

        {/* Node 3 */}
        <div className="flowNode node-light" style={{ left: '39.28%', top: '50%' }}>
          <h3 className="nodeLabel">DAY 1 BONUS</h3>
          <div className="nodeBox">
            <ul>
              <li>AI-Powered Editing Workflow with Higgsfield AI</li>
            </ul>
          </div>
        </div>

        {/* Node 4 */}
        <div className="flowNode node-dark" style={{ left: '39.28%', top: '80%' }}>
          <h3 className="nodeLabel"><span className="videoScrollHighlight">TYPOGRAPHY & SOUND</span></h3>
          <div className="nodeBox">
            <ul>
              <li>Animated captions and engaging typography</li>
              <li>Sound effects, music, and audio transitions</li>
              <li>Using audio to enhance viewer experience</li>
            </ul>
          </div>
        </div>

        {/* Node 5 */}
        <div className="flowNode node-light" style={{ left: '64.28%', top: '50%' }}>
          <h3 className="nodeLabel">VIRAL EDIT FRAMEWORK</h3>
          <div className="nodeBox">
            <ul>
              <li>Structure videos for maximum watch time</li>
              <li>Breakdown of successful viral edits</li>
              <li>Create content optimized for Reels, Shorts & Social Media</li>
            </ul>
          </div>
        </div>

        {/* Node 6 */}
        <div className="flowNode node-dark" style={{ left: '89.28%', top: '50%' }}>
          <h3 className="nodeLabel">DAY 2 BONUS</h3>
          <div className="nodeBox">
            <ul>
              <li>Access to Stock Videos & Assets</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
