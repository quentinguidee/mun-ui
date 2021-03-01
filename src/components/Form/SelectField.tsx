import React, { Component } from 'react'
import { Field } from './Field'
import { SelectInput, SelectValue } from './SelectInput'
import { TextFieldProps } from './TextField'

interface SelectFieldProps
    extends Omit<Omit<TextFieldProps, 'ref'>, 'onChangeCallback'> {
    values: SelectValue[]
    onChangeCallback?: (
        value: SelectValue | undefined,
        name: string | undefined
    ) => void
}

export class SelectField extends Component<SelectFieldProps> {
    constructor(props: SelectFieldProps) {
        super(props)

        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(value: SelectValue | undefined) {
        if (this.props.onChangeCallback)
            this.props.onChangeCallback(value, this.props.name)
    }

    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                <SelectInput
                    {...this.props}
                    values={this.props.values}
                    onSelectCallback={this.onSelect}
                />
            </Field>
        )
    }
}
