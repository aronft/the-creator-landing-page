import { Facebook } from '@/components/icons/facebook'
import { Instagram } from '@/components/icons/instagram'
import { Twitter } from '@/components/icons/twitter'
import { Brand } from '@/components/icons/brand'
import { SvgProps } from '@/components/icons/icon-type'
import { Pinterest } from '@/components/icons/pinterest'
import { LinkedIn } from '@/components/icons/linked-in'

const ICONS = {
    facebook: Facebook,
    instagram: Instagram,
    brand: Brand,
    twitter: Twitter,
    pinterest: Pinterest,
    linkedin: LinkedIn,
} as const

interface IconProps extends SvgProps {
    icon: keyof typeof ICONS
}

export const Icon = ({ icon, ...props }: IconProps) => {
    const Tag = ICONS[icon]
    return <Tag className="text-primary" {...props} />
}
