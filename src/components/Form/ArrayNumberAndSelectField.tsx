/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { ChangeEvent, Component } from 'react'
import { Field } from './Field'
import { Input } from './Input'
import { SelectInput, SelectValue } from './SelectInput'
import { TextFieldProps } from './TextField'

const Div = styled.div`
    background-color: ${(props) => props.theme.color.secondaryBackground};
    color: ${(props) => props.theme.color.text};
    padding: 6px 16px;
    padding-left: 4px;
    display: block;
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

type ItemProps = {
    value: Value
    i: number
    clear: (value: Value) => void
}

class Item extends Component<ItemProps> {
    render() {
        return (
            <Div onClick={() => this.props.clear(this.props.value)}>
                <span
                    css={(theme) =>
                        css(`
                            border-radius: 4px;
                            background-color: ${theme.color.thirdBackground};
                            padding: 6px;
                            margin-right: 8px;
                            margin-left: 2px;
                            text-align: center;
                            display: inline-block;
                            min-width: 18px;
                        `)
                    }
                >
                    {this.props.i + 1}
                </span>
                {this.props.value.number} - {this.props.value.value.label}
            </Div>
        )
    }
}

type Value = { number: number; value: SelectValue }

type ArrayNumberAndSelectFieldProps = Omit<TextFieldProps, 'ref'> & {
    values: SelectValue[]
    onChangeCallback?: (values: Value[], name: string | undefined) => void
    onSelectFieldFocus?: () => void
    prefill?: Value[]
}

type ArrayNumberAndSelectFieldState = {
    numberValue: string
    selectValue: SelectValue | undefined
    values: Value[]
    selectValues: SelectValue[]
}

export class ArrayNumberAndSelectField extends Component<
    ArrayNumberAndSelectFieldProps,
    ArrayNumberAndSelectFieldState
> {
    constructor(props: ArrayNumberAndSelectFieldProps) {
        super(props)

        this.state = {
            numberValue: '',
            selectValue: undefined,
            values: this.props.prefill || [],
            selectValues: this.props.values
        }

        this.add = this.add.bind(this)
        this.clear = this.clear.bind(this)
        this.onNumberChange = this.onNumberChange.bind(this)
        this.onSelect = this.onSelect.bind(this)
    }

    componentDidUpdate(prevProps: ArrayNumberAndSelectFieldProps) {
        if (prevProps.values !== this.props.values) {
            this.setState({ selectValues: this.props.values })
        }
    }

    add() {
        // If empty field
        if (!this.state.selectValue || this.state.numberValue.length === 0)
            return

        // If already selected
        if (this.state.values.some((v) => v.value === this.state.selectValue))
            return

        this.setState(
            {
                values: [
                    ...this.state.values,
                    {
                        number: Number.parseFloat(this.state.numberValue),
                        value: this.state.selectValue
                    }
                ],
                numberValue: '',
                selectValue: undefined
            },
            () => {
                if (this.props.onChangeCallback)
                    this.props.onChangeCallback(
                        this.state.values,
                        this.props.name
                    )
            }
        )
    }

    clear(value: Value) {
        this.setState(
            {
                values: this.state.values.filter((v) => v !== value)
            },
            () => {
                if (this.props.onChangeCallback)
                    this.props.onChangeCallback(
                        this.state.values,
                        this.props.name
                    )
            }
        )
    }

    onNumberChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            numberValue: e.target.value
        })
    }

    onSelect(value: SelectValue) {
        this.setState(
            {
                selectValue: value
            },
            () => {
                this.add()
            }
        )
    }

    render() {
        const { prefill, ...props } = this.props

        return (
            <Field name={this.props.name} label={this.props.label}>
                {this.state.values.map((value, i) => {
                    return (
                        <Item key={i} i={i} value={value} clear={this.clear} />
                    )
                })}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Input
                        {...props}
                        css={css(`
                            min-width: 100px;
                            width: 100px;
                            margin-right: 6px;
                        `)}
                        type='number'
                        value={this.state.numberValue}
                        onChange={this.onNumberChange}
                    />
                    <SelectInput
                        {...props}
                        values={this.state.selectValues}
                        onSelectCallback={this.onSelect}
                        onFieldFocus={this.props.onSelectFieldFocus}
                        clearAfterSelection
                    />
                </div>
            </Field>
        )
    }
}
