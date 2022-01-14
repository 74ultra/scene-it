import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'

const PubCollHeader = ({ userName }) => {

    const history = useHistory()

    return (
        <>
            <Row>
                <Col style={{ margin: '40px 12px 20px', textAlign: 'center', borderBottom: '1px solid white' }}>
                    <h1>{userName}'s Collections</h1>
                </Col>
            </Row>
            <Row>
                <Col style={{ margin: '0 0 20px' }}>
                    <Button onClick={() => history.push('/public')}>Back to all users</Button>
                </Col>
            </Row>
        </>
    )
}

export default PubCollHeader
