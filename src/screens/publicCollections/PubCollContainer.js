import React, { useEffect, useContext } from 'react'
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import PubCollHeader from './PubCollHeader'
import PubColAccordion from './PubColAccordion'
import Loader from '../../components/Loader'
import Footer from '../../components/Footer'

import PublicContext from '../../state/public/publicContext'

const PubCollContainer = ({ match }) => {

    const params = match.params.id

    const publicContext = useContext(PublicContext)
    const { selectedUserMedia, selectedUserCols, fetchPublicUserMedia, fetchPublicUserCols, clearPublicInfo } = publicContext

    useEffect(() => {
        clearPublicInfo().then(() => {
            fetchPublicUserMedia(params)
            fetchPublicUserCols(params)
        })
    }, [])

    return (
        <>
            <Container style={{ width: '90%' }} fluid>
                {!selectedUserMedia || !selectedUserCols ?
                    <Loader />
                    :
                    <>
                        <PubCollHeader userName={selectedUserMedia[0].username} />
                        <Row>
                            <Col>
                                <Accordion>
                                    {selectedUserCols && selectedUserCols.map((col, ind) => {
                                        return <PubColAccordion title={col} media={selectedUserMedia} index={ind} pubUserId={params} />
                                    })}
                                </Accordion>
                            </Col>
                        </Row>
                    </>
                }
            </Container>
            <Footer />
        </>
    )
}

export default PubCollContainer
