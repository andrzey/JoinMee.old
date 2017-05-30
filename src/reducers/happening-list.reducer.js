import * as actionTypes from '../actions/action-types';

const initialState = [
    { name: 'Bursdag', time: '2. juni kl. 12.00', place: 'Trondheim', description: 'Blir kjempebra!'},
    { name: 'Bursdag2', time: '2. juni kl. 12.00', place: 'Trondheim', description: 'Blir kjempebra!'},
    { name: 'Bursdag3', time: '2. juni kl. 12.00', place: 'Trondheim', description: 'Blir kjempebra!'},
    { name: 'Bursdag4', time: '2. juni kl. 12.00', place: 'Trondheim', description: 'Blir kjempebra!'},
]

const happeningListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_HAPPENING:
            return [...state, action.happening];
        default:
            return state
    }
}

export default happeningListReducer
