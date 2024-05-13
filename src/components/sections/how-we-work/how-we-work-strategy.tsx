import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'
import likeImage from '@/assets/like.webp'
import Image from 'next/image'
import lefthandImage from '@/assets/how-we-work-section/how-we-work-hand-left.webp'
import righthandImage from '@/assets/how-we-work-section/how-we-work-hand-right.webp'
import { HowWeWorkLineRight } from '@/components/vectors/how-we-work-line-right'
import { cn } from '@/utils/class-names'
import { HowWeWorkLineLeftWrap } from './how-we-work-line-left-wrap'
import { HowWeWorkLineRightWrap } from './how-we-work-line-right-wrap'

export const HowWeWorkStrategy = ({ className }: { className?: string }) => {
    return (
        <section className={cn('relative', className)}>
            <div
                aria-hidden
                className="absolute right-0 scale-x-[-1] top-0 lg:right-auto lg:left-0 lg:scale-x-100
                    h-full"
            >
                <HowWeWorkLineLeftWrap />
                <Image
                    src={lefthandImage}
                    alt=""
                    className="hidden lg:block absolute top-0 object-cover max-h-[313px] object-left w-[20vw]
                        -translate-y-8"
                />
            </div>

            <div
                aria-hidden
                className="absolute h-full top-0 right-0 w-[20vw] scale-x-[-1] lg:left-auto lg:right-0
                    lg:scale-x-100 hidden lg:block overflow-hidden"
            >
                <Image
                    src={righthandImage}
                    alt=""
                    width={310}
                    height={313}
                    className="absolute bottom-0 right-0 object-cover max-h-[313px] object-left-top "
                />
                {/* <HowWeWorkLineRight className="absolute left-[20%] bottom-14 h-[70%] overflow-visible " /> */}
                <HowWeWorkLineRightWrap />
            </div>
            <Container className=" flex items-center flex-col gap-16 text-center max-w-3xl relative">
                <Heading size="big" tag="h2">
                    We do it for you. No more struggling to grow on any Platform
                </Heading>
                <p className="text-3xl font-bold">
                    Work with our expert strategists writers, editors, and
                    producers to create content that transforms your content
                </p>
                <p className="text-xl leading-8">
                    No managing a team of freelancers or spending countless
                    hours trying to master all the skillsets Platform requires -
                    all you need is The Creator
                </p>
                <Image
                    width={120}
                    height={101}
                    alt=""
                    src={likeImage}
                    className="hidden sm:block absolute left-0 top-0 lg:top-auto lg:left-auto w-[10vw] max-w-32
                        aspect-[6/5] lg:bottom-[30%] lg:right-full -rotate-[14deg]"
                    aria-hidden
                />
                <Image
                    width={120}
                    height={101}
                    alt=""
                    src={likeImage}
                    className="hidden sm:block absolute aspect-[6/5] lg:right-auto lg:bottom-auto right-0
                        top-full lg:top-[30%] lg:left-full rotate-[18deg] -scale-x-[1] w-[10vw] max-w-32"
                    aria-hidden
                />
            </Container>
        </section>
    )
}
