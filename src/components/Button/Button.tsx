import styled from '@emotion/styled'

export const Button = styled.div`
    display: inline-block;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.secondaryBackground};
    color: ${(props) => props.theme.color.accent};
    cursor: pointer;
    transition: all 0.1s;
    user-select: none;
    &:hover {
        background-color: ${(props) => props.theme.color.accent};
        color: ${(props) => props.theme.color.text};
    }
`
