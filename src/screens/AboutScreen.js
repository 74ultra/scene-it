import React from 'react'
import { Row, Col, Container, Accordion } from 'react-bootstrap'
import Title from '../assets/homeTitle.svg'
import Footer from '../components/Footer'

const AboutScreen = () => {
    return (
        <>
            <Container style={{ width: '50%' }} fluid>
                <div style={{ textAlign: 'center', padding: '60px 0 50px' }}>
                    <img src={Title} alt='Scene-It Logo' style={{ width: '300px' }} />
                </div>
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Introduction to Scene-It</Accordion.Header>
                                <Accordion.Body>
                                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                        <li>Users can search and view details for 1000's of movies, series, and games</li>
                                        <li>Users can create a "Favorites" collection and add selected media to that list</li>
                                        <li>Users can rate favorited movies (1-5 stars) and add their own reviews</li>
                                        <li><strong>*Future*</strong> - Users can share their "Favorites" collection with others</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Business Model Highlights</Accordion.Header>
                                <Accordion.Body>
                                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                        <li><strong>User base</strong> - Movie lovers and those who want to share their media opinions with others and/or read review of friends and people of interest</li>
                                        <li><strong>Revenue stream</strong> - Advertisers and filmmakers looking to promote their work</li>
                                        <li><strong>Key activity #1</strong> - Application development: particularly on sharing features and social media integration</li>
                                        <li><strong>Key activity #2</strong> - Marketing/Customer acquisiiton: application advertisement and endorsement/use by celebrities and influencers</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Accordion style={{ background: 'transparent' }}>
                            <Accordion.Item eventKey="2" style={{ background: 'transparent' }}>
                                <Accordion.Header>Business Model</Accordion.Header>
                                <Accordion.Body style={{ padding: '10px 0' }}>
                                    <Accordion flush>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Key Activities</Accordion.Header>
                                            <Accordion.Body>
                                                <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                                    <li><strong>Application development</strong></li>
                                                    <li><strong>Sales prospecting</strong> - Identify likely advertisers</li>
                                                    <li><strong>Marketing and Customer acquisition</strong></li>
                                                    <li><strong>Recruitment</strong> - Engineering and sales</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>Channels</Accordion.Header>
                                            <Accordion.Body>
                                                <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                                    <li><strong>Website / application</strong></li>
                                                    <li><strong>Social media</strong></li>
                                                    <li><strong>Digital advertisement</strong></li>
                                                    <li><strong>Word of mouth</strong></li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>Key Partners</Accordion.Header>
                                            <Accordion.Body>
                                                <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                                    <li><strong>Advertisers</strong></li>
                                                    <li><strong>Investors</strong></li>
                                                    <li><strong>Spokespeople</strong> - Recruited celebrities and influencers</li>
                                                    <li><strong>Third-party database owner(s)</strong> - Open Movie Database</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>Key Resources</Accordion.Header>
                                            <Accordion.Body>
                                                <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                                    <li><strong>Scene-It application</strong></li>
                                                    <li><strong>AWS services</strong></li>
                                                    <li><strong>Third-party database(s)</strong></li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9">
                                            <Accordion.Header>User Base</Accordion.Header>
                                            <Accordion.Body>
                                                <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                                    <li>People who want to search for and research movies</li>
                                                    <li>People who want to create personal movie lists with their own rating and critiques</li>
                                                    <li>People who like to see what friends and celebrities think of certain media</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10">
                                            <Accordion.Header>Customer Segment</Accordion.Header>
                                            <Accordion.Body>
                                                <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                                    <li><strong>Advertisers</strong></li>
                                                    <li><strong>Filmmakers</strong></li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11">
                                            <Accordion.Header>Revenue Stream</Accordion.Header>
                                            <Accordion.Body>
                                                <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                                    <li><strong>Advertisers</strong></li>
                                                    <li><strong>Media promotion</strong></li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12">
                                            <Accordion.Header>Cost Structure</Accordion.Header>
                                            <Accordion.Body>
                                                <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                                    <li><strong>Customer acquistion</strong> - Advertising and marketing</li>
                                                    <li><strong>Technology infrastructure</strong></li>
                                                    <li><strong>Research and development</strong></li>
                                                    <li><strong>Salaries</strong></li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Technology</Accordion.Header>
                                <Accordion.Body>
                                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                        <li><strong>Frontend</strong> - React and React Bootstrap</li>
                                        <li><strong>Backend - AWS</strong> - Amplify, API Gateway, DynamoDB, Lambdas, Cognito</li>
                                        <li><strong>Third-party database</strong> - Open Movie Database</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Feature Backlog</Accordion.Header>
                                <Accordion.Body>
                                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                        <li><strong>Update</strong> - Ability to update existing reviews and ratings attached to favorites</li>
                                        <li><strong>Advanced search</strong> - Search by movie title, type, and year released </li>
                                        <li><strong>Sharing</strong> - Ability to make user collections publically available</li>
                                        <li><strong>Error handling</strong> - Login flow and database calls</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default AboutScreen
