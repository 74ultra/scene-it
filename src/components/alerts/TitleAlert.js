import React from 'react'
import { Alert } from 'react-bootstrap'

const TitleAlert = ({ title, numResults }) => {
    return (
        <Alert variant="dark">
            <Alert.Heading><em>{numResults}</em> results for <strong>"{title}"</strong></Alert.Heading>
        </Alert>
    )
}

export default TitleAlert
