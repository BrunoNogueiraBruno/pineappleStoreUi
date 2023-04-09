import styled from 'styled-components'
import { styleTypeTemplate, xBoxShadow, xDefault, xFlexBox } from '../../styles/globalStyles'
import { ButtonStyleProps } from './types'

const widthTemplate = {
    small: '30px',
    medium: '60px',
    large: '120px'
} as { [index: string]: string }

export const SButton = styled.button<ButtonStyleProps>`
    ${xDefault}
    ${xFlexBox}
    ${xBoxShadow}
    
    border: none;
    border-radius: 4px;
    height: 25px;

    ${({ width }) => {
        if (width) return `padding: 20px ${widthTemplate[width]};`
        return 'padding: 20px 16px;'
    }};

    ${({ styleType }) => {
        const { background, color } = styleTypeTemplate[styleType]

        return `
            background: ${background};
            color: ${color};
        `
    }};
`