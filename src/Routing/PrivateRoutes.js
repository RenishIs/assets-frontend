import { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes } from './filterRoutes';
import { PrivateRoutesConfig } from './PrivateRoutesConfig';
import Dashboard from '../Pages/Dashboard';
import MapAllowedRoutes from './MapAllowedRoutes';
import Cookies from 'js-cookie';

const PrivateRoutes = () => {
    const match = useRouteMatch('/app')

    let allowedRoutes = [];

    const isLoggedIn = Cookies.get('token')
    if (isLoggedIn) {
        allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
        console.log(isLoggedIn)

    } else {
        return <Redirect to="/" />;
    }

    return (
        <Fragment>
            <Dashboard routes={allowedRoutes} path={match.path}/>
            <h2>jbkj</h2>
        {/* <TopNav routes={allowedRoutes}  path={match.path} className="bg-white" /> */}
            <MapAllowedRoutes routes={allowedRoutes} isAddNotFound />
        </Fragment>
    )
}

export default PrivateRoutes;