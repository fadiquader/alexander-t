import { all, fork } from 'redux-saga/effects';
// project files
import prfoileSaga from './profile/saga';

export default function* rootSaga() {
  yield all([
    fork(prfoileSaga),
  ])
}
