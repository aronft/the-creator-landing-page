import { Footer } from '@/components/sections/footer/footer'
import { Header } from '@/components/sections/header/header'
import { Hero } from '@/components/sections/hero/hero'
import { HowWeWork } from '@/components/sections/how-we-work/how-we-work'
import { PartnersSection } from '@/components/sections/partners-section/partners-section'
import { ReliabilitySection } from '@/components/sections/reliability-section/reliability-section'
import { ReviewSection } from '@/components/sections/review-section/review-section'

export default function Home() {
    return (
        <>
            <Header className="z-10" />
            <main className="overflow-x-hidden">
                <Hero />
                <PartnersSection />
                <HowWeWork />
                <ReviewSection />
                <ReliabilitySection />
            </main>
            <Footer />
        </>
    )
}
