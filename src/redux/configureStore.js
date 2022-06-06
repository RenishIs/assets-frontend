import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'

import reducer from "./reducers/reducer";
import { watcherSaga } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = createStore(reducer, {}, applyMiddleware(...middlewares))
sagaMiddleware.run(watcherSaga)

export default configureStore
