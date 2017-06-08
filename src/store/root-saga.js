import loginSagas from '../sagas/login.saga';
import happeningSagas from '../sagas/happening.saga';

import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export default function* rootSaga() {
  yield [
    ...loginSagas,
    ...happeningSagas
  ];
}