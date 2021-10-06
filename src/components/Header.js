import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Title from '../assets/homeTitle.svg'
import UserContext from '../state/user/userContext'
import SearchContext from '../state/search/searchContext'
import PublicContext from '../state/public/publicContext'


const Header = () => {

    const userContext = useContext(UserContext)
    const searchContext = useContext(SearchContext)
    const publicContext = useContext(PublicContext)

    const { authenticated, signOut, username, getUser } = userContext
    const { clearAll } = searchContext
    const { changePublicView } = publicContext


    const signOutUser = () => {
        signOut()
        clearAll()
    }

    useEffect(() => {
        if (!authenticated) {
            getUser()
        }
    }, [])

    return (
        <header>
            <Navbar fixed='top' bg="primary" variant='dark' expand="lg" className='navbar-dark bg-dark' collapseOnSelect>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                            <img
                                src={Title}
                                alt='SceneIt title'
                                className='d-inline-block align-top'
                                width='110'
                            />
                        </Link>

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Nav.Link><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none' }} to='/about'>About</Link></Nav.Link>
                            <Nav.Link><Link onClick={() => changePublicView(1)} style={{ textDecoration: 'none' }} to='/public'>Discover</Link></Nav.Link>
                            <Nav.Link><Link onClick={clearAll} style={{ textDecoration: 'none' }} to='/results'>Search</Link></Nav.Link>
                            {!authenticated && <NavDropdown title="Log in" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link style={{ textDecoration: 'none' }} to='/login'>Log in</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link style={{ textDecoration: 'none' }} to='/register'>Create account</Link></NavDropdown.Item>
                            </NavDropdown>}
                            {authenticated && <NavDropdown title={username} id='basic-nav-dropdown'>
                                <NavDropdown.Item><Link style={{ textDecoration: 'none' }} to='/collections'>Collections</Link></NavDropdown.Item>

                                <NavDropdown.Item><Link style={{ textDecoration: 'none' }} to='/favorites'>All favorites</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={signOutUser}>Sign out</NavDropdown.Item>

                            </NavDropdown>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
