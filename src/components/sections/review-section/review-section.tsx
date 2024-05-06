import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'
import Image from 'next/image'
import titleImage1 from '@/assets/review-section/avatar-4.png'
import titleImage2 from '@/assets/review-section/avatar-3.png'
import titleImage3 from '@/assets/review-section/avatar-5.png'
import { SemiCircle } from '@/components/vectors/semi-circle'
import { SemiCircleAlt } from '@/components/vectors/semi-circle-alt'
import { Underlined } from '@/components/vectors/underlined'
import { Button } from '@/components/ui/atoms/button/button'
import { ArrowLeft } from '@/components/icons/arrow-left'
import { Icon } from '@/components/ui/atoms/icon/icon'

export const ReviewSection = () => {
    return (
        <section className="py-16">
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
                        className="aspect-square rounded-2xl inline-block mx-4"
                    />
                    <span>over 3,000 creators how to</span>
                    <Image
                        width={64}
                        height={64}
                        src={titleImage2}
                        alt=""
                        aria-hidden
                        className="aspect-square rounded-2xl inline-block mx-4"
                    />
                    <span className="relative inline-block">
                        <SemiCircleAlt
                            className="absolute top-0 h-full scale-105 w-full hidden md:block"
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
                            className="absolute top-full w-[60%] left-1/2 -translate-x-1/2"
                            aria-hidden
                        />
                    </span>{' '}
                    for you
                </Heading>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <p className="text-3xl font-bold text-center md:text-start max-w-md ">
                        See what our famous clients write about us:
                    </p>

                    <div className="flex gap-4">
                        <Button
                            className="h-10 w-10 rounded-full p-2 flex items-center justify-center bg-transparent
                                border-primary border"
                        >
                            <Icon icon={'arrowLeft'} className="w-6" />
                        </Button>
                        <Button className="h-10 w-10 rounded-full p-2 flex items-center justify-center bg-primary">
                            <Icon icon={'arrowRight'} className="w-6" />
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
