import React from 'react'
import { SButton } from './styles'

interface ButtonProps {
    primary?: boolean
    backgroundColor?: string
    size?: 'small' | 'medium' | 'large'
    children: string
    onClick?: () => void
}

const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    children,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
    return (
        <SButton
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {children}
        </SButton>
    )
}

export default Button
