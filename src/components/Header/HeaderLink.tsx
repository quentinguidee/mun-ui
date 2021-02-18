/** @jsx jsx */
import {} from '@emotion/react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const HeaderLink: any = styled(NavLink)`
    color: ${(props) => props.theme.color.secondaryText};
    text-decoration: none;
    display: inline-block;
    padding: 5px 12px;
    margin: 0 4px;
    border-radius: 6px;
    transition: all 0.1s;
    &.active {
        color: ${(props) => props.theme.color.text};
        background-color: ${(props) => props.theme.color.secondaryBackground};
        font-weight: 500;
    }
    &:hover {
        background-color: ${(props) => props.theme.color.thirdBackground};
    }
`
