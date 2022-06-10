import { Redirect, Route } from "react-router-dom"

const UnRestrictedRoute = ({ component:Component, isLoggedIn, ...rest}) => {
    return (
        <Route {...rest}
               render={(props) =>
                    !isLoggedIn ? (
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