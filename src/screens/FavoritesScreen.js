import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../state/user/userContext'
import FavoritesTable from '../components/FavoritesTable'
import NoFavorites from '../components/NoFavorites'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import { Container, Button, Col, Row } from 'react-bootstrap'

const FavoritesScreen = () => {

    const history = useHistory()

    const userContext = useContext(UserContext)

    const { userId, getUserFavorites, favorites } = userContext

    useEffect(() => {

        getUserFavorites(userId)

    }, [])



    return (
        <Container style={{ width: '90%', padding: '0 12px 100px' }} fluid>
            <Row>
                <Col style={{ margin: '40px 12px 20px', textAlign: 'center', borderBottom: '1px solid white' }}>
                    <h1>Your Favorites</h1>
                </Col>
            </Row>
            {!favorites && <Loader />}
            {favorites && favorites.length < 1 && <NoFavorites />}
            {favorites && favorites.length > 0 && (
                <>
                    {/* <div style={{ padding: '60px 0 50px', textAlign: 'center' }}>
                        <img src={Favs} alt='Favorites logo' style={{ width: '400px' }} />
                    </div> */}
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
            }
            <Footer />
        </Container>
    )
}

export default FavoritesScreen
