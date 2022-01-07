import {
    GET_FAVORITES,
    GET_USER_COLLECTIONS
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
        default:
            return state
    }
}