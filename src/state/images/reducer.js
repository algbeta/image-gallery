import { actionTypes } from './actions';
import { removeItemFromState } from '../utils';
const initialState = {
  byId: {},
  allIds: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FORMAT_IMAGES_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case actionTypes.DELETE_IMAGE: {
      return {
        ...state,
        ...removeItemFromState(state, action.payload)
      };
    }
    case actionTypes.UPDATE_IMAGE: {
      const {
        payload: { id, title }
      } = action;
      return {
        ...state,
        byId: Object.assign(
          {},
          { ...state.byId, [id]: { ...state.byId[id], title } }
        )
      };
    }
    default:
      return state;
  }
};
