const steps = [
  {
    title: 'Unify the picture',
    description: 'Bring campaign, audience, and creative signals into a shared view your team can trust.',
  },
  {
    title: 'Identify the opportunity',
    description: 'Use predictive insight to prioritize where attention and investment can have the most impact.',
  },
  {
    title: 'Act, learn, improve',
    description: 'Turn recommendations into deliberate tests, then feed the learning back into your next move.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="approach-section section-space">
      <div className="shell">
        <span className="section-kicker">A practical path to better performance</span>
        <h2 className="section-title">Intelligence is only useful when it changes what happens next.</h2>
        <div className="approach-grid">
          {steps.map((step, index) => (
            <article className="approach-step" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
