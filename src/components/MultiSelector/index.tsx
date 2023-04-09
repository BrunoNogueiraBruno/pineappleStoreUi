import { useState } from 'react'
import { colorTheme } from '../../styles/globalStyles'
import { SMultiSelector, SelectorItem } from './styles'
import { MultiSelectorItemProps, MultiSelectorProps } from './types'

const MultiSelector = (props: MultiSelectorProps) => {
    const {
        items, defaultSelected = items[0].key
    } = props

    const [selected, setSelected] = useState<string>(defaultSelected ? defaultSelected : '')

    return (
        <SMultiSelector>
            {items.map((item: MultiSelectorItemProps) => {
                const { thumbnail = colorTheme.darkGray, label, key } = item

                return (
                    <SelectorItem
                        thumbnail={thumbnail}
                        key={key}
                        selected={selected === key}
                        children={label}
                        onClick={() => setSelected(key)}
                    />
                )
            })}
        </SMultiSelector>
    )
}

export default MultiSelector
