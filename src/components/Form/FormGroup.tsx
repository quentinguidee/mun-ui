import styled from '@emotion/styled'
import React, { Component } from 'react'

type ContainerProps = {
    column?: boolean
    row?: boolean
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    border-radius: 6px;
    border-top-left-radius: 0;
    border: 1px solid ${(props) => props.theme.color.thirdBackground};
    margin-bottom: 24px;
`

const Title = styled.div`
    color: ${(props) => props.theme.color.secondaryText};
    background-color: ${(props) => props.theme.color.thirdBackground};
    display: inline-block;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 8px 12px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 13px;
`

type FormGroupProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> &
    ContainerProps & {
        title: string
    }

export class FormGroup extends Component<FormGroupProps> {
    render() {
        return (
            <React.Fragment>
                <Title>{this.props.title}</Title>
                <Container {...this.props}>{this.props.children}</Container>
            </React.Fragment>
        )
    }
}
