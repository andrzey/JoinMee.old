import * as actionTypes from './action-types';

export function addHappening(happening) {
    return {
        type: actionTypes.ADD_HAPPENING,
        happening
    }
}

export function updateHappening(happening) {
    return {
        type: actionTypes.UPDATE_HAPPENING,
        happening
    }
}