import * as actionTypes from './action-types';

export function addAddress(address) {
    return {
        type: actionTypes.ADD_ADDRESS_TO_HAPPENING,
        address
    }
}

export function addInterestsOnHappening(interests) {
    return {
        type: actionTypes.ADD_INTERESTS_ON_HAPPENING,
        interests
    }
}

export function cancelNewHappening() {
    return {
        type: actionTypes.CANCEL_NEW_HAPPENING
    }
}