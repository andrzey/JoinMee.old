import * as actionTypes from './action-types';

export function addHappening(happening) {
    return {
        type: actionTypes.ADD_HAPPENING,
        happening
    }
}