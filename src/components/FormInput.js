import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
// import styled from '@emotion/styled';

export default function FormInput({
  name = 'text',
  type,
  placeholder,
  onChange,
  labelClassName = '',
  className = '',
  value,
  error,
  children,
  label,
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
    <div>
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
        className={className}
        style={error && { borderBottom: 'solid 1px red' }}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};
