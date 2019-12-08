import React from 'react';
import PropTypes from 'prop-types';
import { Container, CustomButton } from './styles';
import { SmallLoader } from '../Loader';

const Button = ({ label, loading, ...props }) => {
  return (
    <Container>
      <CustomButton {...props}>
        {loading ? <SmallLoader size="12px" /> : label}
      </CustomButton>
    </Container>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool
};
