import { THEME, Theme } from '@/components/common/toggle-theme'
import { Icon, IconTypes } from '../../atoms/icon/icon'
import { cn } from '@/utils/class-names'

interface ThemeMenuProps {
    name: keyof typeof THEME
    icon: IconTypes
    updateTheme: (theme: Theme) => void
    closeMenu: () => void
    className?: string
}

export const ThemeMenuItem = ({
    name,
    icon,
    updateTheme,
    closeMenu,
    className,
}: ThemeMenuProps) => {
    return (
        <div
            className="flex items-center gap-2 hover:cursor-pointer"
            onClick={() => {
                updateTheme(name)
                closeMenu()
            }}
        >
            <Icon
                icon={icon}
                aria-label={`${name} icon theme`}
                size="small"
                className={cn('', className)}
            />
            <span className="capitalize">{name}</span>
        </div>
    )
}
