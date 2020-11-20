import Head from 'next/head';

import { updateAssetsPrefix } from 'utils/path';

export const HtmlHead = ({ title, children }) => (
	<Head>
		<link rel="icon" href={updateAssetsPrefix('favicon.ico')} />
		<title>{title && `${title} | `}Hello Next.js SSG</title>
		{children}
	</Head>
);

export default HtmlHead;
