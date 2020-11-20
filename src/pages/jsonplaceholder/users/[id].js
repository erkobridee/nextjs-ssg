import Link from 'next/link';

export const getStaticPaths = async () => {
	let paths = [];

	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await res.json();
		paths = users.map((user) => ({
			params: { id: `${user.id}` },
		}));
	} catch (e) {
		console.error(e);
	}

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	let user = {};

	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/users/${params.id}`
		);
		user = await res.json();
	} catch (e) {
		console.error(e);
	}

	return {
		props: { user },
	};
};

export const User = ({ user }) => {
	return (
		<>
			<h1>User: {user.name}</h1>
			<pre>
				<code>{JSON.stringify(user, null, 2)}</code>
			</pre>
			<hr />
			<Link href="/jsonplaceholder/users">Back</Link>
		</>
	);
};

export default User;
