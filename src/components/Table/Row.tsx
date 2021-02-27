import styled from '@emotion/styled'

type Props = {
    header?: boolean
}

export const Row = styled.tr<Props>`
    border-top: ${(props) => (props.header ? 0 : 1)}px solid
        ${(props) => props.theme.color.thirdBackground};
    border-bottom: ${(props) => (props.header ? 2 : 0)}px solid
        ${(props) => props.theme.color.thirdBackground};
    font-weight: ${(props) => (props.header ? 500 : 400)};
    min-height: ${(props) => (props.header ? '32px' : '0')};
`
