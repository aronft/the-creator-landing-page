import { cn } from '@/utils/class-names'
import { Icon } from '../icon/icon'

interface LogoProps {
    className?: string
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <a href="#" className={cn('flex gap-2 items-center ', className)}>
            <Icon icon="brand" />
            <span className="text-2xl font-bold text-secondary leading-none font-sans-alt">
                The Creator
            </span>
        </a>
    )
}
