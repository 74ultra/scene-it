import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import Rating from './Rating'
import Loader from './Loader'

import PublicContext from '../state/public/publicContext'

const PublicFavsTable = ({ setView }) => {

    const publicContext = useContext(PublicContext)
    const { selectedUserFavs, selectedUser, clearUserInfo, getSelectedFavorite, getSelectedInfo } = publicContext

    const history = useHistory();

    const searchMedia = (id) => {
        getSelectedFavorite(id)
        getSelectedInfo(id)
        history.push(`/public/${id}`)
    }

    const handleClick = () => {
        setView(1)
        clearUserInfo()
    }

    return (
        <>
            <Button onClick={handleClick}>Back</Button>
            <div>
                <h2 style={{ margin: '20px 0 30px' }}>{selectedUser.username}'s favorites</h2>
            </div>
            {!selectedUserFavs && <Loader />}
            {selectedUserFavs &&
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
                        {selectedUserFavs.map(fav => {
                            return (
                                <tr key={fav.imdbID} onClick={() => searchMedia(fav.imdbID)}>
                                    <td style={{ width: '20%', fontSize: '1.1rem' }}>{fav.title}</td>
                                    <td style={{ width: '15%', textAlign: 'center', fontSize: '1.1rem' }}>{fav.year}</td>
                                    <td style={{ width: '10%', textAlign: 'center', fontSize: '1.1rem' }}>{fav.type}</td>
                                    <td style={{ width: '20%', textAlign: 'center', fontSize: '1.1rem' }}>{fav.col}</td>
                                    <td style={{ width: '15%', textAlign: 'center', fontSize: '1.1rem' }}><Rating text={null} value={parseFloat(fav.rating)} /></td>
                                    <td style={{ width: '10%', textAlign: 'center', fontSize: '1.1rem' }}><Button variant='secondary' size='sm' style={{ borderRadius: '3px', width: '30px' }}>...</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            }
        </>
    )
}

export default PublicFavsTable
