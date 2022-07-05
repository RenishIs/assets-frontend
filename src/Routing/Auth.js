

import Cookies from 'js-cookie';
import { memo } from 'react';
import { Redirect } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';

/*
* TODO: when user loggedIn he/she unable to goto public routes
*  ie: ('/about', '/contact', 'any other public route')
*/

const Auth = () => {
	const token = Cookies.get('token')
	return token ? (
			<Redirect to="/profile" />
		) : (
			<PublicRoutes />
		)
}

export default memo(Auth);