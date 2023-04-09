import { ReactNode } from 'react'

export type MultiSelectorItemProps = {
    thumbnail?: string,
    label: string,
    size?: 'small' | 'medium' | 'large',
    key: string,
}

export interface MultiSelectorProps {
    items: MultiSelectorItemProps[]
    defaultSelected?: string | false,
}

export interface MultiSelectorStyleProps {
    thumbnail?: string,
    size?: 'small' | 'medium' | 'large',
    selected: boolean,
    key: string
}
