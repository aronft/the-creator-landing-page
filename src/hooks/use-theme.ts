import { Theme } from '@/interfaces/theme'
import { useThemeDetector } from './use-theme-detector'
import { useEffect, useState } from 'react'

export default function useTheme() {
    const [themeSelected, setThemeSelected] = useState<Theme>('auto')
    const isDarkTheme = useThemeDetector()

    const updateTheme = (theme: Theme) => {
        localStorage.setItem('theme', theme)
        const isDark = theme === 'dark' || (theme === 'auto' && isDarkTheme)
        document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
        handleThemeSelected(theme)
    }
    useEffect(() => {
        const getThemePreference = (): Theme => {
            const theme = (localStorage.getItem('theme') as Theme) ?? 'auto'
            return theme
        }
        const theme = getThemePreference()
        handleThemeSelected(theme)
        const isDark = theme === 'dark' || (theme === 'auto' && isDarkTheme)
        document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
    }, [isDarkTheme])

    const handleThemeSelected = (theme: Theme) => {
        setThemeSelected(theme)
    }

    return { handleThemeSelected, updateTheme, themeSelected }
}
