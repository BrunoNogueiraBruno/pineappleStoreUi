import React, { useEffect, useRef, useState } from 'react'
import { CarouselProps } from './types'

import { SCarousel, ImageItem, HandleContainer, Handle } from './styles'

const Carousel = (props: CarouselProps) => {
    const { items } = props
    const [currItem, setCurrItem] = useState(items[0])
    const touchStartX = useRef<number | null>(null)
    const imageItemRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStartX.current = e.touches[0].clientX
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (touchStartX.current !== null) {
                const touchMoveX = e.touches[0].clientX
                const deltaX = touchMoveX - touchStartX.current
                if (deltaX > 0) {
                    changeImage('left')
                } else if (deltaX < 0) {
                    changeImage('right')
                }
            }
        }

        const handleTouchEnd = () => {
            touchStartX.current = null
        }

        const imageItem = imageItemRef.current
        if (!imageItem) return

        imageItem.addEventListener('touchstart', handleTouchStart)
        imageItem.addEventListener('touchmove', handleTouchMove)
        imageItem.addEventListener('touchend', handleTouchEnd)

        return () => {
            imageItem.removeEventListener('touchstart', handleTouchStart)
            imageItem.removeEventListener('touchmove', handleTouchMove)
            imageItem.removeEventListener('touchend', handleTouchEnd)
        }
    }, [currItem])

    const changeImage = (direction: 'right' | 'left') => {
        const currItemIndex = items.indexOf(currItem)
        const newItem =
            direction === 'right' ? items[currItemIndex + 1] : items[currItemIndex - 1]
        if (typeof newItem === 'undefined') return
        setCurrItem(newItem)
    }

    return (
        <SCarousel>
            <ImageItem
                src={currItem.src}
                key={currItem.key}
                className="image-item"
                ref={imageItemRef}
            />
            <HandleContainer>
                {items.map(({ src, key }) => (
                    <Handle
                        selected={currItem.key === key}
                        onClick={() => setCurrItem({ src, key })}
                        key={key}
                    />
                ))}
            </HandleContainer>
        </SCarousel>
    )
}

export default Carousel
