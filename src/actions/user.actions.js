import * as actionTypes from './action-types';

export function loginWithFacebook(facebookToken) {
    return { type: actionTypes.USER_FETCH_REQUESTED, facebookToken };
}