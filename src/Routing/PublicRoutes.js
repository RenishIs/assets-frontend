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
				<Route exact path="/forgot-password" component={ForgotPassword}/>
				<Route exact path="/register" component={Registration}/>
				<Route exact path="/login" component={Login}/>
				<Route path="/reset-password/:id" component={ResetPassword}/>
			</Switch>
		</Fragment>
	)
}

export default PublicRoutes;