import React, { ChangeEvent, Component } from 'react'
import { Field, FieldStatus, IFieldProps } from './Field'
import { TextArea } from './TextArea'

type TextAreaFieldProps = Omit<
    React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >,
    'ref'
> &
    IFieldProps & {
        onChangeCallback?: (value: string, name: string | undefined) => void
        prefill?: string
    }

type TextAreaFieldState = {
    value: string
    status: FieldStatus
}

export class TextAreaField extends Component<
    TextAreaFieldProps,
    TextAreaFieldState
> {
    constructor(props: TextAreaFieldProps) {
        super(props)

        this.state = {
            value: this.props.prefill || '',
            status: FieldStatus.Undef
        }

        this.onChange = this.onChange.bind(this)
        this.onClear = this.onClear.bind(this)
        this.updateStatus = this.updateStatus.bind(this)
    }

    onChange(e: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ value: e.target.value })
        this.updateStatus(e.target.value)
        if (this.props.onChange) this.props.onChange(e)
        if (this.props.onChangeCallback)
            this.props.onChangeCallback(e.target.value, this.props.name)
    }

    onClear() {
        this.setState({ value: '' })
        this.updateStatus('')
        if (this.props.onChangeCallback)
            this.props.onChangeCallback('', this.props.name)
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
                <TextArea
                    {...this.props}
                    name={this.props.name}
                    id={this.props.name}
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </Field>
        )
    }
}
