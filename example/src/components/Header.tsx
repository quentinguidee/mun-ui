import React, { Component } from 'react'
import {
    Header as MunHeader,
    HeaderAccount,
    HeaderLink,
    HeaderLinks,
    HeaderLogo,
    HeaderSpace,
    HeaderThemeToggle
} from 'mun-ui'

type HeaderProps = {
    toggleTheme: () => void
}

export default class Header extends Component<HeaderProps> {
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
                <HeaderThemeToggle onClick={this.props.toggleTheme} />
                <HeaderAccount
                    src='https://picsum.photos/seed/seed/40'
                    name='Username'
                />
            </MunHeader>
        )
    }
}
