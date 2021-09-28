import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../state/user/userContext'
import FavoritesTable from '../components/FavoritesTable'
import NoFavorites from '../components/NoFavorites'
import Loader from '../components/Loader'
import Favs from '../assets/yourFavs.svg'
import Footer from '../components/Footer'

const FavoritesScreen = () => {

    const userContext = useContext(UserContext)

    // console.log(userContext)

    const { userId, getUserFavorites, favorites } = userContext

    console.log(userId)
    console.log("Hello")
    useEffect(() => {

        getUserFavorites(userId)

    }, [])



    return (
        <div>
            {!favorites && <Loader />}
            {favorites && favorites.length < 1 && <NoFavorites />}
            {favorites && favorites.length > 0 && (
                <>
                    <div style={{ padding: '80px 0 50px', textAlign: 'center' }}>
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
