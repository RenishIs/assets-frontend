import { Route, useHistory, Redirect } from "react-router-dom"
import Cookies from "js-cookie";

const UnRestrictedRoute = ({ component: Component, isLoggedIn = false, ...rest }) => {
    const history = useHistory();
    const token = Cookies.get('token')
    
    return (
        !token ? <Route {...rest}
            render={(props) =>
                <Component {...props} />
            }
        /> :
        <Redirect
                            to={{
                                pathname: '/profile',
                                // state: { from: props.location }
                            }}
                        />
            // history.goBack()
    )
}

export default UnRestrictedRoute