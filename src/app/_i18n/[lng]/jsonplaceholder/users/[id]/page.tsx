// https://nextjs.org/docs/app/guides/migrating/app-router-migration#dynamic-paths-getstaticpaths
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#generate-params-from-the-top-down
// https://nextjs.org/docs/app/getting-started/caching#working-with-runtime-apis

import type { Metadata } from 'next';

import { Suspense } from 'react';

import PageLayout from '~/components/layout/content/Page';
import InternalLink from '~/components/ui/InternalLink';

import { getUsers, getUser } from '~/api/jsonplaceholder';

//----------------------------------------------------------------------------//

export async function generateStaticParams({ params: { lng } }: { params: { lng: string } }) {
  console.log({ lng });

  const users = await getUsers();

  const params = users.map(({ id }) => ({ id: `${id}` }));

  return params;
}

export const metadata: Metadata = {
  title: 'User from JSON Placeholder | Static Next.js Sample',
  description: 'Read mocked user from the json placeholder API'
};

function LoadingState() {
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

          <InternalLink href={'/jsonplaceholder/users'} className="link-underline">
            Users
          </InternalLink>

          <span className="link font-medium">Loading...</span>
        </>
      }
    >
      <h1 className="mt-8 flex items-center gap-2 text-xl">
        <span className="font-semibold">User</span>
        <span className="font-medium">Loading....</span>
      </h1>

      <div>
        <pre>
          <code>Loading...</code>
        </pre>
      </div>
    </PageLayout>
  );
}

async function LoadUser({ id }: { id: string }) {
  const user = await getUser(id);

  const name = user?.name || 'unknown';

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

          <InternalLink href={'/jsonplaceholder/users'} className="link-underline">
            Users
          </InternalLink>

          <span className="link font-medium">{name}</span>
        </>
      }
    >
      <h1 className="mt-8 flex items-center gap-2 text-xl">
        <span className="font-semibold">User</span>
        <span className="font-medium">{name}</span>
      </h1>

      <div>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </div>
    </PageLayout>
  );
}

export async function UserJSONPlaceholder({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <Suspense fallback={<LoadingState />}>
      <LoadUser id={id} />
    </Suspense>
  );
}

export default UserJSONPlaceholder;
