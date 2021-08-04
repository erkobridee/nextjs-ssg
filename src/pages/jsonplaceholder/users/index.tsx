import * as React from 'react';

import { useTranslation } from 'react-i18next';

import LayoutJsonPlaceholder from 'components/Layout/JsonPlaceholder';

import InternalLink from 'components/Link/Internal';

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

interface IUsersProps {
  users: any[];
}

export const Users: React.FunctionComponent<IUsersProps> = ({ users }) => {
  const { t } = useTranslation();
  return (
    <LayoutJsonPlaceholder className="space-y-4">
      <h1 className="text-xl mt-8">{t('Users')}</h1>

      <ul className="list-disc list-inside">
        {users.map((user) => (
          <li key={user.id}>
            <InternalLink href={`/jsonplaceholder/users/${user.id}`}>
              {user.name}
            </InternalLink>
          </li>
        ))}
      </ul>

      <InternalLink href="/jsonplaceholder">{t('Back')}</InternalLink>
    </LayoutJsonPlaceholder>
  );
};

export default Users;
