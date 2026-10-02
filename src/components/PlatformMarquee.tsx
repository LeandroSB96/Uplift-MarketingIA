const platforms = [
  { name: 'Google', descriptor: 'Ads' },
  { name: 'meta', descriptor: '' },
  { name: 'LinkedIn', descriptor: '' },
  { name: 'HubSpot', descriptor: '' },
  { name: 'Shopify', descriptor: '' },
  { name: 'Salesforce', descriptor: '' },
]

export function PlatformMarquee() {
  const names = [...platforms, ...platforms]

  return (
    <section className="platform-strip" aria-label="Marketing platform ecosystem">
      <div className="shell platform-inner">
        <p className="platform-label">Illustrative ecosystem. Confirm available integrations before publishing.</p>
        <div className="platform-track">
          <div className="platform-list">
            {names.map((platform, index) => (
              <span className="platform-wordmark" aria-hidden={index >= platforms.length} key={`${platform.name}-${index}`}>
                {platform.name}{platform.descriptor && <small>{platform.descriptor}</small>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}