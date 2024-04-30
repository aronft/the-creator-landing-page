import type { Meta, StoryObj } from '@storybook/react'
import { UiList } from './ui-list'

const meta = {
    title: 'Objects/UiList',
    component: UiList,
} satisfies Meta<typeof UiList>

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
    args: {
        direction: 'horizontal',
    },
    render: () => {
        return (
            <UiList>
                <a href="#">Partners</a>
                <a href="#">How we work</a>
                <a href="#">Review</a>
                <a href="#">Charity</a>
            </UiList>
        )
    },
}

export const Vertical: Story = {
    args: {
        direction: 'vertical',
    },
    render: ({ ...args }) => {
        return (
            <UiList {...args}>
                <a href="#">Partners</a>
                <a href="#">How we work</a>
                <a href="#">Review</a>
                <a href="#">Charity</a>
            </UiList>
        )
    },
}
