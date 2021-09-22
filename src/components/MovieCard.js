import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const textStyle = { textDecoration: 'none' }

const MovieCard = ({ info }) => {

    const cardStyles = {
        width: '15rem',
        margin: '10px 0',
        color: 'white',
        height: '400px',
        backgroundImage: `url(${info.Poster})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }

    return (
        <>
            <Link to={`/media/${info.imdbID}`} style={textStyle}>
                <Card style={cardStyles}>
                    <Card.Body>
                        <Card.Title>{info.Title}</Card.Title>
                        <Card.Text>{info.Year}</Card.Text>
                        <Card.Subtitle>({info.Type})</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default MovieCard
