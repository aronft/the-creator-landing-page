import { Footer } from '@/components/sections/footer/footer'
import { Header } from '@/components/sections/header/header'
import { Hero } from '@/components/sections/hero/hero'
import { HowWeWork } from '@/components/sections/how-we-work/how-we-work'
import { PartnersSection } from '@/components/sections/partners-section/partners-section'
import { ReliabilitySection } from '@/components/sections/reliability-section/reliability-section'
import { ReviewSection } from '@/components/sections/review-section/review-section'
import { DATA } from '@/constants/data'

export default function Home() {
    return (
        <>
            <Header className="z-10" />
            <main className="overflow-x-hidden">
                <Hero />
                <PartnersSection id="partners-section" />
                <HowWeWork id="how-we-work-section" />
                <ReviewSection id="review-section" />
                <ReliabilitySection id="charity-section" />
            </main>
            <Footer />
        </>
    )
}
