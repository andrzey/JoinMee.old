import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { startSaga, endSaga } from '../utils/action.utils';
import * as userService from '../service/user.service';
import * as actionTypes from '../actions/action-types';

function* updateUserInterests(action) {
    yield put(startSaga);
    try {
        const { interests } = yield userService.updateUserInterests(action.accessToken, action.interests);
        yield put({ type: actionTypes.USER_UPDATE_INTERESTS_SUCCEEDED, interests });
    } catch (error) {
        console.error(error);
    }
    yield put(endSaga);
}

function* updateUserInterestsRequested() {
    yield takeLatest(actionTypes.USER_UPDATE_INTERESTS_REQUESTED, updateUserInterests);
}

export default [
    updateUserInterestsRequested()
]