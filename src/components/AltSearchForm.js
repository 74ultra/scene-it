import React, { useContext, useState } from 'react'
import EmptySearchAlert from './alerts/EmptySearchAlert'
import NoResultsAlert from './alerts/NoResultsAlert'
import { Container, Form, Row, Button, InputGroup } from 'react-bootstrap'
import SearchContext from '../state/search/searchContext'

const AltSearchForm = () => {

    const searchContext = useContext(SearchContext)

    const { initialSearch, clearAll, results, title } = searchContext

    const [searchTitle, setSearchTitle] = useState('')
    const [showError, setShowError] = useState(false)

    const handleChange = (e) => {
        setShowError(false)
        setSearchTitle([e.target.name] = e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        clearAll()
        if (searchTitle === '') {
            setShowError(true)
        } else {
            initialSearch(searchTitle)
            setSearchTitle('')
        }
    }

    const clearScreen = () => {
        clearAll()
        setShowError(false)
    }

    return (
        <>
            <div>
                <Container>
                    <Form variant='dark' onSubmit={handleSubmit}>
                        <Row style={{ width: '60%', margin: '0 auto' }}>
                            <InputGroup>
                                <Form.Control
                                    name='search'
                                    value={searchTitle}
                                    placeholder='Search for your favorites...'
                                    onChange={handleChange}
                                />
                                <Button variant='primary' type='submit'>Search</Button>
                                <Button variant='outline-primary' onClick={clearScreen} style={{ color: 'white' }}>Clear</Button>
                            </InputGroup>
                        </Row>
                    </Form>
                </Container>
            </div>
            <div style={{ width: '70%', margin: '50px auto' }}>
                {showError && <EmptySearchAlert />}
                {results.Response === 'False' && <NoResultsAlert title={title} />}
            </div>
        </>

    )
}

export default AltSearchForm
