import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
// import styled from '@emotion/styled';

export default function FormInput({
  name = 'name',
  type,
  placeholder,
  onChange,
  labelClassName = 'form-label text-secondary',
  inputClassName = 'input form-control',
  value,
  error,
  children,
  label,
  required,
  ...props
}) {
  React.useEffect(() => {
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
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={inputClassName}
        style={error && { borderBottom: 'solid 1px red' }}
        required={required}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'file']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};
