import React, { Component } from 'react'
import {
    Header as MunHeader,
    HeaderAccount,
    HeaderLink,
    HeaderLinks,
    HeaderLogo,
    HeaderSpace
} from 'mun-ui'

export default class Header extends Component {
    render() {
        return (
            <MunHeader>
                <HeaderLogo>Mun UI</HeaderLogo>
                <HeaderSpace />
                <HeaderLinks>
                    <HeaderLink to='/table'>Table</HeaderLink>
                    <HeaderLink to='/form'>Form</HeaderLink>
                </HeaderLinks>
                <HeaderSpace grow={5} />
                <HeaderAccount
                    src='https://picsum.photos/seed/seed/40'
                    name='Username'
                />
            </MunHeader>
        )
    }
}
