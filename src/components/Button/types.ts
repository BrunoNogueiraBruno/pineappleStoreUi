import { ReactNode } from 'react'

export interface ButtonProps {
    styleType?: 'default' | 'primary',
    backgroundColor?: string,
    size?: 'small' | 'medium' | 'large',
    children: ReactNode,
    onClick?: () => void,
    close?: boolean,
    icon?: ReactNode | null,
    width?: 'small' | 'medium' | 'large',
}

export interface ButtonStyleProps {
    children: ReactNode,
    width: 'small' | 'medium' | 'large',
    styleType: 'default' | 'primary',
}
