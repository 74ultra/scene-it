import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../state/user/userContext'
import MediaContext from '../state/media/mediaContext'
import FavoritesTable from '../components/FavoritesTable'
import FavoritesMediaTable from '../components/FavoritesMediaTable'
import NoFavorites from '../components/NoFavorites'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import { Container, Button, Col, Row } from 'react-bootstrap'

const FavoritesScreen = () => {

    const history = useHistory()

    const userContext = useContext(UserContext)
    const mediaContext = useContext(MediaContext)

    const { userid, getUserFavorites, favorites } = userContext
    const { fetchUserMedia, media } = mediaContext

    useEffect(() => {

        getUserFavorites(userid)
        fetchUserMedia(userid)

    }, [])



    return (
        <Container style={{ width: '90%', padding: '0 12px 100px' }} fluid>
            <Row>
                <Col style={{ margin: '40px 12px 20px', textAlign: 'center', borderBottom: '1px solid white' }}>
                    <h1>Your Favorites</h1>
                </Col>
            </Row>
            {/* {!favorites && <Loader />}
            {favorites && favorites.length < 1 && <NoFavorites />}
            {favorites && favorites.length > 0 && (
                <>
                    <Row>
                        <Col style={{ margin: '0 0 20px' }}>
                            <Button onClick={() => history.push('/collections')}>See collections</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FavoritesTable favorites={favorites} />
                        </Col>
                    </Row>

                </>

            )
            } */}
            {!media && <Loader />}
            {media && media.length < 1 && <NoFavorites />}
            {media && media.length > 0 && (
                <>
                    <Row>
                        <Col style={{ margin: '0 0 20px' }}>
                            <Button onClick={() => history.push('/collections')}>See collections</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FavoritesMediaTable favorites={media} />
                        </Col>
                    </Row>

                </>

            )
            }
            <Footer />
        </Container>
    )
}

export default FavoritesScreen
