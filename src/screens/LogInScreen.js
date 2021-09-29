import React, { useState, useContext, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../state/user/userContext'

const LogInScreen = () => {

    const history = useHistory()

    const userContext = useContext(UserContext)

    const { signIn, authenticated } = userContext

    const [creds, setCreds] = useState({
        username: '',
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
        const { username, password } = creds
        signIn(username, password)
    }

    useEffect(() => {
        if (authenticated) {
            history.push('/')
        }
    }, [])

    return (
        <Container style={{ width: '50%', marginTop: '50px', border: '1px solid lightgrey', borderRadius: '10px' }}>
            <Form style={{ padding: '20px' }} onSubmit={handleSubmit}>
                <h3 style={{ padding: '10px 0 15px' }}>Log In</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        name='username'
                        value={creds.username}
                        type="text"
                        placeholder="Enter your username"
                        onChange={handleChange}
                    />
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
