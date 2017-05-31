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

            let foundHappening = _.find(state, happening => {
                return happening.id === action.happeningId;
            });

            const modifiedHappening = Object.assign({}, foundHappening, { comments: [...foundHappening.comments, action.comment] });

            let foundIndex = _.findIndex(state, happening => {
                return happening.id === action.happeningId
            });

            let newState = state.slice();
            newState[foundIndex] = modifiedHappening;

            return newState;
        default:
            return state
    }
}

export default happeningListReducer
