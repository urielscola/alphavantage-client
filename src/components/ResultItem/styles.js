import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 0 25px;
  background-color: ${({ theme }) => theme.white};

  > div {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Cell = styled.div`
  display: flex;

  > span {
    font-size: ${({ theme }) => theme.fontSizeSmall};
    margin-right: 7px;
  }
`;
