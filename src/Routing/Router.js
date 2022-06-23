import { BrowserRouter, Switch, Route } from "react-router-dom"

import UnRestrictedRoute from "./UnRestrictedRoute";
import RestrictedRoute from "./RestrictedRoute";
import NoMatchFound from "./NoMatchFound";

import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import UsersListing from '../Pages/Users'
import UsersAdd from "../Pages/Users/UsersAdd";
import UsersEdit from "../Pages/Users/UsersEdit";

import Profile from "../Pages/Profile";

import AssetsListing from "../Pages/Assets/index"
import AssetsAdd from "../Pages/Assets/AssetsAdd"
import AssetsEdit from "../Pages/Assets/AssetsEdit"

const Router = ({history, isLoggedIn=false}) => {
    return (
        <BrowserRouter>
            <Switch>
                <UnRestrictedRoute exact path="/" component={Registration} isLoggedIn={isLoggedIn}/>
                <UnRestrictedRoute exact path="/login" component={Login} isLoggedIn={isLoggedIn}/>
                <UnRestrictedRoute exact path="/forgot-password" component={ForgotPassword} isLoggedIn={isLoggedIn}/>
                <UnRestrictedRoute exact path="/reset-password" component={ResetPassword} isLoggedIn={isLoggedIn}/>

                <RestrictedRoute exact path="/dashboard" component={Dashboard} isLoggedIn={isLoggedIn}/>
                <RestrictedRoute exact path="/profile" component={Profile} isLoggedIn={true}/>
                <RestrictedRoute exact path="/users" component={UsersListing} isLoggedIn={true}/>
                <RestrictedRoute exact path="/users/add" component={UsersAdd} isLoggedIn={true}/>
                <RestrictedRoute exact path="/users/edit/:id" component={UsersEdit} isLoggedIn={true}/>
                <RestrictedRoute exact path="/assets" component={AssetsListing} isLoggedIn={true}/>
                <RestrictedRoute exact path="/assets/add" component={AssetsAdd} isLoggedIn={true}/>
                <RestrictedRoute exact path="/assets/edit/:id" component={AssetsEdit} isLoggedIn={true}/>
                <Route path="*" component={NoMatchFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router



