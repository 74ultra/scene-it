import React from 'react'
import { Alert } from 'react-bootstrap'

const RegisterAlert = ({ errorMsg }) => {

    console.log(errorMsg)

    return (
        <Alert
            variant='danger'
            dismissible
        >
            <p>There were errors with your submission</p>
            <ul>
                {errorMsg.map(msg => {
                    return <li>{msg}</li>
                })}
            </ul>

        </Alert>
    )
}


export default RegisterAlert
