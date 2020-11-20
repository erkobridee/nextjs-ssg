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
					<Link href={`/jsonplaceholder/users/${user.id}`}>
						<a className="link">{user.name}</a>
					</Link>
				</li>
			))}
		</ul>
		<hr />
		<Link href="/jsonplaceholder">
			<a className="link">Back</a>
		</Link>
	</>
);

export default Users;
