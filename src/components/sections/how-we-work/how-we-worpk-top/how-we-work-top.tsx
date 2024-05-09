import { Heading } from '@/components/ui/atoms/heading/heading'
import { Container } from '@/components/ui/objects/container/container'
import Image from 'next/image'
import facebookimg from '@/assets/fb.webp'
import instagramimg from '@/assets/inst.webp'
import ytbimg from '@/assets/ytb.webp'
import { PrincipalImage } from './principal-image'
import { cn } from '@/utils/class-names'

export const HowWeWorkTop = ({ className }: { className?: string }) => {
    return (
        <Container
            tag="section"
            className={cn('flex flex-col items-center gap-16', className)}
        >
            <Heading tag="h2" size="big" className="text-center">
                Making it big on any Platform is tougher than you think
            </Heading>
            <div className="flex flex-col items-center relative w-full max-w-4xl">
                <PrincipalImage />
                <Image
                    src={ytbimg}
                    className="absolute w-10 top-8 right-[20%] sm:w-24 aspect-[64/45] rotate-[20deg]"
                    alt=""
                    width={106}
                    height={76}
                    aria-hidden
                    data-id="how-to-work-top-youtube-1"
                />
                <Image
                    src={ytbimg}
                    className="absolute w-8 bottom-4 left-10 sm:bottom-14 sm:left-[9%] sm:w-14 aspect-[64/45]
                        -rotate-[19deg]"
                    alt=""
                    width={54}
                    height={39}
                    aria-hidden
                    data-id="work-youtube-2"
                />
                <Image
                    src={ytbimg}
                    className="absolute bottom-[35%] right-[5%] w-6 h-4 aspect-square rotate-[20deg]"
                    alt=""
                    width={32}
                    aria-hidden
                    data-id="work-youtube-3"
                />
                <Image
                    src={ytbimg}
                    className="absolute bottom-[30%] left-[2%] h-3 w-4 aspect[6/5] -rotate-[19deg]"
                    alt=""
                    width={32}
                    aria-hidden
                    data-id="work-youtube-4"
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
                    className="absolute left-[10%] sm:left-auto sm:top-[45%] sm:right-[20%] w-8 h-8
                        aspect-square rotate-[21deg]"
                    alt=""
                    width={32}
                    height={32}
                    aria-hidden
                    data-id="work-facebook-2"
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
                    className="absolute w-8 bottom-[40%] left-[15%] sm:w-11 aspect-square -rotate-[115deg]"
                    alt=""
                    width={64}
                    height={63}
                    aria-hidden
                    data-id="work-instagram-2"
                />
                <Image
                    src={instagramimg}
                    className="absolute bottom-[10%] right-[20%] w-10 sm:w-16 aspect-square rotate-[17deg]"
                    alt=""
                    width={62}
                    height={60}
                    aria-hidden
                    data-id="work-instagram-3"
                />
                <Image
                    src={instagramimg}
                    className="absolute top-[30%] right-0 w-3 aspect-square rotate-[17deg]"
                    alt=""
                    width={62}
                    height={60}
                    aria-hidden
                    data-id="work-instagram-4"
                />
            </div>
        </Container>
    )
}
