import styled from '@emotion/styled'
import React, { Component } from 'react'
import { Field } from './Field'
import { SelectInput, SelectValue } from './SelectInput'
import { TextFieldProps } from './TextField'

const Div = styled.div`
    background-color: ${(props) => props.theme.color.secondaryBackground};
    color: ${(props) => props.theme.color.text};
    padding: 6px 16px;
    display: inline-block;
    font-size: 15px;
    border-radius: 6px;
    margin: 4px 0;
    margin-right: 4px;
`

type TagProps = {
    label: string
}

class Tag extends Component<TagProps> {
    render() {
        return <Div>{this.props.label}</Div>
    }
}

interface SelectMultipleFieldProps extends Omit<TextFieldProps, 'ref'> {
    values: SelectValue[]
}

type SelectMultipleFieldState = {
    selectedValues: SelectValue[]
}

export class SelectMultipleField extends Component<
    SelectMultipleFieldProps,
    SelectMultipleFieldState
> {
    constructor(props: SelectMultipleFieldProps) {
        super(props)

        this.state = {
            selectedValues: []
        }

        this.select = this.select.bind(this)
    }

    select(value: SelectValue) {
        if (this.state.selectedValues.includes(value)) return

        this.setState({
            selectedValues: [...this.state.selectedValues, value]
        })
    }

    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                {this.state.selectedValues.map((value) => {
                    return <Tag key={value.key} label={value.label} />
                })}
                <SelectInput
                    {...this.props}
                    values={this.props.values}
                    onSelectCallback={this.select}
                    clearAfterSelection
                />
            </Field>
        )
    }
}
