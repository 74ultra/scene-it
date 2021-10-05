import React from 'react'
import CollectionItemsAcc from './CollectionItemsAcc'
import { Accordion } from 'react-bootstrap'

const CollectionAcc = ({ title, index, favs }) => {

    return (

        <Accordion.Item style={{ padding: '0 0 10px', background: 'transparent' }} eventKey={`${index}`}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                <CollectionItemsAcc title={title} favs={favs} />
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default CollectionAcc
