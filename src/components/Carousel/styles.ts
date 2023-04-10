import styled, { css, keyframes } from 'styled-components'
import { CarouselHandleStylesProps, CarouselItem, CarouselItemStyles } from './types'
import { colorTheme, xFlexBox, xHover } from '../../styles/globalStyles'

export const SCarousel = styled.div`
    ${xFlexBox}

    overflow: hidden;
    gap: 8px;
    width: 700px;
    background-color: ${colorTheme.secondaryBg};
    position: relative;
    max-width: 100%;
    height: 500px;
`

const animationAppear = keyframes`
    0% {
        opacity: .8
    }
`

export const ImageItem = styled.img<CarouselItem>`
    max-width: 100%;

    animation: ${animationAppear} .5s ease-in;
`

export const HandleContainer = styled.div`
    ${xFlexBox}
    gap: 4px;

    position: absolute;
    bottom: 16px;
`

export const Handle = styled.div<CarouselHandleStylesProps>`
    ${xHover}

    background: ${({ selected }) => selected ? colorTheme.primaryText : colorTheme.primaryBg};
    width: 12px;
    height: 12px;
    border-radius: 40px;
    cursor: pointer;
`
