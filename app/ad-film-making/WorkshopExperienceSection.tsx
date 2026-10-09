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
      </div>
    </section>
  );
}
