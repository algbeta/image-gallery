const actionTypes = {
  SET_SELECTED_IMAGE: '@@SET_SELECTED_IMAGE'
};

const setSelectedImage = id => ({
  type: actionTypes.SET_SELECTED_IMAGE,
  payload: id
});

export {
  actionTypes,
  setSelectedImage
};
