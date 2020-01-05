import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import './FormInput.scss';
import $ from 'jquery';

export default function FormInput({
  name = 'name',
  type,
  placeholder,
  onChange,
  labelClassName = 'form-label text-secondary',
  inputClassName = 'input form-control',
  error,
  children,
  label,
  required,
  value,
  rows = 5,
  cols = 20,
  ...props
}) {
  useEffect(() => {
    function formGroupMinimalListener($this) {
      var $formGroup = $this.parents('.form-group-minimal');
      if ($this.val() !== '' || $this.is(':focus')) {
        $formGroup.addClass('form-group-minimal-focused');
      } else {
        $formGroup.removeClass('form-group-minimal-focused');
      }
    }
    var $formGroupMinimals = $('.form-group-minimal :input');
    $formGroupMinimals.each(function() {
      formGroupMinimalListener($(this));
    });

    $formGroupMinimals.on('focus', function() {
      formGroupMinimalListener($(this));
    });

    $formGroupMinimals.on('blur', function() {
      formGroupMinimalListener($(this));
    });
  });

  return (
    <div className='form-group-minimal'>
      {type === 'textarea' ? (
        <Fragment>
          <label htmlFor={name} className={labelClassName}>
            {label}
          </label>
          <textarea
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            cols={cols}
            className={inputClassName}
            style={error && { borderBottom: 'solid 1px red' }}
            required={required}
          />
        </Fragment>
      ) : (
        <Fragment>
          <label htmlFor={name} className={labelClassName}>
            {label}
          </label>
          <input
            // id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={inputClassName}
            style={error && { borderBottom: 'solid 1px red' }}
            required={required}
          />
        </Fragment>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'number',
    'password',
    'email',
    'file',
    'textarea'
  ]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};
