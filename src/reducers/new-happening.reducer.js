import * as actionTypes from '../actions/action-types';

export default function newHappeningReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.ADD_ADDRESS_TO_HAPPENING:
            return Object.assign({}, state, { address: action.address });
        case actionTypes.ADD_HAPPENING_SUCCEEDED:
            return {};
        default:
            return state
    }
}
