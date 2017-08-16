import * as actionTypes from './action-types';

export function addAddress(address) {
    return {
        type: actionTypes.ADD_ADDRESS_TO_HAPPENING,
        address
    }
}