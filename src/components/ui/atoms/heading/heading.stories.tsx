import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './heading'

const meta = {
    title: 'Atoms/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur .',
    },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        size: 'small',
    },
}

export const Sizes: Story = {
    render: (props) => (
        <>
            <Heading {...props} size="small" />
            <Heading {...props} size="medium" />
            <Heading {...props} size="big" />
            <Heading {...props} size="large" />
        </>
    ),
}
