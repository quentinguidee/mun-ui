import React, { Component } from 'react'
import { BooleanCell, IdCell, Cell, Container, Row, Table } from 'mun-ui'

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
                        <IdCell value={138290392} />
                        <Cell>Jean</Cell>
                        <BooleanCell value={true} />
                        <Cell>Delete</Cell>
                    </Row>
                    <Row>
                        <IdCell value={324990329} />
                        <Cell>Dupond</Cell>
                        <BooleanCell value={false} />
                        <Cell>Delete</Cell>
                    </Row>
                    <Row>
                        <IdCell value={338203284} />
                        <Cell>Roger</Cell>
                        <BooleanCell value={undefined} />
                        <Cell>Delete</Cell>
                    </Row>
                </Table>
            </Container>
        )
    }
}
