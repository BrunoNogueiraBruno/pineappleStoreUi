import { css } from 'styled-components'

export const colorTheme = {
    gray: '#eeeeee',
    darkGray: '#929292',

    details: '#3560cf',
    primaryBg: '#FFFFFF',
    secondaryBg: '#D9D9D9'
}

export const xBoxShadow = 'box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);'
export const xDefault = css`
    font-family: Roboto, cursive;
    font-size: .4em;
`

export const xFlexBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const styleTypeTemplate = {
    default: {
        background: colorTheme.gray,
        color: colorTheme.darkGray,
    },
    primary: {
        background: colorTheme.details,
        color: colorTheme.primaryBg
    }
} as {
    [index: string]: { [index: string]: string }
}
