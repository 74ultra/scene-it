import React, { useState, useContext, useEffect } from 'react'
import RegisterAlert from '../components/alerts/RegisterAlert'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../state/user/userContext'

const RegisterScreen = () => {

    const userContext = useContext(UserContext)

    const { setTempCredentials, createNewAccount } = userContext

    let history = useHistory()

    const [errMessage, setErrMessage] = useState([])
    const [formError, setFormErr] = useState(false)

    const [creds, setCreds] = useState({
        name: '',
        email: '',
        password: '',
        reenter: ''
    })

    // VALIDATE SUBMISSION
    const regFormValidation = (uName, eMail, pWord, reEnter) => {
        let status = true
        const messages = []
        if (uName.length < 1) {
            messages.push('Username cannot be empty')
            status = false
            console.log('uname')
        }
        if (eMail.length < 1) {
            messages.push('Email cannot be empty')
            status = false
            console.log('email')
        }
        if (pWord.length < 1) {
            messages.push('Password cannot be empty')
            status = false
            console.log('pWord empty')
        }
        if (reEnter.length < 1) {
            messages.push('You must re-enter your password')
            status = false
            console.log('no re-enter')
        }
        if (pWord !== reEnter) {
            messages.push('Password do not match')
            status = false
        }
        console.log(status)
        if (!status) {
            setFormErr(true)
            setErrMessage(messages)
        }
        return status
    }

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, reenter } = creds

        const validated = regFormValidation(name, email, password, reenter)
        if (validated) {
            createNewAccount(name, password, email).then((res) => console.log(res))
            history.push('/confirm')
        }
        setTempCredentials({
            name,
            email
        })
    }

    useEffect(() => {
        setTempCredentials(null)
    }, [])

    return (
        <>
            <Container style={{ width: '50%', marginTop: '50px', border: '1px solid lightgrey', borderRadius: '10px', postion: 'relative' }}>
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
            <div style={{ width: '50%', margin: '0 auto', position: 'absolute', top: '15rem', left: '25%', zIndex: '0' }} onClick={() => setFormErr(false)}>
                {formError > 0 &&
                    <RegisterAlert errorMsg={errMessage} />
                }
            </div>

        </>
    )
}

export default RegisterScreen
