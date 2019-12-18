import React from 'react';
import './Button.scss';

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.handleClick}
    >
      {props.label}
    </button>
  );
}
