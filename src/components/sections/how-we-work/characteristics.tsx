import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'
import { UiList } from '@/components/ui/objects/ui-list/ui-list'
import { DATA } from '@/constants/data'
import Image from 'next/image'
import thinkImage from '@/assets/think.webp'
import puzzlesImage from '@/assets/how-we-work-section/puzzle.png'
import figmaLogo from '@/assets/how-we-work-section/figma.png'
import { cn } from '@/utils/class-names'

export const Characteristics = ({ className }: { className?: string }) => {
    const [data1, data2, data3] = DATA.characteristics
    return (
        <section aria-label="charecteristics" className={cn(className)}>
            <Container className="max-w-5xl text-center md:text-start">
                <UiList direction="vertical" className="gap-16">
                    <article className="flex gap-8 flex-col md:flex-row items-center md:items-start">
                        <div className="flex-1 flex flex-col gap-8 text-xl leading-8 md:text-left max-w-md md:max-w-none">
                            <Heading size="small" tag="h3">
                                {data1.title}
                            </Heading>
                            <p>{data1.description}</p>
                        </div>
                        <div className="flex-1 relative">
                            <Image
                                width={518}
                                height={515}
                                src={data1.src}
                                alt={data1.title}
                                loading="lazy"
                                className="drop-shadow-section-image aspect-[3/2] min-h-[515px] mask-image object-cover "
                            />
                            <Image
                                src={thinkImage}
                                width={66}
                                height={105}
                                alt=""
                                aria-hidden
                                id="characteristics-think-1"
                                className="absolute w-16 left-8 top-24 -rotate-[22deg]"
                            />
                            <Image
                                src={thinkImage}
                                width={44}
                                height={69}
                                alt=""
                                aria-hidden
                                id="characteristics-think-2"
                                className="absolute right-20 top-48 rotate-[30deg]"
                            />
                        </div>
                    </article>
                    <article className="flex gap-8 md:flex-row-reverse flex-col items-center md:items-start">
                        <div className="flex-1 flex flex-col gap-8 text-xl leading-8 max-w-md md:max-w-none">
                            <Heading size="small" tag="h3">
                                {data2.title}
                            </Heading>
                            <p>{data2.description}</p>
                        </div>
                        <div className="flex-1 relative min-h-[515px]">
                            <Image
                                width={515}
                                height={431}
                                src={data2.src}
                                alt={data2.title}
                                loading="lazy"
                                className="drop-shadow-section-image object-none [object-position:-60px] aspect-[96/103]
                                    mask-image"
                            />
                            <Image
                                src={puzzlesImage}
                                width={189}
                                height={189}
                                alt=""
                                aria-hidden
                                id="characteristics-puzzle"
                                className="absolute left-12 top-32"
                            />
                        </div>
                    </article>
                    <article className="flex gap-8 md:flex-row flex-col items-center md:items-start">
                        <div className="flex-1 flex flex-col gap-4 text-xl leading-8 max-w-md md:max-w-none">
                            <Heading size="small" tag="h3">
                                {data3.title}
                            </Heading>
                            <p>{data3.description}</p>
                        </div>
                        <div className="flex-1 relative min-h-[515px]">
                            <Image
                                width={515}
                                height={431}
                                src={data3.src}
                                alt={data3.title}
                                loading="lazy"
                                className="drop-shadow-section-image object-cover aspect-[96/103] mask-image"
                            />
                            <Image
                                src={figmaLogo}
                                width={100}
                                height={130}
                                alt=""
                                aria-hidden
                                className="absolute left-[12%] top-24"
                            />
                        </div>
                    </article>
                </UiList>
            </Container>
        </section>
    )
}
