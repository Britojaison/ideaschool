import Image from "next/image";

export default function ThunderVaultSection() {
  const vaultModules = [
    { num: "01", title: "Brief Breakdowns", desc: "Real agency client briefs with director notes, target pacing goals, and footage breakdown guides." },
    { num: "02", title: "Edit Decision Case Studies", desc: "Frame-by-frame dissection of why cuts were made, what was discarded, and how pacing was tuned." },
    { num: "03", title: "Live Edit Workflow Pack", desc: "Standardized agency bin structures, keyboard shortcut mappings, and timeline organization templates." },
    { num: "04", title: "Hook + Retention Swipe File", desc: "Proven retention hook structures categorized by genre, tone, and campaign objective." },
    { num: "05", title: "AI Workflow Kit", desc: "Curated AI tool stacks and prompting workflows for fast transcription, rotoscoping, and b-roll ideation." },
    { num: "06", title: "Templates + Editing Resources", desc: "Handcrafted color LUTs, sound design SFX beds, title graphics presets, and timeline review checklists." }
  ];

  return (
    <section className="thunderVaultSection" aria-label="The Thunder Vault">
      <div className="vaultInner">
        
        <div className="vaultHeader">
          <div className="vaultPills">
            <span className="vPill vPillGreen">BONUS INCLUSION //</span>
            <span className="vPill vPillPurple">LIFETIME ACCESS</span>
            <span className="vPill vPillDark">₹5,000+ value</span>
          </div>
          <h2>THE THUNDER VAULT</h2>
          <p>A preview of the resources and workflows that support the workshop. Build high-value editing skills used in paid freelance and agency work. Take home the exact swipe files, case studies, project templates, and AI workflows used inside 88GB.</p>
        </div>

        <div className="vaultImageWrap">
          {/* Replace this src with the actual vault mockup image when available */}
          <Image 
            src="/images/image-8.png" 
            alt="Idea Thunder Vault Dashboard" 
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}
          />
        </div>

        <div className="vaultModulesWrap">
          <div className="vModulesHeader">
            6 CORE VAULT MODULES INCLUDED // ZERO EXTRA COST
          </div>
          <div className="vModulesGrid">
            {vaultModules.map((mod, index) => (
              <div className="vModCard" key={index}>
                <div className="vModTop">
                  <span className="vModNum">{mod.num}</span>
                  <span className="vModAccess">INSTANT ACCESS</span>
                </div>
                <h3>{mod.title}</h3>
                <p>{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="vaultBanner">
          <div className="vBannerLeft">
            <h4>INCLUDED FREE WITH REGISTRATION</h4>
            <p>You receive immediate access after attending the workshop.</p>
          </div>
          <div className="vBannerRight">
            <span className="vBannerValue">WORTH <span style={{textDecoration: 'line-through'}}>₹5,000+</span></span>
            <button className="vBannerBtn">FREE FOR ATTENDEES</button>
          </div>
        </div>

      </div>
    </section>
  );
}
