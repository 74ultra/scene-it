import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Rating from '../../components/Rating'
import { Button, Table } from 'react-bootstrap'
import Loader from '../../components/Loader'

import PublicContext from '../../state/public/publicContext'

const PubAccordianItem = ({ media, title }) => {

    const publicContext = useContext(PublicContext)
    const { setPublicUserItem } = publicContext

    const [collection, setCollection] = useState([])

    const history = useHistory();

    const searchItemDetails = (item) => {
        setPublicUserItem(item)
        history.push('/publicItem')
    }

    useEffect(() => {
        const colArray = media.filter(med => med.collection === title)
        setCollection(colArray)

    }, [])

    if (!collection) {
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
                        <tr key={item.imdbid} onClick={() => searchItemDetails(item)}>
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

export default PubAccordianItem
