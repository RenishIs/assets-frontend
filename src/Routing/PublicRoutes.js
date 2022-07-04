import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";

const PublicRoutes = () => {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/user/signup" component={Registration}/>
				<Route exact path="/user/login" component={Login}/>
				<Route exact path="/user/forgot-password" component={ForgotPassword}/>
				<Route path="/user/reset-password/:id" component={ResetPassword}/>
			</Switch>
		</Fragment>
	)
}

export default PublicRoutes;