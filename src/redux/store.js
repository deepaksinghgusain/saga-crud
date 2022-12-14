import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./userSaga";



const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if(process.env.NODE_ENV !== 'production') {
   middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;