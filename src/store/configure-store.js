import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from '../reducers/root-reducer';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
}