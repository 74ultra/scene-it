import React, { useEffect, useContext, useRef } from 'react'
import RemoveFavModal from '../components/RemoveFavModal'
import UpdateMediaModal from '../components/UpdateMediaModal'
import { Row, Col, Image, Table, Container, Button, Accordion } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import Footer from '../components/Footer'
import SearchContext from '../state/search/searchContext'
import UserContext from '../state/user/userContext'
import MediaContext from '../state/media/mediaContext'

const FavMediaScreen = ({ match }) => {

    const history = useHistory()

    const reviewRef = useRef()

    function handleReviewClick(rf) {
        rf.current.scrollIntoView({ behavior: 'smooth' })
    }

    const userContext = useContext(UserContext)
    const searchContext = useContext(SearchContext)
    const mediaContext = useContext(MediaContext)

    const { getFavInfo, favInfo, clearFavInfo } = userContext
    const { titleInfo, titleSearch, clearTitleInfo } = searchContext
    const { getMediaInfo, mediaInfo, clearMediaInfo } = mediaContext

    const params = match.params.id


    useEffect(() => {
        // getFavInfo(params)
        getMediaInfo(params)
        titleSearch(params)
    }, [])

    const handleBack = () => {
        clearFavInfo()
        clearMediaInfo()
        clearTitleInfo()
        history.push('/collections')
    }




    return (
        <>
            <Container style={{ padding: '15px 0' }}>
                <Button onClick={handleBack} size='sm' variant='light' style={{ borderRadius: '3px' }}>&#x27F5; Back to Collections</Button>
            </Container>
            {Object.keys(titleInfo) > 1 && mediaInfo
                ? <Loader />
                : <Container style={{ padding: '15px 0 100px' }}>

                    <Row>
                        <Col>
                            <h2 style={{ display: 'inline' }}>{titleInfo.Title}</h2>
                            {mediaInfo && mediaInfo.collection && <p>Collection: <strong>{mediaInfo.collection}</strong></p>}
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>Year</td>
                                        <td>{titleInfo.Year}</td>
                                    </tr>
                                    <tr>
                                        <td>Rated</td>
                                        <td>{titleInfo.Rated}</td>
                                    </tr>
                                    <tr>
                                        <td>Director</td>
                                        <td>{titleInfo.Director}</td>
                                    </tr>
                                    <tr>
                                        <td>Writer(s)</td>
                                        <td>{titleInfo.Writer}</td>
                                    </tr>
                                    <tr>
                                        <td>Actors</td>
                                        <td>{titleInfo.Actors}</td>
                                    </tr>
                                    <tr>
                                        <td>Awards</td>
                                        <td>{titleInfo.Awards}</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>{titleInfo.Type}</td>
                                    </tr>
                                    <tr>
                                        <td>Genre</td>
                                        <td>{titleInfo.Genre}</td>
                                    </tr>
                                    <tr>
                                        <td>Runtime</td>
                                        <td>{titleInfo.Runtime}</td>
                                    </tr>
                                    <tr>
                                        <td>Country</td>
                                        <td>{titleInfo.Country}</td>
                                    </tr>
                                    <tr>
                                        <td>Metascore</td>
                                        <td>{titleInfo.Metascore}</td>
                                    </tr>
                                    <tr>
                                        <td>Rating</td>
                                        <td>{titleInfo.imdbRating} - <em><small>{titleInfo.imdbVotes}k votes IMDb</small></em></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div style={{ display: 'flex' }}>
                                {mediaInfo && mediaInfo.collection && <RemoveFavModal colName={mediaInfo.collection} id={mediaInfo.id} movie={titleInfo} />}
                                {/* {mediaInfo && <UpdateFavModal movie={titleInfo} />} */}
                                {mediaInfo && <UpdateMediaModal movie={titleInfo} />}

                            </div>

                        </Col>
                        <Col>
                            <Row style={{ textAlign: 'center' }}>
                                {mediaInfo && <h3><Rating value={mediaInfo.rating} /></h3>}
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                    <Image src={titleInfo.Poster} />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: '0 50px' }}>
                                    <Accordion onClick={() => handleReviewClick(reviewRef)}>
                                        <Accordion.Item style={{ padding: '0 0 10px' }} eventKey='0'>
                                            <Accordion.Header>Plot summary</Accordion.Header>
                                            <Accordion.Body>
                                                {titleInfo.Plot}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header>Your review</Accordion.Header>
                                            <Accordion.Body ref={reviewRef}>
                                                {mediaInfo ? mediaInfo.comment : `No comments`}
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

export default FavMediaScreen
