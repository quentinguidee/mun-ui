/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { Component } from 'react'
import { FieldStatus } from './Field'

type MessageProps = {
    status?: FieldStatus
}

export class Message extends Component<MessageProps> {
    render() {
        let color

        switch (this.props.status) {
            case FieldStatus.Undef:
                return <React.Fragment />
            case FieldStatus.Valid:
                return <React.Fragment />
            case FieldStatus.Error:
                color = 'red'
                break
            case FieldStatus.Warning:
                color = 'orange'
                break
            default:
                break
        }

        return (
            <span
                css={css(`
                    color: ${color};
                    max-width: 200px;
                    display: block;
                    text-align: left;
                    margin-left: 8px;
                    margin-top: 6px;
                    font-size: 14px;
                    font-weight: 500;
                `)}
            >
                {this.props.children}
            </span>
        )
    }
}
