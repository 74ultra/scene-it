import React, { useEffect, useContext } from 'react'
import RemoveFavModal from '../components/RemoveFavModal'
import { Row, Col, Image, Table, Container, Button, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import Footer from '../components/Footer'
import SearchContext from '../state/search/searchContext'
import UserContext from '../state/user/userContext'

const FavMediaScreen = ({ history, match }) => {

    const userContext = useContext(UserContext)
    const searchContext = useContext(SearchContext)

    const { favorites, getFavInfo, favInfo } = userContext
    const { titleInfo, titleSearch } = searchContext

    const params = match.params.id

    console.log('Fav media favorites', favorites)
    console.log('Title Info: ', titleInfo)



    useEffect(() => {
        getFavInfo(params)
        titleSearch(params)
    }, [params])


    return (
        <>
            <Container style={{ padding: '15px 0' }}>
                <Link to='/favorites'>
                    <Button size='sm' variant='light' style={{ borderRadius: '3px' }}>&#x27F5; Back to favorites</Button>
                </Link>
            </Container>
            {Object.keys(titleInfo) < 1 && favInfo
                ? <Loader />
                : <Container style={{ padding: '15px 0' }}>
                    {/* <h2>{titleInfo.Title} </h2>
                    {favData && <h3><Rating value={parseInt(favData.rating.S)} /></h3>} */}

                    <Row>
                        <Col>
                            <h2>{titleInfo.Title} </h2>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>Year</td>
                                        <td>{titleInfo.Year}</td>
                                    </tr>
                                    <tr>
                                        <td>Released</td>
                                        <td>{titleInfo.Released}</td>
                                    </tr>
                                    <tr>
                                        <td>MPAA Rating</td>
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
                                        <td>IMDb Rating</td>
                                        <td>{titleInfo.imdbRating} - <em><small>{titleInfo.imdbVotes}k votes</small></em></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <RemoveFavModal movie={titleInfo} />
                        </Col>
                        <Col>
                            <Row style={{ textAlign: 'center' }}>
                                {favInfo && <h3><Rating value={parseFloat(favInfo.rating.S)} /></h3>}
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                    <Image src={titleInfo.Poster} />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: '25px 50px 0' }}>
                                    <Accordion>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>Plot</Accordion.Header>
                                            <Accordion.Body>
                                                {titleInfo.Plot}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <br />
                                    <Accordion>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>Your comments</Accordion.Header>
                                            <Accordion.Body>
                                                {favInfo ? favInfo.comment.S : `No comments`}
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
