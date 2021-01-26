import * as React from 'react';
import { AppProps } from 'next/app';

import 'i18n';

import 'styles/globals.scss';

export const MyApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => <Component {...pageProps} />;

export default MyApp;
