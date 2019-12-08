import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  margin-bottom: 15px;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  border-radius: 6px;
  border: 1px solid #ccc;
  height: 45px;
  width: 100%;
  padding: 5px 15px;
  transition: 250ms ease-in-out;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  color: ${({ theme }) => theme.fontPrimary};

  &:focus {
    border: 1px solid #777;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #e8e6e6;
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.red};
    `};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-weight: ${({ theme }) => theme.fontWeightLight};
  display: inline-block;
  color: ${({ theme }) => theme.fontPrimary};
  margin-bottom: 10px;
  position: absolute;
  top: -25px;
`;
