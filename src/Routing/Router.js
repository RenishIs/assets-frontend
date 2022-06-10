import { BrowserRouter, Switch, Route } from "react-router-dom"
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import UnRestrictedRoute from "./UnRestrictedRoute";
import RestrictedRoute from "./RestrictedRoute";
import NoMatchFound from "./NoMatchFound";

import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";

import Profile from "../Pages/Profile";

const Router = ({history, isLoggedIn}) => {
    return (
        <BrowserRouter>
            <ConnectedRouter history={history}>
                <Switch>
                    <UnRestrictedRoute exact path="/" component={Registration} isLoggedIn={isLoggedIn}/>
                    <UnRestrictedRoute exact path="/login" component={Login} isLoggedIn={isLoggedIn}/>
                    <UnRestrictedRoute exact path="/forgot-password" component={ForgotPassword} isLoggedIn={isLoggedIn}/>
                    <UnRestrictedRoute exact path="/reset-password" component={ResetPassword} isLoggedIn={isLoggedIn}/>

                    <RestrictedRoute exact path="/profile" component={Profile} isLoggedIn={isLoggedIn}/>
                    <Route path="*" component={NoMatchFound} />
                </Switch>
            </ConnectedRouter>
        </BrowserRouter>
    )
}

export default connect((state) => ({
    isLoggedIn: "state.auth.token" === null
}))(Router);


