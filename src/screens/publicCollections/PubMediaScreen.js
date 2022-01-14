import React, { useEffect, useContext, useState } from 'react'
import { Row, Col, Image, Table, Container, Button, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../../components/Rating'
import Loader from '../../components/Loader'
import Footer from '../../components/Footer'

import PublicContext from '../../state/public/publicContext'

const PubMediaScreen = () => {

    const [mediaItem, setMediaItem] = useState(false)

    const publicContext = useContext(PublicContext)
    const { publicUserItem, searchPublicItem } = publicContext

    console.log('Public user item: ', publicUserItem, ' MediaItem: ', mediaItem)

    useEffect(() => {
        searchPublicItem(publicUserItem.imdbid).then(res => {
            setMediaItem(res)
        })
    }, [])

    if (!mediaItem) {
        return <Loader />
    }


    return (
        <>
            <Container style={{ padding: '20px 0' }}>
                <Link to={`/public/collections/${publicUserItem.userid}`}>
                    <Button size='sm' variant='primary' style={{ borderRadius: '3px' }}>&#x27F5; {`Back to ${publicUserItem.username}'s collections`}</Button>
                </Link>
            </Container>

            <Container style={{ padding: '15px 0 100px' }}>
                <Row>
                    <Col>
                        <h2 style={{ display: 'inline' }}>{mediaItem.Title}</h2>
                        <p>Collection: {publicUserItem.collection}</p>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>Year</td>
                                    <td>{mediaItem.Year}</td>
                                </tr>
                                <tr>
                                    <td>Rated</td>
                                    <td>{mediaItem.Rated}</td>
                                </tr>
                                <tr>
                                    <td>Director</td>
                                    <td>{mediaItem.Director}</td>
                                </tr>
                                <tr>
                                    <td>Writer(s)</td>
                                    <td>{mediaItem.Writer}</td>
                                </tr>
                                <tr>
                                    <td>Actors</td>
                                    <td>{mediaItem.Actors}</td>
                                </tr>
                                <tr>
                                    <td>Awards</td>
                                    <td>{mediaItem.Awards}</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>{mediaItem.Type}</td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>{mediaItem.Genre}</td>
                                </tr>
                                <tr>
                                    <td>Runtime</td>
                                    <td>{mediaItem.Runtime}</td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td>{mediaItem.Country}</td>
                                </tr>
                                <tr>
                                    <td>Metascore</td>
                                    <td>{mediaItem.Metascore}</td>
                                </tr>
                                <tr>
                                    <td>Rating</td>
                                    <td>{mediaItem.imdbRating} - <em><small>{mediaItem.imdbVotes} votes IMDb</small></em></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Row style={{ textAlign: 'center' }}>
                            {publicUserItem && <h3><Rating value={publicUserItem.rating} /></h3>}
                        </Row>
                        <Row>
                            <Col style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                <Image src={mediaItem.Poster} />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: '0 50px' }}>
                                <Accordion>
                                    <Accordion.Item style={{ padding: '0 0 10px' }} eventKey='0'>
                                        <Accordion.Header>Plot summary</Accordion.Header>
                                        <Accordion.Body>
                                            {mediaItem.Plot}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='1'>
                                        <Accordion.Header>{publicUserItem.username}'s review</Accordion.Header>
                                        <Accordion.Body>
                                            {publicUserItem ? publicUserItem.comment : `No comments`}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    )
}

export default PubMediaScreen
