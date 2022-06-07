import { Navigate, Outlet } from "react-router-dom"

const RestrictedRoute = ({ component:Component, isLoggedIn, ...rest}) => {
    return isLoggedIn ? (
        <Outlet {...rest}/>
    ) : (
        <Navigate to="/"/>
    )
}

export default RestrictedRoute