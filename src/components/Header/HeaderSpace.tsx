import styled from '@emotion/styled'

type Props = {
    grow?: number
}

export const HeaderSpace = styled.div<Props>`
    flex-grow: ${(props) => props.grow || `1`};
`
