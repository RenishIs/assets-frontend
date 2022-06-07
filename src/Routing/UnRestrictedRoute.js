import { Navigate, Outlet } from "react-router-dom"

const UnRestrictedRoute = ({ component:Component, isLoggedIn, ...rest}) => {
    return !isLoggedIn ? (
        <Outlet {...rest}/>
    ) : (
        <Navigate to="/profile"/>
    )
}

export default UnRestrictedRoute