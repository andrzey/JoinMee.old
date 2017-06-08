import * as actionTypes from '../actions/action-types';
import * as _ from 'lodash';

const initialState = [
]

const happeningListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_HAPPENING:
            return [...state, action.happening];
        case actionTypes.UPDATE_HAPPENING:
            const newState = state.map(happening => {
                if (happening.id === action.happening.id) {
                    happening = action.happening

                    return happening;
                } else {
                    return happening;
                }
            });
            return newState;
        case actionTypes.HAPPENINGS_FETCH_SUCCEEDED:
            {
                const newState = Object.assign([], state, action.happenings);
                return newState;
            }
        default:
            return state
    }
}

export default happeningListReducer
