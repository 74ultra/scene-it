import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

import { Auth } from 'aws-amplify'

const RegisterScreen = () => {

    let history = useHistory()

    const [creds, setCreds] = useState({
        name: '',
        email: '',
        password: '',
        reenter: ''
    })

    // CREATING NEW ACCOUNT
    const createAccount = async (username, password, email) => {
        try {
            await Auth.signUp({
                username,
                password,
                attributes: { email }
            })
            history.push('/confirm')
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
        console.log(creds)
        const { name, email, password, reenter } = creds
        if (password === reenter) {
            createAccount(name, password, email).then((res) => console.log(res))
        }
    }

    return (
        <Container style={{ width: '50%', marginTop: '50px', border: '1px solid lightgrey', borderRadius: '10px' }}>
            <Form style={{ padding: '20px' }} onSubmit={handleSubmit}>
                <h3 style={{ padding: '10px 0 15px' }}>Create an account</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Screen name</Form.Label>
                    <Form.Control
                        name='name'
                        value={creds.name}
                        type="text"
                        placeholder="Create a screen name"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name='email'
                        value={creds.email}
                        type="email"
                        placeholder="Enter your email"
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
                        placeholder="Create a password"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Re-enter password</Form.Label>
                    <Form.Control
                        name='reenter'
                        value={creds.reenter}
                        type="password"
                        placeholder="Just making sure"
                        onChange={handleChange}
                    />
                </Form.Group>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button style={{ width: '100%', margin: '20px 0' }} variant="primary" type="submit">
                        Create your Scene IT account
                    </Button>
                </div>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Form.Text className="text-muted">
                        Already have an account? <Link to='/login'>Log in here &#10148;</Link>
                    </Form.Text>
                </div>


            </Form>

        </Container>
    )
}

export default RegisterScreen
