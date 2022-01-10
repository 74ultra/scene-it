import {
    GET_FAVORITES,
    GET_USER_COLLECTIONS,
    GET_MEDIA_INFO,
    CLEAR_MEDIA_INFO
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_FAVORITES:
            return {
                ...state,
                media: action.payload
            };
        case GET_USER_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        case GET_MEDIA_INFO:
            return {
                ...state,
                mediaInfo: action.payload
            };
        case CLEAR_MEDIA_INFO:
            return {
                ...state,
                mediaInfo: null
            };
        default:
            return state
    }
}