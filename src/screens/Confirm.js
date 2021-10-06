import React, { useState, useContext, useEffect } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import UserContext from '../state/user/userContext'

const Confirm = () => {

    const userContext = useContext(UserContext)

    const { tempCreds, resendConfirmCode, confirmNewAccount, errorStatus, setErrorStatus } = userContext

    const [creds, setCreds] = useState({
        username: '',
        confirmCode: ''
    })

    const [formError, setFormError] = useState(false)


    const handleChange = (e) => {
        setFormError(false)
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, confirmCode } = creds
        let submitOk = true
        if (username.length < 1) {
            submitOk = false
        }
        if (confirmCode.length < 1) {
            submitOk = false
        }
        if (submitOk) {
            const { username, confirmCode } = creds
            confirmNewAccount(username, confirmCode)
        }
        if (!submitOk) {
            setFormError(true)
        }

    }

    useEffect(() => {
        setErrorStatus(null)
    }, [])

    return (
        <>
            <Container style={{ width: '50%', marginTop: '50px', border: '1px solid lightgrey', borderRadius: '10px' }}>
                <Form style={{ padding: '20px' }} onSubmit={handleSubmit}>
                    <h3 style={{ padding: '10px 0 15px' }}>Confirm new account</h3>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name='username'
                            value={creds.email}
                            type="test"
                            placeholder="Enter username"
                            onChange={handleChange}
                        />
                        {formError && <Form.Text style={{ color: '#FF7081' }}>
                            * Username cannot be empty
                        </Form.Text>}
                        {!formError && <Form.Text className="text-muted">
                            Enter the username you created
                        </Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirmation code</Form.Label>
                        <Form.Control
                            name='confirmCode'
                            value={creds.password}
                            type="text"
                            placeholder="Enter confirmation code"
                            onChange={handleChange}
                        />
                        {!formError && <Form.Text className="text-muted">
                            Check your email for your confirmation code
                        </Form.Text>}
                        {formError && <Form.Text style={{ color: '#FF7081' }}>
                            * Confirmation code cannot be empty
                        </Form.Text>}
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ width: '100%', margin: '20px 0' }} variant="primary" type="submit">
                            Confirm account
                        </Button>
                    </div>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='link' size='sm' onClick={() => resendConfirmCode(tempCreds.name)}><small>Re-send confirmation code</small></Button>
                    </div>

                </Form>

            </Container>
            {errorStatus && <div style={{ width: '50%', margin: '10px auto', textAlign: 'center' }}>
                <Alert variant='danger' style={{ fontSize: '1.1rem' }}>{errorStatus.message}</Alert>
            </div>}
        </>
    )
}

export default Confirm
