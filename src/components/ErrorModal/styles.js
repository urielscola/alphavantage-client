import styled from 'styled-components/macro';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: #ffffffa8;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.green};
  border-radius: 6px;
  padding: 30px;
  min-height: 250px;
  min-width: 350px;
  background-color: ${({ theme }) => theme.white};
  line-height: 2;
`;
