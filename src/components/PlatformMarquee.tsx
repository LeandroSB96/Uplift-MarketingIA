const platforms = [
  { name: 'Google', descriptor: 'Ads' },
  { name: 'meta', descriptor: '' },
  { name: 'LinkedIn', descriptor: '' },
  { name: 'HubSpot', descriptor: '' },
  { name: 'Shopify', descriptor: '' },
  { name: 'Salesforce', descriptor: '' },
]

export function PlatformMarquee() {
  return (
    <section className="platform-strip" aria-label="Marketing platform ecosystem">
      <div className="shell platform-inner">
        <p className="platform-label">Illustrative ecosystem. Confirm available integrations before publishing.</p>
        <div className="platform-track">
          <div className="platform-list">
            {Array.from({ length: 2 }, (_, groupIndex) => (
              <div className="platform-group" aria-hidden={groupIndex === 1} key={groupIndex}>
                {platforms.map((platform) => (
                  <span className="platform-wordmark" key={platform.name}>
                    {platform.name}{platform.descriptor && <small>{platform.descriptor}</small>}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}