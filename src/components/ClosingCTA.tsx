import { siteConfig } from '../config/site'
import { LeadForm } from './LeadForm'

export function ClosingCTA() {
  return (
    <section id="contact" className="shell section-space">
      <div className="closing-cta contact-layout">
        <div className="contact-copy">
          <span className="section-kicker">Your next decision can be a better one</span>
          <h2>Give your marketing team a clearer signal.</h2>
          <p>Tell us where growth feels harder than it should. We will help you frame a practical next step.</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <LeadForm />
      </div>
    </section>
  )
}
