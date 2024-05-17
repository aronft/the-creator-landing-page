const colors = require('tailwindcss/colors')

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
                'sans-alt': ['var(--font-kulimpark)'],
            },
        },
        colors: {
            primary: 'var(--color-primary)',
            'primary-alt': 'var(--color-primary-alt)',
            'primary-shadow': 'var(--color-primary-shadow)',
            secondary: 'var(--color-secondary)',
            tertiary: 'var(--color-tertiary)',
            white: 'var(--color-white)',
            neutral: colors.neutral,
            transparent: colors.transparent,
        },
        fontSize: {
            base: ['1rem', { lineHeight: '1.5rem' }],
            lg: ['1.125rem', { lineHeight: '1.5rem' }],
            xl: ['1.25rem', { lineHeight: '1.875rem' }],
            '2xl': ['1.5rem', { lineHeight: '1.5rem' }],
            '3xl': ['2rem', { lineHeight: '2.5rem' }],
            '4xl': ['2.5rem', { lineHeight: '1em' }],
            '5xl': ['3rem', { lineHeight: '1em' }],
            '6xl': ['3.5rem', { lineHeight: '1em' }],
            '9xl': ['7rem', { lineHeight: '1em' }],
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
