import type { Metadata } from 'next';

import PageLayout from '~/components/layout/content/Page';
import InternalLink from '~/components/ui/InternalLink';

import { getUsers } from '~/api/jsonplaceholder';

//----------------------------------------------------------------------------//

export const metadata: Metadata = {
  title: 'Users from JSON Placeholder | Static Next.js Sample',
  description: 'Read mocked users from the json placeholder API'
};

export async function UsersJSONPlaceholder() {
  const users = await getUsers();

  return (
    <PageLayout
      className="xs:items-start flex flex-col gap-6"
      header={
        <>
          <InternalLink href={'/'} className="link-underline">
            Home
          </InternalLink>

          <InternalLink href={'/jsonplaceholder'} className="link-underline">
            JSON Placeholder
          </InternalLink>

          <span className="link font-medium">Users</span>
        </>
      }
    >
      <h1 className="mt-8 text-xl font-medium">Users</h1>

      <ul className="list-disc">
        {users.map(({ id, name }) => (
          <li key={id}>
            <div className="flex items-center gap-2">
              <span className="tabular-nums">[{`${id}`.padStart(2, '0')}]</span>
              <span>-</span>
              <InternalLink href={`/jsonplaceholder/users/${id}`} className="link-underline">
                {name}
              </InternalLink>
            </div>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}

export default UsersJSONPlaceholder;
