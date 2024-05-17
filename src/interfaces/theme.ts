import { IconTypes } from '@/components/ui/atoms/icon/icon'

export type Theme = 'auto' | 'light' | 'dark'

// cambiar a constante e incluir el icono
export const THEME: Record<Theme, IconTypes> = {
    auto: 'theme',
    light: 'light',
    dark: 'dark',
}
