import styled from '@emotion/styled'

export const Input = styled.input`
    background-color: ${(props) => props.theme.color.secondaryBackground};
    outline: none;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.color.thirdBackground};
    color: ${(props) => props.theme.color.text};
    padding: 8px 12px;
    font-size: 15px;
    transition: all 0.1s;
    &:focus {
        border-color: ${(props) => props.theme.color.accent};
    }
    &::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }
`
