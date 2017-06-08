import { startTabBasedApp } from '../app';
import * as actionTypes from '../actions/action-types';

export const startAppMiddleware = store => next => action => {
    if (action.type && action.type === actionTypes.USER_FETCH_SUCCEEDED) {
        startTabBasedApp();
    }
    return next(action);
}