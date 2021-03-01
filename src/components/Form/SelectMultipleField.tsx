/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { Component } from 'react'
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
    cursor: pointer;
    transition: all 0.1s;
    &:hover {
        background-color: ${(props) => props.theme.color.red};
    }
`

type TagProps = {
    value: SelectValue
    clear: (value: SelectValue) => void
}

class Tag extends Component<TagProps> {
    render() {
        return (
            <Div onClick={() => this.props.clear(this.props.value)}>
                {this.props.value.label}
            </Div>
        )
    }
}

interface SelectMultipleFieldProps
    extends Omit<Omit<TextFieldProps, 'ref'>, 'onChangeCallback'> {
    values: SelectValue[]
    onChangeCallback?: (values: SelectValue[]) => void
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
        this.clear = this.clear.bind(this)
    }

    select(value: SelectValue) {
        if (this.state.selectedValues.includes(value)) return

        this.setState(
            {
                selectedValues: [...this.state.selectedValues, value]
            },
            () => {
                if (this.props.onChangeCallback)
                    this.props.onChangeCallback(this.state.selectedValues)
            }
        )
    }

    clear(value: SelectValue) {
        this.setState(
            {
                selectedValues: [
                    ...this.state.selectedValues.filter((v) => v !== value)
                ]
            },
            () => {
                if (this.props.onChangeCallback)
                    this.props.onChangeCallback(this.state.selectedValues)
            }
        )
    }

    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                {this.state.selectedValues.map((value) => {
                    return (
                        <Tag key={value.key} value={value} clear={this.clear} />
                    )
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
