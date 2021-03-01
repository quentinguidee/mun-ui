/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'
import { Component } from 'react'

const StyledInput = styled.input`
    background-color: ${(props) => props.theme.color.secondaryBackground};
    outline: none;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.color.thirdBackground};
    color: ${(props) => props.theme.color.text};
    padding: 8px 12px;
    font-size: 15px;
    transition: all 0.1s;
    display: inline-block;
    min-width: 190px;
    &:focus {
        border-color: ${(props) => props.theme.color.accent};
    }
    &::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }
`

type ClearProps = {
    onClear?: () => void
    show?: boolean
}

export class Clear extends Component<ClearProps> {
    render() {
        return (
            <span
                className='material-icons-round'
                css={(theme) =>
                    css(`
                        background-color: ${theme.color.thirdBackground};
                        color: ${theme.color.secondaryText};
                        border-radius: 50%;
                        font-size: 17px;
                        padding: 2px;
                        cursor: pointer;
                        display: ${this.props.show ? 'block' : 'none'};
                        position: absolute;
                        z-index: 10;
                        right: 12px;
                        top: 10px;
                        transition: all 0.1s;
                        &:hover {
                            background-color: ${
                                theme.color.secondaryBackground
                            };
                        }
                    `)
                }
                onClick={this.props.onClear}
            >
                clear
            </span>
        )
    }
}

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    onClear?: () => void
    showClear?: boolean
}

export class Input extends Component<InputProps> {
    render() {
        const { onClear, ...props } = this.props

        return (
            <div style={{ position: 'relative' }}>
                <StyledInput {...props} />
                {this.props.onClear && (
                    <Clear onClear={onClear} show={this.props.showClear} />
                )}
                {this.props.children}
            </div>
        )
    }
}
