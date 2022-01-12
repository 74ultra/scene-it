import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Rating from './Rating'
import { Button, Table } from 'react-bootstrap'
import NoFavorites from './NoFavorites'
import Loader from './Loader'

const CollectionMediaAcc = ({ media, title }) => {

    const [collection, setCollection] = useState([])

    const history = useHistory();

    const searchMedia = (id) => {
        history.push(`/favorites/${id}`)
    }



    useEffect(() => {
        if (media && media.length > 0) {
            const colArray = media.filter(med => med.collection === title)
            setCollection(colArray)
        }
        console.log(media, title)
    }, [])

    if (collection.length < 1) {
        return <NoFavorites />
    } else if (!media || media.length < 1) {
        return <Loader />
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
                {collection.map(item => {
                    return (
                        <tr key={item.imdbid} onClick={() => searchMedia(item.imdbid)}>
                            <td style={{ width: '30%', fontSize: '1.1rem' }}>{item.title}</td>
                            <td style={{ width: '20%', textAlign: 'center', fontSize: '1.1rem' }}>{item.year}</td>
                            <td style={{ width: '10%', textAlign: 'center', fontSize: '1.1rem' }}>{item.category}</td>
                            <td style={{ width: '20%', textAlign: 'center', fontSize: '1.1rem' }}><Rating value={parseFloat(item.rating)} /></td>
                            <td style={{ width: '10%', textAlign: 'center', fontSize: '1.1rem' }}><Button variant='secondary' size='sm' style={{ borderRadius: '3px', width: '30px' }}>...</Button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default CollectionMediaAcc
