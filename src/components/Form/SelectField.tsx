import React, { Component } from 'react'
import { Field } from './Field'
import { SelectInput } from './SelectInput'
import { TextFieldProps } from './TextField'

interface SelectFieldProps extends Omit<TextFieldProps, 'ref'> {}

export class SelectField extends Component<SelectFieldProps> {
    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                <SelectInput
                    values={[
                        {
                            key: 'one',
                            label: 'One'
                        },
                        {
                            key: 'two',
                            label: 'Two'
                        }
                    ]}
                    {...this.props}
                />
            </Field>
        )
    }
}
