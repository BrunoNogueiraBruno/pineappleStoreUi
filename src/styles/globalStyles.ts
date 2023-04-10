import { css } from 'styled-components'

export const colorTheme = {
    darkGray: '#929292',

    primarydetails: '#3560cf',
    secondaryDetails: '#929292',

    primaryBg: '#FFFFFF',
    secondaryBg: '#D9D9D9',
    terciaryBg: '#eeeeee',

    primaryText: '#41483C'
}

export const xBoxShadow = 'box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);'
export const xBoxShadow2 = 'box-shadow: 0 3px 8px rgba(0,0,0,0.45);'
export const xDefault = css`
    font-family: Roboto, cursive;
    font-size: 1.3em;
`
export const xHover = css`
    :hover {
        ${xBoxShadow2}
        
        filter: brightness(.95);
    }
`

export const xFlexBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const styleTypeTemplate = {
    default: {
        background: colorTheme.terciaryBg,
        color: colorTheme.primaryText,
    },
    primary: {
        background: colorTheme.primarydetails,
        color: colorTheme.primaryBg
    }
} as {
    [index: string]: { [index: string]: string }
}
