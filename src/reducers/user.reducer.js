import * as actionTypes from '../actions/action-types';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.USER_FETCH_SUCCEEDED:

            const user = {
                userId: action.user.facebookId,
                name: action.user.firstName,
                accessToken: action.accessToken
            }

            return Object.assign({}, state, user)
        default:
            return state;
    }
}