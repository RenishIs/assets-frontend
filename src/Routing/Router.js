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

import AssetTypesListing from "../Pages/AssetTypes/index";
import AssetTypeAdd from "../Pages/AssetTypes/AssetTypeAdd";
import AssetTypeEdit from "../Pages/AssetTypes/AssetTypeEdit";

import AssetStatusListing from "../Pages/AssetStatus/index"
import AssetStatusAdd from "../Pages/AssetStatus/AssetStatusAdd"
import AssetStatusEdit from "../Pages/AssetStatus/AssetStatusEdit"

const Router = ({history}) => {
    return (
        <BrowserRouter>
            <Switch>
                <UnRestrictedRoute exact path="/" component={Registration} />
                <UnRestrictedRoute exact path="/login" component={Login} />
                <UnRestrictedRoute exact path="/forgot-password" component={ForgotPassword} />
                <UnRestrictedRoute exact path="/reset-password/:id" component={ResetPassword} />

                <RestrictedRoute exact path="/dashboard" component={Dashboard} />
                <RestrictedRoute exact path="/profile" component={Profile}/>
                <RestrictedRoute exact path="/users" component={UsersListing}/>
                <RestrictedRoute exact path="/users/add" component={UsersAdd} />
                <RestrictedRoute exact path="/users/edit/:id" component={UsersEdit} />
                <RestrictedRoute exact path="/assets" component={AssetsListing}/>
                <RestrictedRoute exact path="/assets/add" component={AssetsAdd}/>
                <RestrictedRoute exact path="/assets/edit/:id" component={AssetsEdit} />
                <RestrictedRoute exact path="/asset-types" component={AssetTypesListing}/>
                <RestrictedRoute exact path="/asset-types/add" component={AssetTypeAdd}/>
                <RestrictedRoute exact path="/asset-types/edit/:id" component={AssetTypeEdit} />
                <RestrictedRoute exact path="/asset-status" component={AssetStatusListing}/>
                <RestrictedRoute exact path="/asset-status/add" component={AssetStatusAdd}/>
                <RestrictedRoute exact path="/asset-status/edit/:id" component={AssetStatusEdit} />
                <Route path="*" component={NoMatchFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router



