import styled from '@emotion/styled'
import React, { Component } from 'react'

const StyledHeaderAccount = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    padding: 0 20px;
`

const ProfilePicture = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    align-self: center;
`

const ProfileName = styled.div`
    align-self: center;
    margin-right: 16px;
`

const Logout = styled.div`
    color: ${(props) => props.theme.color.secondaryText};
    text-decoration: none;
    padding: 6px 12px;
    align-self: center;
    margin: 0 16px;
    border-radius: 6px;
    transition: all 0.1s;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.color.red};
    }
`

type HeaderAccountProps = {
    src: string
    name: string
    onLogout?: () => void
}

export class HeaderAccount extends Component<HeaderAccountProps> {
    render() {
        return (
            <StyledHeaderAccount {...this.props}>
                <Logout onClick={this.props.onLogout}>Logout</Logout>
                <ProfileName>{this.props.name}</ProfileName>
                <ProfilePicture src={this.props.src} />
            </StyledHeaderAccount>
        )
    }
}
