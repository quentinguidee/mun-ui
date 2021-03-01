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
