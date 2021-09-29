import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const RemoveFavModal = ({ movie }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)

    return (
        <>
            <Button variant="secondary" className='btn btn-lg btn-primary' style={{ width: '100%', borderRadius: '3px' }} onClick={handleShow}>
                Remove from favorites
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    Do you want to remove <strong>{movie.Title}</strong> from your list of favorites?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Keep
                    </Button>
                    <Button variant="primary">Remove</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RemoveFavModal
