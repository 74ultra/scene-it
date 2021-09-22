import React from 'react'
import { Carousel } from 'react-bootstrap'
import { imgUrls } from '../assets/data'


const Conveyer = () => {

    const { first, second, third, fourth, fifth, sixth, seventh, eighth, ninth } = imgUrls

    return (
        <div>
            <Carousel>
                <Carousel.Item style={{ textAlign: 'center' }} interval={3000}>
                    <img
                        // className="d-block w-100"
                        src={first}
                        alt="First img"
                        style={{ padding: '20px 10px 10px' }}
                    />
                    <img
                        // className="d-block w-100"
                        src={second}
                        alt="First img"
                        style={{ padding: '20px 10px 10px' }}
                    />
                    <img
                        // className="d-block w-100"
                        src={third}
                        alt="First img"
                        style={{ padding: '20px 10px 10px' }}
                    />
                </Carousel.Item>
                <Carousel.Item style={{ textAlign: 'center' }} interval={3000}>
                    <img
                        // className="d-block w-100"
                        src={fourth}
                        alt="First img"
                        style={{ padding: '20px 10px 10px' }}
                    />
                    <img
                        // className="d-block w-100"
                        src={fifth}
                        alt="First img"
                        style={{ padding: '20px 10px 10px' }}
                    />
                    <img
                        // className="d-block w-100"
                        src={sixth}
                        alt="First img"
                        style={{ padding: '20px 10px 10px' }}
                    />
                </Carousel.Item>
                <Carousel.Item style={{ textAlign: 'center' }} interval={3000}>
                    <img
                        // className="d-block w-100"
                        src={seventh}
                        alt="First img"
                        style={{ padding: '20px 10px 10px' }}
                    />
                    <img
                        // className="d-block w-100"
                        src={eighth}
                        alt="First img"
                        style={{ padding: '20px 10px 10px' }}
                    />
                    <img
                        // className="d-block w-100"
                        src={ninth}
                        alt="First img"
                        style={{ padding: '20px 10px 10px' }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Conveyer
