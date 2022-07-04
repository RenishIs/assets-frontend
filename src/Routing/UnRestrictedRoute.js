import { Redirect, Route, useHistory } from "react-router-dom"
import Cookies from "js-cookie";

const UnRestrictedRoute = ({ component: Component, isLoggedIn = false, ...rest }) => {
    const history = useHistory();
    const token = Cookies.get('token')
  
    return (
        !token ? <Route {...rest}
            render={(props) =>
                <Component {...props} />
            }
        /> : history.length > 1 ?
            // this will take you back if there is history
        
            history.goBack()
            :
            <Redirect
                to={{
                    pathname: '/profile'
                }}
            />

    )
}

export default UnRestrictedRoute