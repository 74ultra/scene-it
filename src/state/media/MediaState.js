import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import MediaContext from './mediaContext'
import mediaReducer from './mediaReducer'
import { Auth } from 'aws-amplify'
import axios from 'axios'
import { getIdToken } from '../../utils/getToken'

import {
    GET_FAVORITES,
    GET_USER_COLLECTIONS,
    GET_MEDIA_INFO,
    CLEAR_MEDIA_INFO,
    CLEAR_MEDIA
} from '../types'

const MediaState = props => {
    const initialState = {
        media: null,
        mediaInfo: null,
        collections: null
    }

    const history = useHistory();

    const [state, dispatch] = useReducer(mediaReducer, initialState)


    // SPRING - GET USER MEDIA BY ID - TESTED ***
    const fetchUserMedia = async (userid, username) => {

        const token = getIdToken(username)
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            }
        }
        try {
            const res = await axios.get(`https://scene-it.ee-cognizantacademy.com/api/v1/media/${userid}`, headers)
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
    const fetchUserCollections = async (userid, username) => {
        const token = getIdToken(username)
        const headers = {
            headers: { Authorization: `Bearer ${token}` }
        }

        try {
            const res = await axios.get(`https://scene-it.ee-cognizantacademy.com/api/v1/media/collections/${userid}`, headers)
            console.log("Collections", res.data)
            dispatch({
                type: GET_USER_COLLECTIONS,
                payload: res.data
            })
        } catch (err) {
            console.log("There was an error fetching collections: ", err)
        }
    }

    // OMDB - GET INFO FOR INDIVIDUAL MEDIA ITEM
    const getMediaInfo = id => {
        clearMediaInfo()
        const filtered = state.media.filter(med => med.imdbid === id)

        dispatch({
            type: GET_MEDIA_INFO,
            payload: filtered[0]
        })
    }

    // CLEAR INDIVIDUAL MEDIA INFO
    const clearMediaInfo = () => {
        dispatch({ type: CLEAR_MEDIA_INFO })
    }

    const clearMedia = () => {
        dispatch({ type: CLEAR_MEDIA })
    }

    // SPRING - POST NEW USER MEDIA - NOT WORKING (would work as a PUT statement)
    const postMedia = async (media, username) => {
        const token = getIdToken(username)
        const headers = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.put(`https://scene-it.ee-cognizantacademy.com/api/v1/media`, media, headers)
        } catch (err) {
            console.log('Error adding media: ', err)
        }
    }

    // SPRING - PUT - UPDATE MEDIA - TESTED ***
    const updateMedia = async (media, username) => {
        const token = getIdToken(username)
        const headers = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.put(`https://scene-it.ee-cognizantacademy.com/api/v1/media`, media, headers)
        } catch (err) {
            console.log("There was an error updating media: ", err)
        }
    }

    // SPRING - DELETE MEDIA - TESTED ***
    const deleteMedia = async (id, username) => {
        const token = getIdToken(username)
        const headers = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.delete(`https://scene-it.ee-cognizantacademy.com/api/v1/media/${id}`, headers)
        } catch (err) {
            console.log("There was an error deleting media: ", err)
        }
    }

    return (
        <MediaContext.Provider
            value={{
                fetchUserMedia,
                fetchUserCollections,
                getMediaInfo,
                clearMediaInfo,
                clearMedia,
                postMedia,
                updateMedia,
                deleteMedia,
                media: state.media,
                mediaInfo: state.mediaInfo,
                collections: state.collections
            }}
        >
            {props.children}
        </MediaContext.Provider>
    )
}

export default MediaState