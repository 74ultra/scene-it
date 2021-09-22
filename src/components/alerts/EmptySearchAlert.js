import React from 'react'
import { Alert } from 'react-bootstrap'

const EmptySearchAlert = () => {
    return (
        <Alert variant="danger">
            <Alert.Heading>Search cannot be empty!</Alert.Heading>
            <p className="mb-0">
                Search Scene It for your favorite movies, series, and episodes by typing a title into the search bar.
            </p>
        </Alert>
    )
}

export default EmptySearchAlert
