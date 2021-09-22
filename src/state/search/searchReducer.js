import {
    CLEAR_ALL,
    NEXT_SEARCH_PAGE,
    PREVIOUS_SEARCH_PAGE,
    INITIAL_SEARCH,
    TITLE_SEARCH
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case INITIAL_SEARCH:
            return {
                ...state,
                results: action.payload[0],
                title: action.payload[1]
            };
        case TITLE_SEARCH:
            return {
                ...state,
                titleInfo: action.payload
            };
        case NEXT_SEARCH_PAGE:
            return {
                ...state,
                results: action.payload[0],
                page: action.payload[1]
            };
        case PREVIOUS_SEARCH_PAGE:
            return {
                ...state,
                results: action.payload[0],
                page: action.payload[1]
            }
        case CLEAR_ALL:
            return {
                ...state,
                results: {},
                title: '',
                page: 1
            }
        default:
            return state
    }
}