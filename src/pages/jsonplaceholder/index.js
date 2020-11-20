import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.scss';

export const JsonPlaceholder = () => (
	<div className={styles.container}>
		<Head>
			<title>JSON Placeholder content</title>
		</Head>
		<main>
			<h1>
				<a
					href="https://jsonplaceholder.typicode.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					JSON Placeholder
				</a>
			</h1>
			<ul>
				<li>
					<Link href="/jsonplaceholder/users">
						<a className="link">Users</a>
					</Link>
				</li>
				{/* <li>2</li>
				<li>3</li> */}
			</ul>
			<hr />
			<Link href="/">
				<a className="link">Back</a>
			</Link>
		</main>
	</div>
);

export default JsonPlaceholder;
