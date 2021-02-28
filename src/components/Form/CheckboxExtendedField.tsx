/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { Component } from 'react'
import { Field } from './Field'

type CheckboxItemProps = {
    type: string
    icon: string
    onClickCallback: (type: string) => void
    selected: boolean
    color: string
}

class CheckboxItem extends Component<CheckboxItemProps> {
    constructor(props: CheckboxItemProps) {
        super(props)

        this.select = this.select.bind(this)
    }

    select() {
        this.props.onClickCallback(this.props.type)
    }

    render() {
        return (
            <div
                css={(theme) =>
                    css(`
                        color: ${theme.color.secondaryText};
                        background-color: ${
                            this.props.selected
                                ? theme.color[this.props.color]
                                : 'inherit'
                        };
                        cursor: pointer;
                        display: inline-block;
                        text-align: center;
                        width: 32px;
                        height: 32px;
                        border-radius: 6px;
                        margin: 2px;
                        transition: all 0.1s;
                        user-select: none;
                        &:hover {
                            background-color: ${
                                this.props.selected
                                    ? theme.color[this.props.color]
                                    : theme.color.secondaryBackground
                            };
                        }
                    `)
                }
                onClick={this.select}
            >
                <span
                    style={{ lineHeight: '32px' }}
                    className='material-icons-round'
                >
                    {this.props.icon}
                </span>
            </div>
        )
    }
}

type CheckboxExtendedFieldProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label?: string
}

type CheckboxExtendedFieldState = {
    selection: string
}

export class CheckboxExtendedField extends Component<
    CheckboxExtendedFieldProps,
    CheckboxExtendedFieldState
> {
    constructor(props: CheckboxExtendedFieldProps) {
        super(props)

        this.state = {
            selection: 'undef'
        }

        this.select = this.select.bind(this)
    }

    select(item: string) {
        this.setState({ selection: item })
    }

    render() {
        return (
            <Field name={this.props.name} label={this.props.label}>
                <CheckboxItem
                    color='red'
                    type='false'
                    icon='clear'
                    onClickCallback={this.select}
                    selected={this.state.selection === 'false'}
                />
                <CheckboxItem
                    color='secondaryBackground'
                    type='undef'
                    icon='remove'
                    onClickCallback={this.select}
                    selected={this.state.selection === 'undef'}
                />
                <CheckboxItem
                    color='green'
                    type='true'
                    icon='check'
                    onClickCallback={this.select}
                    selected={this.state.selection === 'true'}
                />
            </Field>
        )
    }
}
