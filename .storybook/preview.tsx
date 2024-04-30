import React from 'react'

import type { Preview } from '@storybook/react'
import '../src/app/globals.css'
import { font } from '../src/settings/fonts'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <main className={`${font.variable} font-sans`}>
                <Story />
            </main>
        ),
    ],
}

export default preview
