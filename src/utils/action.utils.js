import * as actionTypes from '../actions/action-types';

export const startSaga = { type: actionTypes.PENDING_TASK_BEGIN};
export const endSaga = { type: actionTypes.PENDING_TASK_END};