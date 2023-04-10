import styled, { css } from 'styled-components'
import { MultiSelectorStyleProps } from './types'
import { colorTheme, xBoxShadow, xBoxShadow2, xFlexBox, xHover } from '../../styles/globalStyles'

export const SMultiSelector = styled.div`
    ${xFlexBox}
    gap: 12px;
`

const selectedStyles = css`
    background: ${colorTheme.primaryText};
    color: ${colorTheme.primaryBg};

    ::after {
        ${xBoxShadow}

        content: '';
        display: inline-block;
        width: 80%;
        height: 2px;
        background: #41483C;
        border-radius: 40px;
        position: absolute;
        bottom: -6px;
        transition: 400ms all ease;
    }
`

export const SelectorItem = styled.button<MultiSelectorStyleProps>`
    ${xFlexBox}
    ${xBoxShadow}
    ${xHover}

    flex-direction: column;
    justify-content: space-between;
    position: relative;
    
    ::before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 70%;
        background: ${({ thumbnail }) => thumbnail};
        border-radius: 4px 4px 0 0;
    }

    padding: 0;
    padding-bottom: 4px;

    width: 60px;
    height: 60px;

    border: none;
    border-radius: 4px;

    font-weight: bold;
    cursor: pointer;

    transition: 200ms all ease;

    :active, :focus {
        ${selectedStyles};
    }
    ${({ selected }) => selected ? selectedStyles : ''}
`
