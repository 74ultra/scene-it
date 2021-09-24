import {
    GET_USER_INFO,
    SIGN_OUT_USER
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                username: action.payload.username,
                userId: action.payload.attributes.sub,
                authenticated: true
            };
        case SIGN_OUT_USER:
            return {
                ...state,
                username: null,
                userId: null,
                favorites: null,
                errorStatus: null,
                authenticated: false
            }
        default:
            return state
    }
}