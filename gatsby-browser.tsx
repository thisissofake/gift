import * as React from 'react';

import type { GatsbyBrowser } from 'gatsby';

import '@fontsource/roboto';

import { Layout } from './src/components';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => <Layout>{element}</Layout>;
