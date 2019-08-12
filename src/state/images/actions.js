const actionTypes = {
  LOAD_IMAGES: '@@LOAD_IMAGES',
  LOAD_IMAGES_SUCCESS: '@@LOAD_IMAGES_SUCCESS',
  LOAD_IMAGES_FAILURE: '@@LOAD_IMAGES_FAILURE',
  FORMAT_IMAGES_SUCCESS: '@@FORMAT_IMAGES_SUCCESS',
  FORMAT_IMAGES_FAILURE: '@@FORMAT_IMAGES_FAILURE',
  FORMAT_IMAGES: '@@FORMAT_IMAGES',
  DELETE_IMAGE: '@@DELETE_IMAGE',
  UPDATE_IMAGE: '@@UPDATE_IMAGE'
};

const loadImages = () => ({
  type: actionTypes.LOAD_IMAGES
});

const loadImagesFailure = error => ({
  type: actionTypes.LOAD_IMAGES_FAILURE,
  payload: error
});

const loadImagesSuccess = data => ({
  type: actionTypes.LOAD_IMAGES_SUCCESS,
  payload: data
});

const formatImagesSuccess = data => ({
  type: actionTypes.FORMAT_IMAGES_SUCCESS,
  payload: data
});

const formatImagesFailure = error => ({
  type: actionTypes.FORMAT_IMAGES_FAILURE,
  payload: error
});

const formatImages = data => ({
  type: actionTypes.FORMAT_IMAGES,
  payload: data
});

const deleteImage = id => ({
  type: actionTypes.DELETE_IMAGE,
  payload: id
});

const updateImage = (data) => ({
  type: actionTypes.UPDATE_IMAGE,
  payload: data
});

export {
  actionTypes,
  loadImages,
  loadImagesSuccess,
  loadImagesFailure,
  formatImagesSuccess,
  formatImagesFailure,
  formatImages,
  deleteImage,
  updateImage
};
