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
import { ArrowLeft } from '@/components/icons/arrow-left'
import { ArrowRight } from '@/components/vectors/arrow-right'
import { ThemeIcon } from '@/components/icons/theme'
import { LightIcon } from '@/components/icons/light'
import { DarkIcon } from '@/components/icons/dark'

type Sizes = 'medium' | 'small'

const ICONS = {
    facebook: Facebook,
    instagram: Instagram,
    brand: Brand,
    twitter: Twitter,
    pinterest: Pinterest,
    linkedin: LinkedIn,
    x: X,
    list: List,
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,
    theme: ThemeIcon,
    light: LightIcon,
    dark: DarkIcon,
} as const

export type IconTypes = keyof typeof ICONS

interface IconProps extends SvgProps {
    icon: IconTypes
    size?: Sizes
}

const sizesClasses: Record<Sizes, string> = {
    medium: 'w-8 h-8',
    small: 'w-5 h-5',
}

export const Icon = ({
    icon,
    size = 'medium',
    className,
    ...props
}: IconProps) => {
    const Tag = ICONS[icon]
    return <Tag className={cn('', sizesClasses[size], className)} {...props} />
}
