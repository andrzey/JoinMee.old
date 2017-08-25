import * as actionTypes from '../actions/action-types';

const initialState = {
    interests: [],
    address: null
}

export default function newHappeningReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_ADDRESS_TO_HAPPENING:
            return Object.assign({}, state, { address: action.address });
        case actionTypes.ADD_INTERESTS_ON_HAPPENING:
            return Object.assign({}, state, { interests: action.interests });
        case actionTypes.ADD_HAPPENING_SUCCEEDED:
            return initialState;
        case actionTypes.CANCEL_NEW_HAPPENING:
            return initialState;
        default:
            return state
    }
}
