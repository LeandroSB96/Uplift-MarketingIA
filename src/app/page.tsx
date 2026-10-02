import { Approach } from '@/components/Approach'
import { ClosingCTA } from '@/components/ClosingCTA'
import { Engagement } from '@/components/Engagement'
import { FAQ } from '@/components/FAQ'
import { FeatureBento } from '@/components/FeatureBento'
import { HeroIsland } from '@/components/HeroIsland'
import { PlatformMarquee } from '@/components/PlatformMarquee'
import { Pricing } from '@/components/Pricing'
import { Proof } from '@/components/Proof'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteNav } from '@/components/SiteNav'

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