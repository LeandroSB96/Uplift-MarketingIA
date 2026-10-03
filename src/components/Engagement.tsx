import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/site'

const engagements = [
  {
    name: 'Growth sprint',
    description: 'Focus on one clear opportunity, create a test plan, and establish a baseline for what success means.',
  },
  {
    name: 'Always-on',
    description: 'Keep measurement, creative learning, and budget decisions moving through a consistent operating rhythm.',
  },
  {
    name: 'Enterprise',
    description: 'Coordinate teams, markets, and governance requirements with an approach shaped to your organization.',
  },
]

export function Engagement() {
  return (
    <section id="engagement" className="shell section-space">
      <div className="engagement-card">
        <div>
          <span className="section-kicker">Designed around your operating model</span>
          <h2 className="section-title">Start with the growth challenge. Build from there.</h2>
          <p className="section-copy">Whether you are proving a channel or coordinating a global portfolio, the work starts with your goals, data, and team.</p>
          <a className="button-text" href={`mailto:${siteConfig.email}?subject=Discuss%20a%20marketing%20engagement`}>
            Discuss your priorities <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="engagement-list">
          {engagements.map((item) => (
            <div className="engagement-item" key={item.name}>
              <b>{item.name}</b><span>{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
