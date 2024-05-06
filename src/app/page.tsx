import { Footer } from '@/components/sections/footer/footer'
import { Header } from '@/components/sections/header/header'
import { Hero } from '@/components/sections/hero/hero'
import { HowWeWork } from '@/components/sections/how-we-work/how-we-work'
import { ReliabilitySection } from '@/components/sections/reliability-section/reliability-section'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <HowWeWork />
                <ReliabilitySection />
            </main>
            <Footer />
        </>
    )
}
