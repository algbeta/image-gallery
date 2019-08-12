import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageListRow from './ImageListRow';
import ImagePopup from '../image-popup';
import 'bootstrap/dist/css/bootstrap.css';

const ImageList = ({ items, loadImages, setSelectedImage }) => {
  useEffect(() => {
    loadImages();
  }, [loadImages]);

  if (!items) return 'Loading...';
  if (items.length === 0) return 'No images available...l'
  return (
    <div className="container">
      <table className="table table-striped table-hover border">
        <thead>
          <tr>
            <th scope="col" className="border-right">
              Preview
            </th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <ImageListRow
              key={item.id}
              item={item}
              clickHandler={setSelectedImage}
            />
          ))}
        </tbody>
      </table>
      <ImagePopup />
    </div>
  );
};

ImageList.propTypes = {
  items: PropTypes.array.isRequired,
  loadImages: PropTypes.func.isRequired,
  setSelectedImage: PropTypes.func.isRequired
};

export default ImageList;
