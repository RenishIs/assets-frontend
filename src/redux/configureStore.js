import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router';

import rootReducer from "./reducers/rootReducer";
import { watcherSaga } from "./sagas/saga";
import { history } from '../Routing/history';

const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware]

const configureStore = createStore(rootReducer, {}, compose(applyMiddleware(...middlewares)))
sagaMiddleware.run(watcherSaga)

export default configureStore
