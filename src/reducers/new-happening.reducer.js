import * as actionTypes from '../actions/action-types';

export default function newHappeningReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.ADD_ADDRESS_TO_HAPPENING:
            return Object.assign({}, state, { address: action.address });
        case actionTypes.ADD_INTERESTS_ON_HAPPENING:
            return Object.assign({}, state, { interests: action.interests });
        case actionTypes.ADD_HAPPENING_SUCCEEDED:
            return {};
        case actionTypes.CANCEL_NEW_HAPPENING:
            return {};
        default:
            return state
    }
}
