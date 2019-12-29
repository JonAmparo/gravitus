import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

export default function Button({
  type,
  className = 'btn btn-outline-light',
  onClick,
  label,
  ...props
}) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired
};
