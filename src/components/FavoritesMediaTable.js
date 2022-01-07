import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import Rating from './Rating'

const FavoritesMediaTable = ({ favorites }) => {

    const history = useHistory();

    const searchMedia = (id) => {
        history.push(`/favorites/${id}`)
    }

    return (
        <Table style={{ maxWidth: '100%', minWidth: '80%', margin: '0 auto' }} hover>
            <thead>
                <th style={{ fontSize: '1.2rem', padding: '0 0 0 8px' }}>Title</th>
                <th style={{ textAlign: 'center', fontSize: '1.2rem' }}>Year</th>
                <th style={{ textAlign: 'center', fontSize: '1.2rem' }}>Type</th>
                <th style={{ textAlign: 'center', fontSize: '1.2rem' }}>Collection</th>
                <th style={{ textAlign: 'center', fontSize: '1.2rem' }}>Rating</th>
                <th style={{ textAlign: 'center', fontSize: '1.2rem' }}>Details</th>
            </thead>
            <tbody>
                {favorites.map(fav => {
                    return (
                        <tr key={fav.imdbid} onClick={() => searchMedia(fav.imdbid)}>
                            <td style={{ width: '20%', fontSize: '1.1rem' }}>{fav.title}</td>
                            <td style={{ width: '15%', textAlign: 'center', fontSize: '1.1rem' }}>{fav.year}</td>
                            <td style={{ width: '10%', textAlign: 'center', fontSize: '1.1rem' }}>{fav.category}</td>
                            <td style={{ width: '20%', textAlign: 'center', fontSize: '1.1rem' }}>{fav.collection}</td>
                            <td style={{ width: '15%', textAlign: 'center', fontSize: '1.1rem' }}><Rating value={parseFloat(fav.rating)} /></td>
                            <td style={{ width: '10%', textAlign: 'center', fontSize: '1.1rem' }}><Button variant='secondary' size='sm' style={{ borderRadius: '3px', width: '30px' }}>...</Button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default FavoritesMediaTable
