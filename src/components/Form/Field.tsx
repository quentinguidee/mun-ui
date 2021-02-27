import styled from '@emotion/styled'
import React, { Component } from 'react'

const Label = styled.label`
    display: block;
    font-size: 15px;
    color: ${(props) => props.theme.color.text};
    margin-right: 16px;
    margin-bottom: 8px;
    margin-top: 8px;
    margin-left: 8px;
`

const StyledField = styled.div`
    margin: 20px 0;
`

type TextFieldProps = {
    name?: string
    label?: string
}

export class Field extends Component<TextFieldProps> {
    render() {
        return (
            <StyledField>
                <Label htmlFor={this.props.name}>{this.props.label}</Label>
                {this.props.children}
            </StyledField>
        )
    }
}
