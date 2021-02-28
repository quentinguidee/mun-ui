import styled from '@emotion/styled'
import React, { Component } from 'react'

const Label = styled.label`
    display: block;
    font-size: 15px;
    color: ${(props) => props.theme.color.secondaryText};
    margin-right: 16px;
    margin-bottom: 4px;
    margin-left: 8px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
`

const StyledField = styled.div`
    margin: 20px 10px;
    display: inline-block;
    vertical-align: top;
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
