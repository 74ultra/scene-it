import {
    GET_USER_INFO,
    SIGN_OUT_USER,
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