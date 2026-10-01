import { Approach } from '../src/components/Approach'
import { ClosingCTA } from '../src/components/ClosingCTA'
import { Engagement } from '../src/components/Engagement'
import { FAQ } from '../src/components/FAQ'
import { FeatureBento } from '../src/components/FeatureBento'
import { HeroIsland } from '../src/components/HeroIsland'
import { PlatformMarquee } from '../src/components/PlatformMarquee'
import { Pricing } from '../src/components/Pricing'
import { Proof } from '../src/components/Proof'
import { SiteFooter } from '../src/components/SiteFooter'
import { SiteNav } from '../src/components/SiteNav'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroIsland />
        <PlatformMarquee />
        <FeatureBento />
        <Proof />
        <Pricing />
        <Approach />
        <Engagement />
        <FAQ />
        <ClosingCTA />
      </main>
      <SiteFooter />
    </>
  )
}