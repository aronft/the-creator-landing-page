import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './container'

const meta = {
    title: 'Objects/Container',
    component: Container,
    args: {
        children: 'Container children',
        isPlayground: true,
    },
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
