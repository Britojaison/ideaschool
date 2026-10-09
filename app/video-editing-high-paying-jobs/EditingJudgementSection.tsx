export default function EditingJudgementSection() {
  return (
    <section className="editingJudgement" aria-label="Editing judgement strategy">
      <div className="editingJudgementInner">
        
        <div className="judgementHeader">
          <span className="judgementSubtitle">STRATEGIC EDITING JUDGEMENT THE 4 CUT PHASES</span>
          <h2>KNOWING THE SOFTWARE<br/>ISN'T THE HARD PART</h2>
          
          <div className="judgementPills">
            <span className="judgementPill">Where to cut.</span>
            <span className="judgementPill">What to remove.</span>
            <span className="judgementPill">How to hold attention.</span>
            <span className="judgementPill">Why an edit feels slow.</span>
          </div>
          
          <p className="judgementHighlight">THAT'S THE LAYER THIS WORKSHOP TEACHES.</p>
        </div>

        <div className="judgementTimelineWrap">
          <div className="timelineEditor">
            <div className="timelineEditorTop">
              <div className="timelineDots">
                <span className="dotRed"></span>
                <span className="dotYellow"></span>
                <span className="dotGreen"></span>
              </div>
              <span className="timelineProjectName">88GB_COMMERCIAL_MASTER_v04.prproj</span>
              <span className="timelineTimecode">00:00:18:14</span>
            </div>

            <div className="timelineTimeRuler">
              <span>00:00</span>
              <span>00:10</span>
              <span>00:20</span>
              <span>00:30</span>
              <span>00:40</span>
              <span>00:50</span>
            </div>

            <div className="timelineEditorTracks">
              <div className="timelinePlayhead" style={{ left: '38%' }}></div>
              
              <div className="timelineTrack">
                <span className="trackLabel">V2</span>
                <div className="trackItems">
                  <div className="trackItem itemGreen" style={{ left: '3%', width: '18%' }}>HOOK_OVERLAY</div>
                  <div className="trackItem itemPurple" style={{ left: '42%', width: '22%' }}>MICRO_RESET_BROLL</div>
                  <div className="trackItem itemBlue" style={{ left: '71%', width: '22%' }}>TITLE_PAYOFF</div>
                </div>
              </div>
              
              <div className="timelineTrack">
                <span className="trackLabel">V1</span>
                <div className="trackItems">
                  <div className="trackItem itemGray" style={{ left: '3%', width: '16%' }}>A_CAM_01</div>
                  <div className="trackItem itemGray" style={{ left: '19.5%', width: '18%' }}>A_CAM_02</div>
                  <div className="trackItem itemGray" style={{ left: '42%', width: '26%' }}>A_CAM_03</div>
                  <div className="trackItem itemGray" style={{ left: '68.5%', width: '22%' }}>A_CAM_04</div>
                </div>
              </div>
              
              <div className="timelineTrack">
                <span className="trackLabel">A1</span>
                <div className="trackItems">
                  <div className="trackItem itemDarkGreen" style={{ left: '3%', width: '92%' }}>SYNC_DIALOGUE_MASTER (NOISE CLEANED)</div>
                </div>
              </div>
              
              <div className="timelineTrack">
                <span className="trackLabel">A2</span>
                <div className="trackItems">
                  <div className="trackItem itemOrange" style={{ left: '3%', width: '13%' }}>WHOOSH_HIT</div>
                  <div className="trackItem itemOrange" style={{ left: '39%', width: '13%' }}>RISER_DROP</div>
                  <div className="trackItem itemOrange" style={{ left: '73%', width: '16%' }}>SUB_BOOM_OUTRO</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="judgementGrid">
          <div className="judgementCard">
            <div className="judgementCardTop">
              <span className="jcNum">01</span>
              <span className="jcTag tagHook">HOOK</span>
            </div>
            <h3>Hook Engineering</h3>
            <span className="jcTime">00:00 - 00:03</span>
            <p>Cut dead frames before speech starts. Start in motion. Engineer visual intrigue in the first 90 frames so the viewer never swipes away.</p>
          </div>
          <div className="judgementCard">
            <div className="judgementCardTop">
              <span className="jcNum">02</span>
              <span className="jcTag tagPace">PACE</span>
            </div>
            <h3>Retention Rhythm</h3>
            <span className="jcTime">00:03 - 00:18</span>
            <p>Pacing isn't just fast cutting. It is rhythm, contrast, breath, and knowing when to let an emotional or visual beat land with weight.</p>
          </div>
          <div className="judgementCard">
            <div className="judgementCardTop">
              <span className="jcNum">03</span>
              <span className="jcTag tagReset">RESET</span>
            </div>
            <h3>Attention Resets</h3>
            <span className="jcTime">00:18 - 00:35</span>
            <p>Attention decays every 4 to 6 seconds. Insert micro-resets—focal shifts, sound drops, unexpected angles—to perpetually reset focus.</p>
          </div>
          <div className="judgementCard">
            <div className="judgementCardTop">
              <span className="jcNum">04</span>
              <span className="jcTag tagPayoff">PAYOFF</span>
            </div>
            <h3>The Closing Payoff</h3>
            <span className="jcTime">00:35 - 00:50</span>
            <p>Deliver the emotional or commercial conclusion cleanly. An edit that doesn't stick the landing wastes the entire retention curve.</p>
          </div>
        </div>

        <div className="judgementFooter">
          <h3>SOFTWARE KNOWLEDGE &ne; EDITING JUDGEMENT.</h3>
          <p>Anyone can memorize keyboard shortcuts. What makes an editor hireable is knowing why to make the cut.</p>
        </div>
        
      </div>
    </section>
  );
}
