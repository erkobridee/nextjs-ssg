import Head from 'next/head';

import { InternalLink, NewPageLink } from 'components/Link';

import styles from './index.module.scss';

export const JsonPlaceholder = () => (
	<div className={styles.container}>
		<Head>
			<title>JSON Placeholder content</title>
		</Head>
		<main>
			<h1>
				<NewPageLink href="https://jsonplaceholder.typicode.com/">
					JSON Placeholder
				</NewPageLink>
			</h1>
			<ul>
				<li>
					<InternalLink href="/jsonplaceholder/users">Users</InternalLink>
				</li>
				{/* <li>2</li>
				<li>3</li> */}
			</ul>
			<hr />
			<InternalLink href="/">Back</InternalLink>
		</main>
	</div>
);

export default JsonPlaceholder;
