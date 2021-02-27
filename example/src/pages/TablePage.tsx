import React, { Component } from 'react'
import { Cell, Container, Row, Table } from 'mun-ui'

export default class TablePage extends Component {
    render() {
        return (
            <Container>
                <Table>
                    <Row header>
                        <Cell>ID</Cell>
                        <Cell>Username</Cell>
                        <Cell>Logged in</Cell>
                        <Cell>Action</Cell>
                    </Row>
                    <Row>
                        <Cell>1</Cell>
                        <Cell>Jean</Cell>
                        <Cell>true</Cell>
                        <Cell>Delete</Cell>
                    </Row>
                    <Row>
                        <Cell>2</Cell>
                        <Cell>Dupond</Cell>
                        <Cell>false</Cell>
                        <Cell>Delete</Cell>
                    </Row>
                </Table>
            </Container>
        )
    }
}
