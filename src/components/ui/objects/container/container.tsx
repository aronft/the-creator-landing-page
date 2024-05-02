import { cn } from '@/utils/class-names'
import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<{}> {
    tag?: keyof Pick<
        JSX.IntrinsicElements,
        'section' | 'div' | 'main' | 'article'
    >
    isPlayground?: boolean
}

export const Container = ({
    tag = 'div',
    className,
    children,
    isPlayground,
    ...props
}: ContainerProps) => {
    const Tag = tag
    return (
        <Tag
            className={cn(
                'max-w-7xl p-4 mx-auto w-full',
                { 'border-primary border-4 border-dotted': isPlayground },
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    )
}
