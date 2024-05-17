'use client'
import { cn } from '@/utils/class-names'
import { UiList, UiListProps } from '../../objects/ui-list/ui-list'
import { ThemeMenuItem } from './theme-menu-item'
import { IconTypes } from '../../atoms/icon/icon'
import { THEME, Theme } from '@/interfaces/theme'

interface ThemeMenuProps extends UiListProps {
    closeMenu: () => void
    handleThemeSelected: (theme: Theme) => void
    updateTheme: (theme: Theme) => void
    themeSelected: Theme
}

export const ThemeMenu = ({
    className,
    closeMenu,
    handleThemeSelected,
    themeSelected,
    updateTheme,
    ...props
}: ThemeMenuProps) => {
    return (
        <UiList {...props} className={cn('gap-2', className)}>
            {Object.entries(THEME).map(([key, value]) => (
                <ThemeMenuItem
                    name={key as Theme}
                    key={key}
                    closeMenu={closeMenu}
                    icon={value as IconTypes}
                    updateTheme={updateTheme}
                    className={cn({ 'text-primary': themeSelected === key })}
                />
            ))}
        </UiList>
    )
}
