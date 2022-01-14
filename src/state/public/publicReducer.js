import {
    UPDATE_SELECTED_USER,
    CLEAR_USER_INFO,
    GET_SELECTED_FAVORITE,
    CLEAR_ALL_PUBLIC,
    GET_SELECTED_INFO,
    CHANGE_PUBLIC_VIEW,
    CLEAR_SELECTED_INFO,
    CLEAR_SELECTED_FAV,
    FETCH_USERS_LIST,
    FETCH_PUBLIC_MEDIA,
    FETCH_PUBLIC_COLLECTIONS,
    CLEAR_PUBLIC_INFO,
    SET_PUBLIC_USER_ITEM
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case FETCH_USERS_LIST:
            return {
                ...state,
                allUsersList: action.payload
            }
        case FETCH_PUBLIC_MEDIA:
            return {
                ...state,
                selectedUserMedia: action.payload
            }
        case FETCH_PUBLIC_COLLECTIONS:
            return {
                ...state,
                selectedUserCols: action.payload
            }
        case SET_PUBLIC_USER_ITEM:
            return {
                ...state,
                publicUserItem: action.payload
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
        case CLEAR_PUBLIC_INFO:
            return {
                ...state,
                selectedUserMedia: null,
                selectedUserCols: null,
                selectedUserName: null
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