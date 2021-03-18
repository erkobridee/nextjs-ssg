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
    <LayoutJsonPlaceholder>
      <h1>{t('Users')}</h1>
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
      <InternalLink href="/jsonplaceholder">{t('Back')}</InternalLink>
    </LayoutJsonPlaceholder>
  );
};

export default Users;
