import * as React from 'react';

import { useTranslation } from 'react-i18next';

import LayoutJsonPlaceholder from 'components/Layout/JsonPlaceholder';

import InternalLink from 'components/Link/Internal';

interface Params {
  params: {
    id: string;
  };
}

export const getStaticPaths = async () => {
  let paths: Params[] = [];

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

export const getStaticProps = async ({ params }: Params) => {
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

interface IUserProps {
  user: any;
}

export const User: React.FunctionComponent<IUserProps> = ({ user }) => {
  const { t } = useTranslation();
  return (
    <LayoutJsonPlaceholder className="space-y-4">
      <h1 className="text-xl mt-8">{`${t('User')}: ${user.name}`}</h1>

      <pre className="bg-gray-100 rounded-[5px] p-3 text-xs font-mono">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <InternalLink href="/jsonplaceholder/users">{t('Back')}</InternalLink>
    </LayoutJsonPlaceholder>
  );
};

export default User;
