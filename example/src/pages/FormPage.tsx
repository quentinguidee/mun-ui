import React, { Component } from 'react'
import {
    Container,
    TextField,
    NumberField,
    TextAreaField,
    SelectField,
    FormGroup
} from 'mun-ui'

export default class FormPage extends Component {
    render() {
        return (
            <Container>
                <FormGroup row title='Basic'>
                    <TextField name='name' label='Name' />
                    <TextField name='username' label='Username' />
                </FormGroup>
                <FormGroup column title='Complementary'>
                    <NumberField name='number' label='Number' />
                    <TextAreaField name='description' label='Description' />
                    <SelectField name='selection' label='Selection' />
                    <SelectField name='color' label='Color' />
                </FormGroup>
            </Container>
        )
    }
}
