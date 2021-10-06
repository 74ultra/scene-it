import React, { useContext } from 'react'
import { Row, Col, Image, Table, Container, Button, Accordion } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import Footer from '../components/Footer'

import PublicContext from '../state/public/publicContext'

const PublicFavScreen = () => {

    const history = useHistory()

    const publicContext = useContext(PublicContext)
    const { selectedFav, selectedInfo, changePublicView, clearSelectedFav } = publicContext

    const handleBack = () => {
        changePublicView(2)
        clearSelectedFav()
        history.push('/public')
    }

    return (
        <>
            <Container style={{ padding: '15px 0' }}>
                <Button onClick={handleBack} size='sm' variant='light' style={{ borderRadius: '3px' }}>&#x27F5; Back</Button>
            </Container>
            {Object.keys(selectedFav) < 1 && selectedInfo
                ? <Loader />
                : <Container style={{ padding: '15px 0 100px' }}>

                    <Row>
                        <Col>
                            <h2 style={{ display: 'inline' }}>{selectedFav.Title}</h2>
                            {selectedInfo && selectedInfo.col && <p>Collection: <strong>{selectedInfo.col}</strong></p>}
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>Year</td>
                                        <td>{selectedFav.Year}</td>
                                    </tr>
                                    <tr>
                                        <td>Rated</td>
                                        <td>{selectedFav.Rated}</td>
                                    </tr>
                                    <tr>
                                        <td>Director</td>
                                        <td>{selectedFav.Director}</td>
                                    </tr>
                                    <tr>
                                        <td>Writer(s)</td>
                                        <td>{selectedFav.Writer}</td>
                                    </tr>
                                    <tr>
                                        <td>Actors</td>
                                        <td>{selectedFav.Actors}</td>
                                    </tr>
                                    <tr>
                                        <td>Awards</td>
                                        <td>{selectedFav.Awards}</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>{selectedFav.Type}</td>
                                    </tr>
                                    <tr>
                                        <td>Genre</td>
                                        <td>{selectedFav.Genre}</td>
                                    </tr>
                                    <tr>
                                        <td>Runtime</td>
                                        <td>{selectedFav.Runtime}</td>
                                    </tr>
                                    <tr>
                                        <td>Country</td>
                                        <td>{selectedFav.Country}</td>
                                    </tr>
                                    <tr>
                                        <td>Metascore</td>
                                        <td>{selectedFav.Metascore}</td>
                                    </tr>
                                    <tr>
                                        <td>Rating</td>
                                        <td>{selectedFav.imdbRating} - <em><small>{selectedFav.imdbVotes}k votes IMDb</small></em></td>
                                    </tr>
                                </tbody>
                            </Table>

                        </Col>
                        <Col>
                            <Row style={{ textAlign: 'center' }}>
                                {selectedInfo && <h3><Rating value={parseFloat(selectedInfo.rating)} /></h3>}
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                    <Image src={selectedFav.Poster} />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: '0 50px' }}>
                                    <Accordion>
                                        <Accordion.Item style={{ padding: '0 0 10px' }} eventKey='0'>
                                            <Accordion.Header>Plot summary</Accordion.Header>
                                            <Accordion.Body>
                                                {selectedFav.Plot}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header>{selectedInfo.username}'s review</Accordion.Header>
                                            <Accordion.Body>
                                                {selectedInfo ? selectedInfo.comment : `No comments`}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>


                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>


            }
            <Footer />
        </>
    )
}

export default PublicFavScreen
