import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as happeningService from '../service/happening.service';
import * as actionTypes from '../actions/action-types';
import { startSaga, endSaga } from '../utils/action.utils';

function* loadHappenings(action) {
    yield put(startSaga);
    try {
        const happeningList = yield happeningService.loadHappenings(action.accessToken)
        yield put({ type: actionTypes.HAPPENINGS_FETCH_SUCCEEDED, happenings: happeningList });
    } catch (error) {
        console.error(error);
    }
    yield put(endSaga);
}

function* loadMyHappenings(action) {
    yield put(startSaga);
    try {
        const happeningList = yield happeningService.loadMyHappenings(action.accessToken)
        yield put({ type: actionTypes.USER_HAPPENINGS_FETCH_SUCCEEDED, happenings: happeningList });
    } catch (error) {
        console.error(error);
    }
    yield put(endSaga);
}

function* addComment(action) {
    try {
        const updatedHappening = yield happeningService.addComment(action.accessToken, action.happeningId, action.comment);
        yield put({ type: actionTypes.HAPPENING_ADD_COMMENT_SUCCEEDED, happening: updatedHappening });
    } catch (error) {
        console.error(error);
    }
}

function* addHappening(action) {
    try {
        const happening = yield happeningService.addHappening(action.accessToken, action.happening);
        yield put({ type: actionTypes.ADD_HAPPENING_SUCCEEDED, happening });
    } catch (error) {
        console.error(error);
    }
}

function* joinHappening(action) {
    try {
        const happening = yield happeningService.joinHappening(action.accessToken, action.name, action.happeningId);
        yield put({ type: actionTypes.JOIN_HAPPENING_SUCCEEDED, happening });
    } catch (error) {
        console.error(error);
    }
}

function* leaveHappening(action) {
    try {
        const happening = yield happeningService.leaveHappening(action.accessToken, action.name, action.happeningId);
        yield put({ type: actionTypes.LEAVE_HAPPENING_SUCCEEDED, happening });
    } catch (error) {
        console.error(error);
    }
}

function* loadHappeningsRequested() {
    yield takeEvery(actionTypes.HAPPENINGS_FETCH_REQUESTED, loadHappenings);
}

function* loadMyHappeningsRequested() {
    yield takeEvery(actionTypes.USER_HAPPENINGS_FETCH_REQUESTED, loadMyHappenings);
}

function* addCommentRequested() {
    yield takeLatest(actionTypes.HAPPENING_ADD_COMMENT_REQUESTED, addComment);
}

function* addHappeningRequested() {
    yield takeLatest(actionTypes.ADD_HAPPENING_REQUESTED, addHappening);
}

function* joinHappeningRequested() {
    yield takeLatest(actionTypes.JOIN_HAPPENING_REQUESTED, joinHappening);
}

function* leaveHappeningRequested() {
    yield takeLatest(actionTypes.LEAVE_HAPPENING_REQUESTED, leaveHappening);
}

export default [
    loadHappeningsRequested(),
    addCommentRequested(),
    addHappeningRequested(),
    joinHappeningRequested(),
    leaveHappeningRequested(),
    loadMyHappeningsRequested()
]