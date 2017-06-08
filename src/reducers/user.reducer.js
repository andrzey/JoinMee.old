import * as actionTypes from '../actions/action-types';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.USER_FETCH_SUCCEEDED:
            return Object.assign({}, state, { accessToken: action.accessToken })
        default:
            return state;
    }
}