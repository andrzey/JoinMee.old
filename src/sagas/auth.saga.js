import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { startSaga, endSaga } from '../utils/action.utils';
import * as authService from '../service/auth.service';
import * as actionTypes from '../actions/action-types';

function* facebookLogin(action) {
    yield put(startSaga);
    try {
        const { accessToken, user } = yield authService.loginWithFacebook(action.facebookToken);
        yield put({ type: actionTypes.USER_FETCH_SUCCEEDED, accessToken, user });
    } catch (error) {
        console.error(error);
    }
    yield put(endSaga);
}

function* loginWithFacebookRequested() {
    yield takeEvery(actionTypes.USER_FETCH_REQUESTED, facebookLogin);
}

export default [
    loginWithFacebookRequested()
]