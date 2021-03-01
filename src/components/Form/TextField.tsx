import React, { ChangeEvent, Component } from 'react'
import { Field, FieldStatus, IFieldProps } from './Field'
import { Input } from './Input'

export interface TextFieldProps
    extends Omit<
            React.DetailedHTMLProps<
                React.InputHTMLAttributes<HTMLInputElement>,
                HTMLInputElement
            >,
            'ref'
        >,
        IFieldProps {}

type TextFieldState = {
    value: string
    status: FieldStatus
}

export class TextField extends Component<TextFieldProps, TextFieldState> {
    constructor(props: TextFieldProps) {
        super(props)

        this.state = {
            value: '',
            status: FieldStatus.Undef
        }

        this.onChange = this.onChange.bind(this)
        this.onClear = this.onClear.bind(this)
        this.updateStatus = this.updateStatus.bind(this)
    }

    onChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({ value: e.target.value })
        this.updateStatus(e.target.value)
        if (this.props.onChange) this.props.onChange(e)
    }

    onClear() {
        this.setState({ value: '' })
        this.updateStatus('')
    }

    updateStatus(value: string) {
        let status: FieldStatus

        if (value.length === 0) {
            status = FieldStatus.Undef
        } else if (this.props.regex) {
            if (!new RegExp(this.props.regex).test(value)) {
                status = FieldStatus.Warning
            } else {
                status = FieldStatus.Valid
            }
        } else {
            status = FieldStatus.Valid
        }

        this.setState({ status: status })
    }

    render() {
        return (
            <Field
                name={this.props.name}
                label={this.props.label}
                status={this.state.status}
                regexMessage={this.props.regexMessage}
            >
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
