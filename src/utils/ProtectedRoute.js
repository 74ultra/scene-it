import React, { useContext } from 'react'
import UserContext from '../state/user/userContext'
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({ component: Component, ...rest }) => {

    const userContext = useContext(UserContext)

    const { authenticated } = userContext

    return <Route {...rest} render={props => {
        if (authenticated) {
            return <Component {...props} />
        } else {
            return <Redirect to='/' />
        }
    }}
    />
}
