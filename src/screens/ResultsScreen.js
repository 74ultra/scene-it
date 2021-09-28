import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Loader from '../components/Loader'
import AltSearchForm from '../components/AltSearchForm'
import Conveyer from '../components/Conveyer'
import TitleAlert from '../components/alerts/TitleAlert'
import SearchContext from '../state/search/searchContext'
import { Button, Row, Col, Table } from 'react-bootstrap'
import Footer from '../components/Footer'


const ResultsScreen = () => {

    const searchContext = useContext(SearchContext)

    const { results, nextPage, previousPage, page, title } = searchContext

    const history = useHistory();

    const searchMedia = (id) => {
        history.push(`/media/${id}`)
    }

    return (
        <div>
            <div style={{ padding: '100px 0 0' }}>
                <AltSearchForm />
            </div>
            {results.Response ? null :
                <div style={{ margin: '0 auto', padding: '48px 0 0', textAlign: 'center' }}>
                    <Conveyer />
                </div>
            }
            <div style={{ textAlign: 'center', width: '60%', margin: '0 auto 50px' }}>
                {title.length > 0 && results.Response === 'True' && <TitleAlert title={title} numResults={results.totalResults} />}
            </div>

            {Object.keys(results).length > 0 && !results.Response && <Loader />}

            {results.Response === 'True' && <Table style={{ maxWidth: '80%', minWidth: '80%', margin: '0 auto' }} hover>
                <thead>
                    <th style={{ fontSize: '1.3rem', padding: '0 0 0 8px' }}>Title</th>
                    <th style={{ textAlign: 'center', fontSize: '1.3rem' }}>Year</th>
                    <th style={{ textAlign: 'center', fontSize: '1.3rem' }}> Type</th>
                    <th style={{ textAlign: 'center', fontSize: '1.3rem' }}>Details</th>
                </thead>
                <tbody>
                    {results.Search.map(result => {
                        return (
                            <tr key={result.imdbID} onClick={() => searchMedia(result.imdbID)}>
                                <td style={{ width: '50%', fontSize: '1.2rem' }}>{result.Title}</td>
                                <td style={{ width: '20%', fontSize: '1.2rem', textAlign: 'center' }}>{result.Year}</td>
                                <td style={{ width: '20%', fontSize: '1.2rem', textAlign: 'center' }}>{result.Type}</td>
                                <td style={{ width: '10%', fontSize: '1.2rem', textAlign: 'center' }}><Button variant='secondary' size='sm' style={{ borderRadius: '3px', width: '30px' }}>...</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>}
            <Row style={{ width: '75%', margin: '0 auto', padding: '20px 0' }}>
                <Col>
                    {results.Response === 'True' && page > 1 && <Button style={{ margin: '0 10px', borderRadius: '5px' }} size='sm' variant="info" onClick={previousPage}>&#x27F5; </Button>}
                </Col>
                <Col>
                    {results.Response === 'True' && Object.keys(results.Search).length > 9 && <Button style={{ margin: '0 10px', float: 'right', borderRadius: '5px' }} size='sm' variant="info" onClick={nextPage}>&#10230; </Button>}
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default ResultsScreen
