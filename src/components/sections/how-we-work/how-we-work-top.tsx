import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'
import { cn } from '@/utils/class-names'
import Image from 'next/image'
import section1Girl from '@/assets/how-we-work-section/girl-0.png'
import facebookimg from '@/assets/fb.webp'
import instagramimg from '@/assets/inst.webp'
import ytbimg from '@/assets/ytb.webp'

export const HowWeWorkTop = () => {
    return (
        <Container
            tag="section"
            className="flex flex-col items-center gap-16 py-16"
        >
            <Heading tag="h2" size="big" className="text-center">
                Making it big on any Platform is tougher than you think
            </Heading>
            <div className="flex flex-col items-center relative w-full max-w-4xl">
                <div
                    className="w-[20%] h-[20%] md:w-[25%] absolute top-[25%] left-[25%] bg-primary-shadow"
                    aria-hidden
                ></div>
                <Image
                    src={section1Girl}
                    width={773}
                    height={515}
                    className={cn(
                        'aspect-[250/167] relative drop-shadow-section-image mask-image'
                    )}
                    alt="A girl impresed with her hand in his forhead"
                />
                <Image
                    src={ytbimg}
                    className="absolute top-8 right-[20%] w-24 aspect-[64/45] rotate-[20deg]"
                    alt=""
                    width={106}
                    height={76}
                    aria-hidden
                />
                <Image
                    src={ytbimg}
                    className="absolute bottom-14 left-[9%] w-14 aspect-[64/45] -rotate-[19deg]"
                    alt=""
                    width={54}
                    height={39}
                    aria-hidden
                />
                <Image
                    src={ytbimg}
                    className="absolute bottom-[35%] right-[5%] w-6 h-4 aspect-square rotate-[20deg]"
                    alt=""
                    width={32}
                    aria-hidden
                />
                <Image
                    src={ytbimg}
                    className="absolute bottom-[30%] left-[2%] h-3 w-4 aspect[6/5] -rotate-[19deg]"
                    alt=""
                    width={32}
                    aria-hidden
                />
                <Image
                    src={facebookimg}
                    className="absolute top-4 left-[60%] w-4 h-4 aspect-square rotate-[20deg]"
                    alt=""
                    width={32}
                    aria-hidden
                />
                <Image
                    src={facebookimg}
                    className="absolute top-[45%] right-[20%] w-8 h-8 aspect-square rotate-[21deg]"
                    alt=""
                    width={32}
                    height={32}
                    aria-hidden
                />

                <Image
                    src={instagramimg}
                    className="absolute top-[30%] left-0 w-4 h-4 aspect-square -rotate-[13deg]"
                    alt="instagram left small"
                    width={32}
                    height={32}
                    aria-hidden
                    id="work-instagram-1"
                />
                <Image
                    src={instagramimg}
                    className="absolute bottom-[40%] left-[15%] w-11 h-11 aspect-square -rotate-[115deg]"
                    alt=""
                    width={64}
                    height={63}
                    aria-hidden
                    id="work-instagram-2"
                />
                <Image
                    src={instagramimg}
                    className="absolute bottom-[10%] right-[20%] w-16 aspect-square rotate-[17deg]"
                    alt=""
                    width={62}
                    height={60}
                    aria-hidden
                    id="work-instagram-3"
                />
                <Image
                    src={instagramimg}
                    className="absolute top-[30%] right-0 w-3 aspect-square rotate-[17deg]"
                    alt=""
                    width={62}
                    height={60}
                    aria-hidden
                    id="work-instagram-4"
                />
            </div>
        </Container>
    )
}
