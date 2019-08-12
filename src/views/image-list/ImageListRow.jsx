import React from 'react';
import PropTypes from 'prop-types';

const ImageListRow = ({ item, clickHandler }) => {
  const onClick = () => {
    clickHandler(item.id)
  }
  return (
    <tr onClick={onClick}>
      <td className="border-right">
        <img alt={item.title} src={item.previewUrl} />
      </td>
      <td>{item.title}</td>
    </tr>
  );
};

ImageListRow.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired
  }).isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default ImageListRow;
