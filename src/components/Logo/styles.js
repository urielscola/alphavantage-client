import styled from 'styled-components/macro';
import { medias } from '../../assets/styles';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizeMedium};

  > a {
    color: ${({ theme }) => theme.white};
    text-decoration: none;
  }

  ${medias.greaterThan('lg')`
    font-size: 52px;
  `}
`;
