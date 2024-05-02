import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './card'

const meta = {
    title: 'Atoms/Card',
    component: Card,
    args: {
        children:
            'Our creative agency supports charities globally, using our skills in branding, marketing, and social media to make a positive impact on local communities and raise awareness about important causes. ',
    },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        color: 'white',
    },
}
