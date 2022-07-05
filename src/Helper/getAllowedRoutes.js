import Cookies from 'js-cookie';
import { intersection } from 'lodash';

export const getAllowedRoutes = (routes) => {
    const role = Cookies.get('role')

    return routes.filter(({ permissions  }) => {
        return intersection(permissions, [role]).length
    })
}