import React from 'react'
import { useHistory } from 'react-router-dom'
import Rating from './Rating'
import { Button, Table } from 'react-bootstrap'

const CollectionItemsAcc = ({ title, favs }) => {

    const colItems = favs.filter(fav => fav.col.S === title)

    console.log('colItems', colItems, title)

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
                <th style={{ textAlign: 'center', fontSize: '1.2rem' }}>Rating</th>
                <th style={{ textAlign: 'center', fontSize: '1.2rem' }}>Details</th>
            </thead>
            <tbody>
                {colItems.map(item => {
                    return (
                        <tr key={item.imdbID.S} onClick={() => searchMedia(item.imdbID.S)}>
                            <td style={{ width: '30%', fontSize: '1.1rem' }}>{item.title.S}</td>
                            <td style={{ width: '20%', textAlign: 'center', fontSize: '1.1rem' }}>{item.year.S}</td>
                            <td style={{ width: '10%', textAlign: 'center', fontSize: '1.1rem' }}>{item.type.S}</td>
                            <td style={{ width: '20%', textAlign: 'center', fontSize: '1.1rem' }}><Rating value={parseFloat(item.rating.S)} /></td>
                            <td style={{ width: '10%', textAlign: 'center', fontSize: '1.1rem' }}><Button variant='secondary' size='sm' style={{ borderRadius: '3px', width: '30px' }}>...</Button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default CollectionItemsAcc
