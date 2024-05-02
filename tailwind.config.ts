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
            primary: '#FF60E6',
            'primary-alt': '#FFADF2',
            secondary: '#1F392C',
            tertiary: '#F8F5F0',
            white: '#fff',
            neutral: colors.neutral,
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
