import React, { Component } from 'react'
import {
    BooleanCell,
    IdCell,
    Cell,
    Container,
    Row,
    Table,
    ColorCell
} from 'mun-ui'

export default class TablePage extends Component {
    render() {
        return (
            <Container>
                <Table>
                    <Row header>
                        <Cell>ID</Cell>
                        <Cell>Username</Cell>
                        <Cell>Logged in</Cell>
                        <Cell>Color</Cell>
                        <Cell>Action</Cell>
                    </Row>
                    <Row>
                        <IdCell value={138290392} />
                        <Cell>Jean</Cell>
                        <BooleanCell value={true} />
                        <ColorCell value='Red' hex='#d82b2b' />
                        <Cell>Delete</Cell>
                    </Row>
                    <Row>
                        <IdCell value={324990329} />
                        <Cell>Dupond</Cell>
                        <BooleanCell value={false} />
                        <ColorCell value='Orange' hex='#d87f2b' />
                        <Cell>Delete</Cell>
                    </Row>
                    <Row>
                        <IdCell value={338203284} />
                        <Cell>Roger</Cell>
                        <BooleanCell value={undefined} />
                        <ColorCell value='Yellow' hex='#d8b02b' />
                        <Cell>Delete</Cell>
                    </Row>
                </Table>
            </Container>
        )
    }
}
