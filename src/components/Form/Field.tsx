import styled from '@emotion/styled'
import React, { Component } from 'react'
import { Message } from './FieldMessage'

export enum FieldStatus {
    Undef = 'undef',
    Valid = 'valid',
    Warning = 'warning',
    Error = 'error'
}

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
    align-self: flex-start;
`

export interface IFieldProps {
    label?: string
    regex?: string
    regexMessage?: string
}

type FieldProps = {
    name?: string
    label?: string
    status?: FieldStatus
    regexMessage?: string
}

export class Field extends Component<FieldProps> {
    render() {
        return (
            <StyledField>
                <Label htmlFor={this.props.name}>{this.props.label}</Label>
                {this.props.children}
                <Message status={this.props.status}>
                    {this.props.regexMessage}
                </Message>
            </StyledField>
        )
    }
}
