export type CarouselItem = {
    src: string,
    key: string,
}

export type CarouselItemStyles = {
    src: string,
    key: string,
    move: boolean
}

export interface CarouselProps {
    items: CarouselItem[]
}

export interface CarouselHandleStylesProps {
    selected: boolean,
    key: string
}
