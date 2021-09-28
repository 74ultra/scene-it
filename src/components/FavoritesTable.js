import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import Rating from './Rating'


const FavoritesTable = ({ favorites }) => {

    const history = useHistory();

    const searchMedia = (id) => {
        history.push(`/favorites/${id}`)
    }

    return (

        <Table style={{ maxWidth: '80%', minWidth: '80%', margin: '0 auto' }} hover>
            <thead>
                <th style={{ fontSize: '1.3rem', padding: '0 0 0 8px' }}>Title</th>
                <th style={{ textAlign: 'center', fontSize: '1.3rem' }}>Year</th>
                <th style={{ textAlign: 'center', fontSize: '1.3rem' }}>Type</th>
                <th style={{ textAlign: 'center', fontSize: '1.3rem' }}>Rating</th>
                <th style={{ textAlign: 'center', fontSize: '1.3rem' }}>Details</th>
            </thead>
            <tbody>
                {favorites.map(fav => {
                    console.log(fav.title.S)
                    return (
                        <tr key={fav.imdbID.S} onClick={() => searchMedia(fav.imdbID.S)}>
                            <td style={{ width: '40%', fontSize: '1.2rem' }}>{fav.title.S}</td>
                            <td style={{ width: '15%', textAlign: 'center', fontSize: '1.2rem' }}>{fav.year.S}</td>
                            <td style={{ width: '10%', textAlign: 'center', fontSize: '1.2rem' }}>{fav.type.S}</td>
                            <td style={{ width: '25%', textAlign: 'center', fontSize: '1.2rem' }}><Rating value={parseInt(fav.rating.S)} /></td>
                            <td style={{ width: '10%', textAlign: 'center', fontSize: '1.2rem' }}><Button variant='secondary' size='sm' style={{ borderRadius: '3px', width: '30px' }}>...</Button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default FavoritesTable
