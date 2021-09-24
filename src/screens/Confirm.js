import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { Auth } from 'aws-amplify'

const Confirm = () => {

    let history = useHistory()

    const [creds, setCreds] = useState({
        username: '',
        confirmCode: ''
    })

    // CONFIRM NEW USER ACCOUNT
    const confirmSignUp = async () => {

        try {
            const { username, confirmCode } = creds
            await Auth.confirmSignUp(username, confirmCode)
            history.push('/login')
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        confirmSignUp()

    }

    return (
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
                    <Form.Text className="text-muted">
                        Check your email for your confirmation code
                    </Form.Text>
                </Form.Group>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button style={{ width: '100%', margin: '20px 0' }} variant="primary" type="submit">
                        Confirm account
                    </Button>
                </div>


            </Form>

        </Container>
    )
}

export default Confirm
