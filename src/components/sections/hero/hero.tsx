import { SubscriptionButton } from '@/components/common/subscripction-button'
import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'
import lefthand from '@/assets/hero_hand_left.webp'
import righthand from '@/assets/hero_hand_right.webp'
import Image from 'next/image'
import facebookimg from '@/assets/fb.png'
import instagramimg from '@/assets/inst.png'
import thinkimg from '@/assets/think.png'
import ytbimg from '@/assets/ytb.png'
import lineLeft from '@/assets/hero-line-left.svg'

export const Hero = () => {
    return (
        <section className="py-32 relative">
            <div
                className="top-0 left-0 absolute not-sr-only w-[25vw] h-full max-w-72"
                aria-hidden
            >
                <Image
                    src={lineLeft}
                    alt=""
                    className="w-full absolute top-0"
                />
                <Image
                    src={lefthand}
                    alt=""
                    className="w-full relative lg:-translate-y-5"
                />
                <Image
                    src={facebookimg}
                    alt="facebook image"
                    className="absolute w-14 h-14 aspect-square object-cover bottom-[15%] right-16
                        -rotate-[18deg]"
                    width={32}
                    height={32}
                    aria-hidden
                />
            </div>
            <div
                className="bottom-0 right-0 absolute not-sr-only w-[25vw] h-full max-w-60 flex items-end"
                aria-hidden
            >
                <Image
                    src={righthand}
                    alt=""
                    className="w-full absolute aspect-[418/661]"
                />
                <Image
                    src={ytbimg}
                    alt="facebook image"
                    className="absolute w-9 h-7 aspect-square object-cover bottom-40 left-5 rotate-[25deg]"
                    width={32}
                    height={32}
                    aria-hidden
                />
                <svg
                    width="241"
                    height="508"
                    viewBox="0 0 241 508"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative mb-32"
                >
                    <path
                        d="M37.5722 370.679C25.6722 381.979 16.3722 394.979 9.67219 409.979C2.97219 424.879 -1.82781 440.179 0.672194 456.579C5.67219 489.579 37.8722 509.979 70.0722 507.079C103.572 503.979 131.672 481.379 151.072 455.179C169.272 430.579 179.972 400.379 180.772 369.779C181.772 335.779 169.372 305.179 150.272 277.579C140.072 262.779 128.472 248.779 119.372 233.279C111.372 219.679 105.672 204.779 102.572 189.179C96.6722 158.779 102.072 126.679 116.772 99.5794C131.372 72.6794 154.472 51.2794 180.972 36.2794C231.172 7.77937 297.072 1.07937 347.872 31.7794C354.372 35.6794 360.472 39.9794 366.272 44.8794C371.872 49.6794 380.172 41.5794 374.472 36.6794C329.772 -2.52062 265.972 -8.42063 210.972 10.0794C154.272 29.1794 104.172 73.9794 91.6722 134.279C85.4722 164.279 88.9723 195.379 101.272 223.379C115.372 255.479 142.072 280.079 157.272 311.679C184.372 367.979 164.372 436.379 117.472 475.479C92.2722 496.479 52.6722 507.179 25.0722 484.179C11.6722 473.079 6.47224 456.679 6.47224 439.579C6.57224 422.379 13.7723 406.379 22.3723 391.779C26.7723 384.379 32.1722 377.579 37.9722 371.179C38.2722 370.779 37.8722 370.379 37.5722 370.679Z"
                        fill="#FFADF2"
                    />
                </svg>
            </div>
            <Image
                src={facebookimg}
                alt="facebook image"
                className="absolute w-8 h-8 aspect-square object-cover right-3 rotate-[21deg]"
                width={32}
                height={32}
                aria-hidden
            />
            <Image
                src={instagramimg}
                alt="instagram image"
                className="absolute w-7 h-7 aspect-square object-cover left-9 top-[45%] rotate-[21deg]"
                width={32}
                height={32}
                aria-hidden
            />
            <Image
                src={thinkimg}
                alt="Light bulb image"
                className="absolute w-11 h-16 aspect-square object-cover left-[10vw] top-[33%]
                    rotate-[15deg]"
                width={32}
                height={32}
                aria-hidden
            />
            <Image
                src={thinkimg}
                alt="Light bulb image"
                className="absolute w-16 h-24 aspect-square object-cover right-[10vw] top-[33%]
                    -rotate-[9deg]"
                width={32}
                height={32}
                aria-hidden
            />
            <Container className="flex items-center flex-col gap-8 relative">
                <Heading className="text-center" size="large" tag="h1">
                    {`Spark your brand's imaginative flair with us`}
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
