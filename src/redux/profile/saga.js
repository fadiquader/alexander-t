import { put, take, call, fork, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
// project files
import { database, insert } from '../../firebase';
import { getProfileData } from '../selectors';
import * as actions from './actions';

function retrieveProfileEventChannel() {
  const listener = eventChannel(emit => {
      database.ref('profile')
        .on('value', data => emit(data.val()));

    return () => database.ref('profile').off(listener);
    });
  return listener;

}

function* retrieveProfileSaga() {
  const retrieveProfileChannel = retrieveProfileEventChannel();
  while(true) {
    const data = yield take(retrieveProfileChannel);
    yield put(actions.fillProfile(data));
  }
}

// function updateProfileEventChannel() {
//   const listener = eventChannel(
//     emit => {
//       database.ref('profile')
//         .on('value', data => emit(data.val());
//       return () => database.ref('profile').off(listener);
//     }
//   );
//
//   return listener;
// }

function* saveProfileSaga() {
  const action = yield take(actions.submitProfileForm);
  let { submitting, error, ...form} = yield select(getProfileData);
  try {
    yield call(insert, 'profile', form);
  } catch (e) {
    // do something with the error, such as dispatching an error action with yield put
  }
}
// ----------------


export default function* profileSaga() {
  yield fork(retrieveProfileSaga);
  yield fork(saveProfileSaga)
}
