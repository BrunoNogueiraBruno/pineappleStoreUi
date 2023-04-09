import styled from 'styled-components'
import { colorTheme } from '../../styles/globalStyles'

export const SButton = styled.button`
    background: ${colorTheme.gray};
    color: ${colorTheme.darkGray};
    height: 25px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
`