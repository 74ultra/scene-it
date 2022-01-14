import React, { useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import UserContext from '../state/user/userContext'
import MediaContext from '../state/media/mediaContext'

const RemoveFavModal = ({ movie, id }) => {

    const history = useHistory()

    const userContext = useContext(UserContext)
    const mediaContext = useContext(MediaContext)

    const userid = userContext.userid
    const username = userContext.username
    const deleteMedia = mediaContext.deleteMedia
    const fetchUserMedia = mediaContext.fetchUserMedia
    const fetchUserCollections = mediaContext.fetchUserCollections
    const clearMediaInfo = mediaContext.clearMediaInfo

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)

    const handleConfirm = () => {
        deleteMedia(id, username)
            .then(() => fetchUserMedia(userid, username))
            .then(() => fetchUserCollections(userid, username))
            .then(() => {
                clearMediaInfo()
                handleClose()
                history.push('/collections')
            })
    }

    return (
        <>
            <Button variant="primary" className='btn btn-lg btn-primary' style={{ margin: '0 5px 0 0', width: '100%', borderRadius: '3px' }} onClick={handleShow}>
                Remove from collection
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
