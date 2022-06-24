import { Route, useHistory } from "react-router-dom"
import Cookies from "js-cookie";
const UnRestrictedRoute = ({ component: Component, isLoggedIn = false, ...rest }) => {
    const history = useHistory();
    var token = Cookies.get('token')
    return (
        !token ? <Route {...rest}
            render={(props) =>
                <Component {...props} />
            }
        /> :
            history.goBack()
    )
}

export default UnRestrictedRoute