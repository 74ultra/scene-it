import React from 'react'
import { Accordion } from 'react-bootstrap'
import PubAccordianItem from './PubAccordianItem'

const PubColAccordion = ({ title, media, index, pubUserId }) => {
    return (
        <Accordion.Item style={{ padding: '0 0 10px', background: 'transparent' }} eventKey={`${index}`}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                <PubAccordianItem title={title} media={media} key={index} pubUserId={pubUserId} />
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default PubColAccordion
