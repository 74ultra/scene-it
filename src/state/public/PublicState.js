import React, { useReducer } from 'react'
import PublicContext from './publicContext'
import PublicReducer from './publicReducer'
import axios from 'axios'

import { userListCleaner, colCleaner, selectedFavCleaner } from '../../utils/helpers'

import {
    UPDATE_SELECTED_USER,
    CLEAR_USER_INFO,
    GET_SELECTED_FAVORITE,
    CLEAR_ALL_PUBLIC,
    GET_SELECTED_INFO,
    CHANGE_PUBLIC_VIEW,
    CLEAR_SELECTED_INFO,
    CLEAR_SELECTED_FAV,
    FETCH_USERS_LIST,
    FETCH_PUBLIC_MEDIA,
    FETCH_PUBLIC_COLLECTIONS,
    CLEAR_PUBLIC_INFO,
    SET_PUBLIC_USER_ITEM

} from '../types'


const PublicState = props => {
    const initialState = {
        selectedUser: null,
        selectedFav: null,
        selectedInfo: null,
        publicView: '1',
        allUsersList: null,
        selectedUserMedia: null,
        selectedUserCols: null,
        publicUserItem: null,
    }

    const [state, dispatch] = useReducer(PublicReducer, initialState)

    // SPRING - GET LIST OF USERS, USERIDS, AND COUNT OF REVIEWED MOVIES
    const fetchUsersList = async () => {
        try {
            const res = await axios.get(`https://scene-it.ee-cognizantacademy.com/api/v1/media/public`)
            console.log(res.data)
            dispatch({
                type: FETCH_USERS_LIST,
                payload: res.data
            })
        } catch (err) {
            console.log("There was an error fetching the users' list: ", err)
        }
    }
    // SPRING - GET PUBLIC USER MEDIA BY ID
    const fetchPublicUserMedia = async (userid) => {
        try {
            const res = await axios.get(`https://scene-it.ee-cognizantacademy.com/api/v1/media/${userid}`)
            console.log("Public user media", res.data)
            dispatch({
                type: FETCH_PUBLIC_MEDIA,
                payload: res.data
            })
        } catch (err) {
            console.log("There was a problem retrieving favorite: ", err)
        }
    }

    // SPRING - GET PUBLIC USER'S COLLECTION NAMES BY USER ID
    const fetchPublicUserCols = async (userid) => {

        try {
            const res = await axios.get(`https://scene-it.ee-cognizantacademy.com/api/v1/media/collections/${userid}`)
            console.log("Public collections", res.data)
            dispatch({
                type: FETCH_PUBLIC_COLLECTIONS,
                payload: res.data
            })
        } catch (err) {
            console.log("There was an error fetching collections: ", err)
        }
    }

    // SPRING - SELECT A PUBLIC USER'S MEDIA ITEM
    const setPublicUserItem = (item) => {
        dispatch({
            type: SET_PUBLIC_USER_ITEM,
            payload: item
        })
    }

    // GET SELECTED FAVORITE (INDIVIDUAL)
    const getSelectedFavorite = async (params) => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=984fabcd&i=${params}&plot=full`)
        dispatch({
            type: GET_SELECTED_FAVORITE,
            payload: res.data
        })

    }

    // GET INFO FOR INDIVIDUAL FAVORITE
    const getSelectedInfo = (id) => {
        const filtered = state.selectedUserFavs.filter(fav => fav.imdbID === id)
        dispatch({
            type: GET_SELECTED_INFO,
            payload: filtered[0]
        })
    }


    // UPDATE USER INFO WHEN PROFILE CARD CLICKED
    const updateSelectedUser = (user) => {
        dispatch({
            type: UPDATE_SELECTED_USER,
            payload: user
        })
    }

    // CLEAR PUBLIC USER INFO
    const clearUserInfo = () => {
        dispatch({
            type: CLEAR_USER_INFO
        })
    }

    // CLEAR ALL
    const clearAllPublic = () => {
        dispatch({
            type: CLEAR_ALL_PUBLIC
        })
    }

    // CHANGE PUBLIC VIEW
    const changePublicView = (numb) => {

        dispatch({
            type: CHANGE_PUBLIC_VIEW,
            payload: numb
        })
    }

    // CLEAR SELECTED INFO
    const clearSelectedInfo = () => {
        dispatch({
            type: CLEAR_SELECTED_INFO,
        })
    }

    // CLEAR SELECTED FAVORITE INFORMATION
    const clearSelectedFav = () => {
        dispatch({
            type: CLEAR_SELECTED_FAV
        })
    }

    // SPRING - CLEAR SELECTED USER INFO
    const clearPublicInfo = async () => {
        try {
            dispatch({
                type: CLEAR_PUBLIC_INFO
            })
        } catch (err) {
            console.log(err)
        }
    }

    // PUBLIC ITEM SEARCH - OMDB
    const searchPublicItem = async (imbdid) => {
        try {
            const res = await axios.get(`https://www.omdbapi.com/?apikey=984fabcd&i=${imbdid}&plot=full`)
            return res.data
        } catch (err) {
            console.log('There was an error searching for this item: ', err)
        }
    }

    return (
        <PublicContext.Provider
            value={{
                userList: state.userList,
                selectedUser: state.selectedUser,
                userCollections: state.userCollections,
                selectedUserFavs: state.selectedUserFavs,
                selectedFav: state.selectedFav,
                selectedInfo: state.selectedInfo,
                publicView: state.publicView,
                allUsersList: state.allUsersList,
                selectedUserMedia: state.selectedUserMedia,
                selectedUserCols: state.selectedUserCols,
                publicUserItem: state.publicUserItem,
                setPublicUserItem,
                fetchUsersList,
                fetchPublicUserMedia,
                fetchPublicUserCols,
                clearPublicInfo,
                searchPublicItem,
                getSelectedFavorite,
                getSelectedInfo,
                updateSelectedUser,
                clearUserInfo,
                clearAllPublic,
                changePublicView,
                clearSelectedInfo,
                clearSelectedFav
            }}
        >
            {props.children}
        </PublicContext.Provider>
    )
}

export default PublicState