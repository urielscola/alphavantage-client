import styled from 'styled-components/macro';

export const Container = styled.form`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.green};

  > div:first-of-type {
    display: flex;
    flex: 1;
    margin: 0;
    > div {
      margin-right: 20px;
    }
  }
`;
