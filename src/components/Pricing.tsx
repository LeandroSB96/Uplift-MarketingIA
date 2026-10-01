import { siteConfig } from '../config/site'

const plans = [
  {
    name: 'Starter',
    price: '$99',
    cadence: '/ month',
    summary: 'For a focused team validating its next growth opportunity.',
    features: ['1 ad platform', 'Campaign signal dashboard', 'Monthly opportunity review'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$299',
    cadence: '/ month',
    summary: 'For teams ready to turn more signals into a steady testing rhythm.',
    features: ['Up to 5 ad platforms', 'Audience and creative insights', 'Weekly recommendations', 'Priority support'],
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: 'for your team',
    summary: 'For complex portfolios that need a tailored operating model.',
    features: ['Unlimited workspaces', 'Custom data connections', 'Governance and onboarding'],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="shell section-space pricing-section">
      <div className="pricing-heading">
        <span className="section-kicker">Simple ways to get started</span>
        <h2 className="section-title">A plan for your next stage of growth.</h2>
        <p className="section-copy">Choose a starting point. You can change plans as your team and needs evolve.</p>
        <small className="sample-note">Sample USD pricing, billed monthly. Replace with your real offer before publishing.</small>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={`pricing-plan${plan.featured ? ' pricing-plan--featured' : ''}`} key={plan.name}>
            {plan.featured && <span className="plan-badge">Most popular</span>}
            <h3>{plan.name}</h3>
            <p className="plan-summary">{plan.summary}</p>
            <p className="plan-price"><strong>{plan.price}</strong><span>{plan.cadence}</span></p>
            <a
              className={plan.featured ? 'button-primary' : 'button-outline'}
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Plan inquiry: ${plan.name}`)}`}
            >
              {plan.name === 'Scale' ? 'Talk to our team' : 'Request this plan'}
              <span aria-hidden="true">&nearr;</span>
            </a>
            <ul>
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}