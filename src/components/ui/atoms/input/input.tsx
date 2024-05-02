import { cn } from '@/utils/class-names'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

export const Input = ({ className, children, ...props }: InputProps) => {
    return (
        <input
            type="text"
            {...props}
            className={cn(
                'rounded-3xl bg-white px-6 py-2 placeholder:text-neutral-400 text-xl',
                className
            )}
        />
    )
}
