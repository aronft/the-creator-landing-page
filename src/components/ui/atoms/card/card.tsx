import { cn } from '@/utils/class-names'
import { HTMLAttributes } from 'react'

type CardColors = 'primary' | 'white'

interface CardProps extends HTMLAttributes<{}> {
    tag?: keyof Pick<JSX.IntrinsicElements, 'section' | 'div' | 'article'>
    color?: CardColors
}

const colorsCardClasses: Record<CardColors, string> = {
    primary: 'bg-primary',
    white: 'bg-white',
}

export const Card = ({
    tag = 'div',
    className,
    color = 'white',
    children,
    ...props
}: CardProps) => {
    const Tag = tag
    return (
        <Tag
            className={cn(
                'p-14 rounded-2xl',
                colorsCardClasses[color],
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    )
}
