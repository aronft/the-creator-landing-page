import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)'],
            },
        },
        colors: {
            primary: '#FF60E6',
            'primary-alt': '#FFADF2',
            secondary: '#1F392C',
            tertiary: '#F8F5F0',
        },
        fontSize: {
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '2rem',
            '4xl': '2.5rem',
            '5xl': '3rem',
            '6xl': '3.5rem',
            '9xl': '7rem',
        },
        fontWeight: {
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        },
    },
    plugins: [],
}
export default config
