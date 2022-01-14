import React, { useContext, useEffect } from 'react'
import PublicUsers from '../components/PublicUsers'
import PublicUsersList from '../components/PublicUsersList'
import PublicFavsTable from '../components/PublicFavsTable'
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import PublicContext from '../state/public/publicContext'

const PublicColScreen = () => {

    const publicContext = useContext(PublicContext)

    const { getUsers, changePublicView, fetchUsersList } = publicContext

    useEffect(() => {
        getUsers()
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
