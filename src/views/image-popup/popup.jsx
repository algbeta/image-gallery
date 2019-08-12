import React from 'react';
import PropTypes from 'prop-types';
import Editable from '../editable';
import './index.css';

const ImagePopup = ({ item, close, deleteImage, saveEditableChanges }) => {
  const deleteImageHandler = () => {
    deleteImage(item.id);
    close();
  };

  const saveTitle = data => {
    saveEditableChanges({ id: item.id, title: data });
  };

  if (!item) return null;
  return (
    <div className="modal-open">
      <div
        className="modal show"
        tabIndex="-1"
        role="dialog"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Image details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={close}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img className="image" src={item.url} alt={item.description} />
              <Editable
                id="title"
                propName="title"
                propValue={item.title}
                saveChanges={saveTitle}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={deleteImageHandler}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ImagePopup.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  close: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  saveEditableChanges: PropTypes.func.isRequired
};

export default ImagePopup;
