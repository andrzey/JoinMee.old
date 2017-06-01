import * as actionTypes from '../actions/action-types';
import uuid from 'react-native-uuid';

export default function selectedHappeningReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            return Object.assign({}, state, { comments: [...state.comments, { id: uuid.v4(), comment: action.comment }] });
        case actionTypes.SET_SELECTED_HAPPENING:
            return Object.assign({}, state, action.happening);
        default:
            return state;
    }
}