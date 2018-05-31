import { hashHistory } from "react-router";
import {
  routerMiddleware,
  routerReducer,
  syncHistoryWithStore
} from "react-router-redux";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Middleware
} from "redux";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sagaMiddlewareFactory from "redux-saga";
import reducers from "./reducers";
import saga from "./saga";


interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

const sagaMiddleware = sagaMiddlewareFactory();

const middlewares: Middleware[] = [
  sagaMiddleware,
  routerMiddleware(hashHistory)
];

const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers =
  (window as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig: PersistConfig = {
  key: "v1", // Increment this version to force a purge of the states (when the state shape changes for instance)
  storage,
  whitelist: []
};

export const store = createStore(
  persistReducer(
    persistConfig,
    combineReducers({
      routing: routerReducer,
      ...reducers
    })
  ),
  composeEnhancers(...enhancers)
);

export const persistor = persistStore(store);

export const history = syncHistoryWithStore(hashHistory, store);

sagaMiddleware.run(saga);
