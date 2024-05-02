import { Facebook } from '@/components/icons/facebook'
import { Instagram } from '@/components/icons/instagram'
import { Twitter } from '@/components/icons/twitter'
import { Brand } from '@/components/icons/brand'
import { SvgProps } from '@/components/icons/icon-type'
import { Pinterest } from '@/components/icons/pinterest'
import { LinkedIn } from '@/components/icons/linked-in'
import { X } from '@/components/icons/x'
import { List } from '@/components/icons/list'
import { cn } from '@/utils/class-names'

type Sizes = 'medium'

const ICONS = {
    facebook: Facebook,
    instagram: Instagram,
    brand: Brand,
    twitter: Twitter,
    pinterest: Pinterest,
    linkedin: LinkedIn,
    x: X,
    list: List,
} as const

interface IconProps extends SvgProps {
    icon: keyof typeof ICONS
    size?: Sizes
}

const sizesClasses: Record<Sizes, string> = {
    medium: 'w-8 h-8',
}

export const Icon = ({
    icon,
    size = 'medium',
    className,
    ...props
}: IconProps) => {
    const Tag = ICONS[icon]
    return <Tag className={cn('', className, sizesClasses[size])} {...props} />
}