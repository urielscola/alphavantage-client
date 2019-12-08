import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CustomButton = styled.button`
  border: none;
  width: 100%;
  height: 45px;
  transition: 250ms ease-in-out;
  text-transform: uppercase;
  border-radius: 6px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 700;

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.turquoise};
      color: ${({ theme }) => theme.white};

      &:hover {
        background-color: ${({ theme }) => theme.black};
      }
    `};

  ${({ secundary }) =>
    secundary &&
    css`
      background-color: #ccc;
      color: ${({ theme }) => theme.fontPrimary};

      &:hover {
        background-color: #999;
      }
    `};

  ${({ danger }) =>
    danger &&
    css`
      background-color: ${({ theme }) => theme.red};

      &:hover {
        background-color: #c54744;
      }
    `};
`;
