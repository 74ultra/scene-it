import React from 'react'
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Title from '../assets/homeTitle.svg'

const Header = () => {

    const history = useHistory();



    return (
        <header>
            <Navbar fixed='top' bg="primary" variant='dark' expand="lg" className='navbar-dark bg-dark' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src={Title}
                            alt='SceneIt title'
                            className='d-inline-block align-top'
                            width='110'
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/results">Search</Nav.Link>
                            <NavDropdown title="Log in" id="basic-nav-dropdown">
                                <NavDropdown.Item href='/login'>Sign In</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='/register'>Register</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
