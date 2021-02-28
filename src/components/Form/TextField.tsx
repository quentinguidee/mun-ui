import React, { ChangeEvent, Component } from 'react'
import { Field } from './Field'
import { Input } from './Input'

export interface TextFieldProps
    extends Omit<
        React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        'ref'
    > {
    label?: string
}

type TextFieldState = {
    value: string
}

export class TextField extends Component<TextFieldProps, TextFieldState> {
    constructor(props: TextFieldProps) {
        super(props)

        this.state = {
            value: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onClear = this.onClear.bind(this)
    }

    onChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            value: e.target.value
        })
    }

    onClear() {
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                <Input
                    {...this.props}
                    name={this.props.name}
                    id={this.props.name}
                    value={this.state.value}
                    onChange={this.onChange}
                    onClear={this.onClear}
                    showClear={this.state.value.length !== 0}
                />
            </Field>
        )
    }
}
