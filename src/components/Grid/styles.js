import styled from 'styled-components/macro';
import { medias } from '../../assets/styles';

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  display: block;
  margin: auto;
  padding: 0 20px;

  ${medias.greaterThan('lg')`
    padding-left: 0;
    padding-right: 0;
  `}
`;
