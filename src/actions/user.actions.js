import * as actionTypes from './action-types';

export function loginWithFacebook(facebookToken) {
    return { type: actionTypes.USER_FETCH_REQUESTED, facebookToken };
}

export function updateInterests(accessToken, interests) {
    return { type: actionTypes.USER_UPDATE_INTERESTS_REQUESTED, accessToken, interests };
}