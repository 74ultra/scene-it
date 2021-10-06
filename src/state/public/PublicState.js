import React, { useReducer } from 'react'
import PublicContext from './publicContext'
import PublicReducer from './publicReducer'
import axios from 'axios'

import { userListCleaner, colCleaner, selectedFavCleaner } from '../../utils/helpers'

import {
    GET_USERS_LIST,
    GET_PUBLIC_FAVS,
    GET_PUBLIC_COLS,
    UPDATE_SELECTED_USER,
    CLEAR_USER_INFO,
    GET_SELECTED_FAVORITE,
    CLEAR_ALL_PUBLIC,
    GET_SELECTED_INFO,
    CHANGE_PUBLIC_VIEW,
    CLEAR_SELECTED_INFO,
    CLEAR_SELECTED_FAV
} from '../types'


const PublicState = props => {
    const initialState = {
        userList: null,
        selectedUser: null,
        selectedUserFavs: null,
        selectedFav: null,
        userCollections: null,
        selectedInfo: null,
        publicView: '1'
    }

    const [state, dispatch] = useReducer(PublicReducer, initialState)

    // GET LIST OF USERS - USERID'S AND USERNAMES
    const getUsers = async () => {
        try {
            const listOfUsers = await axios.get(`https://5rdy4l3y5i.execute-api.us-west-1.amazonaws.com/prod/scene-it/public`)
            const cleanedData = userListCleaner(listOfUsers.data)
            dispatch({
                type: GET_USERS_LIST,
                payload: cleanedData
            })
        } catch (err) {
            console.log('Error retrieving users')
        }
    }

    // GET SELECTED USER COLLECTIONS
    const getSelectedCollections = async (userId) => {
        const reqBody = { "userId": `${userId}` }
        let colData;
        try {
            const res = await axios.post(`https://5rdy4l3y5i.execute-api.us-west-1.amazonaws.com/prod/scene-it/lists`, reqBody)
            colData = colCleaner(res.data)
            dispatch({
                type: GET_PUBLIC_COLS,
                payload: colData
            })
        } catch (err) {
            console.log("Error retrieving user collections: ", err)
        }
    }

    // GET USER FAVORITES
    const getPublicFavs = async (userId) => {
        const reqBody = { "userId": `${userId}` }
        let favData;
        try {
            const res = await axios.post(`https://5rdy4l3y5i.execute-api.us-west-1.amazonaws.com/prod/scene-it/favs`, reqBody)
            favData = selectedFavCleaner(res.data.Items)
            dispatch({
                type: GET_PUBLIC_FAVS,
                payload: favData
            })
        } catch (err) {
            console.log("There was a problem retrieving favorite: ", err)
        }
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
                getUsers,
                getSelectedCollections,
                getPublicFavs,
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