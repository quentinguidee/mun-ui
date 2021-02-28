import React, { Component } from 'react'
import { Field } from './Field'
import { SelectInput, SelectValue } from './SelectInput'
import { TextFieldProps } from './TextField'

interface SelectFieldProps extends Omit<TextFieldProps, 'ref'> {
    values: SelectValue[]
}

export class SelectField extends Component<SelectFieldProps> {
    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                <SelectInput {...this.props} values={this.props.values} />
            </Field>
        )
    }
}
