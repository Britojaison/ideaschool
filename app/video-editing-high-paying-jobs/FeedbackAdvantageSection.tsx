export default function FeedbackAdvantageSection() {
  return (
    <section className="feedbackAdvantageSection" aria-label="The Feedback Advantage">
      <div className="feedbackInner">
        
        <div className="feedbackHeader">
          <span className="feedbackSubtitle">DIFFERENTIATION BY DESIGN THE FEEDBACK ADVANTAGE</span>
          <h2>YOUTUBE CAN TEACH THE TOOL. IT CAN'T REVIEW YOUR TIMELINE.</h2>
          
          <div className="feedbackQuotes">
            <div className="fQuote">"This intro is too slow."</div>
            <div className="fQuote">"Cut this earlier."</div>
            <div className="fQuote">"You're losing attention here."</div>
            <div className="fQuote">"This shot isn't helping the story."</div>
          </div>
          
          <p className="feedbackHighlight">THAT'S WHAT LIVE FEEDBACK CHANGES.</p>
        </div>

        <div className="feedbackTableWrap">
          <table className="feedbackTable">
            <thead>
              <tr>
                <th>DECISION FACTOR</th>
                <th className="highlightCol">Idea School workshop</th>
                <th>Tutorials</th>
                <th>Typical course</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Feedback on your own edit</td>
                <td className="highlightCol"><span className="checkIcon">✓</span> Live, 1-on-1 mentor review on your actual timeline</td>
                <td><span className="crossIcon">✕</span> None — you edit completely in isolation</td>
                <td><span className="dashIcon">—</span> Automated quizzes or community thread</td>
              </tr>
              <tr>
                <td>Working agency editors</td>
                <td className="highlightCol"><span className="checkIcon">✓</span> Active commercial directors, colorists, and post leads</td>
                <td><span className="crossIcon">✕</span> Solo YouTubers with varying commercial standards</td>
                <td><span className="dashIcon">—</span> Career course creators</td>
              </tr>
              <tr>
                <td>Agency workflow</td>
                <td className="highlightCol"><span className="checkIcon">✓</span> Real multi-track project structures and client briefs</td>
                <td><span className="crossIcon">✕</span> Fragmented 5-minute software tricks</td>
                <td><span className="dashIcon">—</span> Artificial classroom exercises</td>
              </tr>
              <tr>
                <td>Live questions</td>
                <td className="highlightCol"><span className="checkIcon">✓</span> Ask anything in real time as you run into friction</td>
                <td><span className="crossIcon">✕</span> Unanswered comment section</td>
                <td><span className="dashIcon">—</span> Slow forum replies or Discord channels</td>
              </tr>
              <tr>
                <td>Finish an edit</td>
                <td className="highlightCol"><span className="checkIcon">✓</span> You complete and polish an agency-level cut by 5 PM</td>
                <td><span className="crossIcon">✕</span> Endless unfinished practice files</td>
                <td><span className="dashIcon">—</span> Weeks of half-watched video modules</td>
              </tr>
              <tr>
                <td>In-person review</td>
                <td className="highlightCol"><span className="checkIcon">✓</span> Real room, real monitors, over-the-shoulder feedback</td>
                <td><span className="crossIcon">✕</span> Zero in-person connection</td>
                <td><span className="dashIcon">—</span> Zero in-person connection</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
