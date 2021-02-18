import styled from '@emotion/styled'

export const Header = styled.header`
    border-bottom: 1px solid ${(props) => props.theme.color.secondaryBackground};
    color: ${(props) => props.theme.color.text};
    height: 64px;
    display: flex;
    justify-content: space-between;
`
