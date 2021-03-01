/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import React, { Component } from 'react'
import { FieldStatus } from './Field'

export const StyledTextArea = styled.textarea`
    background-color: ${(props) => props.theme.color.secondaryBackground};
    outline: none;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.color.thirdBackground};
    color: ${(props) => props.theme.color.text};
    padding: 8px 12px;
    font-size: 15px;
    transition: all 0.1s;
    display: inline-block;
    &:focus {
        border-color: ${(props) => props.theme.color.accent};
    }
`

type TextAreaProps = React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
> & {
    onClear?: () => void
    showClear?: boolean
    regex?: string
}

type TextAreaState = {
    status: FieldStatus
}

export class TextArea extends Component<TextAreaProps, TextAreaState> {
    render() {
        return <StyledTextArea {...this.props} />
    }
}
