import InternalLink from 'components/InternalLink';

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
					<InternalLink href={`/jsonplaceholder/users/${user.id}`}>
						{user.name}
					</InternalLink>
				</li>
			))}
		</ul>
		<hr />
		<InternalLink href="/jsonplaceholder">Back</InternalLink>
	</>
);

export default Users;
