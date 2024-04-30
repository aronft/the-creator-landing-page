import { cn } from '@/utils/class-names'

type ButtonColors = 'primary'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    color: ButtonColors
}

const impactClasses: Record<ButtonProps['color'], string> = {
    primary: 'bg-primary text-secondary',
}

export const Button = ({
    children,
    className,
    color,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                'py-3 px-8 font-sans rounded-3xl font-semibold',
                impactClasses[color],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}
