/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Component } from 'react'
import { TextField, TextFieldProps } from './TextField'

interface NumberFieldProps extends Omit<TextFieldProps, 'ref'> {}

export class NumberField extends Component<NumberFieldProps> {
    render() {
        return (
            <TextField
                {...this.props}
                css={css(`
                    min-width: 100px;
                    width: 100px;
                `)}
                type='number'
            />
        )
    }
}
