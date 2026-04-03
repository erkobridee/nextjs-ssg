// https://nextjs.org/docs/app/getting-started/caching#data-level-caching
import { cacheLife } from 'next/cache';

import type { User } from '~/types/JSONPlaceholder';

//----------------------------------------------------------------------------//

export const getUsers = async () => {
  'use cache';
  cacheLife('minutes');

  let users: User[] = [];

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    users = await res.json();
  } catch (e) {
    console.error('An error occour while loading the users list from the JSONPlaceholder API\n', e);
  }

  return users;
};

export const getUser = async (id: number | string) => {
  'use cache';
  cacheLife('minutes');

  let user: User | undefined = undefined;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    user = await res.json();
  } catch (e) {
    console.error(`An error occour while loading the user id ${id} from the JSONPlaceholder API\n`, e);
  }

  return user;
};
