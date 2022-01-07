import {
    GET_USER_INFO,
    SIGN_OUT_USER,
    GET_FAVORITES,
    GET_FAV_INFO,
    CLEAR_FAV_INFO,
    GET_USER_COLLECTIONS,
    SET_ERROR_STATUS,
    SET_TEMP_CREDS
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                username: action.payload.username,
                userid: action.payload.attributes.sub,
                authenticated: true,
                tempCreds: null
            };
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            };
        case GET_FAV_INFO:
            return {
                ...state,
                favInfo: action.payload
            };
        case CLEAR_FAV_INFO:
            return {
                ...state,
                favInfo: null
            };
        case GET_USER_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        case SET_TEMP_CREDS:
            return {
                ...state,
                tempCreds: action.payload
            }
        case SIGN_OUT_USER:
            return {
                ...state,
                username: null,
                userid: null,
                favorites: null,
                collections: null,
                favInfo: null,
                errorStatus: null,
                authenticated: false,
                tempCreds: null
            }
        case SET_ERROR_STATUS:
            return {
                ...state,
                errorStatus: action.payload
            }
        default:
            return state
    }
}