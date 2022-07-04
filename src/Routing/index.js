import React, { memo } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from "./history";
import PrivateRoutes from './PrivateRoutes';
import Auth from './Auth';

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/user">
					<Auth />
				</Route>
				<Route path="">
					<PrivateRoutes />
				</Route>
			</Switch>
		</Router>
	)
}

export default memo(Routes);