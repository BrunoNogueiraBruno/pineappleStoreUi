import type { Meta, StoryObj } from '@storybook/react'

import MultiSelector from '../components/MultiSelector'

const meta: Meta<typeof MultiSelector> = {
  title: 'Example/MultiSelector',
  component: MultiSelector,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MultiSelector>

const multiSelectorItems = [
  {
    thumbnail: '#CF3550',
    label: 'Red',
    key: 'red'
  },
  {
    thumbnail: '#3560CF',
    label: 'Blue',
    key: 'blue'
  },
]

export const Default: Story = {
  args: {
    items: multiSelectorItems,
    defaultSelected: false,
  },
}
