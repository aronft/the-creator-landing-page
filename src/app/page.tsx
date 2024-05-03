import { Footer } from '@/components/sections/footer/footer'
import { Header } from '@/components/sections/header/header'
import { ReliabilitySection } from '@/components/sections/reliability-section/reliability-section'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <ReliabilitySection />
            </main>
            <Footer />
        </>
    )
}
