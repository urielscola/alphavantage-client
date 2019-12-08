import styled from 'styled-components/macro';
import { medias } from '../../assets/styles';

export const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSizeMedium};

  ${medias.greaterThan('lg')`
    font-size: 52px;
  `}
`;
