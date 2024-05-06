import { Card } from '@/components/ui/atoms/card/card'
import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'

import logo1 from '@/assets/charity-section/Logo.png'
import logo2 from '@/assets/charity-section/Logo-2.png'
import logo3 from '@/assets/charity-section/Logo-3.png'
import logo4 from '@/assets/charity-section/Logo-4.png'
import logo5 from '@/assets/charity-section/Logo-5.png'
import logo6 from '@/assets/charity-section/Logo-6.png'
import logo7 from '@/assets/charity-section/Logo-7.png'
import logo8 from '@/assets/charity-section/Logo-8.png'
import logo9 from '@/assets/charity-section/Logo-9.png'
import logo10 from '@/assets/charity-section/Logo-10.png'

import { LogoImage } from './logo-image'

export const ReliabilitySection = () => {
    return (
        <section className="isolate">
            <Container className="flex flex-col lg:flex-row gap-8">
                <Card
                    color="primary"
                    className="overflow-hidden flex flex-col gap-4 flex-1 "
                >
                    <div className="flex flex-nowrap justify-between gap-4 -ml-20 -mr-24">
                        <LogoImage src={logo1} alt="heart with plus icon" />
                        <LogoImage src={logo2} alt="heart with plus icon" />
                        <LogoImage src={logo3} alt="heart with plus icon" />
                        <LogoImage src={logo4} alt="heart with plus icon" />
                        <LogoImage src={logo5} alt="heart with plus icon" />
                    </div>
                    <div className="flex flex-nowrap justify-between gap-4 -ml-28 -mr-20">
                        <LogoImage src={logo6} alt="heart with plus icon" />
                        <LogoImage src={logo7} alt="heart with plus icon" />
                        <LogoImage src={logo8} alt="heart with plus icon" />
                        <LogoImage src={logo9} alt="heart with plus icon" />
                        <LogoImage src={logo10} alt="heart with plus icon" />
                    </div>
                    <p className="text-xl leading-8 font-medium">
                        {`We've participated in events for children's education,
                        health initiatives, and disaster relief. We're dedicated
                        to ongoing involvement and exploring new opportunities.`}
                    </p>
                </Card>
                <Card className="flex flex-col gap-4 flex-1">
                    <Heading size="medium" tag="h2">
                        Charity
                    </Heading>
                    <p className="text-xl leading-8 font-medium">
                        Our creative agency supports charities globally, using
                        our skills in branding, marketing, and social media to
                        make a positive impact on local communities and raise
                        awareness about important causes.
                    </p>
                </Card>
            </Container>
        </section>
    )
}
