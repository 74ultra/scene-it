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

export default (state, action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                userList: action.payload
            }
        case GET_PUBLIC_COLS:
            return {
                ...state,
                userCollections: action.payload
            }
        case GET_PUBLIC_FAVS:
            return {
                ...state,
                selectedUserFavs: action.payload
            }
        case GET_SELECTED_FAVORITE:
            return {
                ...state,
                selectedFav: action.payload
            }
        case GET_SELECTED_INFO:
            return {
                ...state,
                selectedInfo: action.payload
            }
        case UPDATE_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload
            }
        case CLEAR_USER_INFO:
            return {
                ...state,
                selectedUser: null,
                userCollections: null,
                selectedUserFavs: null,
                selectedInfo: null
            }
        case CLEAR_ALL_PUBLIC:
            return {
                ...state,
                userList: null,
                selectedUser: null,
                selectedUserFavs: null,
                selectedFav: {},
                userCollections: null,
                selectedInfo: {},
                publicView: 1
            }
        case CHANGE_PUBLIC_VIEW:
            return {
                ...state,
                publicView: action.payload
            }
        case CLEAR_SELECTED_INFO:
            return {
                ...state,
                selectedInfo: {}
            }
        case CLEAR_SELECTED_FAV:
            return {
                ...state,
                selectedFav: {}
            }
        default:
            return state
    }
}