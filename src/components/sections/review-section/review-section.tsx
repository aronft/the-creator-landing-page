'use client'
import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'
import Image from 'next/image'
import titleImage1 from '@/assets/review-section/avatar-4.png'
import titleImage2 from '@/assets/review-section/avatar-3.png'
import titleImage3 from '@/assets/review-section/avatar-5.png'
import { SemiCircleAlt } from '@/components/vectors/semi-circle-alt'
import { Underlined } from '@/components/vectors/underlined'
import { Reviews } from './reviews'
import {
    SectionLayout,
    SectionLayoutProps,
} from '@/components/ui/layout/section-layout'

export const ReviewSection = ({ ...props }: SectionLayoutProps) => {
    return (
        <SectionLayout {...props}>
            <Container className="flex flex-col gap-16">
                <p className="text-center text-xl">
                    Hear from our customers from Top YouTube Channel
                </p>
                <Heading
                    tag="h2"
                    size="big"
                    className="text-center md:text-start"
                >
                    <span>{`We’ve taught`} </span>
                    <Image
                        src={titleImage1}
                        width={64}
                        height={64}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="aspect-square rounded-2xl inline-block mx-4"
                    />
                    <span>over 3,000 creators how to</span>
                    <Image
                        width={64}
                        height={64}
                        src={titleImage2}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="aspect-square rounded-2xl inline-block mx-4"
                    />
                    <span className="relative inline-block">
                        <SemiCircleAlt
                            className="absolute top-0 h-full scale-105 w-full hidden md:block text-primary-alt"
                            aria-hidden
                        />
                        <span className="relative">grow on any Platform</span>
                    </span>
                    <Image
                        width={64}
                        height={64}
                        src={titleImage3}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="aspect-square rounded-2xl inline-block mx-4"
                    />
                </Heading>
                <Heading
                    tag="h2"
                    size="big"
                    className="text-center md:text-start"
                >
                    Now{' '}
                    <span className="inline-block relative">
                        we can do it
                        <Underlined
                            className="absolute top-full w-[60%] left-1/2 -translate-x-1/2 text-primary-alt"
                            aria-hidden
                        />
                    </span>{' '}
                    for you
                </Heading>

                <Reviews />
            </Container>
        </SectionLayout>
    )
}
