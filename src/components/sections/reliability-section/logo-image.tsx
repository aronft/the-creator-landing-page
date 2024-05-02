import { cn } from '@/utils/class-names'
import Image, { ImageProps } from 'next/image'
import React from 'react'

interface LogoImageProps extends ImageProps {}

export const LogoImage = ({ src, className, ...props }: LogoImageProps) => {
    if (src === undefined) {
        throw new Error('should have src')
    }
    return (
        <div className="min-w-32 h-32 rounded-full bg-primary-alt flex items-center justify-center">
            <Image
                src={src}
                className={cn('', className)}
                {...props}
                alt="heart with plus"
            />
        </div>
    )
}
