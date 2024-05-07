import { cn } from '@/utils/class-names'
import Image from 'next/image'
import React from 'react'

interface ReviewCardProps extends React.ComponentPropsWithRef<'article'> {
    src: string
    name: string
    description: string
}

export const ReviewCard = ({
    src,
    name,
    description,
    className,
    ...props
}: ReviewCardProps) => {
    return (
        <article
            className={cn(
                'h-full w-full bg-primary rounded-2xl py-6 px-14 flex flex-col gap-4',
                className
            )}
            {...props}
        >
            <Image
                src={src}
                width={80}
                height={80}
                className="rounded-full"
                alt={`Profile image of ${name}`}
            />
            <h3 className="text-3xl font-medium">{name}</h3>
            <p className="text-xl">{description}</p>
        </article>
    )
}
