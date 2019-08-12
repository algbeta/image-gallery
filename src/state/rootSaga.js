import { all, fork } from 'redux-saga/effects';
import { sagas as imagesSaga } from './images';

export default function* rootSaga() {
  yield all([
    fork(imagesSaga.prepareImagesWatch),
    fork(imagesSaga.fetchImagesWatch)
  ]);
}
