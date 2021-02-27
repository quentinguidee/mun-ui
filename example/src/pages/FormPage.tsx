import React, { Component } from 'react'
import { Container, TextField } from 'mun-ui'

export default class FormPage extends Component {
    render() {
        return (
            <Container>
                <TextField name='name' label='Name' />
                <TextField name='username' label='Username' />
            </Container>
        )
    }
}
