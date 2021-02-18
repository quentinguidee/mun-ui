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

type HeaderAccountProps = {
    src: string
    name: string
}

export class HeaderAccount extends Component<HeaderAccountProps> {
    render() {
        return (
            <StyledHeaderAccount {...this.props}>
                <ProfileName>{this.props.name}</ProfileName>
                <ProfilePicture src={this.props.src} />
            </StyledHeaderAccount>
        )
    }
}
