import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PublicContext from '../state/public/publicContext'
import { Card, Button } from 'react-bootstrap'

const PublicUsersList = ({ setView }) => {

    const history = useHistory();

    const publicContext = useContext(PublicContext)

    const { allUsersList } = publicContext

    console.log(allUsersList)

    const handleSelect = (id) => {
        history.push(`/public/collections/${id}`)
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {allUsersList && allUsersList.map(user => {
                return (
                    <Card key={user[0]} style={{ width: '16rem', margin: '10px 5px' }}>
                        <Card.Body>
                            <Card.Title>{user[1]}</Card.Title>
                            <Card.Text>{user[2]} items(s) reviewed</Card.Text>
                            <Button variant="primary" onClick={() => handleSelect(user[0])}>Favorites</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default PublicUsersList
