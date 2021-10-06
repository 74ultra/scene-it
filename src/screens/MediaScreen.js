import React, { useEffect, useState, useContext, useRef } from 'react'
import AddFavModal from '../components/AddFavModal'
import { Row, Col, Image, Table, Container, Button, Accordion } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import SearchContext from '../state/search/searchContext'
import UserContext from '../state/user/userContext'

const MediaScreen = ({ match }) => {

    const history = useHistory()

    const plotSumRef = useRef()

    function handlePlotClick() {
        plotSumRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const searchContext = useContext(SearchContext)
    const userContext = useContext(UserContext)

    const { titleInfo, titleSearch, clearTitleInfo } = searchContext
    const { favorites, authenticated } = userContext

    const [isFav, setIsFav] = useState(false)

    const isFavorite = (id, favs) => {
        if (favs) {
            favs.forEach(fav => {
                if (fav.imdbID.S === id) {
                    setIsFav(true)
                }
            })
        }
    }

    const params = match.params.id

    useEffect(() => {
        titleSearch(params)
        if (favorites) {
            isFavorite(params, favorites)
        }
    }, [params])

    const numbConverter = (stg) => {
        let newStg = ''
        for (let el of stg) {
            if (el !== ',') {
                newStg = newStg + el
            }
        }
        const converted = (parseInt(newStg) / 1000).toFixed(0)
        return converted
    }

    return (
        <>
            <Container style={{ padding: '20px 0' }}>
                <Link to='/results'>
                    <Button onClick={clearTitleInfo} size='sm' variant='light' style={{ borderRadius: '3px' }}>&#x27F5; Back to search results</Button>
                </Link>
            </Container>

            {Object.keys(titleInfo) < 1
                ? <Loader />
                : <Container style={{ padding: '20px 0' }}>

                    <Row>
                        <Col>
                            <h2>{titleInfo.Title}</h2>
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
                                        <td>{titleInfo.imdbRating} - <em><small>{numbConverter(titleInfo.imdbVotes)}k votes IMDb</small></em></td>
                                    </tr>
                                </tbody>
                            </Table>
                            {isFav && <Button variant='light' style={{ width: '100%', borderRadius: '3px' }} onClick={() => history.push('/collections')}>Go to Collections</Button>}
                            {authenticated && !isFav && <AddFavModal toggleFav={setIsFav} movie={titleInfo} />}
                        </Col>
                        <Col>
                            {authenticated && isFav &&
                                <Row style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                    <span style={{ fontSize: '1.1rem' }} ><small><i style={{ color: 'yellow' }} className={'fas fa-star'}></i> In your collections</small></span>
                                </Row>
                            }
                            <Row>
                                <Col style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                    <Image src={titleInfo.Poster} />
                                </Col>
                            </Row>
                            <Row>

                                <Col style={{ padding: '0 50px' }}>
                                    <Accordion defaultActiveKey='0' onClick={handlePlotClick}>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>Plot summary</Accordion.Header>
                                            <Accordion.Body>
                                                <p ref={plotSumRef}>{titleInfo.Plot}</p>
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

export default MediaScreen
