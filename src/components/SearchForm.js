import React, { useState } from 'react'
import axios from 'axios'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import MovieCard from './MovieCard'
import SearchAlert from './alerts/NoResultsAlert'

const SearchCtnStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '30px 0' }

const SearchForm = () => {

    const [results, setResults] = useState({})
    const [title, setTitle] = useState('')
    const [page, setPage] = useState(1)


    // consolidate search/next/previous into a single function
    const initialSearch = (title) => {
        axios.get(`${process.env.REACT_APP_SEARCH_URL}${title}`)
            .then(res => setResults(res.data))
            .then(() => setPage(1))
            .catch(err => console.log(err))
    }

    const nextPage = (title) => {
        const pageNumber = page + 1
        axios.get(`${process.env.REACT_APP_SEARCH_URL}${title}&page=${pageNumber}`)
            .then(res => setResults(res.data))
        setPage(page + 1)
    }

    const previousPage = (title) => {
        const pageNumber = page - 1
        axios.get(`${process.env.REACT_APP_SEARCH_URL}${title}&page=${pageNumber}`)
            .then(res => setResults(res.data))
        setPage(page - 1)
    }

    const clearResults = () => {
        setResults({})
        setPage(1)
        setTitle('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        initialSearch(title)
    }

    const handleChange = (e) => {
        setTitle([e.target.name] = e.target.value)
        console.log(title)
    }

    console.log('results: ', results, 'title: ', title)

    return (
        <>
            <Container>
                <Form variant='dark' onSubmit={handleSubmit}>
                    <Row>
                        <Col></Col>
                        <Col xs={7}>
                            <Form.Control
                                name='search'
                                value={title}
                                placeholder='Search for your favorites...'
                                onChange={handleChange}
                            />
                        </Col>
                        <Col style={{ display: 'flex', padding: '0' }}>
                            <Button style={{ marginRight: '10px', padding: '10px' }} type='submit'>Search</Button>
                            <Button onClick={clearResults}>Clear results</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <Container style={SearchCtnStyle}>
                {results.Response === 'True' && results.Search.map(result => {
                    return <MovieCard info={result} />
                })}
                {title && results.Response === 'False' && <SearchAlert title={title} />}

            </Container>
            {results.Search && <Button onClick={() => nextPage(title)}>More results</Button>}
            {page > 1 && <Button onClick={() => previousPage(title)}>Previous results</Button>}
        </>
    )
}

export default SearchForm
