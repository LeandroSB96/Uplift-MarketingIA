import { siteConfig } from '../config/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true" /><span>{siteConfig.name}</span></a>
        <p className="footer-note">© {new Date().getFullYear()} {siteConfig.name}. Marketing, with a clearer signal.</p>
        <div className="footer-links">
          <a href="#pricing">Plans</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
