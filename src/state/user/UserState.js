import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from './userContext'
import UserReducer from './userReducer'
import { Auth } from 'aws-amplify'
import axios from 'axios'

import { colCleaner } from '../../utils/helpers'

import {
    GET_USER_INFO,
    SIGN_OUT_USER,
    SET_ERROR_STATUS,
    SET_TEMP_CREDS
} from '../types'


const UserState = props => {
    const initialState = {
        username: null,
        userid: null,
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

    // CONFIRM NEW USER SIGNUP
    const confirmNewSignUp = async (username, confirmationCode) => {
        try {
            await Auth.confirmSignUp(username, confirmationCode)
            setErrorStatus(null)
        } catch (err) {
            console.log('Error confirming sign up: ', err)
            setErrorStatus(err)
        }
    }

    // CONFIRM NEW USER ACCOUNT
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
                signOut,
                signIn,
                setErrorStatus,
                setTempCredentials,
                resendConfirmCode,
                confirmNewSignUp,
                confirmNewAccount,
                createNewAccount,
                username: state.username,
                userid: state.userid,
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
