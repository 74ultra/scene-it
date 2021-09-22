import React, { useEffect, useContext } from 'react'
import AddFavModal from '../components/AddFavModal'
import { Row, Col, Image, Table, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import SearchContext from '../state/search/searchContext'

const MediaScreen = ({ history, match }) => {

    const searchContext = useContext(SearchContext)

    const { titleInfo, titleSearch } = searchContext

    const params = match.params.id

    useEffect(() => {
        titleSearch(params)
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
            <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Link to='/results'>
                    <Button size='sm' variant='light' style={{ borderRadius: '3px' }}>&#x27F5; Back to search results</Button>
                </Link>
            </Container>

            {Object.keys(titleInfo) < 1
                ? <Loader />
                : <Container style={{ paddingTop: '20px' }}>
                    <h2>{titleInfo.Title}</h2>

                    <Row>
                        <Col>
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
                                        <td>{titleInfo.imdbRating} - <em><small>{numbConverter(titleInfo.imdbVotes)}k votes</small></em></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <AddFavModal movie={titleInfo} />
                        </Col>
                        <Col>
                            <Row>
                                <Col style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                    <Image src={titleInfo.Poster} />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: '0 50px' }}>{titleInfo.Plot}</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            }

        </>
    )
}

export default MediaScreen
