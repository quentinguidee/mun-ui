/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Component } from 'react'

export const Cell = styled.td`
    padding: 10px 14px;
    color: ${(props) => props.theme.color.text};
`

type BooleanCellProps = {
    value: boolean | undefined
}

export class BooleanCell extends Component<BooleanCellProps> {
    render() {
        const value = this.props.value
        let icon

        if (value === true) {
            icon = 'check'
        } else if (value === false) {
            icon = 'clear'
        } else {
            icon = 'remove'
        }

        return (
            <Cell>
                <span
                    css={css(`
                        font-size: 16px;
                        vertical-align: middle;
                    `)}
                    className='material-icons-round'
                >
                    {icon}
                </span>
            </Cell>
        )
    }
}

type IdCellProps = {
    value: number
}

export class IdCell extends Component<IdCellProps> {
    render() {
        return (
            <Cell>
                <span
                    css={(theme) =>
                        css(`
                            background-color: ${theme.color.thirdBackground};
                            font-family: monospace;
                            border-radius: 4px;
                            padding: 4px 8px;
                        `)
                    }
                >
                    {this.props.value}
                </span>
            </Cell>
        )
    }
}

type ColorCellProps = {
    value: string
    hex: string
}

export class ColorCell extends Component<ColorCellProps> {
    render() {
        return (
            <Cell>
                <span
                    css={css(`
                        background-color: ${this.props.hex};
                        border-radius: 4px;
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 8px;
                    `)}
                />
                <span
                    css={css(`
                        vertical-align: middle;
                    `)}
                >
                    {this.props.value}
                </span>
            </Cell>
        )
    }
}
