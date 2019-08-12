import { actionTypes } from './actions';
const initialState = {
  selected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_IMAGE: {
      return {
        ...state,
        selected: action.payload
      };
    }
    default:
      return state;
  }
};
