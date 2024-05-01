import { Montserrat, Kulim_Park } from 'next/font/google'

export const montserratFont = Montserrat({
    weight: ['400', '700', '500', '600'],
    display: 'swap',
    variable: '--font-montserrat',
    subsets: ['latin'],
})

export const kulimParkFont = Kulim_Park({
    weight: ['700'],
    display: 'swap',
    variable: '--font-kulimpark',
    subsets: ['latin'],
})
