import styled from '@emotion/styled'

export const StatusBar = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 28px;
    background-color: ${(props) => props.theme.color.secondaryBackground};
    flex-wrap: nowrap;
    justify-content: flex-start;
    font-size: 14px;
    z-index: 1000;
`
