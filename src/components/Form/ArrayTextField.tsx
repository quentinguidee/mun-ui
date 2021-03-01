/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { ChangeEvent, Component } from 'react'
import { Field } from './Field'
import { Input } from './Input'
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
    value: string
    i: number
    clear: (value: string) => void
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
                {this.props.value}
            </Div>
        )
    }
}

type ArrayTextFieldProps = Omit<TextFieldProps, 'ref'> & {}

type ArrayTextFieldState = {
    inputValue: string
    values: string[]
}

export class ArrayTextField extends Component<
    ArrayTextFieldProps,
    ArrayTextFieldState
> {
    constructor(props: ArrayTextFieldProps) {
        super(props)

        this.state = {
            inputValue: '',
            values: []
        }

        this.add = this.add.bind(this)
        this.clear = this.clear.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.onInputKeyPress = this.onInputKeyPress.bind(this)
    }

    add() {
        if (this.state.inputValue.length === 0) return

        this.setState({
            values: [...this.state.values, this.state.inputValue],
            inputValue: ''
        })
    }

    clear(value: string) {
        this.setState({
            values: this.state.values.filter((v) => v !== value)
        })
    }

    onInputChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputValue: e.target.value
        })
    }

    onInputKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            this.add()
        }
    }

    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                {this.state.values.map((value, i) => {
                    return (
                        <Item key={i} i={i} value={value} clear={this.clear} />
                    )
                })}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Input
                        {...this.props}
                        value={this.state.inputValue}
                        onChange={this.onInputChange}
                        onKeyPress={this.onInputKeyPress}
                    />
                    <div
                        onClick={this.add}
                        css={(theme) =>
                            css(`
                                background-color: ${theme.color.secondaryBackground};
                                color: ${theme.color.secondaryText};
                                font-weight: 500;
                                text-transform: uppercase;
                                font-size: 13px;
                                border-radius: 6px;
                                padding: 8px;
                                height: 20px;
                                margin-top: 2px;
                                margin-left: 4px;
                                cursor: pointer;
                                &:hover {
                                    background-color: ${theme.color.thirdBackground};
                                }
                            `)
                        }
                    >
                        <span
                            className='material-icons-round'
                            style={{ marginTop: '-2px' }}
                        >
                            add
                        </span>
                    </div>
                </div>
            </Field>
        )
    }
}