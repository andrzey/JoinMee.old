import * as actionTypes from './action-types';

export function addComment(accessToken, happeningId, comment) {
    return {
        type: actionTypes.HAPPENING_ADD_COMMENT_REQUESTED,
        accessToken,
        happeningId,
        comment
    }
}

export function setSelectedHappening(happening) {
    return {
        type: actionTypes.SET_SELECTED_HAPPENING,
        happening
    }
}

export function loadHappenings(accessToken) {
    return {
        type: actionTypes.HAPPENINGS_FETCH_REQUESTED,
        accessToken
    }
}

export function loadMyHappenings(accessToken) {
    return {
        type: actionTypes.USER_HAPPENINGS_FETCH_REQUESTED,
        accessToken
    }
}

export function addHappening(accessToken, happening) {
    return {
        type: actionTypes.ADD_HAPPENING_REQUESTED,
        accessToken,
        happening
    }
}

export function joinHappening(accessToken, name, happeningId) {
    return {
        type: actionTypes.JOIN_HAPPENING_REQUESTED,
        accessToken,
        name,
        happeningId
    }
}

export function leaveHappening(accessToken, name, happeningId) {
    return {
        type: actionTypes.LEAVE_HAPPENING_REQUESTED,
        accessToken,
        name,
        happeningId
    }
}