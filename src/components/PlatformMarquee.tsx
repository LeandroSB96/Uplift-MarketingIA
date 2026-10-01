'use client'

import { motion, useReducedMotion } from 'framer-motion'

const platforms = [
  { name: 'Google', descriptor: 'Ads' },
  { name: 'meta', descriptor: '' },
  { name: 'LinkedIn', descriptor: '' },
  { name: 'HubSpot', descriptor: '' },
  { name: 'Shopify', descriptor: '' },
  { name: 'Salesforce', descriptor: '' },
]

export function PlatformMarquee() {
  const reduceMotion = useReducedMotion()
  const names = [...platforms, ...platforms]

  return (
    <section className="platform-strip" aria-label="Marketing platform ecosystem">
      <div className="shell platform-inner">
        <p className="platform-label">Illustrative ecosystem. Confirm available integrations before publishing.</p>
        <div className="platform-track">
          <motion.div
            className="platform-list"
            animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={reduceMotion ? undefined : { duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {names.map((platform, index) => (
              <span className="platform-wordmark" aria-hidden={index >= platforms.length} key={`${platform.name}-${index}`}>
                {platform.name}{platform.descriptor && <small>{platform.descriptor}</small>}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}