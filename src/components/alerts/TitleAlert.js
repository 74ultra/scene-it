import React from 'react'
import { Alert } from 'react-bootstrap'

const TitleAlert = ({ title, numResults }) => {
    return (
        <Alert style={{ height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} variant="dark">
            <Alert.Heading style={{ margin: '0' }}><em>{numResults}</em> results for <strong>"{title}"</strong></Alert.Heading>
        </Alert>
    )
}

export default TitleAlert
