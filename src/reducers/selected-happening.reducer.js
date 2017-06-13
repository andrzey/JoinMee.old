import * as actionTypes from '../actions/action-types';
import uuid from 'react-native-uuid';

export default function selectedHappeningReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.HAPPENING_ADD_COMMENT_SUCCEEDED:
            return Object.assign({}, state, { comments: action.happening.comments });
        case actionTypes.JOIN_HAPPENING_SUCCEEDED:
            return Object.assign({}, state, { participants: action.happening.participants });
        case actionTypes.LEAVE_HAPPENING_SUCCEEDED:
            return Object.assign({}, state, { participants: action.happening.participants });
        case actionTypes.SET_SELECTED_HAPPENING:
            return Object.assign({}, state, action.happening);
        default:
            return state;
    }
}