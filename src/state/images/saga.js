import { put, takeLatest } from 'redux-saga/effects';
import { apiGetStatic } from '../api';
import {
  actionTypes,
  loadImagesFailure,
  formatImages,
  formatImagesSuccess,
  formatImagesFailure
} from './actions';
import { arrayToStateObject } from '../utils';

export function* fetchImages() {
  let response = {};
  try {
    response = yield apiGetStatic();
  } catch (e) {
    yield put(loadImagesFailure(e));
    return;
  }

  yield put(formatImages(response.items));
}

export function* fetchImagesWatch() {
  yield takeLatest(actionTypes.LOAD_IMAGES, fetchImages);
}

export function* prepareImages(action) {
  const { payload } = action;
  let preparedResponse = {};
  try {
    preparedResponse = arrayToStateObject(payload);
  } catch (e) {
    yield put(formatImagesFailure(e));
  }
  yield put(formatImagesSuccess(preparedResponse));
}

export function* prepareImagesWatch() {
  yield takeLatest(actionTypes.FORMAT_IMAGES, prepareImages);
}
