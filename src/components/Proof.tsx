const proofPoints = [
  { value: '+18.6%', label: 'Sample improvement in spend efficiency' },
  { value: '-22%', label: 'Sample reduction in reporting time' },
  { value: '2.4x', label: 'Sample increase in testing velocity' },
]

export function Proof() {
  return (
    <section className="proof-section">
      <div className="shell proof-inner">
        <div className="proof-heading">
          <span className="section-kicker">Illustrative customer outcomes</span>
          <h2>Make the impact easy to see.</h2>
          <p>Replace these sample figures and the quote with verified results before publishing.</p>
        </div>
        <div className="proof-metrics">
          {proofPoints.map((point) => (
            <div className="proof-metric" key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
        <figure className="proof-quote">
          <blockquote>“Uplift helped our team spend less time reconciling reports and more time acting on what we learned.”</blockquote>
          <figcaption>Jordan Lee <span>VP of Growth, Northstar Labs (sample)</span></figcaption>
        </figure>
      </div>
    </section>
  )
}