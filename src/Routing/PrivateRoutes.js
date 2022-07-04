import { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getAllowedRoutes } from '../Helper/getAllowedRoutes';
import { PrivateRoutesConfig } from './PrivateRoutesConfig';
import MainLayout from '../Components/MainLayout';
import MapAllowedRoutes from './MapAllowedRoutes';

const PrivateRoutes = () => {
    const match = useRouteMatch('/app')
    let allowedRoutes = [];

    const isLoggedIn = Cookies.get('token')
    if (isLoggedIn) {
        allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
    } else {
        return <Redirect to="/" />;
    }

    return (
        <Fragment>
            <MainLayout routes={allowedRoutes} path={match.path}>
                <MapAllowedRoutes routes={allowedRoutes} isAddNotFound />
            </MainLayout>
        </Fragment>
    )
}

export default PrivateRoutes;