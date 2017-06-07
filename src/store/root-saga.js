import loginSagas from '../sagas/login.saga';
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export default function* rootSaga() {
  yield [
    ...loginSagas
  ];
}