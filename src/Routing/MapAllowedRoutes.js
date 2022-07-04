import { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatchFound from './NoMatchFound';

/*
* This is the route utility component used for generating
* routes and child routes it only requires routes array and basePath
*/
const MapAllowedRoutes = ({routes, isAddNotFound}) => {
    return (
        <Switch>
        {
            routes.map((route) => {
                const { path, component: Component, children, title, permission, ...rest } = route;
                return (
                    <Route {...rest}
                           key={path}
                           path={path}
                           render={(props) => <Component {...props} />}/>
                )
        })}
        {isAddNotFound && <Route><NoMatchFound /></Route>}
        </Switch>
    )
}

export default memo(MapAllowedRoutes);