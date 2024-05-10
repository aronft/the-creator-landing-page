'use client'

import Image from 'next/image'
import { useState } from 'react'
import section1Girl from '@/assets/how-we-work-section/girl-0.png'
import { cn } from '@/utils/class-names'

export const PrincipalImage = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <div
            className={cn('opacity-0 transition-opacity duration-200', {
                'opacity-100': isLoaded,
            })}
        >
            <div
                className={cn(
                    'w-[20%] h-[20%] md:w-[25%] absolute top-[25%] left-[25%] bg-primary-shadow'
                )}
                aria-hidden
            ></div>
            <Image
                src={section1Girl}
                width={773}
                height={515}
                className={cn(
                    'aspect-[3/2] relative drop-shadow-section-image mask-image hidden md:block'
                )}
                alt="A girl impresed with her hand in his forhead"
                onLoad={() => setIsLoaded(true)}
                onLoadStart={() => setIsLoaded(true)}
            />
            <Image
                src={section1Girl}
                width={475}
                height={317}
                className={cn(
                    'aspect-[3/2] relative drop-shadow-section-image mask-image md:hidden'
                )}
                alt="A girl impresed with her hand in his forhead"
                onLoad={() => setIsLoaded(true)}
                onLoadStart={() => setIsLoaded(true)}
            />
        </div>
    )
}
