import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

const LogInScreen = () => {

    let history = useHistory()

    const [creds, setCreds] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(creds)
        history.push('/')
    }


    return (
        <Container style={{ width: '50%', marginTop: '50px', border: '1px solid lightgrey', borderRadius: '10px' }}>
            <Form style={{ padding: '20px' }} onSubmit={handleSubmit}>
                <h3 style={{ padding: '10px 0 15px' }}>Log In</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name='email'
                        value={creds.email}
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name='password'
                        value={creds.password}
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </Form.Group>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button style={{ width: '100%', margin: '20px 0' }} variant="primary" type="submit">
                        Log in
                    </Button>
                </div>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Form.Text className="text-muted">
                        New to Scene It? <Link to='/register'>Create your account &#10148;</Link>
                    </Form.Text>
                </div>


            </Form>

        </Container>
    )
}

export default LogInScreen
