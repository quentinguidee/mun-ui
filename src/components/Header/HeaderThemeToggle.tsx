/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Component } from 'react'

export class HeaderThemeToggle extends Component<
    React.HTMLAttributes<HTMLSpanElement>
> {
    render() {
        return (
            <span
                {...this.props}
                className='material-icons-round'
                css={(theme) =>
                    css(`
                        color: ${theme.color.secondaryText};
                        text-decoration: none;
                        display: inline-block;
                        align-self: center;
                        padding: 6px 12px;
                        margin: 0 4px;
                        border-radius: 6px;
                        transition: all 0.1s;
                        cursor: pointer;
                        &.active {
                            color: ${theme.color.text};
                            background-color: ${theme.color.secondaryBackground};
                            font-weight: 500;
                        }
                        &:hover {
                            background-color: ${theme.color.thirdBackground};
                        }
                    `)
                }
            >
                invert_colors
            </span>
        )
    }
}
