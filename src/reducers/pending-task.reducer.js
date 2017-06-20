import * as actionTypes from '../actions/action-types';

export default function pendingTaskReducer(state = 0, action) {
    switch (action.type) {
        case actionTypes.PENDING_TASK_BEGIN:
            const incrementTask = ++state;

            return incrementTask;
        case actionTypes.PENDING_TASK_END:
            const decrementTask = --state;

            return decrementTask;
        default:
            return state
    }
}
