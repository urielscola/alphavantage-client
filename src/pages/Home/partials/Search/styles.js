import styled from 'styled-components/macro';

export const Container = styled.form`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  > div:first-of-type {
    flex: 1;
    margin: 0;
    margin-right: 10px;
  }
`;
