import React, { useEffect, useContext } from 'react'
import CollectionMedAcc from '../components/CollectionMedAcc'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import NoFavorites from '../components/NoFavorites'
import Footer from '../components/Footer'

import UserContext from '../state/user/userContext'
import MediaContext from '../state/media/mediaContext'

const CollectionsScreen = () => {

    const history = useHistory()

    const userContext = useContext(UserContext)
    const mediaContext = useContext(MediaContext)

    const { userid, username } = userContext
    const { media, collections, fetchUserMedia, fetchUserCollections } = mediaContext

    console.log(collections === null)
    useEffect(() => {
        // getUserFavorites(userid)
        // getUserCollections(userid)
        fetchUserMedia(userid, username)
        fetchUserCollections(userid, username)
    }, [])

    return (
        <>
            <Container style={{ width: '90%' }} fluid>
                <Row>
                    <Col style={{ margin: '40px 12px 20px', textAlign: 'center', borderBottom: '1px solid white' }}>
                        <h1>Your Collections</h1>
                    </Col>
                </Row>
                {(!collections || collections.length < 1) && <NoFavorites />}
                {collections && collections.length > 0 && <>
                    <Row>
                        <Col style={{ margin: '0 0 20px' }}>
                            <Button onClick={() => history.push('/favorites')}>See all favorites</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Accordion>
                                {collections && collections.map((col, ind) => {
                                    return <CollectionMedAcc key={ind} index={ind} media={media} title={col} />
                                })}
                            </Accordion>
                        </Col>
                    </Row>
                </>}
            </Container>
            <Footer />
        </>
    )
}

export default CollectionsScreen

// 