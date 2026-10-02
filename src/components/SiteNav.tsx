'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../config/site'

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label={`${siteConfig.name} home`}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{siteConfig.name.slice(1)}</span>
        </a>
        <div className="nav-links">
          {siteConfig.navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          <a className="nav-cta" href="#contact">
            Talk to our team <span aria-hidden="true">&nearr;</span>
          </a>
        </div>
        <div className="mobile-menu">
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          {isOpen && (
            <div className="mobile-menu-panel" id="mobile-navigation">
              {siteConfig.navigation.map((item) => (
                <a href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Talk to our team
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}