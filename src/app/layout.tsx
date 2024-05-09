import type { Metadata } from 'next'
import './globals.css'

import { montserratFont, kulimParkFont } from '@/settings/fonts'
import { cn } from '@/utils/class-names'

export const metadata: Metadata = {
    title: 'The Creator',
    description: `Ready to light up your brand's story? Our dynamic team merges strategy, design, and tech to bring your vision to life. Let's collaborate and make your mark!`,
    metadataBase: new URL(
        'https://the-creator-page.vercel.app/opengraph-image.png'
    ),
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={cn(
                montserratFont.variable,
                kulimParkFont.variable,
                'font-sans'
            )}
        >
            <head>
                <link rel="icon" href="/logo.svg" sizes="any" />
                <meta property="og:title" content="The Creator" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://the-creator-page.vercel.app"
                />
                <meta
                    property="og:image"
                    content="https://the-creator-page.vercel.app/opengraph-image.png"
                />
                <meta
                    property="og:image:alt"
                    content="The Creator - Hero section"
                />
            </head>
            <body className="bg-tertiary text-secondary">{children}</body>
        </html>
    )
}
