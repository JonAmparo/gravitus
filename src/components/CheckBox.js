import React from 'react';
import PropTypes from 'prop-types';

export default function CheckBox({
  onChange,
  type,
  value,
  id,
  name = 'muscle'
}) {
  return (
    <li>
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        name={name}
      />{' '}
      {value}
    </li>
  );
}

CheckBox.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string
};
