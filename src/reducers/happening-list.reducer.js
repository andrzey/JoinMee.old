import * as actionTypes from '../actions/action-types';
import * as _ from 'lodash';

const initialState = [
    { id: 1, name: 'Bursdag', time: '2. juni kl. 12.00', place: 'Trondheim', description: 'Blir kjempebra!', comments: [] },
    { id: 2, name: 'Bursdag2', time: '2. juni kl. 12.00', place: 'Trondheim', description: 'Blir kjempebra!', comments: [] },
    { id: 3, name: 'Bursdag3', time: '2. juni kl. 12.00', place: 'Trondheim', description: 'Blir kjempebra!', comments: [] },
    { id: 4, name: 'Bursdag4', time: '2. juni kl. 12.00', place: 'Trondheim', description: 'Blir kjempebra!', comments: [] },
]

const happeningListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_HAPPENING:
            return [...state, action.happening];
        case actionTypes.ADD_COMMENT:

            const newState = state.map(happening => {
                if (happening.id === action.happeningId) {
                    happening = Object.assign({}, happening, { comments: [...happening.comments, action.comment] });
                    return happening;
                } else return happening;
            });

            return newState;
        default:
            return state
    }
}

export default happeningListReducer
