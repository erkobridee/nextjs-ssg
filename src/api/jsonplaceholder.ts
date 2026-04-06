// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://nextjs.org/docs/app/api-reference/functions/fetch#optionsnextrevalidate
// https://nextjs.org/docs/app/guides/caching-without-cache-components

import type { User } from '~/types/JSONPlaceholder';

//----------------------------------------------------------------------------//

export const getUsers = async () => {
  let users: User[] = [];

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 3600 } });

    users = await res.json();
  } catch (e) {
    console.error('An error occour while loading the users list from the JSONPlaceholder API\n', e);
  }

  return users;
};

export const getUser = async (id: number | string) => {
  let user: User | undefined = undefined;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { next: { revalidate: 3600 } });

    user = await res.json();
  } catch (e) {
    console.error(`An error occour while loading the user id ${id} from the JSONPlaceholder API\n`, e);
  }

  return user;
};
