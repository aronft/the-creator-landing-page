'use client'
import { Card } from '@/components/ui/atoms/card/card'
import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'
import { UnderLineAlt } from '@/components/vectors/underline-alt'
import { Partners } from './partners'
import { PartnerSectionLine } from '@/components/vectors/partner-section-line'
import {
    SectionLayout,
    SectionLayoutProps,
} from '@/components/ui/layout/section-layout'
import useOnEscreen from '@/hooks/use-on-escreen'
import { cn } from '@/utils/class-names'
import { withAnimation } from '@/components/hoc/with-animation'

export const PartnersSection = ({ ...props }: SectionLayoutProps) => {
    const { ref, isIntersecting } = useOnEscreen<SVGSVGElement>({
        threshold: 0.5,
    })
    return (
        <SectionLayout {...props}>
            <PartnerSectionLine
                className={cn(
                    'absolute w-[50%] -left-5 max-w-2xl hidden lg:block lg:opacity-0 text-primary-alt',
                    { 'animation-left-line lg:opacity-100 ': isIntersecting }
                )}
                aria-hidden
                ref={ref}
            />
            <Container className="flex flex-col items-center gap-16 relative">
                <Heading className="max-w-4xl text-center" size="big" tag="h2">
                    Contact us today to explore partnership{' '}
                    <span className="inline-block relative">
                        <UnderLineAlt className="text-primary absolute md:scale-105 w-full bottom-0 translate-y-1/2" />
                        <span className="relative">opportunities!</span>
                    </span>
                </Heading>
                <Card className="p-6 lg:py-16 lg:px-28 flex flex-col lg:flex-row flex-wrap gap-8">
                    <div className="flex flex-col gap-4 flex-1">
                        <Heading tag="h3" className="text-3xl">
                            Partners:
                        </Heading>
                        <p className="text-xl">
                            Our creative agency forms strong partnerships with
                            diverse businesses, from startups to global brands,
                            based on trust, respect, and a shared vision for
                            success.
                        </p>
                    </div>
                    <Partners className="w-full lg:w-1/2" />
                </Card>
            </Container>
        </SectionLayout>
    )
}
