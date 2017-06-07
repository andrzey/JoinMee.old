import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from '../reducers/root-reducer';
import rootSaga from './root-saga';
import loginWithFacebookRequested from '../sagas/login.saga';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );

    sagaMiddleware.run(loginWithFacebookRequested)

    return store;
}

