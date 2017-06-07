import * as actionTypes from '../actions/action-types';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.USER_FETCH_SUCCEEDED:
        console.log(action.accessToken);
            return Object.assign({}, state, { accessToken: action.accessToken })
        default:
            return state;
    }
}