import type { Meta, StoryObj } from '@storybook/react'

import Carousel from '../components/Carousel'

const meta: Meta<typeof Carousel> = {
  title: 'Example/Carousel',
  component: Carousel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Carousel>

const items = [
  { src: 'https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg', key: 'a' },
  { src: 'https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-3-1280x720.jpg', key: 'b' },
  { src: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg', key: 'c' },
  { src: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2019/09/quantas-horas-um-cachorro-dorme.jpg', key: 'd' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lnTSXMYVGAy5EhE3nsGRz2yt23APVKzBu5x_p0omrrsQFUvU1UycXdTAslcVOH6xyzw&usqp=CAU', key: 'e' },
]

export const Default: Story = {
  args: {
    items,
  },
}
