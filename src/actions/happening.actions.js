import * as actionTypes from './action-types';

export function addComment(happeningId, comment) {
    return {
        type: actionTypes.ADD_COMMENT,
        comment
    }
}

export function setSelectedHappening(happening) {
    return {
        type: actionTypes.SET_SELECTED_HAPPENING,
        happening
    }
}