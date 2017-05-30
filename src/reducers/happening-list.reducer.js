import * as actionTypes from '../actions/action-types';

const happeningListReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_HAPPENING:
            return [...state, action.happening];
        default:
            return state
    }
}

export default happeningListReducer
