import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from './userContext'
import UserReducer from './userReducer'
import { Auth } from 'aws-amplify'
import axios from 'axios'

import {
    GET_USER_INFO,
    GET_FAVORITES,
    SIGN_OUT_USER,
    GET_FAV_INFO,
    CLEAR_FAV_INFO
} from '../types'


const UserState = props => {
    const initialState = {
        username: null,
        userId: null,
        favorites: null,
        favInfo: null,
        errorStatus: null,
        authenticated: false
    }

    const history = useHistory();

    const [state, dispatch] = useReducer(UserReducer, initialState)

    // GET USER INFO UPON LOGIN
    const getUser = async () => {
        let user;
        try {
            user = await Auth.currentAuthenticatedUser()
        } catch (err) {
            console.log('Get user error: ', err)
        }
        dispatch({
            type: GET_USER_INFO,
            payload: user
        })
    }

    // GET FAVORITES FROM DATABASE
    const getUserFavorites = async (userId) => {
        const reqBody = { "userId": `${userId}` }
        let favData;
        try {
            const res = await axios.post(`https://5rdy4l3y5i.execute-api.us-west-1.amazonaws.com/prod/scene-it/favs`, reqBody)
            favData = res.data.Items
        } catch (err) {
            console.log("There was a problem retrieving favorite: ", err)
        }
        dispatch({
            type: GET_FAVORITES,
            payload: favData
        })

    }

    // GET INFO FOR INDIVIDUAL FAVORITE
    const getFavInfo = (id) => {
        clearFavInfo()
        const filtered = state.favorites.filter(fav => fav.imdbID.S === id)

        dispatch({
            type: GET_FAV_INFO,
            payload: filtered[0]
        })
    }

    // CLEAR INDIVIDUAL FAVIORITE INFO
    const clearFavInfo = () => {
        dispatch({ type: CLEAR_FAV_INFO })
    }

    // ADD MEDIA TO DATABASE
    const addFavorite = (favData) => {
        console.log('Submitted from context', favData)
    }

    // SIGN USER OUT AND CLEAR STATE
    const signOut = () => {
        Auth.signOut()
            .then(() => {
                dispatch({
                    type: SIGN_OUT_USER
                })
            })
            .then(() => {
                console.log('signed out')
                history.push('/')
            })
            .catch((err) => {
                console.log('Sign out error: ', err)
            })
    }

    const signIn = (userName, passWord) => {
        Auth.signIn(userName, passWord)
            .then(res => {
                getUser()
            })
            .then(() => history.push('/'))
            .catch((err) => console.log(err))
    }

    return (
        <UserContext.Provider
            value={{
                getUser,
                getUserFavorites,
                signOut,
                signIn,
                addFavorite,
                getFavInfo,
                username: state.username,
                userId: state.userId,
                favorites: state.favorites,
                favInfo: state.favInfo,
                authenticated: state.authenticated
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
