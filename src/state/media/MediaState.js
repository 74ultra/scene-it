import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import MediaContext from './mediaContext'
import mediaReducer from './mediaReducer'
import { Auth } from 'aws-amplify'
import axios from 'axios'

import {
    GET_FAVORITES,
    GET_USER_COLLECTIONS
} from '../types'

const MediaState = props => {
    const initialState = {
        media: null,
        collections: null,
        mediaInfo: null
    }

    const history = useHistory();

    const [state, dispatch] = useReducer(mediaReducer, initialState)


    // SPRING - GET USER MEDIA BY ID - TESTED ***
    const fetchUserMedia = async (userid) => {
        try {
            const res = await axios.get(`https://scene-it.ee-cognizantacademy.com/api/v1/media/${userid}`)
            console.log("User media", res.data)
            dispatch({
                type: GET_FAVORITES,
                payload: res.data
            })
        } catch (err) {
            console.log("There was a problem retrieving favorite: ", err)
        }
    }

    // SPRING - GET MEDIA FROM ALL USERS - TESTED ***
    const fetchAllusersMedia = async () => {
        try {
            const res = await axios.get(`https://scene-it.ee-cognizantacademy.com/api/v1/media`)
            console.log(res.data)
        } catch (err) {
            console.log("EB error: ", err)
        }
    }

    // SPRING - GET USER'S COLLECTION NAMES BY USER ID - TESTED ***
    const fetchUserCollections = async (userid) => {
        try {
            const res = await axios.get(`https://scene-it.ee-cognizantacademy.com/api/v1/media/collections/${userid}`)
            console.log("Collections", res.data)
            dispatch({
                type: GET_USER_COLLECTIONS,
                payload: res.data
            })
        } catch (err) {
            console.log("There was an error fetching collections: ", err)
        }
    }



    // SPRING - POST NEW USER MEDIA - NOT WORKING (would work as a PUT statement)
    const postMedia = async (media) => {

        console.log(media)
        try {
            await axios.put(`https://scene-it.ee-cognizantacademy.com/api/v1/media`, media)
        } catch (err) {
            console.log('Error adding media: ', err)
        }
    }

    // SPRING - PUT - UPDATE MEDIA - TESTED ***
    const updateMedia = async (media) => {

        try {
            await axios.put(`https://scene-it.ee-cognizantacademy.com/api/v1/media`, media)
        } catch (err) {
            console.log("There was an error updating media: ", err)
        }
    }

    // SPRING - DELETE MEDIA - TESTED ***
    const deleteMedia = async (id) => {
        try {
            await axios.delete(`https://scene-it.ee-cognizantacademy.com/api/v1/media/${id}`)
        } catch (err) {
            console.log("There was an error deleting media: ", err)
        }
    }

    return (
        <MediaContext.Provider
            value={{
                fetchUserMedia,
                fetchUserCollections,
                postMedia,
                updateMedia,
                deleteMedia,
                media: state.media,
                collection: state.collections
            }}
        >
            {props.children}
        </MediaContext.Provider>
    )
}

export default MediaState