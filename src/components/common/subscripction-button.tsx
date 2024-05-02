import { cn } from '@/utils/class-names'
import { Button, ButtonProps } from '../ui/atoms/button/button'
import { Input } from '../ui/atoms/input/input'

interface SubscriptionButtonProps {
    className?: string
}

export const SubscriptionButton = ({ className }: SubscriptionButtonProps) => {
    return (
        <div
            className={cn(
                `relative py-2 min-h-max bg-white rounded-full focus-within:border-primary border
                border-transparent`,
                className
            )}
        >
            <Input className="w-full outline-none border-none pr-28" />
            <Button className="absolute top-2 right-2">Join</Button>
        </div>
    )
}
