import React from 'react';
import PropTypes from 'prop-types';
import { Container, CustomButton } from './styles';

const Button = ({ label, ...props }) => {
  return (
    <Container>
      <CustomButton data-testid="button" {...props}>
        {label}
      </CustomButton>
    </Container>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired
};
