export default function WorkshopTimelineSection() {
  const timelineData = [
    { time: "11:00 AM", title: "Get Set Up", desc: "Welcome, workstation setup, raw footage ingest, and project brief unpacking." },
    { time: "11:15 AM", title: "Hook Engineering", desc: "Analyzing visual hooks, drop-off curves, and first 3-second retention mechanics." },
    { time: "12:15 PM", title: "Retention Editing", desc: "Cutting for rhythm, micro-resets, narrative tension, and momentum management." },
    { time: "1:15 PM", title: "Break", desc: "Pause, reset, lunch, and discussions with the 88GB creative team." },
    { time: "2:00 PM", title: "Design + Sound", desc: "Layering sound effects, audio ducking, kinetic graphics, and visual hierarchy." },
    { time: "2:45 PM", title: "Viral Edit Framework", desc: "Dissecting high-performing commercial edits and organic viral timelines." },
    { time: "3:30 PM", title: "AI-Integrated Workflow", desc: "Speeding up transcript cuts, motion tracking, cleanup, and ideation using AI tools." },
    { time: "4:15 PM", title: "Live Edit + Mentor Review", desc: "Hands-on edit session followed by direct over-the-shoulder feedback from mentors." },
  ];

  return (
    <section className="workshopTimelineSection" aria-label="Workshop Timeline">
      <div className="workshopTimelineInner">
        
        <div className="timelineHeader">
          <span className="timelineSubtitle">WORKSHOP TIMELINE // 11 AM &mdash; 5 PM</span>
          <h2>BY 5 PM, YOU SHOULD<br/>UNDERSTAND WHY EVERY CUT IS THERE</h2>
          <p>One day. One structured workflow. One edit reviewed by a mentor.</p>
          
          <div className="timelineActions">
            <span className="tAction">WATCH</span>
            <span className="tAction">EDIT</span>
            <span className="tAction">REVIEW</span>
            <span className="tAction">IMPROVE</span>
          </div>
        </div>

        <div className="timelineCardsGrid">
          {timelineData.map((item, index) => (
            <div className="tScheduleCard" key={index}>
              <div className="tCardHeader">
                <span className="tTimeBadge">{item.time}</span>
                <div className="tCardDot"></div>
              </div>
              <div className="tCardBody">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="timelineFooter">
          <div className="timelineFooterTop">
            <span className="footerHeaderTitle">TOOLS COVERED IN THE ROOM</span>
            <span className="footerHeaderSub">Principles work in any NLE software</span>
          </div>
          <div className="timelineToolsGrid">
            <div className="tToolCard">
              <h4>Premiere Pro</h4>
              <p>Timeline &amp; Narrative Pacing</p>
            </div>
            <div className="tToolCard">
              <h4>After Effects</h4>
              <p>Kinetic Titles &amp; Motion</p>
            </div>
            <div className="tToolCard">
              <h4>Photoshop</h4>
              <p>Asset Prep &amp; Thumbnails</p>
            </div>
            <div className="tToolCard">
              <h4>AI Tools</h4>
              <p>Transcript, Roto &amp; Audio Cleanup</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
