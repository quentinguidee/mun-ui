/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Component } from 'react'

export const StyledStatusBarItem = styled.div`
    align-self: center;
    display: inline-block;
    padding: 3px 8px;
    margin-left: 24px;
    border-radius: 4px;
`

type StatusBarItemProps = { color?: string }

export class StatusBarItem extends Component<StatusBarItemProps> {
    render() {
        return (
            <StyledStatusBarItem
                css={(theme) =>
                    css(`
                        color: ${
                            this.props.color
                                ? theme.color.white
                                : theme.color.text
                        };
                        background-color: ${
                            this.props.color
                                ? theme.color[this.props.color]
                                : 'transparent'
                        };
                    `)
                }
            >
                {this.props.children}
            </StyledStatusBarItem>
        )
    }
}
