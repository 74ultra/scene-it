import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from './userContext'
import UserReducer from './userReducer'
import { Auth } from 'aws-amplify'

import {
    GET_USER_INFO,
    SIGN_OUT_USER
} from '../types'


const UserState = props => {
    const initialState = {
        username: null,
        userId: null,
        favorites: null,
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
            console.log('From context', user)
        } catch (err) {
            console.log('Context: ', err)
        }
        dispatch({
            type: GET_USER_INFO,
            payload: user
        })
    }

    // const signOut1 = async () => {
    //     try {
    //         await Auth.signOut()
    //         console.log('signed out')
    //         history.push('/')

    //     } catch (err) {

    //     }

    // }

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
                console.log(res)
                getUser()
            })
            .then(() => history.push('/'))
            .catch((err) => console.log(err))
    }

    return (
        <UserContext.Provider
            value={{
                getUser,
                signOut,
                signIn,
                username: state.username,
                userId: state.userId,
                favorites: state.favorites,
                authenticated: state.authenticated
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
