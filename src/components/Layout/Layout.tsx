import * as React from 'react';

import { globals } from 'theme/globals';

import { Wrapper } from './styled';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <Wrapper className={globals}>{children}</Wrapper>;
}

export default Layout;
