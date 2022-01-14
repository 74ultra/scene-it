import React from 'react'
import CollectionMediaAcc from './CollectionMediaAcc'
import { Accordion } from 'react-bootstrap'

const CollectionMedAcc = ({ media, title, index }) => {
    return (

        <Accordion.Item style={{ padding: '0 0 10px', background: 'transparent' }} eventKey={`${index}`}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                <CollectionMediaAcc title={title} media={media} />
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default CollectionMedAcc
