import React, { Component } from 'react'
import {
    Container,
    TextField,
    NumberField,
    TextAreaField,
    SelectField
} from 'mun-ui'

export default class FormPage extends Component {
    render() {
        return (
            <Container>
                <TextField name='name' label='Name' />
                <TextField name='username' label='Username' />
                <NumberField name='number' label='Number' />
                <TextAreaField name='description' label='Description' />
                <SelectField name='selection' label='Selection' />
                <SelectField name='color' label='Color' />
            </Container>
        )
    }
}
