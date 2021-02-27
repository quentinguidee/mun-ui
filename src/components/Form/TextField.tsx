import React, { Component } from 'react'
import { Field } from './Field'
import { Input } from './Input'

export interface TextFieldProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string
}

export class TextField extends Component<TextFieldProps> {
    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                <Input
                    {...this.props}
                    name={this.props.name}
                    id={this.props.name}
                />
            </Field>
        )
    }
}
