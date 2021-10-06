import React, { useContext } from 'react'
import PublicContext from '../state/public/publicContext'
import { Card, Button } from 'react-bootstrap'

const PublicUsers = ({ setView }) => {

    const publicContext = useContext(PublicContext)

    const { userList, getSelectedCollections, updateSelectedUser, getPublicFavs } = publicContext

    const handleSelect = (id, user) => {
        getSelectedCollections(id)
        updateSelectedUser(user)
        getPublicFavs(id)
        setView(2)
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {userList && userList.map(user => {
                return (
                    <Card style={{ width: '16rem', margin: '10px 5px' }}>
                        <Card.Body>
                            <Card.Title>{user.username}</Card.Title>
                            <Card.Text>{user.count} items(s) reviewed</Card.Text>
                            <Button variant="primary" onClick={() => handleSelect(user.userId, user)}>Favorites</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default PublicUsers
