import React from 'react'
import { SButton } from './styles'
import { Close } from '@material-ui/icons'
import { ButtonProps } from './types'

const Button = ({
    close = false,
    width = 'small',
    styleType = 'default',
    children,
}: ButtonProps) => {

    return (
        <SButton width={width} styleType={styleType}>
            {close && <Close />}
            {children}
        </SButton>
    )
}

export default Button
