import React, { Component } from 'react'
import {
    BooleanCell,
    IdCell,
    ListCell,
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
                        <Cell>Tags</Cell>
                        <Cell>Items</Cell>
                        <Cell>Action</Cell>
                    </Row>
                    <Row>
                        <IdCell value={138290392} />
                        <Cell>Jean</Cell>
                        <BooleanCell value={true} />
                        <ColorCell value='Red' hex='#d82b2b' />
                        <ListCell values={['New', 'Tag']} />
                        <ListCell values={[]} />
                        <Cell>Delete</Cell>
                    </Row>
                    <Row>
                        <IdCell value={324990329} />
                        <Cell>Dupond</Cell>
                        <BooleanCell value={false} />
                        <ColorCell value='Orange' hex='#d87f2b' />
                        <ListCell values={['Orange', 'Text', 'New']} />
                        <ListCell
                            values={[
                                'Sed ut perspiciatis unde omnis iste natus error sit'
                            ]}
                        />
                        <Cell>Delete</Cell>
                    </Row>
                    <Row>
                        <IdCell value={338203284} />
                        <Cell>Roger</Cell>
                        <BooleanCell value={undefined} />
                        <ColorCell value='Yellow' hex='#d8b02b' />
                        <ListCell values={['Yellow', 'New', 'Text', 'Tag']} />
                        <ListCell
                            values={[
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                                'ullamco laboris nisi ut aliquip ex ea commodo'
                            ]}
                        />
                        <Cell>Delete</Cell>
                    </Row>
                </Table>
            </Container>
        )
    }
}
