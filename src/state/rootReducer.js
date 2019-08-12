import { combineReducers } from 'redux';
import imageReducer from './images';
import uiReducer from './ui';

export default combineReducers({
  images: imageReducer,
  ui: uiReducer
});
