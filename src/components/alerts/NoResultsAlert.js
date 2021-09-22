import React from 'react'
import { Alert } from 'react-bootstrap'

const NoResultsAlert = ({ title }) => {

    return (
        <Alert variant="danger">
            <Alert.Heading>Sorry, we couldn't find what you were looking for.</Alert.Heading>
            <p className="mb-0">
                Your search for "{title}" did not return any results. Please enter a different search term and try again.
            </p>
        </Alert>
    )
}

export default NoResultsAlert
