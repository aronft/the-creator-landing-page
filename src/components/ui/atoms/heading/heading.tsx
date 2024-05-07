import { cn } from '@/utils/class-names'
import React, { HTMLAttributes } from 'react'

type HeadingSizes = 'small' | 'medium' | 'big' | 'large'

export interface HeadingProps extends HTMLAttributes<{}> {
    tag?: keyof Pick<
        JSX.IntrinsicElements,
        'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    >
    size?: HeadingSizes
}

const HeadingSizesClasses: Record<HeadingSizes, string> = {
    small: 'text-4xl font-bold',
    medium: 'text-5xl font-bold',
    big: 'text-4xl md:text-6xl font-bold',
    large: 'text-5xl md:text-9xl font-bold',
}

export const Heading = ({
    tag = 'h1',
    className,
    children,
    size = 'small',
    ...props
}: HeadingProps) => {
    const Tag = tag
    return (
        <Tag
            className={cn(
                'text-secondary',
                HeadingSizesClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    )
}
