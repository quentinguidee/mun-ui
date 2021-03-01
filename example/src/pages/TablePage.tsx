import React, { Component } from 'react'
import { BooleanCell, Cell, Container, Row, Table } from 'mun-ui'

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
                        <BooleanCell value={true} />
                        <Cell>Delete</Cell>
                    </Row>
                    <Row>
                        <Cell>2</Cell>
                        <Cell>Dupond</Cell>
                        <BooleanCell value={false} />
                        <Cell>Delete</Cell>
                    </Row>
                    <Row>
                        <Cell>3</Cell>
                        <Cell>Roger</Cell>
                        <BooleanCell value={undefined} />
                        <Cell>Delete</Cell>
                    </Row>
                </Table>
            </Container>
        )
    }
}
