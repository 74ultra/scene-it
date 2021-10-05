import React, { useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import UserContext from '../state/user/userContext'

const RemoveFavModal = ({ movie }) => {

    const history = useHistory()

    const userContext = useContext(UserContext)

    const deleteFavorite = userContext.deleteFavorite

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)

    const handleConfirm = () => {
        deleteFavorite(movie.imdbID)
        handleClose()
        history.push('/collections')
    }

    return (
        <>
            <Button variant="primary" className='btn btn-lg btn-primary' style={{ width: '100%', borderRadius: '3px' }} onClick={handleShow}>
                Remove from Collection
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    Do you want to remove <strong>{movie.Title}</strong> from your collection?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Keep
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>Remove</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RemoveFavModal
