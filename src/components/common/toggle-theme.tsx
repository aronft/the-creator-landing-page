'use client'

import { cn } from '@/utils/class-names'
import { useEffect, useState } from 'react'
import { Icon } from '../ui/atoms/icon/icon'
import { ThemeMenu } from '../ui/molecules/theme-menu/theme-menu'
import { Theme } from '@/interfaces/theme'
import { useTheme } from 'next-themes'

export const ToggleTheme = () => {
    const [isOpenThemeMenu, setIsOpenThemeMenu] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const handleMenuThemeVisibilty = (state: boolean) => {
        setIsOpenThemeMenu(state)
    }
    const handleThemeSelected = (theme: string) => {
        setTheme(theme)
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="relative">
            <span
                className="flex items-center gap-2 hover:cursor-pointer"
                onClick={() => handleMenuThemeVisibilty(!isOpenThemeMenu)}
            >
                <Icon
                    icon={
                        theme === 'dark'
                            ? 'dark'
                            : theme === 'auto'
                              ? 'theme'
                              : 'light'
                    }
                    className=" text-primary-shadow"
                    size="small"
                />
            </span>
            <ThemeMenu
                themeSelected={theme as Theme}
                handleThemeSelected={handleThemeSelected}
                updateTheme={setTheme}
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
