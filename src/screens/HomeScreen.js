import React from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/sceneItLogo1.svg'
import Banner from '../assets/homeBanner.jpg'
import Title from '../assets/homeTitle.svg'
import Search from '../assets/search.svg'
import Rate from '../assets/rate.svg'
import Share from '../assets/share.svg'

const banCtnStyles = {
    height: '500px',
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white'
}

const HomeScreen = () => {

    return (
        <div style={{ padding: '70px 0' }}>
            <div style={banCtnStyles}>
                <div style={{ textAlign: 'center', padding: '70px 0 40px' }}>
                    <img src={Logo} alt='SceneIt logo' style={{ width: '125px', margin: '0' }} /><br />
                    <img src={Title} alt='SceneIt Title' style={{ width: '500px' }} />

                </div>
                <div style={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
                    <Link to='/results'>
                        <Button style={{ width: '50%', backgroundColor: 'white', color: '#FB050C' }}>Sign in or start searching</Button>
                    </Link>
                </div>
            </div>
            <Container style={{ textAlign: 'center', width: '80%' }} fluid>
                <Row>
                    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={Search} alt='search' width='150' style={{ padding: '50px 0 20px' }} />
                        <p style={{ width: '70%' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </Col>
                    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={Rate} alt='rate' width='100' style={{ padding: '50px 0 20px' }} />
                        <p style={{ width: '70%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </Col>
                    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={Share} alt='share' width='150' style={{ padding: '50px 0 20px' }} />
                        <p style={{ width: '70%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default HomeScreen
