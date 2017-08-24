import * as actionTypes from '../actions/action-types';
import * as storageUtils from '../utils/storage-utils';
import { AsyncStorage } from 'react-native';

export const accessTokenMiddleware = store => next => action => {
    if (action.type && action.type === actionTypes.USER_FETCH_SUCCEEDED) {
        saveAccessToken('AccessToken', action.accessToken)
            .then(next(action))
            .catch(error => console.log(error));
    }
    return next(action);
}

async function saveAccessToken(key, value) {
    await AsyncStorage.setItem(key, value);
}
