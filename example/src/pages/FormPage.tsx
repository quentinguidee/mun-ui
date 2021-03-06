import React, { Component } from 'react'
import {
    ArrayTextField,
    CheckboxExtendedField,
    Container,
    TextField,
    NumberField,
    TextAreaField,
    SelectField,
    SelectMultipleField,
    FormGroup,
    ArrayNumberAndTextField,
    ArrayNumberAndSelectField
} from 'mun-ui'

export default class FormPage extends Component {
    render() {
        return (
            <Container>
                <FormGroup row title='Basic'>
                    <TextField
                        name='name'
                        label='Name'
                        regex='^[A-Z]'
                        regexMessage='First letter should be uppercase'
                    />
                    <TextField name='username' label='Username' />
                </FormGroup>
                <FormGroup column title='Complementary'>
                    <NumberField name='number' label='Number' />
                    <TextAreaField
                        name='description'
                        label='Description'
                        regex='^[A-Z].*\.$'
                        regexMessage='First letter should be uppercase'
                    />
                    <SelectField
                        name='selection'
                        label='Selection'
                        values={[
                            {
                                key: 'one',
                                label: 'One'
                            },
                            {
                                key: 'two',
                                label: 'Two'
                            }
                        ]}
                    />
                    <SelectMultipleField
                        name='color'
                        label='Color'
                        values={[
                            {
                                key: 'one',
                                label: 'One'
                            },
                            {
                                key: 'two',
                                label: 'Two'
                            }
                        ]}
                    />
                    <CheckboxExtendedField name='boolean' label='Boolean' />
                    <ArrayTextField name='array' label='Array' />
                    <ArrayNumberAndTextField
                        name='array-number'
                        label='Array and number'
                    />
                    <ArrayNumberAndSelectField
                        name='array-select'
                        label='Array and select'
                        values={[
                            {
                                key: 'one',
                                label: 'One'
                            },
                            {
                                key: 'two',
                                label: 'Two'
                            }
                        ]}
                    />
                </FormGroup>
            </Container>
        )
    }
}
