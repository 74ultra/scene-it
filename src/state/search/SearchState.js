import React, { useReducer } from 'react'
import SearchContext from './searchContext'
import SearchReducer from './searchReducer'
import axios from 'axios'

import {
    INITIAL_SEARCH,
    NEXT_SEARCH_PAGE,
    PREVIOUS_SEARCH_PAGE,
    TITLE_SEARCH,
    CLEAR_ALL
} from '../types'


const SearchState = props => {
    const initialState = {
        results: {},
        title: '',
        page: 1,
        titleInfo: {}
    }

    const [state, dispatch] = useReducer(SearchReducer, initialState)


    // SEARCH FORM INITIAL SEARCH 
    const initialSearch = async (title) => {
        const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=984fabcd&s=${title}`)
        dispatch({
            type: INITIAL_SEARCH,
            payload: [res.data, title]
        })
    }

    // NEXT PAGE OF SEARCH RESULTS
    const nextPage = async () => {
        const pageNumber = state.page + 1
        const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=984fabcd&s=${state.title}&page=${pageNumber}`)

        dispatch({
            type: NEXT_SEARCH_PAGE,
            payload: [res.data, pageNumber]
        })
    }

    // NEXT PAGE OF SEARCH RESULTS
    const previousPage = async () => {
        let pageNumber = state.page - 1
        if (pageNumber < 1) {
            pageNumber = 1
        }
        const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=984fabcd&s=${state.title}&page=${pageNumber}`)

        dispatch({
            type: PREVIOUS_SEARCH_PAGE,
            payload: [res.data, pageNumber]
        })
    }

    // TITLE SEARCH (INDIVIDUAL)
    const titleSearch = async (params) => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=984fabcd&i=${params}&plot=full`)
        dispatch({
            type: TITLE_SEARCH,
            payload: res.data
        })

    }

    // CLEAR SEARCH STATE FOR NEW SEARCH
    const clearAll = () => dispatch({ type: CLEAR_ALL })

    return (
        <SearchContext.Provider
            value={{
                results: state.results,
                title: state.title,
                page: state.page,
                titleInfo: state.titleInfo,
                initialSearch,
                titleSearch,
                nextPage,
                previousPage,
                clearAll
            }}
        >
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState