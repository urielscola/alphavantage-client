import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Box } from './styles';

const ErrorModal = ({ history, setError }) => {
  const handleBack = event => {
    event.preventDefault();
    setError(false);
    history.goBack();
  };

  return (
    <Container data-testid="error-modal">
      <Box>
        <p>Ops! Parece que algo deu errado.</p>
        <p>Por favor, tente novamente.</p>
        <a href="/" onClick={handleBack}>
          Voltar
        </a>
      </Box>
    </Container>
  );
};

export default withRouter(ErrorModal);
