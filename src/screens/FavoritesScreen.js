import React, { useEffect, useContext } from 'react'
import UserContext from '../state/user/userContext'
import FavoritesTable from '../components/FavoritesTable'
import NoFavorites from '../components/NoFavorites'
import Loader from '../components/Loader'
import Favs from '../assets/yourFavs.svg'
import Footer from '../components/Footer'

const FavoritesScreen = () => {

    const userContext = useContext(UserContext)

    const { userId, getUserFavorites, favorites } = userContext

    useEffect(() => {

        getUserFavorites(userId)

    }, [])



    return (
        <div style={{ padding: '0 0 100px' }}>
            {!favorites && <Loader />}
            {favorites && favorites.length < 1 && <NoFavorites />}
            {favorites && favorites.length > 0 && (
                <>
                    <div style={{ padding: '60px 0 50px', textAlign: 'center' }}>
                        <img src={Favs} alt='Favorites logo' style={{ width: '400px' }} />
                    </div>
                    <FavoritesTable favorites={favorites} />
                </>

            )
            }
            <Footer />
        </div>
    )
}

export default FavoritesScreen
