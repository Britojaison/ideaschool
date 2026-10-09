import Image from "next/image";

export default function ThunderVaultSection() {
  return (
    <section className="thunderVaultSection" aria-label="The Thunder Vault">
      <div className="vaultInner">
        
        <div className="vaultNewWrap">
          
          <div className="vaultTopRow">
            <div className="vaultTopLeft">
              <h3>IDEA SCHOOL</h3>
              <h2>Idea <span style={{ color: '#dafd55' }}>Thunder Vault</span></h2>
              <p>Bonus tools, breakdowns and resources to help you go further. Real examples. Practical frameworks. <span style={{ color: '#dafd55' }}>Lifetime access.</span></p>
            </div>
            
            <div className="vaultTopRight">
              <div className="vaultFeatures">
                <div className="vaultFeatureItem">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  Real-World<br/>Examples
                </div>
                <div className="vaultFeatureItem">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  Practical<br/>Frameworks
                </div>
                <div className="vaultFeatureItem">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Created by<br/>Industry Pros
                </div>
              </div>
              
              <div className="vaultLifetimeBadge">
                <h4>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm10 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-5 4s1.5-2 2-2M12 12s-1.5 2-2 2"></path></svg>
                  LIFETIME<br/>ACCESS
                </h4>
                <p>LEARN TODAY.<br/>USE FOREVER.</p>
              </div>
            </div>
          </div>
          
          <div className="vaultGrid">
            
            {/* Featured Card */}
            <div className="vCardFeatured">
              <div className="vCardFeaturedBg">
                <Image src="/images/bg1.webp" alt="Notebook" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="vCardFeaturedContent">
                <span className="vCardFeaturedTag">FEATURED</span>
                <h3>Brief<br/>Breakdowns</h3>
                <p>Real briefs. Real thinking. See how great ideas start.</p>
                
                <div className="vCardFeaturedStats">
                  <div className="vCardStat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <span>12 LESSONS<br/>2H 14M</span>
                  </div>
                  <div className="vCardStat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    <span>PDF<br/>BRIEF EXAMPLES</span>
                  </div>
                  <div className="vCardStat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>DOWNLOAD<br/>WORKSHEETS</span>
                  </div>
                </div>
                
                <div className="vCardFeaturedFooter">
                  <button className="vCardStartBtn">
                    <span className="vCardStartIcon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </span>
                    Start Learning
                  </button>
                  <p className="vCardFeaturedQuote">"The difference between a good idea and a great one is in the brief."</p>
                </div>
              </div>
            </div>
            
            {/* Card 1 */}
            <div className="vCardSmall">
              <div className="vCardSmallImgWrap">
                <div className="vCardSmallTime">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> 1H 32M
                </div>
                <Image src="/images/work1.webp" alt="Timeline" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="vCardSmallContent">
                <h4>Edit Decision Case Studies</h4>
                <p>Go inside real edits. See the why behind every cut.</p>
                <div className="vCardSmallFooter">
                  <span className="vCardSmallBadge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg> 5 CASE STUDIES
                  </span>
                  <span className="vCardSmallIcon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="vCardSmall">
              <div className="vCardSmallImgWrap">
                <div className="vCardSmallTime">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> 47M
                </div>
                <Image src="/images/gallery2.webp" alt="Live Edit" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="vCardSmallContent">
                <h4>Live Edit Workflow Pack</h4>
                <p>From project setup to final export. Our end-to-end process.</p>
                <div className="vCardSmallFooter">
                  <span className="vCardSmallBadge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> WORKFLOW
                  </span>
                  <span className="vCardSmallIcon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="vCardSmall">
              <div className="vCardSmallImgWrap">
                <div className="vCardSmallTime">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> 38M
                </div>
                <Image src="/images/gallery3.webp" alt="Swipe File" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="vCardSmallContent">
                <h4>Hook + Retention Swipe File</h4>
                <p>Proven hooks, patterns and examples you can use.</p>
                <div className="vCardSmallFooter">
                  <span className="vCardSmallBadge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg> PDF 100+ EXAMPLES
                  </span>
                  <span className="vCardSmallIcon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="vCardSmall">
              <div className="vCardSmallImgWrap">
                <div className="vCardSmallTime">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> 1H 08M
                </div>
                <Image src="/images/work2.webp" alt="AI Tools" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="vCardSmallContent">
                <h4>AI Workflow Kit</h4>
                <p>Save time. Go further. Practical AI tools for creators.</p>
                <div className="vCardSmallFooter">
                  <span className="vCardSmallBadge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg> TOOLS + TEMPLATES
                  </span>
                  <span className="vCardSmallIcon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="vCardSmall">
              <div className="vCardSmallImgWrap">
                <div className="vCardSmallTime">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> 24M
                </div>
                <Image src="/images/gallery4.webp" alt="Resources" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="vCardSmallContent">
                <h4>Templates + Resources</h4>
                <p>Plug-and-play assets to speed up your workflow.</p>
                <div className="vCardSmallFooter">
                  <span className="vCardSmallBadge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> 50+ FILES
                  </span>
                  <span className="vCardSmallIcon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Checklist Card */}
            <div className="vCardChecklist">
              <h4>SAME TOOLS.<br/>BIGGER IDEAS.</h4>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Lifetime access
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Regularly updated
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Use in your own work
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  No extra costs, ever
                </li>
              </ul>
            </div>
            
          </div>
          
          <div className="vaultFooterBar">
            <div className="vaultFooterLeft">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              <p>
                <strong>YOUR CREATIVE ADVANTAGE</strong><br/>
                Tools. Templates. Real-World Insights. All in One Place.
              </p>
            </div>
            <button className="vBannerBtnOutline">
              UNLOCK THE VAULT <span>&rarr;</span>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
