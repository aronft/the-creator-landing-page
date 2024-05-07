import { cn } from '@/utils/class-names'

type ButtonColors = 'primary'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    color?: ButtonColors
}

const impactClasses: Record<ButtonColors, string> = {
    primary: 'bg-primary text-secondary',
}

export const Button = ({
    children,
    className,
    color = 'primary',
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                'py-3 px-8 font-sans rounded-3xl font-semibold',
                impactClasses[color],
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}
