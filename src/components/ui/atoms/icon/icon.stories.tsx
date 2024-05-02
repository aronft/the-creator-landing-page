import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './icon'

const meta = {
    title: 'Atoms/Icon',
    component: Icon,
    argTypes: {
        icon: {
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        icon: 'facebook',
    },
}
