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
import AssetCategories from "../Pages/AssetCategories";
import AssetCategoryAdd from "../Pages/AssetCategories/AssetCategoryAdd";
import AssetCategoryEdit from "../Pages/AssetCategories/AssetCategoryEdit";

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
                <RestrictedRoute exact path="/asset-categories" component={AssetCategories} />
                <RestrictedRoute exact path="/asset-categories/add" component={AssetCategoryAdd} />
                <RestrictedRoute exact path="/asset-categories/edit/:id" component={AssetCategoryEdit} />

                <Route path="*" component={NoMatchFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router



