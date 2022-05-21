import { css } from '@linaria/core';

export const globals = css`
  :global() {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      border: none;
    }

    a {
      text-decoration: none;
    }

    body {
      -webkit-font-smoothing: antialiased;
    }
  }
`;
