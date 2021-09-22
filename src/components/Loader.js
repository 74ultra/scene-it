import React from 'react'
import { Spinner } from 'react-bootstrap'

const loaderStyles = {
    width: '100px',
    height: '100px',
    margin: 'auto',
    display: 'block'
}

const Loader = () => {
    return (
        <Spinner animation='border' role='status' style={loaderStyles}>
            <span className='sr-only'>Loading...</span>
        </Spinner>
    )
}

export default Loader
