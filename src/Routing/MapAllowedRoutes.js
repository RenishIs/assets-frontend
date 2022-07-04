import { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NoMatchFound from './NoMatchFound';

/*
* This is the route utility component used for generating
* routes and child routes it only requires routes array and basePath
*/
const MapAllowedRoutes = ({routes, basePath, isAddNotFound}) => {
    const match = useRouteMatch(basePath)

    console.log(match)
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