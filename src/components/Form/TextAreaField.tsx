import React, { Component } from 'react'
import { Field } from './Field'
import { TextArea } from './TextArea'

type TextAreaFieldProps = React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
> & {
    label?: string
}

export class TextAreaField extends Component<TextAreaFieldProps> {
    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                <TextArea
                    {...this.props}
                    name={this.props.name}
                    id={this.props.name}
                />
            </Field>
        )
    }
}
