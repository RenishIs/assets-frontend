import { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes } from './filterRoutes';
import { PrivateRoutesConfig } from './PrivateRoutesConfig';
import Dashboard from '../Pages/Dashboard';
import MapAllowedRoutes from './MapAllowedRoutes';
import Cookies from 'js-cookie';

const PrivateRoutes = () => {
    const match = useRouteMatch('/app')

    console.log(useRouteMatch('/profile'))

    let allowedRoutes = [];

    const isLoggedIn = Cookies.get('token')
    if (isLoggedIn) {
        allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
    } else {
        return <Redirect to="/" />;
    }

    return (
        <Fragment>
            <Dashboard routes={allowedRoutes} path={match.path}>
                <MapAllowedRoutes routes={allowedRoutes} isAddNotFound />
            </Dashboard>
        </Fragment>
    )
}

export default PrivateRoutes;