const bars = [29, 44, 38, 62, 49, 70, 58, 81, 67, 93, 78, 100]

export function FeatureBento() {
  return (
    <section id="platform" className="shell section-space features-section">
      <div className="section-head">
        <div>
          <span className="section-kicker">A clearer growth engine</span>
          <h2 className="section-title">From scattered signals to decisive action.</h2>
        </div>
        <p className="section-copy">Connect the work behind your campaigns, understand what is changing, and move budget and creative with intent.</p>
      </div>

      <div className="feature-grid">
        <article className="feature-card feature-card--wide">
          <span className="feature-index">01 / MEDIA INTELLIGENCE</span>
          <h3>Spend with a signal, not a hunch.</h3>
          <p>Surface the audiences, placements, and campaigns that are earning the next dollar of investment.</p>
          <div className="feature-visual mini-bars" aria-hidden="true">
            {bars.map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}
          </div>
        </article>

        <article className="feature-card feature-card--narrow">
          <span className="feature-index">02 / PREDICTIVE ANALYTICS</span>
          <h3>See the shift before the report.</h3>
          <p>Bring leading indicators forward so your team can respond while there is still room to move.</p>
          <div className="feature-visual">
            <div className="signal-row"><span>Qualified demand</span><strong>Rising</strong></div>
            <div className="signal-row"><span>Creative fatigue</span><strong>Watch</strong></div>
            <div className="signal-row"><span>Sample opportunity</span><strong>+14.2%</strong></div>
          </div>
        </article>

        <article className="feature-card feature-card--third">
          <span className="feature-index">03 / AUDIENCE SIGNALS</span>
          <h3>Find the next best audience.</h3>
          <p>Translate customer behavior into segments your team can test and learn from.</p>
          <div className="audience-pills" aria-hidden="true"><span>High intent</span><span>Expansion</span><span>Returning</span><span>Lookalike</span></div>
        </article>

        <article className="feature-card feature-card--third">
          <span className="feature-index">04 / CREATIVE SYSTEM</span>
          <h3>Make every idea testable.</h3>
          <p>Organize messages and creative variations around a clear learning agenda.</p>
          <div className="content-stack" aria-hidden="true">
            <span className="content-tile">New angle<b>Awareness</b></span>
            <span className="content-tile">Proof point<b>Consideration</b></span>
            <span className="content-tile">Offer test<b>Conversion</b></span>
          </div>
        </article>

        <article className="feature-card feature-card--third">
          <span className="feature-index">05 / WORKFLOW AUTOMATION</span>
          <h3>Keep good decisions moving.</h3>
          <p>Turn recurring analysis and campaign actions into a workflow your team can govern.</p>
          <div className="feature-visual">
            <div className="signal-row"><span>Detect</span><strong>Signal found</strong></div>
            <div className="signal-row"><span>Recommend</span><strong>Review ready</strong></div>
            <div className="signal-row"><span>Activate</span><strong>Team approved</strong></div>
          </div>
        </article>
      </div>
    </section>
  )
}