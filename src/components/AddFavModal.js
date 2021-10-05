import React, { useState, useContext } from 'react'
import { Modal, Button, Form, Container, FloatingLabel, FormGroup } from 'react-bootstrap'
import UserContext from '../state/user/userContext';

const AddFavModal = ({ movie, toggleFav }) => {

    const userContext = useContext(UserContext)

    const addFavorite = userContext.addFavorite

    const userId = userContext.userId
    const username = userContext.username
    const collections = userContext.collections

    const [show, setShow] = useState(false);
    const [newCol, setNewCol] = useState(!(collections.length > 0))

    const handleClose = () => {
        setForm({
            col: '',
            rating: 0,
            comment: ''
        })
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const [form, setForm] = useState({
        col: '',
        rating: 0,
        comment: ''
    })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const submitData = {
            ...form,
            userId: userId,
            username: username,
            imdbID: movie.imdbID,
            poster: movie.Poster,
            title: movie.Title,
            type: movie.Type,
            year: movie.Year
        }
        console.log(submitData)
        addFavorite(submitData)
        setForm({
            col: '',
            rating: 0,
            comment: ''
        })
        toggleFav(true)
        handleClose()
    }

    return (
        <>
            <Button variant="primary" className='btn btn-lg btn-primary' style={{ width: '100%', borderRadius: '3px' }} onClick={handleShow}>
                Add to Collection
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{movie.Title}</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form>
                        {collections && collections.length > 0 && <FormGroup style={{ padding: '20px 0 0' }}>
                            <Form.Check
                                type='switch'
                                label='Create new collection'
                                id='1'
                                onChange={() => setNewCol(!newCol)}
                            />
                        </FormGroup>}

                        {!newCol && <FormGroup style={{ padding: '20px 0 0' }}>
                            <Form.Label><i style={{ color: '#E93284' }} className="fas fa-layer-group"></i> Add to an existing Collection</Form.Label>
                            <FloatingLabel controlId='floatingSelect' label='Select a collection'>
                                <Form.Select aria-label="collection select"
                                    type='text'
                                    name='col'
                                    value={form.col}
                                    onChange={handleChange}
                                >
                                    <option>{form.col}</option>
                                    {collections.length > 0 && collections.map((col, ind) => {
                                        return <option value={col} key={ind}>{col}</option>
                                    })}
                                </Form.Select>
                            </FloatingLabel>
                        </FormGroup>}
                        {newCol && <FormGroup style={{ padding: '20px 0 0' }}>
                            <Form.Label><i style={{ color: '#E93284' }} className="fas fa-layer-group"></i> Add to a new collection</Form.Label>
                            <FloatingLabel controlId='floatingSelect' label='Create a new collection'>
                                <Form.Control
                                    type='text'
                                    name='col'
                                    value={form.col}
                                    onChange={handleChange}
                                />
                            </FloatingLabel>
                        </FormGroup>}
                        <Form.Group style={{ padding: '20px 0 0' }}>
                            <Form.Label><i style={{ color: 'gold' }} className="fas fa-star"></i> Select a rating </Form.Label>
                            <FloatingLabel controlId='floatingSelect' label='Click to give a star rating'>
                                <Form.Select
                                    type='number'
                                    name='rating'
                                    value={form.rating}
                                    onChange={handleChange}>
                                    <option></option>
                                    <option value={1}>1 star</option>
                                    <option value={1.5}>1.5 star</option>
                                    <option value={2}>2 stars</option>
                                    <option value={2.5}>2.5 stars</option>
                                    <option value={3}>3 stars</option>
                                    <option value={3.5}>3.5 stars</option>
                                    <option value={4}>4 stars</option>
                                    <option value={4.5}>4.5 stars</option>
                                    <option value={5}>5 stars</option>
                                </Form.Select>
                            </FloatingLabel>

                        </Form.Group>
                        <Form.Group style={{ padding: '20px 0' }}>
                            <Form.Label><i style={{ color: 'blue' }} className="fas fa-comment"></i> Add your review</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows="5"
                                placeholder='I thought this movie was....'
                                name='comment' value={form.comment}
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
                        Add to Collection
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddFavModal
