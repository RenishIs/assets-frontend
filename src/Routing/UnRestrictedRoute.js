import { Redirect, Route } from "react-router-dom"
import Cookies from "js-cookie";

const UnRestrictedRoute = ({ component:Component, isLoggedIn=false, ...rest}) => {
    const token =Cookies.get('token')
    return (
        <Route {...rest}
               render={(props) =>
                    !token ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/profile',
                                state: { from: props.location }
                            }}
                        />
                    )
               }
        />
    )
}

export default UnRestrictedRoute