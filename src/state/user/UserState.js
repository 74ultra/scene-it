import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from './userContext'
import UserReducer from './userReducer'
import { Auth } from 'aws-amplify'
import axios from 'axios'

import { colCleaner } from '../../utils/helpers'

import {
    GET_USER_INFO,
    GET_FAVORITES,
    SIGN_OUT_USER,
    GET_FAV_INFO,
    CLEAR_FAV_INFO,
    GET_USER_COLLECTIONS,
    SET_ERROR_STATUS,
    SET_TEMP_CREDS
} from '../types'


const UserState = props => {
    const initialState = {
        username: null,
        userid: null,
        favorites: null,
        collections: null,
        favInfo: null,
        errorStatus: null,
        authenticated: false,
        tempCreds: null
    }

    const history = useHistory();

    const [state, dispatch] = useReducer(UserReducer, initialState)

    // GET USER INFO UPON LOGIN
    const getUser = async () => {
        let user;
        try {
            user = await Auth.currentAuthenticatedUser()

            dispatch({
                type: GET_USER_INFO,
                payload: user
            })
        } catch (err) {
            console.log('Get user error: ', err)
        }

    }

    // GET FAVORITES FROM DATABASE
    const getUserFavorites = async (userId) => {
        const reqBody = { "userId": `${userId}` }
        let favData;
        try {
            const res = await axios.post(`https://5rdy4l3y5i.execute-api.us-west-1.amazonaws.com/prod/scene-it/favs`, reqBody)
            favData = res.data.Items
            // const cleanedData = favDataCleaner(favData)
            dispatch({
                type: GET_FAVORITES,
                payload: favData
            })
        } catch (err) {
            console.log("There was a problem retrieving favorite: ", err)
        }
    }

    // GET LIST OF COLLECTION NAMES
    const getUserCollections = async (userId) => {
        const reqBody = { "userId": `${userId}` }
        let colData;
        try {
            const res = await axios.post(`https://5rdy4l3y5i.execute-api.us-west-1.amazonaws.com/prod/scene-it/lists`, reqBody)
            colData = colCleaner(res.data)
            dispatch({
                type: GET_USER_COLLECTIONS,
                payload: colData
            })
        } catch (err) {
            console.log("Error retrieving user collections: ", err)
        }
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

    // ADD ITEM TO FAVORITES
    const addFavorite = async (favData) => {
        try {
            await axios.post(`https://5rdy4l3y5i.execute-api.us-west-1.amazonaws.com/prod/scene-it`, favData)
        } catch (err) {
            console.log('Error add movie to favorites: ', err)
        }
    }

    // DELETE ITEM FROM FAVORITES
    const deleteFavorite = async (imdbID) => {
        const reqBody = {
            "userId": `${state.userId}`,
            "imdbID": `${imdbID}`
        }
        try {
            await axios.post(`https://5rdy4l3y5i.execute-api.us-west-1.amazonaws.com/prod/scene-it/remove`, reqBody)
        } catch (err) {
            console.log('Error deleting item: ', err)
        }
    }


    // STORE USERNAME AND EMAIL TEMPORARILY TO HANLDE CONFIRMATION ERRORS
    const setTempCredentials = (creds) => {
        console.log('set temp: ', creds)
        dispatch({
            type: SET_TEMP_CREDS,
            payload: creds
        })
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

    // SIGN IN
    const signIn = (userName, passWord) => {
        Auth.signIn(userName, passWord)
            .then(res => {
                getUser()
                setErrorStatus(null)
            })
            .then(() => history.push('/'))
            .catch((err) => {
                console.log('Error signing in user: ', err)
                setErrorStatus(err.message)
            })
    }

    // CREATE NEW ACCOUNT
    const createNewAccount = async (username, password, email) => {
        try {
            await Auth.signUp({
                username,
                password,
                attributes: { email }
            })
        } catch (err) {
            setErrorStatus(err)
            console.log('Error creating account: ', err)
        }
    }

    // CONFIRM NEW USER ACCOUNT
    const confirmNewSignUp = async (username, confirmationCode) => {
        try {
            await Auth.confirmSignUp(username, confirmationCode)
            setErrorStatus(null)
        } catch (err) {
            console.log('Error confirming sign up: ', err)
            setErrorStatus(err)
        }
    }

    const confirmNewAccount = (username, confirmationCode) => {
        Auth.confirmSignUp(username, confirmationCode)
            .then(() => setErrorStatus(null))
            .then(() => history.push('/login'))
            .catch(err => {
                setErrorStatus(err)
            })
    }

    // RESEND CONFIRMATION CODE EMAIL
    const resendConfirmCode = async (userName) => {
        try {
            await Auth.resendSignUp(userName)
            setErrorStatus(null)
        } catch (err) {
            console.log('There was an error sending a new code: ', err)
        }
    }

    // SET ERROR STATUS
    const setErrorStatus = (msg) => {

        dispatch({
            type: SET_ERROR_STATUS,
            payload: msg
        })
    }


    return (
        <UserContext.Provider
            value={{
                getUser,
                getUserFavorites,
                getUserCollections,
                signOut,
                signIn,
                addFavorite,
                getFavInfo,
                deleteFavorite,
                clearFavInfo,
                setErrorStatus,
                setTempCredentials,
                resendConfirmCode,
                confirmNewSignUp,
                confirmNewAccount,
                createNewAccount,
                username: state.username,
                userid: state.userid,
                favorites: state.favorites,
                collections: state.collections,
                favInfo: state.favInfo,
                authenticated: state.authenticated,
                errorStatus: state.errorStatus,
                tempCreds: state.tempCreds
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
