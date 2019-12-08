import React from 'react';
import Grid from '../Grid';
import Logo from '../Logo';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container data-testid="header">
      <Grid.Container>
        <Logo />
      </Grid.Container>
    </Container>
  );
};

export default Header;
