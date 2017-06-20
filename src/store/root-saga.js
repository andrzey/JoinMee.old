import authSagas from '../sagas/auth.saga';
import userSagas from '../sagas/user.saga';
import happeningSagas from '../sagas/happening.saga';

import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export default function* rootSaga() {
  yield [
    ...authSagas,
    ...userSagas,
    ...happeningSagas
  ];
}