import * as actionTypes from './action-types';

export function addComment(happeningId, comment) {
    return {
        type: actionTypes.ADD_COMMENT,
        happeningId,
        comment
    }
}