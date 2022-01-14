import React, { useContext, useEffect } from 'react'
import PublicUsersList from '../components/PublicUsersList'
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import PublicContext from '../state/public/publicContext'

const PublicColScreen = () => {

    const publicContext = useContext(PublicContext)

    const { changePublicView, fetchUsersList } = publicContext

    useEffect(() => {
        fetchUsersList()
    }, [])

    return (
        <>
            <Container style={{ width: '90%' }} fluid>
                <Row>
                    <Col style={{ margin: '40px 12px 20px', textAlign: 'center', borderBottom: '1px solid white' }}>
                        <h1>Discover</h1>
                    </Col>
                </Row>
                <PublicUsersList setView={changePublicView} />
            </Container>
            <Footer />
        </>

    )
}

export default PublicColScreen
