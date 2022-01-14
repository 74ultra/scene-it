import React, { useEffect, useContext } from 'react'

import PublicContext from '../../state/public/publicContext'

const PubMediaScreen = () => {

    const publicContext = useContext(PublicContext)
    const { publicUserItem } = publicContext

    console.log('Public user item: ', publicUserItem)

    return (
        <div>
            <h1>Word UP!</h1>
        </div>
    )
}

export default PubMediaScreen
