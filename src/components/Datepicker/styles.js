import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSizeSmall};
    padding: 0 10px;
    height: 35px;
  }
`;
