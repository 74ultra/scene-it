import React from 'react'
import { Navbar, Container, Col, Row } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer>
            <Navbar bg="primary" variant='dark' expand="lg" className='navbar-dark bg-dark' fixed="bottom" collapseOnSelect>
                <Container>
                    <Row style={{ textAlign: 'center', margin: '0 auto' }}>
                        <Col>
                            <p style={{ margin: '0', fontSize: '0.8rem' }}>Copyright &copy; 2021 Scene-It</p>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer
