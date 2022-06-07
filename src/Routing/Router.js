import { BrowserRouter, Routes, Route } from "react-router-dom"
import { connect } from 'react-redux';
// import { ConnectedRouter } from 'connectedRedirect-react-router';

import { history } from "./history";

import UnRestrictedRoute from "./UnRestrictedRoute";
import RestrictedRoute from "./RestrictedRoute";
import NoMatchFound from "./NoMatchFound";

import Registration from "../Components/Registration";
import Login from "../Components/Login";
import ResetPassword from "../Components/ResetPassword";

const Router = ({ history, isLoggedIn }) => {
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route element={<UnRestrictedRoute />}>
                    <Route exact path="/" element={<Registration />} isLoggedIn={false}/>
                    <Route exact path="/login" element={<Login />} isLoggedIn={false}/>
                    <Route path="/reset-password" element={<ResetPassword />} isLoggedIn={false}/>
                </Route>
                <Route element={<RestrictedRoute />}>
                    <Route exact path="/profile" element={<ResetPassword />} isLoggedIn={false}/>
                </Route>
                <Route path="*" element={<NoMatchFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default connect((state) => ({
    isLoggedIn: "state.auth.token" === null
}))(Router);


