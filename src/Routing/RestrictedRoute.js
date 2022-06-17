import { Redirect, Route } from "react-router-dom"

const RestrictedRoute = ({ component:Component, isLoggedIn, ...rest}) => {
    return (
        <Route {...rest}
               render={(props) =>
                    isLoggedIn ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    )
}

export default RestrictedRoute