'use client'

import { cn } from '@/utils/class-names'
import { useState } from 'react'
import { Icon } from '../ui/atoms/icon/icon'
import { ThemeMenu } from '../ui/molecules/theme-menu/theme-menu'
import useTheme from '@/hooks/use-theme'
import { THEME } from '@/interfaces/theme'

export const ToggleTheme = () => {
    const [isOpenThemeMenu, setIsOpenThemeMenu] = useState(false)
    const { handleThemeSelected, updateTheme, themeSelected } = useTheme()
    const handleMenuThemeVisibilty = (state: boolean) => {
        setIsOpenThemeMenu(state)
    }
    return (
        <div className="relative">
            <span
                className="flex items-center gap-2 hover:cursor-pointer"
                onClick={() => handleMenuThemeVisibilty(!isOpenThemeMenu)}
            >
                <Icon
                    icon={THEME[themeSelected]}
                    className=" text-primary-shadow"
                    size="small"
                />
            </span>
            <ThemeMenu
                themeSelected={themeSelected}
                handleThemeSelected={handleThemeSelected}
                updateTheme={updateTheme}
                closeMenu={() => handleMenuThemeVisibilty(false)}
                direction="vertical"
                className={cn(
                    'absolute left-0 -translate-x-full top-full mt-4 hidden w-max',
                    { flex: isOpenThemeMenu }
                )}
            />
        </div>
    )
}
