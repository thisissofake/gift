import * as React from 'react';

import { globals } from 'theme/globals';

import { Wrapper, Content } from './styled';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Wrapper className={globals}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Layout;
