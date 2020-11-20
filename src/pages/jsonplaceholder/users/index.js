import Link from 'next/link';

export const getStaticProps = async () => {
	let users = [];
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		users = await res.json();
	} catch (e) {
		console.error(e);
	}
	return {
		props: { users },
	};
};

export const Users = ({ users }) => (
	<>
		<h1>Users</h1>
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					<Link href={`/jsonplaceholder/users/${user.id}`}>{user.name}</Link>
				</li>
			))}
		</ul>
		<hr />
		<Link href="/jsonplaceholder">Back</Link>
	</>
);

export default Users;
