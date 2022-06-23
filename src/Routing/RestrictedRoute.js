import { Redirect, Route } from "react-router-dom"
import Cookies from "js-cookie";
const RestrictedRoute = ({ component:Component, isLoggedIn, ...rest}) => {
    var token =Cookies.get('token')
    return (
        <Route {...rest}
               render={(props) =>
                token ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    )
}

export default RestrictedRoute