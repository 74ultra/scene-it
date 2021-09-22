import React, { useState } from 'react'
import { Modal, Button, Form, Container, FloatingLabel } from 'react-bootstrap'

const AddFavModal = ({ movie }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [form, setForm] = useState({
        rating: 0,
        comments: ''
    })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const submitData = {
            ...form,
            title: movie.Title,
            year: movie.Year,
            type: movie.Type,
            movie_id: movie.imdbID,
            genre: movie.Genre
        }
        console.log('Favorite added', submitData)
        setForm({
            rating: 0,
            comments: ''
        })
        handleClose()
    }

    console.log(movie)

    return (
        <>
            <Button variant="primary" className='btn btn-lg btn-primary' style={{ width: '100%', borderRadius: '3px' }} onClick={handleShow}>
                Add to favorites
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{movie.Title}</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form>
                        <Form.Group style={{ padding: '20px 0 0' }}>
                            <Form.Label><i style={{ color: 'gold' }} className="fas fa-star"></i> Select a rating </Form.Label>
                            <FloatingLabel controlId='floatingSelect' label='Click to give a star rating'>
                                <Form.Select
                                    type='number'
                                    name='rating'
                                    value={form.rating} onChange={handleChange}>
                                    <option></option>
                                    <option value={1}>1 star</option>
                                    <option value={2}>2 stars</option>
                                    <option value={3}>3 stars</option>
                                    <option value={4}>4 stars</option>
                                    <option value={5}>5 stars</option>
                                </Form.Select>
                            </FloatingLabel>

                        </Form.Group>
                        <Form.Group style={{ padding: '20px 0' }}>
                            <Form.Label><i style={{ color: 'blue' }} className="fas fa-comment"></i> Add your comments</Form.Label>
                            <Form.Control
                                as='textarea'
                                placeholder='I thought this movie was....'
                                name='comments' value={form.comments}
                                onChange={handleChange}
                            />
                        </Form.Group>

                    </Form>

                </Container>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Discard
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add to favorites
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddFavModal
