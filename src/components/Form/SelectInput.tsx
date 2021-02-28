import styled from '@emotion/styled'
import React, { Component } from 'react'
import { Input } from './Input'

type DropdownProps = {
    show: boolean
}

const Dropdown = styled.div<DropdownProps>`
    background-color: ${(props) => props.theme.color.secondaryBackground};
    border-radius: 6px;
    display: ${(props) => (props.show ? 'block' : 'none')};
    position: absolute;
    margin-top: 4px;
    min-width: 216px;
    margin: 2px;
`

const DropdownItem = styled.div`
    padding: 6px 12px;
    margin: 0 6px;
    border-radius: 4px;
    color: ${(props) => props.theme.color.text};
    cursor: pointer;
    &:first-child {
        margin-top: 6px;
    }
    &:last-child {
        margin-bottom: 6px;
    }
    &:hover {
        background-color: ${(props) => props.theme.color.accent};
    }
`

type SelectInputProps = {
    onFieldFocus?: () => void
}

type SelectInputState = {
    focused: boolean
}

export class SelectInput extends Component<SelectInputProps, SelectInputState> {
    public ref: React.RefObject<any>

    constructor(props: SelectInputProps) {
        super(props)

        this.state = {
            focused: false
        }

        this.ref = React.createRef()

        this.onFieldFocus = this.onFieldFocus.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
    }

    componentWillUnmount() {
        this.closeDropdown()
    }

    onFieldFocus(/* e: React.FocusEvent<any> */) {
        this.setState({ focused: true })
        document.addEventListener('mousedown', this.onMouseDown)
        if (this.props.onFieldFocus) this.props.onFieldFocus()
    }

    onMouseDown = (e: MouseEvent) => {
        if (!this.ref.current.contains(e.target)) {
            this.closeDropdown()
        }
    }

    closeDropdown() {
        this.setState({ focused: false })
        document.removeEventListener('mousedown', this.onMouseDown)
    }

    render() {
        return (
            <div ref={this.ref}>
                <Input onFocus={this.onFieldFocus} />
                <Dropdown show={this.state.focused}>
                    <DropdownItem>Item 1</DropdownItem>
                    <DropdownItem>Item 2</DropdownItem>
                    <DropdownItem>Item 3</DropdownItem>
                </Dropdown>
            </div>
        )
    }
}
