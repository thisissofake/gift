import { styled } from '@linaria/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 20px;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
`;
