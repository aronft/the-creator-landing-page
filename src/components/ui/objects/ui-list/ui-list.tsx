import { cn } from '@/utils/class-names'
import { Children } from 'react'

type Directions = 'vertical' | 'horizontal'

export interface UiListProps extends React.ComponentPropsWithoutRef<'ul'> {
    direction?: Directions
}

const directionClasses: Record<Directions, string> = {
    vertical: 'flex-col ',
    horizontal: 'flex-row flex-wrap',
}

export const UiList = ({
    children,
    className,
    direction = 'horizontal',
    ...props
}: UiListProps) => {
    return (
        <ul
            className={cn('flex gap-8', directionClasses[direction], className)}
            {...props}
        >
            {Children.map(children, (child) => (
                <li>{child}</li>
            ))}
        </ul>
    )
}
