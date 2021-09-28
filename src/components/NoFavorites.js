import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Conveyer from './Conveyer'
import { Button } from 'react-bootstrap'

import SearchContext from '../state/search/searchContext'

const NoFavorites = () => {

    const history = useHistory()

    const searchContext = useContext(SearchContext)
    const { results, clearAll } = searchContext

    const handleSearchClick = () => {
        clearAll()
        history.push('/results')
    }

    return (
        <>
            <div style={{ padding: '95px 0 0', textAlign: 'center' }}>
                <h4 style={{ margin: '0' }}>Looks like you haven't added any media to your Favorites page.</h4>
                <Button style={{ margin: '25px 0 50px' }} onClick={handleSearchClick}>Start searching!</Button>
            </div>
            {results.Response ? null :
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <Conveyer />
                </div>
            }
        </>
    )
}

export default NoFavorites
