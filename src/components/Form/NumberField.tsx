import React, { Component } from 'react'
import { TextField, TextFieldProps } from './TextField'

interface NumberFieldProps extends Omit<TextFieldProps, 'ref'> {}

export class NumberField extends Component<NumberFieldProps> {
    render() {
        return <TextField {...this.props} type='number' />
    }
}
