import { SubscriptionButton } from '@/components/common/subscripction-button'
import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'
import lefthand from '@/assets/hero_hand_left.webp'
import righthand from '@/assets/hero_hand_right.webp'
import Image from 'next/image'
import facebookimg from '@/assets/fb.webp'
import instagramimg from '@/assets/inst.webp'
import thinkimg from '@/assets/think.webp'
import ytbimg from '@/assets/ytb.webp'
import { HeroLineLeft } from '@/components/vectors/hero-line-left'
import { HeroLineRight } from '@/components/vectors/hero-line-right'
import { SemiCircle } from '@/components/vectors/semi-circle'

export const Hero = ({ className }: { className?: string }) => {
    return (
        <section className="py-32 relative isolate">
            <div
                className="top-0 left-0 absolute not-sr-only h-full  "
                aria-hidden
            >
                <HeroLineLeft className="absolute w-auto h-full hidden lg:block " />
                <Image
                    src={lefthand}
                    alt=""
                    className=" relative lg:-translate-y-5 w-[25vw] max-w-72"
                />
                <Image
                    src={facebookimg}
                    alt="facebook image"
                    className="absolute w-14 h-14 aspect-square object-cover bottom-[15%] right-16
                        -rotate-[18deg]"
                    width={64}
                    height={64}
                    aria-hidden
                />
            </div>
            <div
                className="right-0 top-0 absolute not-sr-only h-full max-w-60 flex items-end
                    overflow-hidden"
                aria-hidden
            >
                <Image
                    src={righthand}
                    alt=""
                    className=" w-[20vw] aspect-[418/661]"
                />
                <Image
                    src={ytbimg}
                    alt="facebook image"
                    className="absolute w-9 h-7 aspect-square object-cover bottom-40 left-5 rotate-[25deg]"
                    width={32}
                    height={32}
                    aria-hidden
                />
                <HeroLineRight className="absolute hidden lg:block bottom-[10%] overflow-visible" />
            </div>
            <Image
                src={facebookimg}
                alt="facebook image"
                className="absolute w-8 h-8 aspect-square object-cover right-3 rotate-[21deg]"
                width={32}
                height={32}
                aria-hidden
                id="hero-facebook-1"
            />
            <Image
                src={instagramimg}
                alt="instagram image"
                className="absolute w-7 h-7 aspect-square object-cover left-9 top-[45%] rotate-[21deg]"
                width={32}
                height={32}
                aria-hidden
                id="hero-inst-1"
            />
            <Image
                src={thinkimg}
                alt="Light bulb image"
                className="absolute hidden lg:block w-11 aspect-[2/3] left-[10vw] top-[33%] rotate-[15deg]"
                width={44}
                height={69}
                aria-hidden
                id="hero-thinking-1"
            />
            <Image
                src={thinkimg}
                alt="Light bulb image"
                className="absolute w-16 object-cover top-0 left-[50%] -translate-x-1/2 lg:right-[10vw]
                    lg:top-[33%] lg:-rotate-[9deg] lg:translate-x-0 lg:left-auto"
                width={66}
                height={105}
                aria-hidden
                id="hero-thinking-2"
            />
            <Container className="flex items-center flex-col gap-8 relative">
                <Heading className="text-center" size="large" tag="h1">
                    Spark your {`brand's`}
                    <span className="relative inline-block">
                        <SemiCircle className="absolute w-full top-0 -mt-3" />
                        <span className="relative">imaginative</span>
                    </span>
                    flair with us
                </Heading>
                <p className="max-w-3xl text-center text-xl leading-8">
                    Our team combines strategy, design, and technology to
                    breathe life into your brand. Collaborate with us to leave a
                    lasting impression on your audience.
                </p>
                <SubscriptionButton className="w-full max-w-xl" />
            </Container>
        </section>
    )
}
