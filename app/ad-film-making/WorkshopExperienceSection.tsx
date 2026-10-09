"use client";



export default function WorkshopExperienceSection() {
  return (
    <section className="workshopExperience" aria-label="Workshop experience">
      <div className="workshopExperienceInner">
        <div className="workshopExperienceHeader">
          <span className="workshopExperienceSubtitle">IN-PERSON IMMERSION // 88GB STUDIO</span>
          <h2>See what an Idea School workshop actually feels like</h2>
          <p>
            Not another tab open on your laptop. A room full of people watching, editing, questioning and getting better.
          </p>
        </div>

        <div className="workshopExperienceVideoWrap">
          <video
            className="workshopExperienceVideo"
            src="/images/HOME PAGE VIDEO.mp4#t=0.5"
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload noplaybackrate noremoteplayback"
            aria-label="IDEA School classroom video"
          />
        </div>

        <div className="workshopExperienceFeatures">
          <div className="workshopFeatureCol">
            <h4>REAL ROOM</h4>
            <p>Physical creative studio, high-energy environment</p>
          </div>
          <div className="workshopFeatureCol">
            <h4>REAL EDITS</h4>
            <p>Working on actual commercial campaign footage</p>
          </div>
          <div className="workshopFeatureCol">
            <h4>REAL FEEDBACK</h4>
            <p>Live over-the-shoulder timeline critique</p>
          </div>
        </div>

        <div className="workshopExperienceBreakdown">
          <div className="breakdownHeader">
            <h5>AUTHENTIC FOOTAGE BREAKDOWN // 5 CRITICAL MOMENTS</h5>
            <span>EXTRACTED FROM IN-SESSION MASTER FOOTAGE</span>
          </div>
          
          <div className="breakdownGrid">
            {[
              { id: 1, tc: "00:00:03:00", title: "STUDIO SETUP", desc: "Physical studio space in HSR Layout", img: "/images/DSC00024.webp" },
              { id: 2, tc: "00:00:08:15", title: "HANDS-ON CUTTING", desc: "Every editor on their own laptop & project", img: "/images/DSC00033.webp" },
              { id: 3, tc: "00:00:13:06", title: "TIMELINE ARCHITECTURE", desc: "Multi-track pacing and commercial structure", img: "/images/DSC00041.webp" },
              { id: 4, tc: "00:00:18:00", title: "1-ON-1 CRITIQUE", desc: "Direct feedback on why to make the cut", img: "/images/DSC00048.webp" },
              { id: 5, tc: "00:00:23:15", title: "GROUP SESSION", desc: "Interactive cohort discussion & questions", img: "/images/DSC00057.webp" }
            ].map(item => (
              <div className="breakdownCard" key={item.id}>
                <div className="breakdownCardImgWrap">
                  <span className="breakdownCardTag">#{item.id}</span>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="breakdownCardContent">
                  <span className="breakdownCardTc">TC {item.tc}</span>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="workshopExperienceAction">
          <a href="#apply-form" className="reserveSeatBtn">
            Reserve your workshop seat — ₹499 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
