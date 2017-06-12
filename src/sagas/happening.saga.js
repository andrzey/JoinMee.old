import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as happeningService from '../service/happening.service';
import * as actionTypes from '../actions/action-types';

function* loadHappenings(action) {
    try {
        const happeningList = yield happeningService.loadHappenings(action.accessToken)
        yield put({ type: actionTypes.HAPPENINGS_FETCH_SUCCEEDED, happenings: happeningList });
    } catch (error) {
        console.log(error);
    }
}

function* addComment(action) {
    try {
        const updatedHappening = yield happeningService.addComment(action.accessToken, action.happeningId, action.comment);
        yield put({ type: actionTypes.HAPPENING_ADD_COMMENT_SUCCEEDED, happening: updatedHappening });
    } catch (error) {
        console.log(error);
    }
}

function* loadHappeningsRequested() {
    yield takeEvery(actionTypes.HAPPENINGS_FETCH_REQUESTED, loadHappenings);
}

function* addCommentRequested() {
    yield takeLatest(actionTypes.HAPPENING_ADD_COMMENT_REQUESTED, addComment);
}

export default [
    loadHappeningsRequested(),
    addCommentRequested(),
]