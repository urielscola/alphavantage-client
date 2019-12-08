import styled from 'styled-components/macro';

export const Label = styled.div`
  background-color: rgba(90, 100, 90, 0.08);
  padding: 15px 25px;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  color: ${({ theme }) => theme.fontPrimary};
`;
