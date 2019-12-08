import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Label } from './styles';

const InputField = ({
  value,
  name,
  type = 'text',
  label,
  required = true,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input
        value={value}
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </Container>
  );
};

export default InputField;

InputField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
