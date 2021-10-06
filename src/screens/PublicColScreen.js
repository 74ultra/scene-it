import React, { useContext, useEffect } from 'react'
import PublicUsers from '../components/PublicUsers'
import PublicFavsTable from '../components/PublicFavsTable'
import { Container, Row, Col } from 'react-bootstrap'
import PublicContext from '../state/public/publicContext'

const PublicColScreen = () => {

    const publicContext = useContext(PublicContext)

    const { getUsers, publicView, changePublicView } = publicContext

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Container style={{ width: '90%' }} fluid>
            <Row>
                <Col style={{ margin: '40px 12px 20px', textAlign: 'center', borderBottom: '1px solid white' }}>
                    <h1>Discover</h1>
                </Col>
            </Row>
            {publicView === 1 && <PublicUsers setView={changePublicView} />}
            {publicView === 2 && <PublicFavsTable setView={changePublicView} />}

        </Container>
    )
}

export default PublicColScreen
