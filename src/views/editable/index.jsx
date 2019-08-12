import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Editable = props => {
  const { propName, propValue, saveChanges } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(propValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  const onBlur = () => {
    // don't allow to save empty title
    if (value) {
      setIsEditing(false);
      saveChanges(value);
    }
  };

  if (!isEditing) {
    return (
      <label onClick={() => setIsEditing(true)}>
        {propName}(click to edit): {value}
      </label>
    );
  }
  return (
    <label>
      {propName}:
      <input onBlur={onBlur} onChange={onChange} defaultValue={value} className="ml-1"/>
    </label>
  );
};

Editable.propTypes = {
  propName: PropTypes.string.isRequired,
  propValue: PropTypes.string.isRequired,
  saveChanges: PropTypes.func.isRequired
};

export default Editable;
