import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as loginService from '../service/login.service';
import * as actionTypes from '../actions/action-types';

function* facebookLogin(action) {
    try {
        const { accessToken, user } = yield loginService.loginWithFacebook(action.facebookToken);
        yield put({ type: actionTypes.USER_FETCH_SUCCEEDED, accessToken, user });
    } catch (error) {
        console.log(error);
    }
}

function* loginWithFacebookRequested() {
    yield takeEvery(actionTypes.USER_FETCH_REQUESTED, facebookLogin)
}

export default [
    loginWithFacebookRequested()
]