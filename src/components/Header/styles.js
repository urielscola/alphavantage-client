import styled from 'styled-components/macro';
import { medias } from '../../assets/styles';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.green};
  align-items: center;
  padding: 25px 0;

  ${medias.greaterThan('lg')`
    margin-bottom: 15px;
    padding: 55px 0;
  `}
`;
