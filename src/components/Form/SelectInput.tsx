import styled from '@emotion/styled'
import React, { ChangeEvent, Component } from 'react'
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
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.09), 0 7px 8px rgba(0, 0, 0, 0.06);
`

const Item = styled.div`
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

type DropdownItemProps = {
    name: string
    label: string
    onClickCallback: (name: string, label: string) => void
}

class DropdownItem extends Component<DropdownItemProps> {
    render() {
        return (
            <Item
                onClick={() =>
                    this.props.onClickCallback(
                        this.props.name,
                        this.props.label
                    )
                }
            >
                {this.props.label}
            </Item>
        )
    }
}

type Value = { key: string; label: string }

type SelectInputProps = {
    onFieldFocus?: () => void
    values: Value[]
}

type SelectInputState = {
    focused: boolean
    selected: string
    inputValue: string
    values: Value[]
}

export class SelectInput extends Component<SelectInputProps, SelectInputState> {
    public ref: React.RefObject<any>

    constructor(props: SelectInputProps) {
        super(props)

        this.state = {
            focused: false,
            selected: '',
            inputValue: '',
            values: this.props.values
        }

        this.ref = React.createRef()

        this.onFieldFocus = this.onFieldFocus.bind(this)
        this.onFieldChange = this.onFieldChange.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
        this.selectItem = this.selectItem.bind(this)
    }

    componentWillUnmount() {
        this.closeDropdown()
    }

    onFieldFocus(/* e: React.FocusEvent<any> */) {
        this.setState({ focused: true })
        document.addEventListener('mousedown', this.onMouseDown)
        if (this.props.onFieldFocus) this.props.onFieldFocus()
    }

    onFieldChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value

        const values = this.props.values.filter((v) => {
            return v.label.toLowerCase().includes(value.toLowerCase())
        })

        this.setState({
            inputValue: value,
            values: values
        })
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

    selectItem(name: string, label: string) {
        this.setState({ selected: name, inputValue: label })
        this.closeDropdown()
    }

    render() {
        return (
            <div ref={this.ref}>
                <Input
                    value={this.state.inputValue}
                    onFocus={this.onFieldFocus}
                    onChange={this.onFieldChange}
                />
                <Dropdown show={this.state.focused}>
                    {this.state.values.map((element) => {
                        return (
                            <DropdownItem
                                onClickCallback={this.selectItem}
                                key={element.key}
                                name={element.key}
                                label={element.label}
                            />
                        )
                    })}
                </Dropdown>
            </div>
        )
    }
}
